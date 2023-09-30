/* eslint-disable react/prop-types */
import './input.css';

const Toggle = ({ name, handleChange, checked }) => {
    return (
        <label className="switch">
            <input 
                type="checkbox" 
                name={name} 
                onChange={handleChange}
                checked={checked} 
            />
            <span className="slider round"></span>
        </label>
    );
}
 
export default Toggle;