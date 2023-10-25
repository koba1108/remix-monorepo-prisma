
export interface EmailLoginFormProps {
  email: string;
  password: string;
}

export function EmailLoginForm(props: EmailLoginFormProps) {
  return (
    <>
      <input type="text" name="email" placeholder="email" defaultValue={props.email}/>
      <input type="password" name="password" placeholder="password" defaultValue={props.password}/>
      <button type="submit">Login</button>
    </>
  );
}
