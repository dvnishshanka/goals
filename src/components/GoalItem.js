import "./GoalItem.css";

const GoalItem = (props) => {
  const onDeleteHandler = () => {
    props.deleteGoal(props.goal);
  };
  return (
    <div className="goal-item" onClick={onDeleteHandler}>
      {props.goal.description}
    </div>
  );
};

export default GoalItem;
