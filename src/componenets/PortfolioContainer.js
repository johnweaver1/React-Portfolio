import Navigation from "./Navbar"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import "../styles/portfolioContainer.css"


export default function PortfolioContainer(){
    return(
        <div>
            <Navigation/>
        
            
            <About/>
            
            <Projects/>
            <Resume/>
            <Contact/>
            
            
        </div>
    )
} 