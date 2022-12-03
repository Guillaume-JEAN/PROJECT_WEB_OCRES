import './App.css';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar'
import Creerpersonnage from "./pages/creerpersonnage/Creerpersonnage";
function App() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Creerpersonnage />

            </div>
        </div>

    );
}

export default App;
