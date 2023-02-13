import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function BookLayout() {
	const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
	const number = searchParams.get("n");
	return (
		<>
			<Link to="/books/1">Book 1</Link>
			<br />
			<Link to="/books/2">Book 2</Link>
			<br />
			<Link to={`/books/${number}`}>Book {number}</Link>
			<br />
			<Link to="/books/new">New Book</Link>
			<Outlet context={{ message: "Hello!" }} />
			<input
				type="number"
				value={number}
				onChange={(e) => setSearchParams({ n: e.target.value })}
			/>
		</>
	);
}

export default BookLayout;
