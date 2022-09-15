import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMemoryProjects, Project as ProjectType } from "../../hooks/useMemoryProjects";
import classes from "./Project.module.css";

const Project = ():JSX.Element => {

    const {projectId} = useParams();
    const { fetchProjectById } = useMemoryProjects();
    const [ project, setProject ] = useState<ProjectType>({
        title: "",
        description: "",
        employees: [],
        links: []
    });


    useEffect(() => {
        if (!projectId)
            return;

        fetchProjectById(projectId).then(project => {
            setProject(project);
        }).catch(err => console.log(err));
    }, []);

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.title}>{project.title}</div>
                <div className={classes.label}>Leírás:</div>
                <div className={classes.description}>{project.description}</div>
                <div className={classes.label}>Dolgozók:</div>
                <div className={classes.list}>
                    {
                        project.employees.map((employee, index) => {
                            return (
                                <div className={classes.listItemWrapper} key={employee.name + index}>
                                    <div className={classes.listItem}>{employee.name}</div>
                                    -
                                    <div className={classes.listItem}>{employee.position}</div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={classes.label}>Linkek:</div>
                <div className={classes.list}>
                    {
                        project.links.map((link, index) => {
                            return(
                                <div className={classes.listItemWrapper} key={link + index}>
                                    <div className={classes.listItem}>
                                        <a href={link} target="_blank">{link}</a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};


export default Project;