#!/bin/bash

# Supported image extensions
SUPPORTED_EXTENSIONS=("jpg" "jpeg" "png" "webp" "bmp" "tiff" "gif")

# Function to check if the file has a supported extension
is_supported_image() {
    local file=$1
    local extension="${file##*.}"
    for ext in "${SUPPORTED_EXTENSIONS[@]}"; do
        if [[ "$extension" == "$ext" ]]; then
            return 0
        fi
    done
    return 1
}

# Check if mogrify is installed
if ! command -v mogrify &> /dev/null; then
    echo "Error: ImageMagick (mogrify) is required but not installed."
    exit 1
fi

# Check if exiftool is installed
if ! command -v exiftool &> /dev/null; then
    echo "Error: exiftool is required but not installed."
    exit 1
fi

# Function to create a backup of files
create_backup() {
    CURRENT_DIR=$(basename "$PWD")
    BACKUP_DIR="../${CURRENT_DIR}_backup"
    mkdir -p "$BACKUP_DIR"
    cp *.* "$BACKUP_DIR/"
    echo "Backup completed. All files copied to $BACKUP_DIR."
}

# Function to show image metadata
show_metadata() {
    for img in *.*; do
        if is_supported_image "$img"; then
            echo "Metadata for: $img"
            exiftool "$img"
            echo "-----------------------"
        fi
    done
}

# Function to remove metadata
remove_metadata() {
    for img in *.*; do
        if is_supported_image "$img"; then
            exiftool -all= "$img"
            echo "Metadata removed from: $img"
        fi
    done
}

# Function to handle conversion
convert_images() {
    # Ask if we want to exclude prefixed files and store that info in a variable
    read -p "Do you want to exclude prefixed files (e.g., with 'l-') from further operations? (Y/n): " exclude_prefixed
    exclude_prefixed=${exclude_prefixed,,}  # Convert to lowercase
    if [[ -z "$exclude_prefixed" || "$exclude_prefixed" == "y" ]]; then
        exclude_prefixed=true
    else
        exclude_prefixed=false
    fi

    # Main menu loop
    while true; do
        # Display title and menu every time the user is asked to choose an option
        cat << "EOF"
                /\_/\
               ( o.o )
=====================================
   CUTE Batch Image Converter Menu
=====================================
 1) Create Backup
 2) Prefix file name
 3) Resize or Scale Images
 4) Generate Image List
 5) Show Metadata
 6) Remove Metadata
 7) Exit
=====================================
EOF

        # Prompt user for their choice
        read -p "Choose an option (1-7): " menu_choice

        case $menu_choice in
            1)
                # Create Backup
                create_backup
                ;;
            2)
                # Prefix Originals with New Name
                read -p "Enter prefix for original files (default: 'l-'): " PREFIX
                PREFIX=${PREFIX:-"l-"}

                echo "Duplicating original files with prefix..."
                for img in *.*; do
                    if is_supported_image "$img"; then
                        new_name="${PREFIX}${img}"
                        cp "$img" "$new_name"
                        echo "Duplicated: $img -> $new_name"
                    fi
                done
                ;;
            3)
                # Resize or Scale Images
                echo "Resize or Scale Images"
                ;;
            4)
                # Generate Image List
                echo "Generating image list..."
                > images.txt
                for img in *.*; do
                    if is_supported_image "$img"; then
                        echo "<img src=\"$img\" alt=\"$img\" loading=\"lazy\">" >> images.txt
                    fi
                done
                echo "Image list saved in images.txt"
                ;;
            5)
                # Show Metadata
                show_metadata
                ;;
            6)
                # Remove Metadata
                remove_metadata
                ;;
            7)
                # Exit the script
                echo "Exiting. Goodbye!"
                exit 0
                ;;
            *)
                echo "Invalid option. Please choose a valid menu item."
                continue
                ;;
        esac
    done
}

# Run the conversion menu
convert_images
