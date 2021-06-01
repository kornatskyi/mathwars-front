import ReactDOM from 'react-dom';
import React from 'react';
import './styles/style.scss'
import './index.css';
import App from "./App.js";
import store from './redux/store'
import { Provider } from 'react-redux'

//Fonts
import './assets/fonts/Roboto/Roboto-Regular.ttf'
import './assets/fonts/Roboto/Roboto-Bold.ttf'
import './assets/fonts/Roboto/Roboto-Light.ttf'
import './assets/fonts/Roboto/Roboto-Italic.ttf'
import './assets/Asana-Math/Asana-Math.otf'



ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));