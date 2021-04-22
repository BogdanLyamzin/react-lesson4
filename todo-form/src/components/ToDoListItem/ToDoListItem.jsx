import React from "react";

import styles from "./ToDoListItem.module.css";

const ToDoListItem = ({name, isRead, onClick})=>{
    return (
        <li onClick={onClick} className={isRead ? styles.done : ""}>
            {name}
            <input type="checkox"/>
            <span>X</span>
        </li>
    )
}

export default ToDoListItem;