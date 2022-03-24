import { useSelector } from "react-redux";
import Routes from "./Routes";
import "./styles.css";

export default function App() {

  const state = useSelector(state => state);
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
