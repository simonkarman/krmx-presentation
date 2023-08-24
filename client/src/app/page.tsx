"use client";
import { KrmxProviderWithStore, useKrmx } from '@krmx/client';
import { useState } from 'react';

// Note: Don't use `KrmxProviderWithStore` if you are already creating a redux store in your app.
//       In that case, add the exported `krmxSlice` to your store and use `KrmxProvider` directly.
const { KrmxProvider } = KrmxProviderWithStore();
export default function MyApp() {
  const [serverUrl] = useState('ws://localhost:8082');
  return (
    <KrmxProvider
      serverUrl={serverUrl}
      onMessage={(message) => console.info(message)}
    >
      <MyComponent/>
    </KrmxProvider>
  );
}

export function MyComponent() {
  const { isConnected, link, isLinked, username, rejectionReason, send } = useKrmx();

  if (!isConnected) {
    return <p>Connection to server failed!</p>;
  }

  if (!isLinked) {
    return <>
      <p>Hello, Amsterdam!</p>
      <button onClick={() => link('simon')}>Join as Simon</button>
      <button onClick={() => link('lisa')}>Join as Lisa</button>
      <p>{rejectionReason}</p>
    </>;
  }

  return <>
    <h1>Welcome, {username}!</h1>
    <button onClick={() => send({ type: 'my-game/roll', payload: { color: 'red' }})}>Roll a die!</button>
  </>
}
