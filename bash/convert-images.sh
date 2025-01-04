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

# Function to check and install required tools
check_and_install_tools() {
    # List of required tools
    local tools=("exiftool" "exiv2" "mogrify")
    local missing_tools=()

    # Check for missing tools
    for tool in "${tools[@]}"; do
        if ! command -v "$tool" &> /dev/null; then
            missing_tools+=("$tool")
        fi
    done

    # If no tools are missing, return
    if [ ${#missing_tools[@]} -eq 0 ]; then
        echo "All required tools are installed."
        return
    fi

    # Display missing tools
    echo "The following tools are missing:"
    for tool in "${missing_tools[@]}"; do
        echo " - $tool"
    done

    # Ask user if they want to install missing tools
    read -p "Do you want to install them now? (y/n): " choice
    if [[ "$choice" =~ ^[Yy]$ ]]; then
        # Detect package manager
        if command -v apt &> /dev/null; then
            sudo apt update
            for tool in "${missing_tools[@]}"; do
                sudo apt install -y "$tool"
            done
        elif command -v yum &> /dev/null; then
            sudo yum install -y epel-release # Required for exiftool in some cases
            for tool in "${missing_tools[@]}"; do
                sudo yum install -y "$tool"
            done
        elif command -v brew &> /dev/null; then
            for tool in "${missing_tools[@]}"; do
                brew install "$tool"
            done
        else
            echo "No supported package manager found. Please install the tools manually."
            exit 1
        fi
    else
        echo "Missing tools must be installed manually. Exiting."
        exit 1
    fi
}


# Function to create a backup of files
create_backup() {
    CURRENT_DIR=$(basename "$PWD")
    BACKUP_DIR="../${CURRENT_DIR}_backup"
    mkdir -p "$BACKUP_DIR"
    cp *.* "$BACKUP_DIR/"
    echo "Backup completed. All files copied to $BACKUP_DIR."
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
 1) Create backup
 2) Prefix file name
 3) Resize or scale images
 4) Generate image HTML list
 5) Removing image metadata
 6) Show EXIF data
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

                # Select output extension for prefixing
                echo "Select the extension for prefixed files:"
                for i in "${!SUPPORTED_EXTENSIONS[@]}"; do
                    echo "$((i+1))) ${SUPPORTED_EXTENSIONS[$i]}"
                done
                read -p "Enter choice (1-${#SUPPORTED_EXTENSIONS[@]}): " ext_choice
                OUTPUT_FORMAT=${SUPPORTED_EXTENSIONS[$((ext_choice-1))]}

                # Process all files (regardless of extension)
                shopt -s nullglob
                FILES=( *.* )  # All files in the current directory

                echo "Duplicating original files with prefix..."
                for img in "${FILES[@]}"; do
                    if [[ "$exclude_prefixed" == true && $(is_prefixed "$img" "$PREFIX") == 0 ]]; then
                        echo "Skipping prefixed file: $img"
                        continue  # Skip prefixed files
                    fi
                    # Check if the file already has the desired extension
                    file_extension="${img##*.}"
                    if [[ "$file_extension" == "$OUTPUT_FORMAT" ]]; then
                        echo "Skipping file with already correct extension: $img"
                        continue
                    fi
                    # Change extension of the file to OUTPUT_FORMAT
                    new_name="${PWD}/${PREFIX}$(basename "$img" | sed "s/\.[^.]*$//").$OUTPUT_FORMAT"
                    cp "$img" "$new_name"
                    echo "Duplicated: $img -> $new_name"
                done
                shopt -u nullglob
                ;;
            3)
                # Resize or Scale Images
                echo "Resize or Scale Images"

                # Ask for folder name to store larger (original) images
                read -p "Enter folder name to store larger images (originals): " LARGER_FOLDER
                mkdir -p "$LARGER_FOLDER"  # Create folder if it doesn't exist

                # Ask for the extension name to convert original images to (larger images)
                echo "Select the extension to keep for larger images:"
                for i in "${!SUPPORTED_EXTENSIONS[@]}"; do
                    echo "$((i+1))) ${SUPPORTED_EXTENSIONS[$i]}"
                done
                read -p "Enter choice (1-${#SUPPORTED_EXTENSIONS[@]}): " ext_choice
                LARGER_FORMAT=${SUPPORTED_EXTENSIONS[$((ext_choice-1))]}

                # Ask for resize/scaling option
                echo "Select resize option:"
                echo "1) Resize to specific dimensions"
                echo "2) Scale by percentage"
                read -p "Enter choice (1-2): " resize_choice

                # Ask for resized extension (smaller images)
                echo "Select extension for resized (smaller) images:"
                for i in "${!SUPPORTED_EXTENSIONS[@]}"; do
                    echo "$((i+1))) ${SUPPORTED_EXTENSIONS[$i]}"
                done
                read -p "Enter choice (1-${#SUPPORTED_EXTENSIONS[@]}): " ext_choice
                SMALLER_FORMAT=${SUPPORTED_EXTENSIONS[$((ext_choice-1))]}

                case $resize_choice in
                    1)
                        # Resize to specific dimensions
                        echo "Select resizing dimensions:"
                        echo "1) 172x96"
                        echo "2) 300x200"
                        echo "3) 500x300"
                        echo "4) 800x600"
                        read -p "Enter choice (1-4): " resize_choice

                        case $resize_choice in
                            1) RESIZE="172x96" ;;
                            2) RESIZE="300x200" ;;
                            3) RESIZE="500x300" ;;
                            4) RESIZE="800x600" ;;
                            *) echo "Invalid choice."; continue ;;
                        esac
                        echo "Resizing images to $RESIZE..."

                        # Process images
                        for img in *.*; do
                            if is_supported_image "$img" && [[ "$img" != l-* ]]; then
                                # Move the original image to the LARGER_FOLDER and convert it to LARGER_FORMAT
                                cp "$img" "$LARGER_FOLDER/$(basename "$img" | sed "s/\.[^.]*$//").$LARGER_FORMAT"
                                mogrify -format "$LARGER_FORMAT" "$LARGER_FOLDER/$(basename "$img" | sed "s/\.[^.]*$//").$LARGER_FORMAT"

                                # Resize and create the resized version with the smaller extension in the working directory
                                cp "$img" "$PWD/$(basename "$img")"  # Copy the original to the working directory
                                mogrify -resize "$RESIZE" -format "$SMALLER_FORMAT" "$PWD/$(basename "$img")"

                                # Ensure that no extra files are created
                                mv "$PWD/$(basename "$img" | sed "s/\.[^.]*$//").$SMALLER_FORMAT" "$PWD/$(basename "$img" | sed "s/\.[^.]*$//").$SMALLER_FORMAT"

                                # Remove the original file extension (if it was different)
                                rm "$PWD/$(basename "$img" | sed "s/\.[^.]*$//").${img##*.}"

                                echo "Processed: $img -> $LARGER_FOLDER/$(basename "$img" | sed "s/\.[^.]*$//").$LARGER_FORMAT (original), $(basename "$img" | sed "s/\.[^.]*$//").$SMALLER_FORMAT (resized)"
                            fi
                        done
                        ;;
                    2)
                        # Scale by percentage
                        read -p "Enter scale percentage (e.g., 50 for 50%): " SCALE
                        echo "Scaling images by $SCALE%..."

                        # Process images
                        for img in *.*; do
                            if is_supported_image "$img" && [[ "$img" != l-* ]]; then
                                # Move the original image to the LARGER_FOLDER and convert it to LARGER_FORMAT
                                cp "$img" "$LARGER_FOLDER/$(basename "$img" | sed "s/\.[^.]*$//").$LARGER_FORMAT"
                                mogrify -format "$LARGER_FORMAT" "$LARGER_FOLDER/$(basename "$img" | sed "s/\.[^.]*$//").$LARGER_FORMAT"

                                # Scale and create the resized version with the smaller extension in the working directory
                                cp "$img" "$PWD/$(basename "$img")"  # Copy the original to the working directory
                                mogrify -resize "$SCALE%" -format "$SMALLER_FORMAT" "$PWD/$(basename "$img")"

                                # Ensure that no extra files are created
                                mv "$PWD/$(basename "$img" | sed "s/\.[^.]*$//").$SMALLER_FORMAT" "$PWD/$(basename "$img" | sed "s/\.[^.]*$//").$SMALLER_FORMAT"

                                # Remove the original file extension (if it was different)
                                rm "$PWD/$(basename "$img" | sed "s/\.[^.]*$//").${img##*.}"

                                echo "Processed: $img -> $LARGER_FOLDER/$(basename "$img" | sed "s/\.[^.]*$//").$LARGER_FORMAT (original), $(basename "$img" | sed "s/\.[^.]*$//").$SMALLER_FORMAT (resized)"
                            fi
                        done
                        ;;
                    *)
                        echo "Invalid choice."
                        continue
                        ;;
                esac
                ;;
            4)
                # Generate Image List
                echo "Generating image list..."

                > images.txt  # Clear the previous image list

                SCRIPT_DIR=$(dirname "$(realpath "$0")")
                LAST_FOLDER=$(basename "$SCRIPT_DIR")

                # Iterate over resized images in the working directory
                for img in *.*; do
                    if is_supported_image "$img" && [[ "$img" != l-* ]]; then
                        echo "<img src=\"$LAST_FOLDER/$img\" alt=\"$img\" loading=\"lazy\">" >> images.txt
                    fi
                done
                echo "Image list saved in images.txt"
                ;;
            5)
                # Remove metadata
                echo "Removing metadata from images..."

                # Process PNG, JPG, JPEG, and WEBP files
                for file in *.{png,jpg,jpeg,webp}; do
                    if [ -f "$file" ]; then
                        echo "Processing: $file"

                        # Use exiftool to clear all metadata
                        exiftool -all= "$file" -overwrite_original

                        # Use exiv2 only for JPG/JPEG files to ensure further cleanup
                        [[ $file == *.jpg || $file == *.jpeg ]] && exiv2 rm "$file"

                        echo "Metadata removed: $file"
                        echo "---------------------------------------------------"
                    fi
                done

                echo "All metadata removed from supported image files."
                ;;
            6)
                # EXIF Data
                echo "-------------------- EXIF Data --------------------"
                for file in *.{png,jpg,jpeg,webp}; do
                    if [ -f "$file" ]; then
                        echo "Processing: $file"
                        exiftool "$file"
                        echo "---------------------------------------------------"
                    fi
                done
                echo "---------------------------------------------------"
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
# Check and install required tools
check_and_install_tools
# Run the conversion menu
convert_images
