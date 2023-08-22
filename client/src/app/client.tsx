"use client";
import { useKrmx } from '@krmx/client';

export function MyComponent() {
  const {} = useKrmx();
  return <p>Client!</p>;
}
