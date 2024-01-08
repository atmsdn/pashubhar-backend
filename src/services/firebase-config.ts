const firebaseAdmin = require('firebase-admin');

const serviceAccount = require('../firebase-config.json')

export const admin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount)
})
