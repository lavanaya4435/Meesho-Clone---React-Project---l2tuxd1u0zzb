import React from 'react'

import Products from './Products'
import Footer from './Footer'

import './home.css'

const Home = () => {
          
  return (
          <div>
                  
                  
        {/* <nav className="navbar navbar-expand-lg navbar-light ">
                  <div className="container">
 
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mx-auto">
                          <li className="nav-item">
        <a className="nav-link" href="/products">View All</a>
                </li>  
      <li className="nav-item active">
        <a className="nav-link" href="#">Women Western <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Jewellary &Accessories</a>
                </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Men</a>
                          </li> 
                <li className="nav-item">
        <a className="nav-link" href="#">Beauty & Health</a>
                          </li> 
                <li className="nav-item">
        <a className="nav-link" href="#">Bath & Body</a>
                          </li> 
                <li className="nav-item">
        <a className="nav-link" href="#">bags & footwear</a>
                          </li>  
                <li className="nav-item">
        <a className="nav-link" href="#">Home & Kitchen</a>
                          </li>
                <li className="nav-item">
        <a className="nav-link" href="#">kid's</a>
                          </li>    
                <li className="nav-item">
        <a className="nav-link" href="#">Electronics</a>
                          </li>  
                         
      
    </ul>
            
                      </div>
                      </div>
          </nav> */}
                  <hr />
                   
                  <div className="image"> 
                         
                          <div className="card bg-dark text-white border-0" >
                <img src="/assets/meesho-1-1024x341.png" className="card-img" alt="backgroud" height="400px" width="100px"/>
  
                          </div>
                              <div className="row">
                  <div className="col-12 mb-5">
                      <h1 className='display-6 fw-bolder text-center'>Top Categories to choose from</h1>
                      <hr />
                  </div>
              </div> 
                          <br /><br/>
                    <div className="card bg-dark text-white border-0">
                        <img src="/assets/fashionstore.jpg" className="card-img" alt="backgroud" height="500px" width="30px"/>
  
                   </div>
                          <br /><br />
                        
                    <div className="card bg-dark text-white border-0">
                        <img src="/assets/image-8.png" className="card-img" alt="backgroud" height="500px" width="20px"/>
  
                          </div><br></br>
                            <div className="card bg-dark text-white border-0">
                        <img src="/assets/image-7.png" className="card-img" alt="backgroud" height="500px" width="20px"/>
  
                           </div><br></br>
                          <div className="card bg-dark text-white border-0">
                        <img src="/assets/image-3.png" className="card-img" alt="backgroud" height="300px" width="20px"/>
  
                           </div>
                          <hr />
                          
                          <Products />
                       
                       
                         
                            </div> 
                  <hr />
                  
                     
                  <Footer />
                  
      </div>
      
  )
}

export default Home
