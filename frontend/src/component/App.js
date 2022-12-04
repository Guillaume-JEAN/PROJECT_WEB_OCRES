import './App.css';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar'
import Home from './pages/home/Home'
import Supprimerpersonnage from "./pages/supprimerpersonnage/Supprimerpersonnage";
import Creerpersonnage from "./pages/creerpersonnage/Creerpersonnage";
import Chercherpersonnage from "./pages/chercherpersonnage/Chercherpersonnage";
import Votrepersonnage from "./pages/votrepersonnage/Votrepersonnage";
import {BrowserRouter, Route,Switch} from 'react-router-dom'

function App() {
    return (
        <div>
            <Topbar />



            <div className="container">
                <BrowserRouter>
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/Votrepersonnage" component={Votrepersonnage}/>
                    <Route  path="/Supprimerunpersonnage/:id" component={Supprimerpersonnage}/>
                    <Route  path="/CréerunPersonnage/:id" component={Creerpersonnage}/>
                    <Route path="/Chercherunpersonnage" component={Chercherpersonnage}/>
                </Switch>
                </BrowserRouter>




            </div>
        </div>

    );
}

export default App;
