"use client";

import { onClick } from "./actions";

export default function Home() {
  return (
    <>
      <h1>Add a sofa</h1>
      <input type="text" />
      <button onClick={onClick}>Add sofa</button>
    </>
  );
}
