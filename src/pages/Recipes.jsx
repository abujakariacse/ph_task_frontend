import { useState } from "react";
import Modal from "../components/ui/Modal";

const Recipes = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Recipes</h1>
      <button onClick={() => setShow((prev) => !prev)}>Test</button>
      {show && <Modal setShow={setShow} />}
    </div>
  );
};

export default Recipes;
