import { useNavigate } from "react-router-dom";
import classes from "./Card.module.css";

type CardProps = {
    projectId: string;
    title: string;
    description?: string;
}

const Card = (props: CardProps): JSX.Element => {

    const navigate = useNavigate();

    return(
        <div 
            className={classes.card}
            onClick={() => navigate(`project/${props.projectId}`)}
        >
            <div className={classes.title}>{props.title}</div>
            <div className={classes.wrapper}>
                <div className={classes.description}>{props.description}</div>
                <img className={classes.img} src={`https://placehold.jp/292929/ebebeb/200x200.png?text=${props.title[0]}${props.title[1]}${props.title[2]}`} alt="ProjectImage" />
            </div>
        </div>
    );
};

export default Card;