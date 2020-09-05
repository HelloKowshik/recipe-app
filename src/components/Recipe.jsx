import React from 'react';
import style from '../recipe.module.css';

const Recipe = props => {
    const { label, image, calories, url, source, ingredientLines, ingredients } = props.recipe.recipe;
    return (
        <div className={style.recipe}>
            <h1>Title: {label}</h1>
            <p>Calories: {calories.toFixed(3)} kcal</p>
            <p>Source: <a href={url}>{source}</a></p>
            <h5>Ingredient List: </h5>
            
            {
                ingredientLines.length > 0 ? (ingredientLines.map((items, i) => (<li key={i}>{items}</li>))): ''
            }
            <h5>How To Cook:</h5>
            
            {
                ingredients.length > 0 ? (ingredients.map((item, i) => (<li key={i}>{item.text}</li>))): ''
            }
            <br />
            <img src={image} alt='recipe' />
            <br />
        </div>
    );
};

export default Recipe;