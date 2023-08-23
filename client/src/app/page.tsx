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
  const {} = useKrmx();
  return <p>Client</p>;
}
