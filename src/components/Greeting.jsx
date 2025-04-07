import React from 'react'; //Imports the React data from React

function Greeting() { //Establishes the Greeting function which will be used later when it is exported
    return ( //Calls a return order to return the greeting
    <div> 
        <h2>Hello from the Greeting Component!</h2>
        <p>This is your first custom component in React.</p>
    </div>
    ); //Establishes a heading and a paragraph section for the greeting text
};

export default Greeting; //Exports the greeting function and its data