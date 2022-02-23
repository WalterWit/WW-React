//1) Tener la variable React en el scope
import React from 'react';
//const React = require('react');

//Creame una variable llamada React en este archivo index.js que tenga todo lo que hay en la libreria react en su archivo index.js

//2) Tener la variable ReactDOM en el scope
import ReactDOM from 'react-dom';


//3) Tener un componente de React
function App () {
    return "Hola Mundo"
}


//4) Renderizar App en el DOM 
ReactDOM.render(App(),document.getElementById('root'))
