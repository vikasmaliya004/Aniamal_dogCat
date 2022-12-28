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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus repellat quaerat fugit incidunt. Fugiat quis est iure nostrum beatae quia. Commodi ducimus saepe veniam optio ratione quibusdam odit voluptas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, corporis. Quidem unde repellat nesciunt voluptatum nobis mollitia aut atque maxime, repellendus impedit saepe ut quos asperiores iure amet fugiat praesentium!</p>
             <button  className='Adopt'> 
                <NavLink to="NewForm" className="navlink"style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Adopt</NavLink></button>
    <button className='btngive' > 
             <NavLink to="GiveAway" className="navlink"style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>What all page do we have</NavLink></button>
               </div>
                <div className='img'>
                <img src="https://images.news18.com/ibnlive/uploads/2022/04/pets-16496404503x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" alt="pet" />
                </div>
           </div>
           <div className="thirdsection">
            <h1>We do take in pets if you can't take care of them</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt beatae pariatur, fuga dolore adipisci ducimus explicabo velit sequi! Dignissimos, adipisci? Libero hic sit magnam magni, quas exercitationem ad explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eveniet quas. Reiciendis exercitationem repellendus aliquam! Iure repudiandae voluptas nobis quia nisi fugiat eius. Aliquid, accusantium! Autem distinctio ea enim at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, corporis. Quidem unde repellat nesciunt voluptatum nobis mollitia aut atque maxime, repellendus impedit saepe ut quos asperiores iure amet fugiat praesentium!</p>

            </div> 
           <div className="secondsection">
                <div className='img'>
                <img src="https://images.news18.com/ibnlive/uploads/2022/04/pets-16496404503x2.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal" alt="pet" />
                </div>
           <div className="secondreadpage">
            <h1>Welcome in the web</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt beatae pariatur, fuga dolore adipisci ducimus explicabo velit sequi! Dignissimos, adipisci? Libero hic sit magnam magni, quas exercitationem ad explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, eveniet quas. Reiciendis exercitationem repellendus aliquam! Iure repudiandae voluptas nobis quia nisi fugiat eius. Aliquid, accusantium! Autem distinctio ea enim at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, corporis. Quidem unde repellat nesciunt voluptatum nobis mollitia aut atque maxime, repellendus impedit saepe ut quos asperiores iure amet fugiat praesentium!</p>
            <button  className='Adopt'> 
             <NavLink to="NewForm2" className="navlink"style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>Give away</NavLink></button>
           </div>
           </div> 
           
                  
        </div>
    );
}

export default Main;
