import classes from "./Links.module.css";
import type { FormData, SetFormData } from "../../Form";
import { MouseEvent, useState } from "react";
import Aux from "../../../../hoc/AAux";

const Links = (props: {formData: FormData; setFormData: SetFormData}) => {

    const [ link, setLink ] = useState<string>("");

    const removeLinkHandler = (event: MouseEvent) => {
        const links = props.formData.links;
        for (let i=0; i < links.length; i++){
            if (links[i] === event.currentTarget.id){
                links.splice(i, 1);

                props.setFormData({...props.formData, links: links, error: false});
                break;
            }
        }
    };

    const addLinkHandler = () => {
        const links = props.formData.links;
        links.push(link);

        props.setFormData({
            ...props.formData,
            links: links,
            error: links.length === 0
        });
    };

    return(
        <Aux>
            <div className={classes.linkList} hidden={props.formData.links.length === 0}>
                {
                    props.formData.links.map((link) => {
                        return(
                            <div className={classes.itemWrapper} key={link}>
                                <div className={classes.listItem}>{link}</div>
                                <div id={link} className={classes.remove} onClick={(e) => removeLinkHandler(e)}>X</div>
                            </div>
                        );
                    })
                }
            </div>
            <div className={classes.wrapper}>
                <label className={classes.label} htmlFor="">Link</label>
                <input className={classes.input} type="text" placeholder="Link..." onChange={(e) => setLink(e.target.value)}/>
                <button 
                    className={classes.add}
                    onClick={() => addLinkHandler()}
                    disabled={link === ""}
                >Link hozzáadása</button>
            </div>
        </Aux>
    );
};

export default Links;