import reactDOM from "react-dom";
import Header from "./components/header";

function App(){
    return (
        <div>
            <Header/>
        </div>
    )
}

reactDOM.render(<App/>, document.querySelector(".root"))