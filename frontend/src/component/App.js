import './App.css';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import Home from "./pages/home/Home";

function App() {
    return (
        <div >
            <Topbar />
            <div className='container'>
                <Sidebar />
                <Home />
            </div>




        </div>
    );
}

export default App;
