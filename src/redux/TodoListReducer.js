let initialState = {
    notes: [
        {
            id: 1,
            text: "Не забыть купить краски"
        },
        {
            id: 2,
            text: "Изучить архитектуру Flux"

        },
        {
            id: 3,
            text: "Понять разницу между презентационной и контейнерной компонентами"
        }
    ],
    newText: "",
    counter: 3
};

let TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            let newNote = {
                id: ++ state.counter,
                text: state.newText,
                visible: true
            };
            if (newNote.text !== "") {
                state.notes.push(newNote);
            }
            state.newText = "";
            return state;
        case "ADD_NEW_TEXT":
            state.newText = action.text;
            return state;
        case "DELETE_NOTE":
            for (let i = 0; i<state.notes.length; i++){
                if (state.notes[i].id === action.id) {
                    state.notes.splice(i, 1);
                }
            }

            return state;
        default:
            return state;
    }
};

export const addNoteActionCreator = () => {
    return {
        type: "ADD_NOTE"
    }
};

export const addNewTextActionCreator = (text) => {
    return {
        type: "ADD_NEW_TEXT",
        text: text
    }
};

export const deleteNoteActionCreator =(id) => {
    return {
        type: "DELETE_NOTE",
        id: id
    }
};

export default TodoListReducer;