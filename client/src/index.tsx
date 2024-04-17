import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import OrderStore from "./store/OrderStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const orderStore: OrderStore = new OrderStore()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


