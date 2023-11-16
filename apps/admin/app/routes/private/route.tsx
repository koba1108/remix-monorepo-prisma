import {useContext} from "react";
import {FirebaseContext} from "../../../context";

export async function loader() {
  console.log('loader')
  return null
}

export default function PrivateHome() {
  const { auth } = useContext(FirebaseContext)
  return (
    <div>
      <h1>This is Private</h1>
      <p>{JSON.stringify(auth.currentUser)}</p>
    </div>
  );
}
