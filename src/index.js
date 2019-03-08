import React from "react";
import ReactDOM from "react-dom";

//styles
import "./assets/less/index.css";
import "semantic-ui-css/semantic.min.css";

//root component
import App from "./App";

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);

const element = (
    <div>
        <h1>Hello, world!</h1>
    </div>
);
console.log(element);
ReactDOM.render(<App />, document.getElementById("root"));
