import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

// As we wrapped the Ingredients addIngredientHandler function in useCallback
// It doesn't change and it gets passed to IngredientForm via props
// and React.memo detects that the new function has not changed when the component rebuilds
// and therefore doesn't rebuild the IngredientForm component
const IngredientForm = React.memo((props) => {
  // const [inputState, setInputState] = useState({
  //   title: "",
  //   amount: "",
  // });

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  console.log("RENDERING INGREDIENT FORM");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({
      title: enteredTitle,
      amount: enteredAmount,
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={(event) => {
                // const newTitle = event.target.value;
                // setInputState((prevInputState) => ({
                //   title: newTitle,
                //   amount: prevInputState.amount,
                // }));
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={(event) => {
                setEnteredAmount(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
