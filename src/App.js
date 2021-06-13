import '../src/styles/style.scss'
import CompanyLogo from './Components/CompanyLogo';
import CompanyInfo from './Components/CompanyInfo';
import InvoiceInfo from './Components/InvoiceInfo';
import ForCompanyData from './data/FromCompany.json';
import ToCompanyData from './data/ToCompany.json';
import React from 'react';
import ProductList from './Components/ProductList';
import AddProduct from './Components/AddProduct';

function App() {
    return (
      <>         
      <div className="header"></div>
      
      <div>
        <div className="container">
          <div className="item-left">
              <p className="border">
                Invoice
              </p>
          </div>
          <div className="item-right"><CompanyLogo/></div> 
        </div>     
        <div className="container">
          <div className="item-left"><CompanyInfo companyInfo={ForCompanyData}/></div>
          <div className="item-left"><CompanyInfo companyInfo={ToCompanyData}/></div>
        </div>
        <br/>
        <hr/>

        <div className="container">
          <div className="item-left"><InvoiceInfo/></div>
        </div>
        <br/>      
        <div className="container">    
          <ProductList/>      
        </div>
        <hr/>
        <div className="container">          
          <AddProduct/>          
        </div>  
        <hr/>
      </div>
      
      <div className="footer">Thank you for your business!</div>
      
      </>
    );
  }



export default App;
