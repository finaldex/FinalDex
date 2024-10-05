import os
import os.path
import io
import google.auth
import json
import time
import datetime
from googleapiclient.http import MediaIoBaseDownload
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError



os.chdir(os.getcwd()+'\\'+'data')

timeStart = time.time()

def gdrive():
    SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly']
    """Shows basic usage of the Drive v3 API.
    Prints the names and ids of the first 10 files the user has access to.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('../token-drive.json'):
        creds = Credentials.from_authorized_user_file('../token-drive.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('../credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('../token-drive.json', 'w') as token:
            token.write(creds.to_json())

    try:
        service = build('drive', 'v3', credentials=creds)

        # Call the Drive v3 API
        results = service.files().list(pageSize=1000, fields="nextPageToken, files(id, name)").execute()
        items = results.get('files', [])
		
        if not items:
            print('No files found.')
            return
        #ids = []
        for item in items:
            if 'FinalDex –' in item['name'] and not 'Copy' in item['name'] and not 'json' in item['name']:
                print(item['id'],item['name'])
                #gsheet(item['id'],item['name'])
				
    except HttpError as error:
        # TODO(developer) - Handle errors from drive API.
        print(f'An error occurred: {error}')

def gsheet(id,name):
    SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('../token-sheet.json'):
        creds = Credentials.from_authorized_user_file('../token-sheet.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('../credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('../token-sheet.json', 'w') as token:
            token.write(creds.to_json())

    try:
        
        service = build('sheets', 'v4', credentials=creds)
        # Call the Sheets API
        spreadsheet = service.spreadsheets()
        sheets = spreadsheet.get(spreadsheetId=id).execute()['sheets']

        obj = {}
        for sheet in sheets:
            sheetid = sheet['properties']['title']
            if not '//' in sheetid and not 'sheet' in sheetid and not 'Sheet' in sheetid:
                data = spreadsheet.values().get(spreadsheetId=id,range=sheetid).execute()
                table = tableToArr(data)
            
                if len(table) > 0:
                    obj[sheetid] = table
                    print(sheetid+" ✓")

        json_object = json.dumps(obj,separators=(',', ':'))

        with open(str(name+".json"),"w") as outfile:
            outfile.write(json_object)

    except HttpError as err:
        print(err)

def tableToArr(data):
    arr = []
    try:
        values = data['values']
        title = values[0]

        for i in range(0,len(values)): #Row
            obj = {}
        
            if len(values[i]) > len(title):
                return []

            for q in range(0,len(title)): # Column
                try:
                    if values[i][q] != '' and title[q] != '':
                        obj[title[q]] = values[i][q]
                except:
                    break
            if i != 0:
                arr.append(obj)

        return arr
    except:
        return arr


if __name__ == '__main__':
    data = [{'id':"17LnZd-Sm0Oc8Np2bIxnQYc_gkCMLLWwfkA8I6XojHvQ",'name':"Pokemon Metadata"},{'id':"1PcOs40UPqvoWuCr0pkjb2nx1NhRgyaF82bDwtFJhqk4",'name':"Pokemon Learnset Metadata"},{'id':"1PuIneyaNi8nYxxpGxFnUYToUTSYHZyUW2BDcDz94vys",'name':"Locations Metadata"},{'id':"15lMtz5WMlJ2NF1V41wIYRDXVYIbNIdIzjiXq80zK83w",'name':"Location Pokemon Metadata"},{'id':"1FlWzdfzpQGLJpcZcn5rZMyTwl3_1_mxuH8ozKVOW5H4",'name':"Location Items Metadata"},{'id':"1lsPn9sXfHlxWhrMOnZb0shPAZAzEl3Kl2KMDOOMTR8M",'name':"Location Trainers Metadata"},{'id':"1vmvr-1CKuT3EySejHUQvgjiZqpQ27nRXplWeOMbQ9C0",'name':"Moves Metadata"},{'id':"1i6PJyMg_DRDPIQ7ahhWYHXClgnJjfWZOjBuZ1smddOc",'name':"Abilities Metadata"},{'id':"18yqu7HN2YIFAU--cvsJ0y8rZNL3hyv9TJW4cI4TUGAg",'name':"Items Metadata"},{'id':"1PvbwQOKAL-_1re7xNxwQ_1HTHrTsU153N_7R2T1rrWc",'name':"Trainers Metadata"},{'id':"1Zza0cQe7VCo-p7KI1RyYgPlLZ2JzyV-JMekyytjnBBM",'name':"Mechanics Metadata"},{'id':"1UxHecxZc_g6RyLWF7KfzjJzJLRvvRgfYO1FqCv4lIsI",'name':"Game Metadata"}]
    for i in range(0,len(data)):
        id = data[i]["id"]
        name = data[i]["name"]
        
        print(str(i)+"/"+str(len(data))+" - "+str(name))
        gsheet(id,name)

        time.sleep(10) # To not exceed api quota
    print("Time Elapsed: "+str(datetime.timedelta(seconds=(round(time.time() - timeStart,0)))))
    os.system("pause")