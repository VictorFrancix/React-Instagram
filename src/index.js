import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

function App(){
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector(".root"))