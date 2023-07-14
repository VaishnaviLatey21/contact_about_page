import React from "react";
import "./about.css";


function App() {
  return (
    <div className='AboutUs'>
       <div className="img-wrapper">
          <div className="AboutUs-img">
            <div className="img-heading">
              <h1>ABOUT US</h1>
            </div>         
          </div>
        </div>

        <div className='Mission-wrapper'>
          <div className='mission'>
            <div className='mission-img'>
              <img
                // style={{maxHeight: '250px'}}
                src="http://placeholder.co/600x400"
                className="image1"
                alt=""
              />      
            </div>
            <div className='mission-content'>
              <h1>OUR MISSION</h1>
              <p>We’ve always worked towards providing a platform
                for people where they can have the best traveling 
                experience, where they don’t have to worry about 
                the accommodations, the transportation, the food 
                or even whether they’ll be able to get the most 
                out of a place because with our well curated itineraries, 
                they get everything at their disposal making the experience
                smooth and hassle free.</p>
            </div>
          </div>
        </div>

        <div className='vission-wrapper'>
          <div className='vission'>
          <div className='vission-content'>
              <h1>OUR VISSION</h1>
              <p>We’ve always worked towards providing a platform
                for people where they can have the best traveling 
                experience, where they don’t have to worry about 
                the accommodations, the transportation, the food 
                or even whether they’ll be able to get the most 
                out of a place because with our well curated itineraries, 
                they get everything at their disposal making the experience
                smooth and hassle free.</p>
            </div>
            <div className='vission-img'>
              <img
                // style={{maxHeight: '250px'}}
                src="http://placeholder.co/600x400"
                className="image1"
                alt=""
              />      
            </div>
          </div>
        </div>

        <div className='what-we-do-wrapper'>
          <div className='what-we-do'>
            <h1>WHAT WE DO</h1>
            <div className="category">
              <div className="category-item">
                <div className='img-container'>
                  <img src="http://placeholder.co/250" alt="Image 1" className="image"/>
                  <div className="overlay">
                  <h4>Backing Trips</h4>
                  </div>
                </div>
                <h3 className='text'>Backing Trips</h3>
              </div>
              <div className="category-item">
                <div className='img-container'>
                  <img src="http://placeholder.co/250" alt="Image 2" className="image"/>
                  <div className="overlay">
                  <h4>Biking Tours</h4>
                  </div>
                </div>
                <h3 className='text'>Biking Tours</h3>
              </div>
              <div className="category-item">
                <div className='img-container'>
                  <img src="http://placeholder.co/250" alt="Image 3" className="image"/>
                  <div className="overlay">
                  <h4>Private Treks</h4>
                  </div>
                </div>
                <h3 className='text'>Private Treks</h3>
              </div>
              <div className="category-item">
                <div className='img-container'>
                  <img src="http://placeholder.co/250" alt="Image 4" className="image"/>
                  <div className="overlay">
                  <h4>Weekend Gateways</h4>
                  </div>
                </div>
                <h3 className='text'>Weekend Gateways</h3>
              </div>
              <div className="category-item">
                <div className='img-container'>
                  <img src="http://placeholder.co/250" alt="Image 5" className="image"/>
                  <div className="overlay">
                  <h4>Corporate Tours</h4>
                  </div>
                </div>
                <h3 className='text'>Corporate Tours</h3>
              </div>
              <div className="category-item">
                <div className='img-container'>
                  <img src="http://placeholder.co/250" alt="Image 6" className="image"/>
                  <div className="overlay">
                  <h4>Customize Packages</h4>
                  </div>
                </div>
                <h3 className='text'>Customize Packages</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='Team-wrapper'>
          <div className='team'>
            <h1>MEET OUR TEAM</h1>
            <div className='team-members'>
            <div className="person">
              <div className='person-card'>
              <img src="http://placeholder.co/250" alt="Person 1"/>
              <h2>XYZ</h2>
            </div>
            </div>
            <div className="person">
              <div className='person-card'>
              <img src="http://placeholder.co/250" alt="Person 2"/>
              <h2>XYZ</h2>
              </div>
            </div>
            <div className="person">
              <div className='person-card'>
              <img src="http://placeholder.co/250" alt="Person 3"/>
              <h2>XYZ</h2>
              </div>
            </div>
            <div className="person">
              <div className='person-card'>
              <img src="http://placeholder.co/250" alt="Person 4"/>
              <h2>XYZ</h2>
              </div>
            </div>
            </div>
          </div>
        </div>


        
    </div>
  );
}

export default App;
