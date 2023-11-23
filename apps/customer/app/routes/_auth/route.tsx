import {Outlet} from "@remix-run/react";
import {LoaderFunctionArgs, ActionFunctionArgs} from "@remix-run/node";

export async function loader(params: LoaderFunctionArgs) {
  console.log('loader::_auth::params')
  return {status: 200, "msg": "authenticated"}
}

export async function action({request}: ActionFunctionArgs) {
  console.log('action::_auth::request', request)
  return {status: 200, "msg": "authenticated"}
}

export default function Index() {
  return (
    <>
      <ul>
        <li><a href="/">index</a></li>
        <li><a href="/tour">tour</a></li>
        <li><a href="/users">users</a></li>
      </ul>
      <Outlet/>
    </>
  );
}
