import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import Button from "./components/Button/Button";


function App() {
    const { tg, onToggleButton, onClose} = useTelegram();

    useEffect(()=> {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <Button onClick={onToggleButton}>toggle </Button>
        <Header/>
    </div>
  );
}

export default App;
