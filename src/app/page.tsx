"use client";

import { addSofaAction } from "./actions";

export default function Home() {
  return (
    <>
      <h1>Add a sofa</h1>
      <input type="text" />
      <button onClick={() => addSofaAction("XL Sofa")}>Add sofa</button>
    </>
  );
}
