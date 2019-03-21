import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ShelterProvider from './context/ShelterProvider'

ReactDOM.render(
    
    <BrowserRouter>
        <ShelterProvider>
            <App />
        </ShelterProvider>
     </BrowserRouter>
, document.getElementById('root'))