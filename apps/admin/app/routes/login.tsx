import {EmailLoginForm, EmailLoginFormProps} from 'ui'
import {ActionFunctionArgs} from "@remix-run/node";
import {Form} from '@remix-run/react'
import {z} from "zod";

// リクエストパラメータ
const props: EmailLoginFormProps = {
  id: 1,
  email: "aaaaa@example.com",
  password: "12345678",
}

// request型を定義
const emailFormRequest = z.object({
  // id は string | null で受けてnumberへ変換する
  id: z.string().optional().transform(Number),
  email: z.string().email().min(1, {message: "Email is required"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters"}),
})

// action内で safeParse を使うと validation と型変換が同時に行える
export const action = async ({request}: ActionFunctionArgs) => {
  const parsed = emailFormRequest.safeParse({
    ...Object.fromEntries(await request.formData()),
  });
  if (!parsed.success) {
    return {
      status: 400,
      json: parsed.error,
    }
  }
  /**
   * parsed.data で下記が取得できる
   * {"id":1,"email":"aaaaa@example.com","password":"12345678"}
   */
  return {
    ...parsed.data,
  };
}

export default function Login() {
  return (
    <Form id="id" method="POST">
      <EmailLoginForm
        id={props.id}
        email={props.email}
        password={props.password}
      />
    </Form>
  );
}
