import {EmailLoginForm, EmailLoginFormProps} from 'ui'
import {Form, useNavigate} from '@remix-run/react'
import {z} from "zod";
import React, {FormEvent, useContext} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {FirebaseContext} from '../../context';

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

export default function Index() {
  const navigator = useNavigate()
  const {auth} = useContext(FirebaseContext)

  async function doLogin(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      const user = await signInWithEmailAndPassword(auth, props.email, props.password)
      if (user) {
        navigator("/private")
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Form onChange={onFormChange} onSubmit={doLogin}>
      <EmailLoginForm email={props.email} password={props.password}/>
    </Form>
  );
}
