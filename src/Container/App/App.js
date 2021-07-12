import "./App.css"
import Header from "../Header/Header";
import Page from "../Page/Page";
import Card from "../Card/Card";
import Pagetwo from "../Pagetwo/Pagetwo";
import Contact from "../Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <div className="App">
            <Header />
            <Page />
            <Card />
            <Pagetwo />
            <Contact />
        </div>
    );
}

export default App