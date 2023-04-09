const Task = (props) => {
	const { id, title, handleClick } = props;
	return (
		<div className='task' key={id}>
			<span>{title}</span>
			<button
				onClick={() => {
					handleClick(id);
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default Task;
