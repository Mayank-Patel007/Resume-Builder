import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ResumeProvider } from './ResumeContext';

ReactDOM.render(
  <ResumeProvider>
    <App />
  </ResumeProvider>,
  document.getElementById('root')
);
