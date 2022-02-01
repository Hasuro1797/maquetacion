import "./App.css";
import backArrow from "./assets/icons/back.svg";
import campaign from "./assets/icons/noun_notification_3350881.svg";
import group from "./assets/icons/Group 2.svg";
import arrowDown from "./assets/icons/Path.svg";
import TaskInformation from "./components/task/TaskInformation";
import tasks from "./helpers/taskJson.json";
import ItemStatistic from "./components/statistic/ItemStatistic";
import totalIcon from "./assets/icons/menu.svg";
import flashIcon from "./assets/icons/flash.svg";
import checkIcon from "./assets/icons/checked.svg";
import clockIcon from "./assets/icons/noun_clock_3244697.svg";
import indicate from "./assets/icons/indicator.png";
import graph from "./assets/icons/Path 8.png";

function App() {
	return (
		<>
			<header className="nav-bar">
				<img src={backArrow} alt="backarrow" />
				<p>Tasks</p>
				<img src={campaign} alt="notification" />
			</header>
			<div className="create-container">
				<span>CREATE +</span>
			</div>
			<div className="options-container">
				<div className="option-active">
					<span>All</span>
				</div>
				<div>
					<span>In Progress</span>
				</div>
				<div>
					<span>Started</span>
				</div>
				<div>
					<span>Completed</span>
				</div>
			</div>
			<div className="state-task-container">
				<p>Upcoming Tasks</p>
				<p className="tasks-numbers">5</p>
			</div>
			<div className="orders-container">
				{tasks.map((task, index) => (
					<TaskInformation
						key={index}
						orderNumber={task.number}
						name={task.name}
						progress={task.progress}
						days={task.days}
					/>
				))}
			</div>
			<div className="statistic-container">
				<div className="statistic-title">
					<span>Statistics</span>
					<div className="icons-container">
						<div className="group-container">
							<img src={group} alt="group" />
						</div>
						<div className="arrowDown-container">
							<img src={arrowDown} alt="arrowDown" />
						</div>
					</div>
				</div>
				<div className="menu-statistic">
					<div className="statistic-results">
						<ItemStatistic
							icon={totalIcon}
							amount={"50"}
							title={"Total projects"}
						/>
						<ItemStatistic icon={checkIcon} amount={"15"} title={"Completed"} />
						<ItemStatistic
							icon={flashIcon}
							amount={"10"}
							title={"In Progress"}
						/>
						<ItemStatistic icon={clockIcon} amount={"2"} title={"Delayed"} />
					</div>
				</div>
			</div>
			<div className="menu-graph">
				<div className="graph-container">
					<div className="options-graph-container">
						<div>
							<span>Day</span>
						</div>
						<div>
							<span>Week</span>
						</div>
						<div className="option-graph-active">
							<span>Month</span>
						</div>
						<div>
							<span>Year</span>
						</div>
					</div>
					<div className="amount-graph">
						<span>$</span>
						<h2>13,543</h2>
					</div>
					<div className="graph-img">
						<img src={graph} alt="graph" />
					</div>
					<div className="months-list">
						<div>
							<span>Jun</span>
						</div>
						<div>
							<span>Jul</span>
						</div>
						<div>
							<span>Aug</span>
						</div>
						<div>
							<span>Sep</span>
						</div>
						<div>
							<span>Oct</span>
						</div>
						<div>
							<span>Nov</span>
						</div>
					</div>
				</div>
			</div>
			<div className="indicator-container">
				<img src={indicate} alt="indicate" />
			</div>
		</>
	);
}

export default App;
