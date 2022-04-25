import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import TheMostDeliciousTools from './component/content/TheMostDeliciousTools';
import WhySandwichNetwork from './component/content/WhySandwichNetwork';
import SANDWICHToken from './component/content/$SANDWICHToken';
import Footer from './component/footer';
/*import "antd/dist/antd.css";*/

ReactDOM.render(
  <React.StrictMode>
    <div className='sandwich'>
      <Header/>

      <TheMostDeliciousTools/>
      <WhySandwichNetwork/>
      <SANDWICHToken/>
      
      <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
