import React from "react";

import styles from "./ToDoListItem.module.css";

const ToDoListItem = ({name, isRead, onDelete, onChange})=>{
    return (
        <li  className={isRead ? styles.done : ""}>
            {name}
            <input type="checkbox" checked={isRead ? "checked": ""} onChange={onChange}/>
            <span onClick={onDelete}>X</span>
        </li>
    )
}

export default ToDoListItem;