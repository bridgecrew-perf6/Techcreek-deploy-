import learn from './assets/ic_learn.svg'
import create from './assets/ic_create.svg'
import connect from './assets/ic_connect.svg'
import './Bossing.scss'



const Bossing = () => {
    return (  
        <div className='LCC__CON'>

          <div className='learn__con'>
            <img src={learn} alt="learn_img" /> <br /> <br /><h3>Learn</h3><br />
            <p>Learn the princeples......</p>

          </div>

          <div className='create'>
            <img src={create} alt="create" /> <br /><br /> <h3>Create</h3><br />
            <p>create solution to <br /> the word....</p>
          </div>

          <div className='connect__con'>
            <img src={connect} alt="connect_img" /> <br /><br /> <h3>Connect</h3><br />
            <p>Get connected to <br /> the word......</p>

          </div>

        </div>
    );
}
 
export default Bossing;