import React from 'react'
import { Link } from 'react-router-dom'
import './ColorPage.css'


function ColorPage({hex, color, history}) {
    if(!hex){
        history.push("/")
    }
    return (
        <div className="ColorPage" style={{ backgroundColor: hex}}>
            <h1>You forged {color}</h1>
            <h1>Good job, Colorsmith!</h1>
            <h1>
                <Link to="/">Return to the Forge!</Link>
            </h1>
        </div>
    )
}

export default ColorPage;