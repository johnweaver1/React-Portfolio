import { TypeAnimation } from "react-type-animation";

export default function IntroType()  {
return(
    <TypeAnimation
    sequence={[
        "Technology Teacher",
        1500,
        "Full Stack Web Dev",
        1500,
        "Your next great hire",
        20000,
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    style={{fontSize:"30px"}}
    
    
    
    
    />
)
}