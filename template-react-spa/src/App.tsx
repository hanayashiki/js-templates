import { useState } from "react";

import ReactLogo from "@/assets/react.svg";
import { id } from "@/utils/types";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="p-[3rem] flex gap-x-[2rem]">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="h-[200px]" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <ReactLogo className="h-[200px] w-[200px]" />
        </a>
      </div>
      <h1 className="text-4xl">__PROJECT_NAME__</h1>

      <button className="mt-[1rem]" onClick={() => setCount(count + 1)}>
        clicked {id(count)} times
      </button>
    </div>
  );
}

export default App;
