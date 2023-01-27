import React from 'react'
import Products from './Products'
import './login.css'
import './home.css'

const Home = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
                  <div className="container">
 
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mx-auto">
                          <li className="nav-item">
        <a className="nav-link" href="#">View All</a>
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
          </nav>
                  <hr />
                  <div className="image">
                         <div className="card bg-dark text-white border-0">
                       <img src="/assets/meesho-1-1024x341.png" className="card-img" alt="backgroud" height="400px" width="50px"/>
  
                          </div> 
                          </div>
                          <hr />
                           <div className="card bg-dark text-white border-0">
                       <img src="/assets/fashionstore.jpg" className="card-img" alt="backgroud" height="600px" width="50px"/>
  
                  </div>
                  <hr />
                  
                  
                  <Products />
                  <div className="footer">
                          <h5>More About Meesho</h5>
                          <hr />
                          
                          <h5>Meesho: Affordable Online Shopping at Your Fingertips</h5>

                          <p>There are many benefits of shopping online. You can take your time and look at different options to find exactly what
                                  you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho,
                                  you can shop for anything you want at the lowest prices in the market.  Even if you want to shop for
                                  cool gifts for your friends and family, there are many options that you can find on the Internet. </p>
                          
                          <h5>A Huge Selection of Products Across All Categories</h5>

                          <p>We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more.
                                  With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need.
                                  In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories,
                                  or just some daily-use items for home, Meesho has what you need.</p><br/>
                          <h5>Latest Women's Fashion Is Right Here</h5><br />
                          
                          <h5>Women’s Ethnic Wear Collection</h5>
                          <p>When it comes to women's ethnic wear, we have everything you need to find the perfect
                                  outfit for any occasion. Whether you're looking for traditional sarees and blouses, or
                                  something more modern like suits or casual Kurtis, we have it all. And with our stunning collection
                                  of accessories, footwear, and jewellery sets, it's easy to put together a complete look that will turn heads at
                                  your next wedding or festive celebration. So come and shop with us today!
                          </p><br />
                          <h5>Western Wear for Women</h5>

                          <p>Meesho is the best place to find fashionable and affordable western wear for women.
                                  With a constantly updating inventory of casual, formal, and partywear dresses, jeans,
                                  tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus
                                  funky jewelry and accessories. You'll never have to worry about overspending or not being able to find
                                  something you love!
                          </p>
                          <h5>Accessories, Jewellery, and Footwear</h5><br/>
                          <p>You may have your favorite outfit picked out but accessories can really add a sense of style
                                  and individuality that make you stand out! With so many types of accessories available,
                                  it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide
                                  variety of jewellery sets, handbags, belts, heels, casual footwear, watches, etc. With so many options,
                                  you'll be sure to find the perfect accessories for any outfit!
                          </p><br/>
                          <h5>Men's Ethnic Wear</h5><br />
                          <p>
                                  Do you need a new Sherwani? Are you heading to a wedding and want to look your best?
                                  If you answered yes, look no further than our latest men’s ethnic wear collection! Whether you want
                                  a Kurta set, Pajamas, Sherwani set, or any other Indian attire,
                                  we have an array of budget-friendly styles that are sure to fit your needs.</p><br />
                          <h3 className='pink'>Download Meesho App Now</h3><br />
                          <h5>Don't Miss Out! Start Shopping Online on Meesho Now</h5><br />
                          <p>Meesho offers multiple payment options including debit and credit cards, UPI, and 
                                  COD to help you with a smooth checkout process. If you are unhappy with any of the products 
                                  you order you can immediately return them and get a full refund with no questions asked. 
                                  In case you have any queries or concerns, simply send us an email at query@meesho.com.
                                 Or you can contact us on social media through Facebook, Instagram, or Twitter. We're here to help you! 
                          </p><br />
                          <h3 className='pink'>Online Shopping</h3><br/>

                          <h5>Home & Living</h5>
                          <p className="pink">Curtains & Sheers | Round Cushions | Sofa Covers | Cotton Bedsheets | Bedding Sets |
                                  Pillow Covers | Decorative Items | Duvet Covers | Blankets | Home Temple | Yoga mats | Bean Bags |
                                  Single Bed Sheet |
                                  Cushions | Face Towels | Cotton Towel | Trays | Coasters</p>
                          <h5>Men Ethnicwear</h5>
                          <p className="pink">Men Dhoti Kurtas | Men Indo Western Dresses | Men Velvet Sherwanis | Men Dhotis</p>

                          <h5>Women Ethnicwear</h5>
                          <p className="pink">Silk Saree | Puff Sleeve Blouses | Chikankari Kurtis | Designer Lehenga | Sharara
                                  | Phulkari Dupatta | Petticoats | Abaya | Black Kurta | Velvet Shawls | Blouse Piece | Kurti Fabric
                                  | Designer Suits</p>
                          <h5>Kids</h5>

                          <p className="pink">Kids Lunch Boxes | Kids Ethnic Jackets | Kids Blazers | Rompers | Kids Kurtis & Kurtas | Kids Salwar Suit Sets
                                  | Kids Ethnic Gowns | Tshirts Boys | Girls Stylish Tops</p>
                          <h5>Personal Care & Wellness</h5>
                          <p className="pink">Tummy trimmer | Makeup Kits | Hair Color | Hair Steamers |
                                  Hair Care | Oral Care | Beard Oil | Deodorants | Eye Lenses | Soap | Oximeter | Bb Cream | Body Scrub
                                  | Olive Oils | Talcum Powder | Face Steamers | Compact | Nail Cutter | Lip Balm</p>
                  </div>
                  
      </div>
      
  )
}

export default Home
