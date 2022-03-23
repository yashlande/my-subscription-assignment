import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./components/Product";
import Routes from "./Routes";
import "./styles.css";

export default function App() {

  const state = useSelector(state => state);
  // const localCount = Number(localStorage.getItem("count"));
  // const [count, setCount] = useState(localCount || 0);

  // useEffect(() => {
  //   localStorage.setItem("count", String(count + 1))
  // }, [])

  console.log("Global State= ", state)
  return (
    <div className="App">
      <div className="heading">
        <h1>My Subscription</h1>
      </div>
      <div className="components">
        {/* <Product/> */}
        <Routes/>
      </div>
    </div>
  );
}
