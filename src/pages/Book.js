import { useOutletContext, useParams } from "react-router-dom";

function Book() {
	const { id } = useParams();
	const obj = useOutletContext();
	return (
		<h1>
			Book {id} {obj.message}
		</h1>
	);
}

export default Book;
