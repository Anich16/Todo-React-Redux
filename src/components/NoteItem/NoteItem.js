import React, { Component } from 'react';
import style from "./NoteItem.module.css";
import {deleteNoteActionCreator} from "../../redux/TodoListReducer.js";
import {addNoteToNewArrActionCreator} from "../../redux/TodoListReducer";

let NoteItem = (props) => {
    return (
        <div className={style.item}>
            <p className={style.text}>{props.text}</p>
            <button type="button" className={style.buttonDelete} onClick={() => {props.store.dispatch(deleteNoteActionCreator(props.id))}}>Удалить</button>
            <button type="button" className={style.button} onClick={()=> {props.store.dispatch(addNoteToNewArrActionCreator(props.id))}   }>Выполнено</button>
        </div>
    )
};

export default NoteItem;