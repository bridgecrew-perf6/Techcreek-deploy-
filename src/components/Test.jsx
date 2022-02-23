import { Link } from "react-router-dom";




const Test = () => {

    return (  
        <section className="for__text">
           
           <p className="welcome">Welcome <br />to the &#60;Creek/&#62;</p>
             <p className="TechCreek__test">TechCreek is a habitat for the teeming population of youths making sense of their lives with their digital skills and competencies, <br /> and actively involved in the development of the 'new economy' from Rivers State. </p>
                  
                   <Link to= '/membership'> <button className="bun_T">Members Area</button></Link>   

                       </section>
    );
}
 
export default Test;