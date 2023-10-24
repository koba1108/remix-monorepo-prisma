import {onRequest} from "firebase-functions/v2/https";
import {initializeApp} from 'firebase-admin/app';
import {getAuth} from 'firebase-admin/auth';

initializeApp();

export const createUser = onRequest(async (req, res) => {
  const auth = getAuth().tenantManager().authForTenant('tenant1-k95n3')
  const userRecord = await auth.createUser({
    email: 'xxxxxxxx@example.com',
    password: 'password',
    emailVerified: false, // メアド確認不要ならtrue
  })
  res.send(userRecord.toJSON());
});
