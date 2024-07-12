import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./TheButton.css"

function TheButton({ text, navigateTo }) {
    const navigate = useNavigate();
    const colorSchema = useSelector(state => state.countrySlice.colorSchema);

    const navigateHandler = () => navigate(navigateTo);

    return (
        <button onClick={navigateHandler} id="TheButton" style={{ backgroundColor: colorSchema.elementBackGround, color: colorSchema.textColor }}>
            {text}
        </button>
    );
}

export default TheButton;