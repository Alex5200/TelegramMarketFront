import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import Button from "./components/Button/Button";
import {Route, Routes} from "react-router-dom";
import ProdictList from "./components/ProductList/ProdictList";
import Form from "./components/Form/Form";


function App() {
    const { tg, onToggleButton, onClose} = useTelegram();

    useEffect(()=> {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<ProdictList/>}/>
            <Route path={'form'} element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;
