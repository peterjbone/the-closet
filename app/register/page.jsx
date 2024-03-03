"use client";

import "animate.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import validation from "../utils/validation.js";

function RegisterPage() {
	const router = useRouter();

	const [userData, setUserData] = useState({
		fullname: "",
		email: "",
		password: ""
	});

	const [errors, setErrors] = useState({
		fullname: "Ingrese su nombre.",
		email: "Ingrese su correo.",
		password: "Ingrese su contraseña"
	});

	//? Agarrandome el cambio de los inputs y validando inputs
	function handleChange(event) {
		const { name, value } = event.target;
		setUserData({
			...userData,
			[name]: value
		});
		setErrors(
			validation({
				...userData,
				[name]: value
			})
		);
	}

	//? Registro y Login para el boton submit
	async function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		try {
			const signupResponse = await axios.post("/api/auth/signup", {
				fullname: formData.get("fullname"),
				email: formData.get("email"),
				password: formData.get("password")
			});
			console.log("Respuesta del backend", signupResponse);

			const loginResponse = await signIn("credentials", {
				email: signupResponse.data.email,
				password: formData.get("password"),
				redirect: false
			});
			console.log("Respuesta del login de Next Auth", loginResponse);

			if (loginResponse.ok) return router.push("/");
		} catch (error) {
			//console.log(error);
			//console.log(error.response.data.message);

			if (document.getElementById("notifyEmail") === null) {
				const messageEmail = document.createElement("div");
				messageEmail.id = "notifyEmail";
				messageEmail.style.display = "none";
				document
					.getElementById("email")
					.insertAdjacentElement("beforebegin", messageEmail);
			}
			const messageEmail = document.getElementById("notifyEmail");
			messageEmail.textContent = error.response.data.message;
			messageEmail.className =
				"border-[5px] border-red-500 bg-red-500 text-white px-4 py-2";
			messageEmail.style.display = "block";

			const emailInput = document.getElementById("email");
			emailInput.classList.add(
				"border-[5px]",
				"border-red-700",
				"animate__animated",
				"animate__shakeX"
			);

			emailInput.addEventListener("input", (e) => {
				if ("block" === messageEmail.style.display) {
					emailInput.classList.remove(
						"border-[5px]",
						"border-red-700",
						"animate__animated",
						"animate__shakeX"
					);
					messageEmail.style.display = "none";
				}
			});
		}
	}

	/* prettier-ignore */
	return (
		<div className="h-[100vh] flex flex-row items-center justify-center">
			<form
				onSubmit={handleSubmit}
				className="
       bg-slate-500 
      text-white
        text-xl
        flex
        flex-col
        justify-center
        gap-4
        w-2/5
        min-w-[400px]
        max-w-[450px]
        py-12
        px-6
        ">
				<h1 className="text-center text-4xl font-bold mb-6">Crea una cuenta</h1>
				<input
					id="fullname"
					type="text"
					name="fullname"
					value={userData.fullname}
					placeholder="John Doe"
					onChange={handleChange}
					className="bg-zinc-800 px-4 py-2 block"
				/>
				<p className="text-center text-2xl text-[#fa0] font-bold -mt-4">
					{errors.fullname && errors.fullname}
				</p>
				<input
					id="email"
					type="email"
					name="email"
					value={userData.email}
					placeholder="john@gmail.com"
					onChange={handleChange}
					className="bg-zinc-800 px-4 py-2 block"
				/>
				<p className="text-center text-2xl text-[#fa0] font-bold -mt-4">
					{errors.email && errors.email}
				</p>
				<input
					id="password"
					type="password"
					name="password"
					value={userData.password}
					placeholder="***********"
					onChange={handleChange}
					className="bg-zinc-800 px-4 py-2 block"
				/>
				<p className="text-center text-2xl text-[#fa0] font-bold -mt-4">
					{errors.password && errors.password}
				</p>
				<button
					type="submit"
					disabled={!errors.fullname && !errors.email && !errors.password ? false : true}
					className={`
          bg-indigo-500
            px-4
            py-2
            transition
            hover:cursor-pointer
            hover:brightness-75
            disabled:brightness-100
            disabled:grayscale
            disabled:cursor-default
          `}>
					Registrarse
				</button>
			</form>
		</div>
	);
}

export default RegisterPage;
