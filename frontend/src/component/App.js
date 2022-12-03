import './App.css';
import Home from './pages/home/Home';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import Creerpersonnage from "./pages/creerpersonnage/Creerpersonnage";
function App() {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/creerpersonnage">
                        <Creerpersonnage />
                    </Route>
                    </Routes>
            </div>
        </Router>

    );
}

export default App;
