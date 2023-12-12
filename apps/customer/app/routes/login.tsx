import {ActionFunctionArgs, json} from "@remix-run/node";
import { useState } from "react";

export const action = (arg: ActionFunctionArgs) => {
  console.log({arg});
  return json({
    status: 200,
    message: "OK"
  })
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setEmailValue() {
    setEmail("aaafdghjklaaa@gmail.com")
  }

  async function setCredential() {
    if ("PasswordCredential" in window) {
      // @ts-ignore
      const cred = new window.PasswordCredential({
        id: "user_id_2",
        name: "name2",
        password: "pass1234",
        // iconURL: "", // アバターURLも保存できる
      })
      console.log({ cred })
      // ここでパスワードマネージャー出てくる
      await navigator.credentials.store(cred)
    }
  }

  async function getCredential() {
    const cred2 = await navigator.credentials.get({
      password: true
    } as any) as any
    console.log({ cred2 })
    if (cred2) {
      setEmail(cred2.id)
      setPassword(cred2.password)
    }
  }

  return (
    <>
      <button onClick={getCredential}>Get Credentials</button>
      <button onClick={setCredential}>Set Credentials</button>
      <button onClick={setEmailValue}>Set email</button>
      <form method="post">
        <label>
          <input
            type="email"
            name="email"
            required
            readOnly
            defaultValue={email}
            autoComplete="username"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            required
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
}
