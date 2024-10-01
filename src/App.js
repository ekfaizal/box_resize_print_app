import "./App.css";
import { useEffect, useRef, useState } from "react";
function App() {
  const [dimension, setDimension] = useState({});
  const boxRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        height: boxRef.current.offsetHeight,
        width: boxRef.current.offsetWidth,
      });
    };

    setDimension({
      height: boxRef.current.offsetHeight,
      width: boxRef.current.offsetWidth,
    });

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <div  className="font-monospace Container  vh-100 w-100 h-100 justify-justify-content-center align-items-center  text-center align-content-center ">
        <div
          ref={boxRef}
          className="bg-danger"
          style={{ maxHeight: "500px", maxWidth: "1000px" }}
        >
          <h1>Width is {dimension.width}</h1>
          <h1>Height is {dimension.height}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
