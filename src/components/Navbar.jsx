import { Location, useLocation } from "react-router-dom";
import SearchContact from "./Contacts/SearchContact";
import { PURPLE } from '../helpers/colors';
const Navbar = () => {
    const Location = useLocation();
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" >
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <div className="navbar-brand">
                            <i className="fas fa-id-badge" style={{ color: PURPLE }} /> {" "}
                            وب اپلیکیشن {" "}
                            <span style={{ color: PURPLE }}> مخاطبین </span>
                        </div>
                    </div>
                    {Location.pathname === '/contacts' ?
                        <SearchContact />
                        :
                        null
                    }
                </div>
            </div>
        </nav>
    )
}
export default Navbar;