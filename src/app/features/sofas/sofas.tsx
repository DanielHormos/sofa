import { addSofaAction } from "./actions";

export function Sofa() {
  return (
    <>
      {" "}
      <h1>Add a sofa</h1>
      <input type="text" />
      <button onClick={() => addSofaAction("XL Sofa")}>Add sofa</button>
    </>
  );
}
