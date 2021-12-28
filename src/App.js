import React from "react";


import {BrowserRouter as Router, Route} from "react-router-dom";
import {Compress} from "./components/compress";
import {KmpTest} from "./components/kmpTest";


function App() {
    return (
        <div className="App">
            <Router>
                <Route path={"/compress"} key={"compress"} component={Compress}/>
                <Route path={"/kmpTest"} key={"kmpTest"} component={KmpTest}/>
            </Router>


        </div>
    );
}

export default App;
