import "./Auth.css";

//components
import { Link } from "react-router-dom";

//hooks
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleSubmitForm = (data) => {};

	return (
		<div id="register">
			<h2>ReactGram</h2>
			<p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>

			<form onSubmit={handleSubmit(handleSubmitForm)}>
				<input type="text" placeholder="Nome" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Senha" />
				<input type="password" placeholder="Confirme sua senha" />
				<input type="submit" value="Cadastrar" />
			</form>

			<p>
				Já tem conta? <Link to="/login">Clique aqui</Link>
			</p>
		</div>
	);
};

export default Register;
