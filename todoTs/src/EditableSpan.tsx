import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@material-ui/core";

type editableSpanPropsType = {
    title: string
    getNewTitle:(title:string)=>void
  }

function EditableSpan(props: editableSpanPropsType) {


    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState(props.title)

    const onEditMode = () => {
        setEditMode(true)}

    const offEditMode=()=> {
        setEditMode(false)
        if (title.trim()) {
            props.getNewTitle(title)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
     }

    return (

        <span onDoubleClick={onEditMode}>

            {editMode
                ?    <TextField
                    onChange={onChangeHandler}
                    autoFocus={true}
                    value={title}
                      />


                // ? <input onBlur={offEditMode}
                //          onChange={onChangeHandler}
                //          autoFocus={true}
                //          value={title}/>
                : props.title}

        </span>
    )
}

export default EditableSpan
