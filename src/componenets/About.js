import React from "react"
import headshot from "../images/photoOfMe.jpg"
import "../styles/about.css"
import IntroType from "./TypeAnimation"




export default function About(){

    return(
        <div>
            
<div id="about"></div>

<div id="aboutContainer">
    <section className="mt-3">
      <div class="in-line">  
     <div className="container" id="introContainer">
     
     
        {/* <div id="aboutText1">     
            <h4 id="helloText">Welcome, I'm</h4>
            <h1 id="nameTag">John Weaver</h1>
            <div id="introType">
                <IntroType></IntroType>
                
            </div>
        </div> */}
        
         <div id="imgContainer">
            <img id="headshot"  className="col-4 img-thumbnail mt-4" src={headshot}></img>
         </div>

         <div id="aboutText1">     
            <h4 id="helloText">Welcome, I'm</h4>
            <h1 id="nameTag">John Weaver</h1>
            <div id="introType">
                <IntroType></IntroType>
                
            </div>
        </div>
         
     </div>
</div>
     <div id="aboutText2">
            <p id="aboutP">
            <i class="fa-brands fa-github"></i>
                Hi I'm John. I'm a full stack web developer with a background in education. 
                I am eager to apply my deep knowledge of creating user-focused websites using HTML, CSS, and JavaScript to help an organization’s internal 
                and client facing technology needs. 
                    <br></br>
                    <br></br>
                    My work at Texas Student Television as well as my teaching experience gives me a valuable skill set that complements my computer programing skills. Pairing these skills with my program and content development, project management and learning development, and change management skills can be leveraged in many areas beyond simple computer programming work including areas such as program rollout, implementation, and adoption at scale.  
                    <br></br>
                    <br></br> 
                    I am eager to work for an organization that could benefit from my well-defined skill set and offers opportunity for growth and development to further my learning and contributions for the business. If you are interested in reaching out please do! Thank you for visiting my site. </p>
    </div>

        

        </section>

        

        </div>

        </div>
    )
    
}