// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
        
      };
      return (
        <>
       
             <div style={myStyle}>
                <h1 >Call A Friend</h1>
                <p>Your Freindly contact App</p>
            </div>
          
        </>
      );

}

export default Header;