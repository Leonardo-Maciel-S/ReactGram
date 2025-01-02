import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { login, reset } from "../../slices/authSlice";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.auth);

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = {
			email,
			password,
		};

		dispatch(login(user));
	};

	// Clear all auth state
	useEffect(() => {
		dispatch(reset());
	}, [dispatch]);

	return (
		<div id="login">
			<h2>ReactGram</h2>
			<p className="subtitle">Faça o login para ver o que há de novo.</p>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={email || ""}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					type="password"
					value={password || ""}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Senha"
				/>

				{!loading && <input type="submit" value="Entrar" />}
				{loading && <input type="submit" value="aguarde..." disabled />}
				{error && <Message msg={error} type="error" />}
			</form>

			<p>
				Não tem um conta? <Link to="/register">Clique aqui</Link>
			</p>
		</div>
	);
};

export default Login;
