import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./NewGoalForm.module.css";

const NewGoalForm = (props) => {
  const [newGoal, setNewGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const setGoalHandler = (event) => {
    if (event.target.value.trim().length <= 0) {
      setIsValid(false);
    }
    setNewGoal(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (newGoal.trim().length <= 0) {
      setIsValid(false);
      return;
    } else {
      const goal = {
        id: Math.random(),
        description: newGoal,
      };
      props.addGoal(goal);
      setIsValid(true);
      setNewGoal("");
    }
  };

  return (
    <Card className={styles["add-goal-form-wrapper"]}>
      <form onSubmit={SubmitHandler} className={styles["add-goal-form"]}>
        <label>Goal</label>
        <input
          type="text"
          style={{
            borderColor: !isValid ? "red" : "rgb(191, 185, 185)",
            backgroundColor: !isValid ? "#eacccc" : "transparent",
          }}
          onChange={setGoalHandler}
          value={newGoal}
        ></input>
        <Button type="submit">Add Goal</Button>
      </form>
    </Card>
  );
};

export default NewGoalForm;
