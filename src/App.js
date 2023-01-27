import "./App.css";
import Goals from "./components/Goals";
import NewGoalForm from "./components/NewGoalForm";
import React, { useState } from "react";

const DUMMY_GOALS = [
  {
    id: "1",
    description: "Finish the JavaScript Course!",
  },
  {
    id: "2",
    description: "Find a job!",
  },
  {
    id: "3",
    description: "Go to Poland on April for vacation!",
  },
];
function App() {
  const [goals, setGoals] = useState(DUMMY_GOALS);

  const addGoal = (goal) => {
    setGoals((prevState) => [goal, ...prevState]);
  };

  const deleteGoalHandler = (goal) => {
    setGoals((prevState) => {
      const updatedGoals = prevState.filter((item) => item.id !== goal.id);
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <NewGoalForm addGoal={addGoal} />
      <Goals goals={goals} deleteGoals={deleteGoalHandler} />
    </div>
  );
}

export default App;
