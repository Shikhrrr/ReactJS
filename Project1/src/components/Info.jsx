import React from "react"
// import shikhar from "./assets/shikhar11.jpg"

function Info() {
    return (
        <div className="info">
            <img src='src/assets/shikhar11.jpg' alt="shikhar" className="shikhar"/>
            <h1 className="name">Shikhar Kanaujia</h1>
            <h3 className="job">React Developer</h3>
            <h5 className="website">shikharkan.com</h5>
            <a href=""><button>E-mail</button></a>
            <a href=""><button>Linkedin</button></a>            
        </div>
    )
}

export default Info 