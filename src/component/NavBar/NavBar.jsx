import { useDispatch, useSelector } from 'react-redux';
import { darkModeToggle } from '../../redux/countrySlice';
import "./NavBar.css"

function NavBar() {
    const dispatch = useDispatch();
    const darkModeClickHandler = () => dispatch(darkModeToggle());
    const colorSchema = useSelector(state => state.countrySlice.colorSchema);

    return (

        <>
            <nav style={{ backgroundColor: colorSchema.elementBackGround, color: colorSchema.textColor }}>
                <h1>Where in the world?</h1>
                <button onClick={darkModeClickHandler} id="darkModeBtn">Dark Mode</button>
            </nav>
        </>
    );
}

export default NavBar;