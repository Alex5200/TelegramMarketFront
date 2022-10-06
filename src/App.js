import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp;

function App() {

    useEffect(()=> {
        tg.ready();
    }, [])

  return (
    <div className="App">
     WORK
    </div>
  );
}

export default App;
