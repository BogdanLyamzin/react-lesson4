import {Component} from "react";

import ToDoListItem from "../ToDoListItem";

import styles from "./ToDoList.module.css";

import {initialState} from "./initialState";
class ToDoList extends Component {

    state = {...initialState}

    onDeleteCase = (idx)=>{
        this.setState(({list})=>{
            const newList = [...list];
            newList.splice(idx, 1);
            // const result = newList.filter((_, index)=> index !== idx);
            return {
                list: newList
            }
        });
    }

    handleChange = ({target}) => {
        this.setState({
            caseValue: target.value
        });
    }

   onCaseDone = (idx)=>{
        this.setState(({list})=>{
            const newList = list.map(item => ({...item}));
            const {isRead} = newList[idx];
            newList[idx].isRead = !isRead;
            return {
                list: newList
            }
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();

        this.setState(({list, caseValue})=> {
            const newList = [...list];
            const newCase = {
                id: "6",
                name: caseValue,
                isRead: false
            };
            newList.push(newCase);

            return {
                list: newList
            }
        });

        this.resetForm();
    }

    resetForm(){
        this.setState({
            caseValue: ""
        })
    }



    render() {
        const {title} = this.props;
        const {list, caseValue} = this.state;
        const {onCaseDone, onDeleteCase, handleChange, onSubmit} = this;

        const caseElements = list.map(({id, ...props}, idx) => {
            props = {...props, 
                onDelete: ()=>onDeleteCase(idx),
                onChange: ()=>onCaseDone(idx)
            };
            return <ToDoListItem key={id} {...props} />
        });

        const doneNumber = list.filter(({isRead}) => isRead).length;

        return (
            <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Новое дело</label>
                <input onChange={handleChange} value={caseValue} type="text" placeholder="введите дело"/>
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