import { useEffect, useState } from "react";
import "./App.css";
import Subscription from "./Components/Subscription/Subscription";
import UseStateDemo from "./Components/UseStateDemo/UseStateDemo";

function App() {
  const [titleName, setTitleName] = useState(0);
  useEffect(() => {
    document.title = `title ${titleName}`;
  }, [titleName]);

  return (
    <>
      <h2 className="text-amber-800">This my practice project</h2>
      <p>title {titleName}</p>
      <button
        onClick={() => setTitleName(titleName + 1)}
        className="bg-rose-200  p-2  m-1  rounded-md"
      >
        {" "}
        Click to Change
      </button>
      {/* <Subscription /> */}
      {/* <Subscription />
      <Subscription /> */}
      <Subscription name={"krishna"} age={"25"} />
      <UseStateDemo />
    </>
  );
}

export default App;
