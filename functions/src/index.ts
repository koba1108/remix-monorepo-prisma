import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {initializeApp} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth';

initializeApp();

export const helloWorld = onRequest((req, res) => {
  logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});

export const createUser = onRequest(async (req, res) => {
  const auth = getAuth().tenantManager().authForTenant('tenant1-k95n3')
  const userRecord = await auth.createUser({
    email: 'paseli.koba@gmail.com',
    password: 'password',
  })
  res.send(userRecord.toJSON());
});
