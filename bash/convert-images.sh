#!/bin/bash

# Supported image extensions
SUPPORTED_EXTENSIONS=("jpg" "jpeg" "png" "webp" "bmp" "tiff" "gif")

# Function to check if a file has a supported extension
is_supported_image() {
    local file=$1
    local extension="${file##*.}"
    for ext in "${SUPPORTED_EXTENSIONS[@]}"; do
        if [[ "${extension,,}" == "${ext,,}" ]]; then
            return 0
        fi
    done
    return 1
}

# Function to check and install required tools
check_and_install_tools() {
    local tools=("exiftool" "mogrify")
    local missing_tools=()

    for tool in "${tools[@]}"; do
        if ! command -v "$tool" &>/dev/null; then
            missing_tools+=("$tool")
        fi
    done

    if [[ ${#missing_tools[@]} -eq 0 ]]; then
        echo "All required tools are installed."
        return
    fi

    echo "Missing tools: ${missing_tools[*]}"
    read -p "Do you want to install them now? (y/n): " choice
    if [[ "$choice" =~ ^[Yy]$ ]]; then
        if command -v apt &>/dev/null; then
            sudo apt update
            sudo apt install -y "${missing_tools[@]}"
        elif command -v yum &>/dev/null; then
            sudo yum install -y epel-release
            sudo yum install -y "${missing_tools[@]}"
        elif command -v brew &>/dev/null; then
            brew install "${missing_tools[@]}"
        else
            echo "No supported package manager found. Please install tools manually."
            exit 1
        fi
    else
        echo "Tools must be installed manually. Exiting."
        exit 1
    fi
}

# Function to create a backup
create_backup() {
    local backup_dir="../$(basename "$PWD")_backup"
    mkdir -p "$backup_dir"
    cp *.* "$backup_dir/" 2>/dev/null
    echo "Backup completed: $backup_dir"
}

# Function to generate an HTML image list
generate_image_list() {
    local output_file="images.txt"
    > "$output_file"

    local script_dir
    script_dir=$(basename "$(pwd)")

    for img in *.*; do
        if is_supported_image "$img"; then
            echo "<img src=\"$script_dir/$img\" alt=\"$img\" loading=\"lazy\">" >>"$output_file"
        fi
    done

    echo "Image list generated: $output_file"
}

# Function to remove metadata
remove_metadata() {
    for img in *.*; do
        if is_supported_image "$img"; then
            echo "Removing metadata: $img"
            exiftool -all= "$img" -overwrite_original
        fi
    done
    echo "Metadata removal complete."
}

# Function to display EXIF data
show_exif_data() {
    for img in *.*; do
        if is_supported_image "$img"; then
            echo "EXIF data for $img:"
            exiftool "$img"
            echo "-----------------------------"
        fi
    done
}

# Menu system
convert_images() {
    while true; do
        clear
        cat << "EOF"
                /\_/\
               ( o.o )
=====================================
   CUTE Batch Image Converter Menu
=====================================
 1) Create backup
 2) Prefix file name
 3) Resize or scale images
 4) Generate image HTML list
 5) Remove image metadata
 6) Show EXIF data
 7) Exit
=====================================
EOF
        read -p "Choose an option (1-7): " choice
        case $choice in
        1) create_backup ;;
        2)
            read -p "Enter prefix (default: 'l-'): " prefix
            prefix=${prefix:-"l-"}
            for img in *.*; do
                if is_supported_image "$img" && [[ "$img" != "$prefix"* ]]; then
                    mv "$img" "$prefix$img"
                    echo "Prefixed: $img -> $prefix$img"
                fi
            done
            ;;
        3)
            read -p "Enter scale percentage (e.g., 50 for 50%): " scale
            for img in *.*; do
                if is_supported_image "$img"; then
                    mogrify -resize "$scale%" "$img"
                    echo "Resized: $img by $scale%"
                fi
            done
            ;;
        4) generate_image_list ;;
        5) remove_metadata ;;
        6) show_exif_data ;;
        7) echo "Goodbye!"; exit 0 ;;
        *) echo "Invalid option. Try again." ;;
        esac
        read -p "Press Enter to continue..."
    done
}

# Ensure tools are installed
check_and_install_tools

# Run the menu
convert_images
