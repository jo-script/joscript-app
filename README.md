
<h1>What is Joscript App</h1>

<ul>
<li>
 Joscript is an open source Javascript library that simplifies JavaScript code. It is dedicated to building and developing user interfaces on websites. The advantage of Joscript is that it does not impose a   
    specific style on the user; It works the way the user wants
</li>
<li>Jocript is easy to use even for beginners. It provides a set of tools and components that can be used to shorten javasceipt code to create attractive and interactive user interfaces.</li>
 </ul>

 <h1>Example</h1>
 <p>Accordingly, Welcome to joscript will be displayed in your browser</p>
 
 ```jsx
import { jo } from "../../joscript/joScript.js";


function App() {let load = window.onload = () => {

    return(
        jo('div', {class:'app ', id:'app' ,children:[

            jo('h1', {text:'Welcome to joscript'}),
           
        ]})
    )

};return load()}
export default App;
 ```

 <h1>Joscript features</h1>
 <p>Here are some of the plugins that the Joscript library offers. Read more details here  <a href="">Joscript</a></p>
 <div>
  <p>1 - Makes it easier to write HTML code inside Javascript</p>
  
  ```jsx
  // Create item
  jo('h1', {id:'h1', class:'h1', text:'welcome to joscript'}),
  ```
 </div>

 <div>
 <p> 2 - Add style to items</p>
  
  ```jsx
  jo('h1', {text:'welcome to joscript', style:{color:'red'} }), // The item will be given a red color
  jo('h1', {text:'welcome to joscript'}, {color:'red'}), // Add style in another way
  ```
 </div>
  <div>
  <p>3 - Add an event to items</p>
  
  ```jsx
    jo('h1', {text:'Welcome to joscript', onclick:() => {} }),
  ```
 </div>

  <div>
  <p>4 - Make it easier to call elements within Javascript</p>
  
  ```jsx
  getId('h1'),
  getClass('h1'),
  getName('h1'),

  querySelector('.h1'), // Here you can call elements like CSS
  querySelectorAll('.h1'), // Here you can call elements like CSS
  ```
 </div>

 <div>
  <p>5 - Call the elements in one of the above ways and add a style to them</p>
  
  ```jsx
  getName('h1', {
    width:'300px',
    height:'40px',
    color:'red',
    background:'white', 
})
  ```
 </div>

 <div>
  <p>6 - Event: Call the item with the ID and add an event to it</p>

  ```jsx
  event('add id', 'click', () => { })
  ```
</div>
<div>
 <p>7 - Add and recall values from local storage</p>

 ```jsx
addLocal('add name',  add value) // Add value to local storage
getLocal('add name') // Get value from local storage
```
</div>
