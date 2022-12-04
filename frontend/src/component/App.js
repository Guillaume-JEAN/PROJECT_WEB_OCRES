import './App.css';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar'
import Home from './pages/home/Home'
import Supprimerpersonnage from "./pages/supprimerpersonnage/Supprimerpersonnage";
import Creerpersonnage from "./pages/creerpersonnage/Creerpersonnage";
import Chercherpersonnage from "./pages/chercherpersonnage/Chercherpersonnage";
import Votrepersonnage from "./pages/votrepersonnage/Votrepersonnage";
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Supprimerpersonnage />


            </div>
        </div>

    );
}

export default App;
