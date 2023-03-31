import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { addNewTodo } from "../Redux/actions";


const Form = styled(TextField)`
    width: 70%;
`


const TodoForm = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        // <Form placeholder="Enter new Todo/Task..." onSubmit={onFormSubmit} onChange={onInputChange}>

        // </Form>
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;