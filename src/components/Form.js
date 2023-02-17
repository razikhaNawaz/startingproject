import React, {useState} from 'react';
import classes from './Form.module.css';
import Button from './Button';

const Form=(props)=>{
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredOpeningText, setEnteredOpeningText]=useState('');
    const [enteredReleaseDate, setEnteredReleaseDate] =useState('');

    const addMovieHandler=(event)=>{
        event.preventDefault();
        const newMovieObj={
            'enteredTitle':enteredTitle,
            'enteredOpeningText':enteredOpeningText,
            'relasedate': enteredReleaseDate
        }
        
        console.log(newMovieObj);
        
        setEnteredTitle('');
        setEnteredOpeningText('');
        setEnteredReleaseDate('');
    }

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }

    const OpeningTextChangeHandler=(event)=>{
        setEnteredOpeningText(event.target.value);
    }

    const releaseDateChangeHandler=(event)=>{
        setEnteredReleaseDate(event.target.value);
    }

    return (
        <div className={classes.input}>
        <form onSubmit={addMovieHandler}>
            <label htmlFor='title'>Title</label>
            <input id="title" type="text" value={enteredTitle} onChange={titleChangeHandler} />
            <label htmlFor='opening text'>Opening text</label>
            <input id="opening text" type="text" value={enteredOpeningText} onChange={OpeningTextChangeHandler} />
            <label htmlFor='release date'>Release Date</label>
            <input id="release date" type="date" value={enteredReleaseDate} onChange={releaseDateChangeHandler} />
            <Button type="submit">Add Movie</Button>

        </form>
        </div>
    )
}
export default Form;