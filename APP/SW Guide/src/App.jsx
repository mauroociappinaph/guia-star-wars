import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MAIN from "./components/Main";
import HERO from "./components/hero";
import HEADEAR from "./components/Headear";
import { getAllCharacters } from "./utils/api";

function App() {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllCharacters());
}, [dispatch]);


  return (
    <div>
      <HEADEAR />
      <HERO />
      <MAIN />
    </div>
  );
}

export default App;
