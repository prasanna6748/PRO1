import React from "react";
import wolf1 from './components/head.js/WfC.png';
import wolf2 from './components/head.js/wolf 2.png';
import './card.css'

let Main=()=>{
    return(

        <div className="main">
    <h1 className="card-title">Anime Gallery</h1>
    <div className="card">
    <div className="column"> 
    
        <img src={wolf1} className="card-image" alt=""></img>
        

        <p>Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace.</p>
        <button className="btn">read more</button>
       </div>
       <div className="column"> 
        <img src={wolf2}  className="card-image" alt=""></img>
       
        <p>Monkey D. Luffy, also known as "Straw Hat" Luffy, is a fictional character and the protagonist in the Japanese manga series One Piece created by Eiichiro Oda. Luffy made his debut as a young boy who acquires the properties of rubber after accidentally eating one of the Devil Fruits that belonged to "Red Hair" Shanks</p>
        <button className="btn">read more</button>
    </div>

</div>



    </div>
    
    )
}
export default Main