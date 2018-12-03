import React from 'react';
import {render} from 'react-dom';
import Media from './src\playlist\componentes\media';


//console.log('Gaturro y Liszie... Saludos')

const app = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, donde lo haré);
//const saludos = <h1>Saludos a los mejores gaturro y liszie ..!!</h1>;

render(<Media />, app);