
export interface EmailLoginFormProps {
  id?: number;
  email: string;
  password: string;
}

export function EmailLoginForm(props: EmailLoginFormProps) {
  return (
    <>
      <input type="number" name="id" defaultValue={props.id}/>
      <input type="text" name="email" defaultValue={props.email}/>
      <input type="password" name="password" defaultValue={props.password}/>
      <button type="submit">Login</button>
    </>
  );
}
