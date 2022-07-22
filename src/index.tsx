import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import HomePrincipal from './HomePrincipal';
import LoginPage from './components/Login/login';
// import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
      <HomePrincipal />
      <LoginPage />
    </React.StrictMode>
  );
  
//   reportWebVitals();
