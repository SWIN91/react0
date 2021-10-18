import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom'

function Shop() {
  const [count, setCount] = useState(0)
  
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }


  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
  )
}

export default Shop;



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
