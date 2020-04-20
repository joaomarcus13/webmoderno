import React from 'react';
import ReactDOM from 'react-dom';

import Bd from './componentes/BomDia'
import './index.css';
import App from './App';
import Pai from './componentes/pai'
import Saudacao from './componentes/saudacao'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Pai nome="pedro" sobrenome="silva" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
