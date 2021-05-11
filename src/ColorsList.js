import React from "react"
import {Link} from "react-router-dom"
import './ColorsList.css'

function ColorsList({ colors, hex }) {

    const links = Object.keys(colors).map(colorName => (
        <span 
        className="ColorsList-list"
        style={{ color: hex }}
        key={colorName}>
            <Link 
                to={`/colors/${colorName}`}
                >
                    {colorName}
            </Link>
        </span>
      ));

    return (
        <div 
        className="ColorsList-div"
        style={{ 
            backgroundImage: "url(" + "https://images.unsplash.com/photo-1618232527887-99eff712a8bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" + ")"
        }}>
            <h1 className="ColorsList-title">Welcome to the color forge!</h1>
            <Link className="ColorsList-forge-new-color" to="/colors/new"><h2>Forge a New Color</h2></Link>
            {links}
        </div>
    )
}

export default ColorsList