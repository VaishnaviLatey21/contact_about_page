import React from "react";
import "./contact.css";

function App() {
  return (
    <div className="ContactUs">
      <div className="ContactImg-wrapper">
          <div className="ContactUs-img">
            <div className="ContactImg-heading">
              <h1>GET IN TOUCH</h1>
              <p>  “When you hear the mountains 
                    calling for you, let us be the one to 
                    answer it for you.”</p>
            </div>         
          </div>
      </div>

      <div className='contact-category-wrapper'>
        <div className='contact-category'>
          <div className="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThoemF49MTRbwgr2OBrVhtqUPzNq72CBfjxIO_DBCONFhjtxwxDGSicS_osYoovCalhbE&usqp=CAU" alt="Image 1"/>
            <h2>For Customize Package</h2>
            <p>+91 8888776655</p>
            <p>customizepackages@gmail.com</p>
          </div>
          <div className="column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwg-zd5UrfRzm8fxEsCtZkBXaULpXFt2TIN5eYLDJmLZBKqKtc7uDm-Rvz5OKkYP0gDY&usqp=CAU" alt="Image 2"/>
            <h2>For Corporate Tour</h2>
            <p>+91 8888776655</p>
            <p>corporatetours@gmail.com</p>
          </div>
          <div className="column">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2022/01/03/hiking-silhouette-vector-Graphics-22843185-1-580x386.jpg" alt="Image 3"/>
            <h2>For Trek Related Queries</h2>
            <p>+91 8888776655</p>
            <p>trekrelated@gmail.com</p>
          </div>
        </div>
      </div>


      <div className='form-wrapper'>
          <div className='form-cointainer'>
            <div className='form-img'>
              <img
                // style={{maxHeight: '250px'}}
                src="http://placeholder.co/600x400"
                className="image3"
                alt=""
              />      
            </div>
            <div className='form-content'>
              <h1>CONTACT US</h1>
              {/* <p>Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer 
              took a galley of type.</p> */}
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>

        <div className='connect-wrapper'>
          <div className='connect'>
            <h1>ANY QUESTIONS ?</h1>
            <p>Lorem Ipsum is simply dummy text of 
              the printing and typesetting industry. 
              Lorem Ipsum has been the industry's 
              standard dummy text ever since the 
              1500s, when an unknown printer took 
              a galley of type and scrambled it 
              to make a type specimen book.</p>
          </div>
        </div>

        <div className='connect-category-wrapper'>
          <div className='connect-category'>
            <div className="column1">
              <img src="https://img.freepik.com/free-icon/placeholder_318-903608.jpg" alt="Image 1"/>
              <h2>Contact Address</h2>
              <p>301 The Greenhouse, Custard,</p>
              <p>Factory, London, E2 8DY.</p>
            </div>
            <div className="column1">
              <img src="https://cdn.icon-icons.com/icons2/910/PNG/512/mobile-phone_icon-icons.com_71141.png" alt="Image 2"/>
              <h2>Call Us Today!</h2>
              <p>+91 8888776655</p>
              <p>+91 8888776655</p>
            </div>
            <div className="column1">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/002/205/854/small/email-icon-free-vector.jpg" alt="Image 3"/>
              <h2>Email</h2>
              <p>routesdeindia@gmaail.com</p>
              <p>help@gmail.com</p>
            </div>
          </div>
        </div>


    </div>
  );
}

export default App;
