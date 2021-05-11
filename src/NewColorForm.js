import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import './NewColorForm.css'

const NewColorForm = ({ createColor }) => {

    const [formData, setFormData] = useState({name: "", hex:"#ffffff"})
    const history = useHistory()
    // Handle state changes
    const handleChange = (e) => {
        e.persist()
        setFormData(formData => ({...formData, [e.target.name]: e.target.value}))
    }
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.name || !formData.hex) {
            alert("You must select a color and enter a name for it!");
            return
        }
        createColor({ [formData.name]: formData.hex });
        history.push("/colors")

    }

    const { name, hex } = formData

    return (
        <div 
            className="NewColorForm-div"
            style={{ 
                backgroundImage: "url(" + "https://images.unsplash.com/photo-1618232527887-99eff712a8bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" + ")"
            }}>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="hex">Select Color</label>
                    <input
                        className="NewColorForm-hex-input"
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={hex}
                    />
                </div>
                <div>
                <label htmlFor="name">Color Name:</label>
                    <input
                        className="NewColorForm-name-input"
                        name="name"
                        id="name"
                        placeholder="Enter color name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <button className="NewColorForm-btn">Forge!</button>
            </form>

            <br />
            <h3><Link to="/colors">Go back</Link></h3>
        </div>
    )
}

export default NewColorForm;