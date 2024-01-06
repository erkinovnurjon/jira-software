import { Account, Client, ID } from 'appwrite'

const client = new Client()

client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('659949d058a4ecdc6248');

export const ACCOUNT = new Account(client)
export const UNIQUE_ID = ID.unique()