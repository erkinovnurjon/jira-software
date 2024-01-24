import { Account, Client, ID , Databases } from 'appwrite'

const client = new Client()

client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject('659937bdd21b0a3a4880')

export const ACCOUNT = new Account(client)
export const DATABASE = new Databases(client)
export const UNIQUE_ID = ID.unique()
