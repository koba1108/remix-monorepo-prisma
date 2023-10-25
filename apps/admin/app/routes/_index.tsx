import {EmailLoginForm, EmailLoginFormProps} from 'ui'
import {Form} from '@remix-run/react'
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {z} from "zod";
import {FormEvent} from "react";

async function getTenant() {
  // todo: あとで client sideだけで実行するように書く
  const {ENV} = window as any
  const app = initializeApp({
    apiKey: ENV.FIREBASE_API_KEY || '',
    authDomain: ENV.FIREBASE_AUTH_DOMAIN || '',
    projectId: ENV.FIREBASE_PROJECT_ID || '',
    storageBucket: ENV.FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID || '',
    appId: ENV.FIREBASE_APP_ID || '',
  });
  const auth = getAuth(app)
  auth.tenantId = ENV.FIREBASE_TENANT_ID || ''
  return auth
}

// リクエストパラメータ
const props: EmailLoginFormProps = {
  email: "",
  password: "",
}

// request型を定義
const emailFormRequest = z.object({
  email: z.string().email().min(1, {message: "Email is required"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters"}),
})

function onFormChange(e: FormEvent<HTMLFormElement>) {
  const target = e.target as any
  switch (target.name) {
    case "email":
      props.email = target.value
      break
    case "password":
      props.password = target.value
      break
  }
  const parsed = emailFormRequest.safeParse(props)
  if (!parsed.success) {
    console.error('error', parsed.error)
    return
  }
  console.log('success', parsed.data)
}

async function doLogin(e: FormEvent<HTMLFormElement>) {
  try {
    e.preventDefault()
    const user = await signInWithEmailAndPassword(await getTenant(), props.email, props.password)
    console.log({user})
  } catch (e) {
    console.error(e)
  }
}

export default function Login() {
  return (
    <Form
      onChange={onFormChange}
      onSubmit={doLogin}
    >
      <EmailLoginForm
        email={props.email}
        password={props.password}
      />
    </Form>
  );
}
