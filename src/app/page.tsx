"use client";

export default function Home() {
  function onClick() {
    alert("Clicked");
  }

  return (
    <>
      <h1>Add a sofa</h1>
      <input type="text" />
      <button onClick={onClick}>Add sofa</button>
    </>
  );
}
