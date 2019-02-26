import React from 'react';
import style from "./TodoList.module.css";
import NoteItem from "./../NoteItem/NoteItem.js";
import {addNoteActionCreator, addNewTextActionCreator} from "../../redux/TodoListReducer";
import NewNoteItem from "../NewNoteItem/NewNoteItem";


let TodoList = (props) => {
    let state = props.state;
    let textareaElement = React.createRef();

    let changeTextarea = () => {
        let text = textareaElement.current.value;
        props.store.dispatch(addNewTextActionCreator(text));
    };

    let addNoteElement = (e) => {
        e.preventDefault();
        props.store.dispatch(addNoteActionCreator());

    };

    return (
        <div>
            <form className={style.form}>
                <textarea placeholder="Ваша заметка" className={style.field} ref={textareaElement}
                          rows="3" onChange={changeTextarea} value={state.newText} />
                <button type="button" className={style.button} onClick={addNoteElement}>Закрепить</button>
            </form>
            <div className={style.notesBlock}>

                <div className={style.notesList}>
                    Мои задачи:
                    {
                        state.notes.map((element) => {
                                return <NoteItem text={element.text} key={element.id} id={element.id} store={props.store}/>

                        })
                    }
                </div>
                <div className={style.list}>
                    Выполнено:
                    {
                        state.newNotesArr.map((element) => {
                            return <NewNoteItem text={element.text} key={element.id} id={element.id} store={props.store}/>
                        })
                    }
                </div>
            </div>
        </div>

    )
};

export default TodoList;
