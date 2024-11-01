import os
import json

# Path to your JSON files
locations_json = './data/Locations Dataset.json'

# Load the locations data
with open(locations_json, 'r') as file:
    locations_data = json.load(file)

# Extract the location array
location_array = [location['Location'] for location in locations_data['Overview']]

# Sort the location array by length in descending order
location_array.sort(key=len, reverse=True)

# Function to rename files based on the location array
def rename_files(directory_path, location_array):
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            new_name = file
            for location in location_array:
                if new_name.startswith(location + " ") and "_" not in new_name:
                    new_name = new_name.replace(location + " ", location + "_", 1)
                    break
            if new_name != file:
                old_file_path = os.path.join(root, file)
                new_file_path = os.path.join(root, new_name)
                print(f'Rename:\n{old_file_path}\n{new_file_path}')
                os.rename(old_file_path, new_file_path)

# Directory to rename files in
directory_path = './media/Images/Location/Overview/'

# Call the function to rename files
rename_files(directory_path, location_array)