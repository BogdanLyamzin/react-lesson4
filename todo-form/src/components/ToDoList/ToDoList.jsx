import React, {Component} from "react";

import ToDoListItem from "../ToDoListItem";

import styles from "./ToDoList.module.css";

class ToDoList extends Component {

    state = {
        list: [
            {
                id: "1",
                name: "Курс по Реакту Репеты",
                isRead: false
            },
            {
                id: "2",
                name: "Курс по Vue.js Минина",
                isRead: false
            },
            {
                id: "3",
                name: "Курс по Angular Богдана",
                isRead: true
            },
        ]
    }

    handleClick = (idx)=>{
        this.setState(({list})=>{
            const newList = list.map(item => ({...item}));
            const {isRead} = newList[idx];
            newList[idx].isRead = !isRead;
            return {
                list: newList
            }
        })
    }

    render() {
        const {title} = this.props;
        const {list} = this.state;
        const {handleClick} = this;

        const caseElements = list.map(({id, ...props}, idx) => {
            return <ToDoListItem key={id} {...props} onClick={()=>handleClick(idx)} />
        });

        const doneNumber = list.filter(({isRead}) => isRead).length;

        return (
            <>
            <h2>{title}</h2>
                <form action="">
                    <label htmlFor="">Новое дело</label>
                    <input type="text" placeholder="введите дело"/>
                    <button type="submit">Добавить</button>
                </form>
            <p>Количество сделанных дел: {doneNumber}</p>
            <ul>
                {caseElements}
            </ul>
            </>
        )
    }
}

export default ToDoList;