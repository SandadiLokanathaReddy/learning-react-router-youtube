import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/", { state: "Error, page not found" });
		}, 1000);
	}, []);

	return <h1>Not Found</h1>;
}

export default NotFound;
