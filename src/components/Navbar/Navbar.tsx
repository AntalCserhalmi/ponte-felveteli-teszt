import { Link } from "react-router-dom";
import { ChangeEvent } from "react";
import classes from "./Navbar.module.css";

type NavbarProps = {
    active: string;
    searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Navbar = (props: NavbarProps): JSX.Element => {
    return (
        <div className={classes.navbar}>
            <div className={classes.wrapper}>
                <div className={`${classes.navbarItem} ${props.active === "home"? classes.active : null}`}>
                    <Link to="/">Projektek</Link>
                </div>
                <div className={`${classes.navbarItem} ${props.active === "newProject"? classes.active: null}`}>
                    <Link to="/new">Új feltöltése</Link>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className={classes.searchItem}>
                    {
                        props.active === "home"?
                            <input className={classes.searchInput} placeholder="Kereső" onChange={(e: ChangeEvent<HTMLInputElement>) => props.searchHandler(e)}/>
                            :
                            null
                    }
                    
                </div>
            </div>
        </div>
    );
};


export default Navbar;