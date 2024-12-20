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
		reset,
	} = useForm();

	const handleSubmitForm = (data) => {
		console.log(user);
		reset();
	};

	return (
		<div id="register">
			<h2>ReactGram</h2>
			<p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>

			<form onSubmit={handleSubmit(handleSubmitForm)}>
				<input
					type="text"
					placeholder="Nome"
					name="name"
					{...register("name")}
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					{...register("email")}
				/>
				<input
					type="password"
					placeholder="Senha"
					name="password"
					autoComplete="on"
					{...register("password")}
				/>
				<input
					type="password"
					placeholder="Confirme sua senha"
					name="confirmPassword"
					autoComplete="on"
					{...register("confirmPassword")}
				/>
				<input type="submit" value="Cadastrar" />
			</form>

			<p>
				Já tem conta? <Link to="/login">Clique aqui</Link>
			</p>
		</div>
	);
};

export default Register;
