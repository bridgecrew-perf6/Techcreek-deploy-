import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
import Pulse from 'react-reveal/Pulse';
import logo from './assets/logo-white.png';
import ball from './assets/notification.svg';
import './Nav_section.scss';


const Navbar = () => {
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal);
        console.log(modal);
      };

    return (  
        <section className='list__nav'>
            <div className='right__said'>
            <ul>
                <li><img src={logo} alt="logo" /></li>
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
                
            </ul>

            </div>

           
             <Pulse Pulse delay={1000} duration={2000} forever={true}>


             <div className='not__pop'>

<button onClick={handleModal} > <p>Ongoing Applications </p></button> 

<Modal show={modal}>
<Modal.Header><div className='haed_di'> <h6>ICT & Digita Literacy Training</h6></div></Modal.Header>
<Modal.Body>
<div className="pproduct__page">
<div className="product__container">
 <div className="text__container">
   <p>Trainig fee is 20,00(Twnety Thousand Naira only). <br /> <span>**</span>Make payment to RSG Information & Comm.Dept (ICT) <br />101161837 <br />Zenith Bank <br />Sumit Teller or payment receipt at Riv-TechCreek, R/S ICT Dept, Aba Road, PH <span>**</span></p>
   <p>Personal Information</p>
   <input type="text"  placeholder="First Name * " /><br /> <br />
   <input type="text"  placeholder="Middle Name * " /><br /><br />
   <input type="text"  placeholder="Last Name *" /><br /><br />
   <select >
     <option value="">--select Education--</option>
     <option value="">O-level</option>
     <option value="">Undergraduate</option>
     <option value="">Bachelors Degree</option>
     <option value="">OND/HND</option>
   </select>
   <br />
   <br />
   <select >
     <option value="">--gender--</option>
     <option value="">male</option>
     <option value="">Female</option>

   </select>

 </div>
</div>
</div>
</Modal.Body>
<Modal.Footer onClick={handleModal}>Close</Modal.Footer>
</Modal>

</div>



             <div className='img_not'> <img src={ball} alt="notification" /></div>


             </Pulse>
          
            
            
            
            
        </section>
    );
}
 
export default Navbar;