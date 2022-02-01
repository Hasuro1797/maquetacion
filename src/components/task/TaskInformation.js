import "./task.css";
const TaskInformation = ({ orderNumber, name, progress, days }) => {
	return (
		<div className="item-task-container">
			<span>{`Order #${orderNumber}`}</span>
			<span className="name-task">{name}</span>
			<div className="progress-item">
				<span>Progress</span>
				<span className="number-percentage">{`${progress}%`}</span>
			</div>
			<div className="skill-progress">
				<div className="progress-style">
					<div
						className="inner-progress"
						style={{ width: `${progress}%` }}
					></div>
				</div>
			</div>
			<div className="time-container">
				<span>{days === 1 ? `${days} day left` : `${days} days left`}</span>
			</div>
		</div>
	);
};

export default TaskInformation;
