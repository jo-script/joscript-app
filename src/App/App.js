import { jo } from "../../joscript/joScript.js";



function App() {let load = window.onload = () => {

    return(
        jo('div', {class:'app ', id:'app' ,children:[

        jo('h1', {text:'Welcome to joscript', id:'x'},{height:'100px', color:'#383D45'}),
            jo('img', {src:'/src/App/joScript-logo.svg'})

        ]})
    )

};return load()}
export default App;