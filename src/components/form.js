import React, { useState } from 'react'
import style from './form.module.css';

export default function Form({todos,setTodods}) {
    const [title, setTitle] = useState('');

    const handleTitle = (e) => {
        setTitle(e);
    }

    const handleSubmit = (e) => {
        let id = Math.random().toString(36).slice(2);
        const status = 'incomplete';
        setTodods([
            ...todos,
            {
                id,
                title,
                status
            }
        ]);
    }

    return (
        <div>
            <input className={style.input} type="text" value={title} onChange={(e)=>handleTitle(e.target.value)} />
            <button className={style.btn} type="button" onClick={handleSubmit}>
                Add todo
            </button>
        </div>
    )
}
