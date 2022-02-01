import "./itemStatistic.css";
const ItemStatistic = ({ icon, amount, title }) => {
	return (
		<div className="statistic-item-container">
			<div className="icon-statistic-container">
				<img src={icon} alt={title} />
			</div>
			<div>
				<span className="amount-statistic">{amount}</span>
				<span className="title-statistic">{title}</span>
			</div>
		</div>
	);
};

export default ItemStatistic;
