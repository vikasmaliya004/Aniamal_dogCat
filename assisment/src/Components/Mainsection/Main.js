import React from 'react';
import "./Main.css";
// import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom';
// import Giveaway from '../Giveaway/Giveaway';
const Main = () => {
    return (
        <div className='mainpage'>
           <div className="headingbutton">
            <div className="firstreadpage">
             <h1>Welcome in the web</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, corporis. Quidem unde repellat nesciunt voluptatum nobis mollitia aut atque maxime, repellendus impedit saepe ut quos asperiores iure amet fugiat praesentium!</p>
             <button  className='Adopt'> 
                <NavLink to="NewForm" className="navlink"style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Adopt</NavLink></button>
                <button>What all page do we have?</button>
               </div>
                <div className='img'>
                <img src="https://images.news18.com/ibnlive/uploads/2022/04/pets-16496404503x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" alt="pet" />
                </div>
           </div>
           <div className="secondsection">
                <div className='img'>
                <img src="https://images.news18.com/ibnlive/uploads/2022/04/pets-16496404503x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" alt="pet" />
                </div>
           <div className="secondreadpage">
            <h1>Welcome in the web</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, corporis. Quidem unde repellat nesciunt voluptatum nobis mollitia aut atque maxime, repellendus impedit saepe ut quos asperiores iure amet fugiat praesentium!</p>
            <button  className='Adopt'> 
             <NavLink to="Giveaway" className="navlink"style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Give away</NavLink></button>
           </div>
           </div> 
           <div className="thirdsection">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, corporis. Quidem unde repellat nesciunt voluptatum nobis mollitia aut atque maxime, repellendus impedit saepe ut quos asperiores iure amet fugiat praesentium!</p>
            </div>  
                  
        </div>
    );
}

export default Main;
