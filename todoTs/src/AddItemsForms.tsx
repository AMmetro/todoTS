import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {IconButton, TextField} from '@material-ui/core';
import {AddBox} from "@material-ui/icons";


type addItemsPropsType = {
    addItems: (title: string) => void
}


function AddItemsForms(props: addItemsPropsType) {


    let [error, setError] = useState<string | null>("null")
    let [newTaskTitle, setTitle] = useState<string>("")

    const addItems = () => {
        let newTitle = newTaskTitle.trim()
        if (newTitle) {
            props.addItems(newTitle)
        } else {
            setError("name is required")
        }
        setTitle("")
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addItems()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(null)
    }


    return (
        <div>
            <TextField size={"small"}
                       value={newTaskTitle}
                       onKeyPress={onKeyPressHandler}
                       onChange={onChangeHandler}
                       variant={"outlined"}
                       error={!!error}
                       helperText={error}
                       label={"new title"}
            />

            {/*<input*/}
            {/*    value={newTaskTitle}*/}
            {/*    onKeyPress={onKeyPressHandler}*/}
            {/*    onChange={onChangeHandler}*/}
            {/*    className={error ? "error" : ""}*/}
            {/*    // onKeyPress={(e)=>enterPres(e.key)}*/}
            {/*    // onChange={(e)=>setTitle(e.currentTarget.value)}*/}
            {/*/>*/}


            <IconButton
                onClick={() => addItems()}
                color="primary"
            >
                <AddBox/>
            </IconButton>



            

            {/*<button onClick={() => addItems()}>+</button>*/}
            {/*{error ? <div> name is required</div> : ""}*/}

        </div>
    );
}

export default AddItemsForms;
