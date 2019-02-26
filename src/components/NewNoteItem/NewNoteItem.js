import React from 'react';
import style from "./NewNoteItem.module.css";
import {deleteNewNoteActionCreator} from "../../redux/TodoListReducer";

let NewNoteItem = (props) => {
    return (
        <div className={style.item}>
            <p className={style.text}>{props.text}</p>
            <button type="button" className={style.buttonDelete} onClick={() => {props.store.dispatch(deleteNewNoteActionCreator(props.id))}}>Удалить</button>
        </div>
    )
};

export default NewNoteItem;