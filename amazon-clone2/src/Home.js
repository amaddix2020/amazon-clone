import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
            />
            <div className="home__row"> 
            <Product 
            id="23897610"
            title="KJV Life Application Study Bible, Large Print, Black
            Leather / fine binding in English (1 Mar 2003)"
            price={47.50}
            rating={5}
            image= "https://wordery.com/jackets/74134513/kjv-life-application-study-bible-large-print-black-9780842368865.jpg?width=298"
            />
          
            <Product 
            id="23897610"
            title="The Final Quest by Rick Joyner.
            This panoramic vision was given to the author over a period of one year."
            price={47.50}
            rating={5}
            image= "https://images-na.ssl-images-amazon.com/images/I/516Kl5IF8EL._SX316_BO1,204,203,200_.jpg"
            />   
            <Product
            id="23897640"
            title="A Divine Revelation of Hell by Mary K. Baxter - Paperback – 30 Sept. 1993"
            price={12.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41-hIsEDj2L._SX322_BO1,204,203,200_.jpg"
            />
            <Product
            id="23897640"
            title="A Divine Revelation of Heaven by Mary K. Baxter - Paperback – 31 July 1998"
            price={12.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41klB1F9CgL._SX322_BO1,204,203,200_.jpg" 
            />
             <Product 
            id="23876430"
            title="Transference of Spirits by Dr. Alexander (Alex) W. Ness, TH.D., D.D."
            price={24.99}
            rating={5}
            image= "https://moriahpublications.com/wp-content/uploads/2018/06/transferenceofspirits-cover.jpg"
            />
          
        
           </div>  

            <div className="home__row">
            <Product
            id="23897640"
            title="The Strongest Strong's Exhaustive Concordance of the Bible Hardback
            21st Century Edition
            by John R. Kohlenberger III James Strong"
            price={31.93}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51-+DlQ620L.jpg" 
            />   
            <Product
            id="54309890"
            title= "EC Technology Portable Charger, 26800mAh Power Bank Ultra High Capacity External Battery 3 USB Output with AUTO-IC, USB Phone Charger Compatible with Smartphone, Tablets and More - Black&Red"
            price={21.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41vluztewKL._AC_.jpg" 
             />

            
            <Product
            id="54397830"
            title="EC Technology 60W 8-Port USB Desktop Rapid Charger with Auto IC Technology for USB Devices – Black"
            price={12.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61ExSl1f41L._AC_SL1200_.jpg"
            />
         
            </div>  

            <div className="home__row">  
            <Product
            id="54390850"
            title= "PortaPow Pure USB Data Blocker - Brand: PortaPow"
            price={5.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61F017jtnVL._AC_SL1500_.jpg"
            />
            <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product 
            id="54392345"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Grey"
            price={2470.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_SL1500_.jpg"
            />
            </div>
          </div>
        </div>
      );
    }
    
    export default Home;
