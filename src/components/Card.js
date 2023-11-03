import React from "react";

const Card = ({id,name,email} ) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src= {`https://robohash.org/${id}?size=200x200`} alt="" />
            <div>
                <p>{email}</p>
                <p>{name}</p>
            </div>
        </div>
    );
}

export default Card;