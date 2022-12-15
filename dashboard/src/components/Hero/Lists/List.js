import "./list.css"

const List = () => {
    const data = [
		{
			name: "Resolved",
			text: 449,
		},
		{
            name: "Received",
			text: '426',
		},
        {
            name: "Average first response time",
			text: '33m',
		},
        {
            name: "Average response time",
			text: '3h 8m',
		},
        {
            name: "Resolution within SLA",
			text: '94%',
		},
	];

    return (
        data.map(item => (
            <li className="text-center item">
                <div className="list-item">
                <p className="text-name">{item.name}</p>
                <h3>{item.text}</h3>
                </div>

            </li>
        ))
    )
};

export default List;