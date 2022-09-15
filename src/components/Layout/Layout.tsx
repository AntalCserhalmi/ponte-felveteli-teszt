import { useEffect, useState, ChangeEvent } from "react";
import Aux from "../../hoc/AAux";
import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import ProjectComponent from "../Project/Project";
import { useMemoryProjects, Project } from "../../hooks/useMemoryProjects";

const Layout = (props: { active?: string; }): JSX.Element => {

    if (!props.active)
        props.active = "home";

    let content = <></>;
    const { fetchProjects } = useMemoryProjects();
    const [inmutableProjects, setInmutableProjects] = useState<Array<Project>>([]);
    const [projects, setProjects] = useState<Array<Project>>([]);

    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const parameter = event.target.value;

        if (parameter.length === 0) {
            setProjects(inmutableProjects);
        } else {
            setProjects(inmutableProjects.filter(project => {
                return project.title.toLowerCase().includes(parameter.toLowerCase());
            }));
        }
    };

    useEffect(() => {
        fetchProjects().then(mockData => {
            setInmutableProjects(mockData);
            setProjects(mockData);
        }).catch(err => console.log(err));
    }, [inmutableProjects]);


    switch (props.active) {
        case "home": {
            content = (
                <Aux>
                    <Navbar active={props.active} searchHandler={(e: ChangeEvent<HTMLInputElement>) => searchHandler(e)}/>
                    <Cards projects={projects} />
                </Aux>
            );
            break;
        }

        case "newProject": {
            content = (
                <Aux>
                    <Navbar active={props.active} searchHandler={(e: ChangeEvent<HTMLInputElement>) => searchHandler(e)}/>
                    <Form />
                </Aux>
            );

            break;
        }

        case "project":{
            content = (
                <Aux>
                    <Navbar active={props.active} searchHandler={(e: ChangeEvent<HTMLInputElement>) => searchHandler(e)} />
                    <ProjectComponent />
                </Aux>
            );
        }
    }

    return content;
};


export default Layout;