#!/bin/bash

# Define the directory and output file
IMG_DIR="public/img"
OUTPUT_FILE="public/images.json"

# Start JSON array
echo "[" > "$OUTPUT_FILE"

# Loop through image files and add them to the JSON array
first=true
for img in "$IMG_DIR"/*.{jpg,jpeg,png,svg,gif}; do
  # Check if any files match
  [ -e "$img" ] || continue

  # Add comma between entries except for the first one
  if [ "$first" = true ]; then
    first=false
  else
    echo "," >> "$OUTPUT_FILE"
  fi

  # Append the image path to the JSON file with a leading slash
  echo "  \"/${img#public/}\"" >> "$OUTPUT_FILE"
done

# Close JSON array
echo "]" >> "$OUTPUT_FILE"

echo "Generated $OUTPUT_FILE with paths to images in $IMG_DIR."
