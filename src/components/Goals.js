import GoalItem from "./GoalItem";

const Goals = (props) => {
  return (
    <div className="goal-list">
      {props.goals.map((goal) => {
        return (
          <GoalItem goal={goal} key={goal.id} deleteGoal={props.deleteGoals} />
        );
      })}
    </div>
  );
};

export default Goals;
