import time
import os
import json

# Start time for elapsed time calculation
timeStart = time.time()

try:
    # Define the root directory and the target directory
    root = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), os.path.pardir))
    media_dir = os.path.join(root, 'media')
    dir_structure = {}

    # Walk through the media directory and build the directory structure
    for path, subdirs, files in os.walk(media_dir):
        if 'Images_old' not in path:
            relative_path = "./"+os.path.relpath(path, root).replace('\\', '/')
            for name in files:
                if relative_path not in dir_structure:
                    dir_structure[relative_path] = []
                dir_structure[relative_path].append(name)

    # Ensure the data directory exists within the script's directory
    json_dir = os.path.join(root, 'json')
    if not os.path.exists(json_dir):
        os.makedirs(json_dir)

    # Change to the data directory
    os.chdir(json_dir)

    # Minimize and write the directory structure to Directory.json
    json_object = json.dumps(dir_structure, separators=(',', ':'))
    with open("Directory.json", "w") as outfile:
        outfile.write(json_object)

    # Print elapsed time
    elapsed_time = time.time() - timeStart
    hours, rem = divmod(elapsed_time, 3600)
    minutes, seconds = divmod(rem, 60)
    print(f"Elapsed time: {int(hours):02}:{int(minutes):02}:{seconds:05.2f}")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # Pause the command prompt
    os.system("pause")