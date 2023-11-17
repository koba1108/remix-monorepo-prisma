import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React from "react";
import {useLoaderData} from "react-router";
import {json} from "@remix-run/node";
import {FirebaseProvider, FirebaseProviderConfig} from "../context";

import styles from "./tailwind.css";

export async function loader() {
  return json({
    ENV: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_TENANT_ID: process.env.FIREBASE_TENANT_ID,
    },
  });
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const data: any = useLoaderData();
  const firebaseConfig: FirebaseProviderConfig = {
    apiKey: data.ENV.FIREBASE_API_KEY,
    authDomain: data.ENV.FIREBASE_AUTH_DOMAIN,
    projectId: data.ENV.FIREBASE_PROJECT_ID,
    storageBucket: data.ENV.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: data.ENV.FIREBASE_MESSAGING_SENDER_ID,
    appId: data.ENV.FIREBASE_APP_ID,
    tenantId: data.ENV.FIREBASE_TENANT_ID,
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
