import type { Project } from "../../hooks/useMemoryProjects";
import Card from "./Card/Card";
import classes from "./Cards.module.css";



const Cards = (props: {projects: Array<Project>}):JSX.Element => {
    return (
        <div className={classes.cards}>
            <div className={classes.cardsGrid}>
                {
                    props.projects.map(project => {
                        return (<Card title={project.title} description={project.description} key={project.id} projectId={project.id? project.id: ""} />);
                    })
                }
            </div>
        </div>
    );
};


export default Cards;