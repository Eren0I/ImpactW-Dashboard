import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ContextProvider} from "./contexts/ContextProvider"
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense("ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RhXn5ccXJXTmFUVEA=");


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  </React.StrictMode>
)
