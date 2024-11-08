import os
import json
import argparse
import csv
import time
import subprocess
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseDownload


data_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), os.path.pardir, 'data')

def convert_value(value):
    if value is None:
        return value
    if isinstance(value, str):
        if value.lower() in ['true', 'false']:
            return value.lower() == 'true'
        try:
            return int(value)
        except ValueError:
            return value
    return value

def tableToArr(data):
    arr = []
    values = data.get('values', [])
    title = values[0] if values else []

    for row in values[1:]:  # Skip the title row
        if len(row) > len(title):
            return []

        obj = {
            title[i]: convert_value(cell) 
            for i, cell in enumerate(row) 
            if cell and i < len(title) and title[i]
        }
        
        arr.append(obj)

    return arr

def gdrive(sheets=None):
    SCOPES = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets.readonly']
    creds = None

    # Load credentials from token/token-drive.json if it exists
    root = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), os.path.pardir))
    token_drive_path = os.path.join(root, 'auth', 'token-drive.json')
    credentials_path = os.path.join(root, 'auth', 'credentials.json')


    if os.path.exists(token_drive_path):
        creds = Credentials.from_authorized_user_file(token_drive_path, SCOPES)
    
    # If there are no valid credentials available, let the user log in
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            try:
                creds.refresh(Request())
            except Exception as e:
                print(f"Error refreshing credentials: {e}")
                creds = None
        if not creds:
            flow = InstalledAppFlow.from_client_secrets_file(credentials_path, SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open(token_drive_path, 'w') as token:
            token.write(creds.to_json())

    try:
        drive_service = build('drive', 'v3', credentials=creds)
        sheets_service = build('sheets', 'v4', credentials=creds)

        # Call the Drive v3 API to retrieve files in the root directory
        results = drive_service.files().list(q="'root' in parents", pageSize=1000, fields="files(id, name, mimeType)").execute()
        items = results.get('files', [])

        # Filter and download the specified sheets
        for item in items:
            # Ignore sheets with "Menu" or "//" or "Copy" in their name
            if "Menu" in item['name'] or "//" in item['name'] or "Copy" in item['name']:
                continue

            if sheets:
                for sheet_name in sheets:
                    if f"FinalDex – {sheet_name} Dataset" in item['name']:
                        print(f"Downloading {item['name']}...")
                        if item['mimeType'] == 'application/vnd.google-apps.spreadsheet':
                            spreadsheet_id = item['id']
                            spreadsheet = sheets_service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
                            data = {}
                            for sheet in spreadsheet['sheets']:
                                sheet_title = sheet['properties']['title']
                                if "Menu" in sheet_title or "//" in sheet_title:
                                    continue
                                result = sheets_service.spreadsheets().values().get(spreadsheetId=spreadsheet_id, range=sheet_title).execute()
                                arr = tableToArr(result)
                                if arr:  # Only add non-empty arrays
                                    data[sheet_title] = arr
                            file_name = item['name'].replace("FinalDex – ", "").replace("é","e")
                            json_file_path = os.path.join(data_dir, f"{file_name}.json")
                            with open(json_file_path, 'w', encoding='utf-8') as json_file:
                                json.dump(data, json_file, separators=(',', ':'), ensure_ascii=False)
                        else:
                            request = drive_service.files().get_media(fileId=item['id'])
                            file_name = item['name'].replace("FinalDex – ", "").replace("é","e")
                            file_path = os.path.join(data_dir, f"{file_name}.json")
                            with open(file_path, 'wb') as f:
                                downloader = MediaIoBaseDownload(f, request)
                                done = False
                                while not done:
                                    status, done = downloader.next_chunk()
                                    print(f"Download {int(status.progress() * 100)}%.")
            else:
                if "FinalDex – " in item['name'] and " Dataset" in item['name']:
                    print(f"Downloading {item['name']}...")
                    if item['mimeType'] == 'application/vnd.google-apps.spreadsheet':
                        spreadsheet_id = item['id']
                        spreadsheet = sheets_service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
                        data = {}
                        for sheet in spreadsheet['sheets']:
                            sheet_title = sheet['properties']['title']
                            if "Menu" in sheet_title or "//" in sheet_title:
                                continue
                            result = sheets_service.spreadsheets().values().get(spreadsheetId=spreadsheet_id, range=sheet_title).execute()
                            arr = tableToArr(result)
                            if arr:  # Only add non-empty arrays
                                data[sheet_title] = arr
                        file_name = item['name'].replace("FinalDex – ", "").replace("é","e")
                        json_file_path = os.path.join(data_dir, f"{file_name}.json")
                        with open(json_file_path, 'w', encoding='utf-8') as json_file:
                            json.dump(data, json_file, separators=(',', ':'), ensure_ascii=False)
                    else:
                        request = drive_service.files().get_media(fileId=item['id'])
                        file_name = item['name'].replace("FinalDex – ", "").replace("é","e")
                        file_path = os.path.join(data_dir, f"{file_name}.json")
                        with open(file_path, 'wb') as f:
                            downloader = MediaIoBaseDownload(f, request)
                            done = False
                            while not done:
                                status, done = downloader.next_chunk()
                                print(f"Download {int(status.progress() * 100)}%.")

    except HttpError as error:
        print(f"An error occurred: {error}")

def format_duration(seconds):
    hours, remainder = divmod(seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    
    if hours > 0:
        return f"{int(hours)}:{int(minutes):02}:{seconds:05.2f}"
    elif minutes > 0:
        return f"{int(minutes)}:{seconds:05.2f}"
    else:
        return f"{seconds:05.2f}"

def sheet_to_json():
    try:
        start_time = time.time()
        
        parser = argparse.ArgumentParser(description='Download specified Google Sheets as JSON files.')
        parser.add_argument('--sheet', type=str, help='Comma-separated list of sheets to download (e.g., Items,Pokemon)')
        args = parser.parse_args()

        sheets = args.sheet.split(',') if args.sheet else None

        # Implement rate limiting and retry logic
        max_retries = 5
        retry_delay = 30  # Delay in seconds

        for attempt in range(max_retries):
            try:
                gdrive(sheets)
                break  # Exit the loop if the request is successful
            except HttpError as error:
                if error.resp.status == 429:
                    print(f"Rate limit exceeded. Retrying in {retry_delay} seconds...")
                    time.sleep(retry_delay)
                else:
                    raise  # Re-raise the exception if it's not a rate limit error

        elapsed_time = time.time() - start_time
        print(f"Elapsed time: {format_duration(elapsed_time)}")
        subprocess.run(["python", "json_format.py"])

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        os.system("pause")

# Call the function directly
sheet_to_json()
