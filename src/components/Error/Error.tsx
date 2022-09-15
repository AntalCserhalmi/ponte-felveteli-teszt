import { Link } from "react-router-dom";
import classes from "./Error.module.css";

const Error = ():JSX.Element => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h1 className={classes.title}>Hupsz valami nem sikerült valami jól.</h1>
                <Link to="/" className={classes.homeBtn}>Főoldal</Link>
            </div>
        </div>
    );
};


export default Error;