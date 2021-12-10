import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './firebase-config'

let app

const auth = getAuth()
const db = getFirestore()

if (app) {
  app = app()
} else {
  app = initializeApp(firebaseConfig)
}

export { db, auth }
