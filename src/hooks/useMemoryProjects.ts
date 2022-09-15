import { useCallback } from "react";
type Employee = {
    name: string;
    position: string;
}

export type Project = {
    id?: string;
    title: string;
    description: string;
    employees: Array<Employee>;
    links: Array<string>;
}

export const projects: Array<Project> = [
    {
        id: "1",
        title: "Ponte.hu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employees: [{name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}],
        links: ["https://google.com", "https://google.com", "https://google.com", "https://google.com", "https://google.com", "https://google.com"]
    },
    {
        id: "2",
        title: "Google.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employees: [{name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}],
        links: ["https://google.com", "https://google.com", "https://google.com", "https://google.com", "https://google.com", "https://google.com"]
    },
    {
        id: "3",
        title: "React.js",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employees: [{name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}, {name: "Kovács Pista", position: "Takarító"}],
        links: ["https://google.com", "https://google.com", "https://google.com", "https://google.com", "https://google.com", "https://google.com"]
    },
];

export const useMemoryProjects = () => {

    const fetchProjects = useCallback(async () => {
        return projects;
    }, [projects]);

    const fetchProjectById = useCallback(async (id: string) => {
        return projects.filter(project => project.id === id)[0];
    }, [projects]);

    const uploadProject = useCallback(async (data: Project) => {

        const id = String(projects.length + 1);
        const saveObj = {
            id: id,
            title: data.title,
            description: data.description,
            employees: data.employees,
            links: data.links
        };

        projects.push(saveObj);


        return saveObj;
    }, []);

    return {fetchProjects, fetchProjectById, uploadProject};
};