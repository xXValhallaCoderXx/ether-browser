import React from 'react'
import { render } from 'react-dom';
import "shared/styles/index.scss";
import App from './app';

const root = document.getElementById("render-app");
render(<App />, root);