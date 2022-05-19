import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { HashRouter } from "react-router-dom";
import './scss/style.scss'
import Menu from "./components/Menu";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
    const [data, setData] = useState('')
    useEffect(() => {
        setData(require('./data.json'))
    }, [])
    return (
        <div>
            {data && 
            <div className="App">
            <HashRouter>
                <Menu />
                <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destination" element={<Destination prop={data.destinations} />} />
                    <Route path="/crew" element={<Crew prop={data.crew} />} />
                    <Route path="/technology" element={<Technology prop={data.technology} />} />
                </Routes>
                </main>
            </HashRouter>
            </div>
        }
        </div>
    );
}

export default App;
