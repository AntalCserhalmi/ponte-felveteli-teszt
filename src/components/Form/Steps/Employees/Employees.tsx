import { useState, MouseEvent, ChangeEvent, useEffect } from "react";
import type { FormData, SetFormData } from "../../Form";
import Aux from "../../../../hoc/AAux";
import classes from "./Employees.module.css";

const Employees = (props: {formData: FormData, setFormData: SetFormData}) => {

    const [ employeeName, setEmployeeName ] = useState<string>("");
    const [ employeePosition, setEmployeePosition ] = useState<string>("");

    const [ errorMessageName, setErrorMessageName ] = useState<string>("");
    const [ errorMessagePosition, setErrorMessagePosition ] = useState<string>("");

    const removeEmployeeHandler = (event: MouseEvent) => {
        const employees = props.formData.employees;
        for (let i=0; i < employees.length; i++){
            if (employees[i].name == event.currentTarget.id){
                employees.splice(i, 1);

                props.setFormData({...props.formData, employees: employees, error: employees.length === 0});
                break;
            }
        }
    };

    const addEmployeeHandler = () => {
        const employees = props.formData.employees;

        employees.push({name: employeeName, position: employeePosition});

        props.setFormData({
            ...props.formData, 
            employees: employees,
            error: employees.length === 0
        });
    };

    const handleEmployeeNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        if (name.length <= 0){
            setErrorMessageName("A kolléga neve nem lehet üres!");
            props.setFormData({...props.formData, error: true});
        }else{
            setErrorMessageName("");
            setEmployeeName(name);
        }
    };

    const handleEmployeePositionChange = (event: ChangeEvent<HTMLInputElement>) => {
        const position = event.target.value;
        if (position.length <= 0){
            setErrorMessagePosition("A kolléga pozíciója nem lehet üres!");
            props.setFormData({...props.formData, error: true});
        }else{
            setErrorMessagePosition("");
            setEmployeePosition(position);
            props.setFormData({...props.formData, error: true});
        }
    };

    useEffect(() => {
        if (props.formData.employees.length == 0)
            props.setFormData({...props.formData, error: true});
    }, []);

    return(
        <Aux>
            <div className={classes.employeeList} hidden={props.formData.employees.length === 0}>
                {
                    props.formData.employees.map((employee) => {
                        return(
                            <div className={classes.itemWrapper} key={employee.name}>
                                <div className={classes.listItem}>{employee.name}</div>
                                <div className={classes.listItem}>{employee.position}</div>
                                <div id={employee.name} className={classes.remove} onClick={(e) => removeEmployeeHandler(e)}>X</div>
                            </div>
                        );
                    })
                }

            </div>
            <div className={classes.wrapper}>
                <label className={classes.label} htmlFor="employeeName">Kolléga neve</label>
                <input 
                    className={classes.input} 
                    id="employeeName" 
                    type="text" 
                    placeholder="Kolléga neve"
                    onChange={(e) => handleEmployeeNameChange(e)}
                />
                <span hidden={errorMessageName == ""} className={classes.errorMessage}>{errorMessageName}</span>


                <label className={classes.label} htmlFor="employeePosition">Kolléga beosztása</label>
                <input 
                    className={classes.input} 
                    type="text" 
                    placeholder="Kolléga poziciója"
                    onChange={(e) => handleEmployeePositionChange(e)}
                />
                <span hidden={errorMessagePosition == ""} className={classes.errorMessage}>{errorMessagePosition}</span>

                <button 
                    disabled={employeeName === ""? true: employeePosition === ""? true: false}
                    className={classes.add} 
                    onClick={
                        () => addEmployeeHandler()
                    }
                >Kolléga hozzáadása</button>
            </div>
        </Aux>
    );
};

export default Employees;