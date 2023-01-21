import React from "react";

const HomePage =() => {
    const handleLogout = () =>{
        console.log("logout")
    }
    return (
        <div className="nav">
            <h1>HomePage</h1>;
            <button onClick={handleLogout}>Sair</button>

        </div>
    )

  
};

export default HomePage;