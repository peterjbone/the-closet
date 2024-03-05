"use client";

import "animate.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import validation from "../utils/validation.js";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import PacmanLoader from "react-spinners/PacmanLoader";

function RegisterPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: ""
	});

	const [errors, setErrors] = useState({
		name: "Ingrese su nombre.",
		email: "Ingrese su correo.",
		password: "Ingrese su contraseña"
	});

	//? Agarrandome el cambio de los inputs y validando inputs
	function handleChange(event) {
		setIsLoading(false);
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

	//? Registro y Login con CREDENCIALES
	async function handleSubmitCrendentials(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		setIsLoading(true);

		try {
			const signupResponse = await axios.post("/api/auth/signup", {
				name: formData.get("name"),
				email: formData.get("email"),
				password: formData.get("password")
			});
			console.log("BACKEND SIGNUP RESPONSE - CREDENTIALS");
			console.log(signupResponse);

			const loginResponse = await signIn("credentials", {
				email: signupResponse.data.email,
				password: formData.get("password"),
				redirect: false
			});
			console.log("NEXTAUTH SIGNIN RESPONSE - CREDENTIALS");
			console.log(loginResponse);

			if (loginResponse.ok) {
				toast.promise(
					new Promise((resolve) => setTimeout(() => resolve(true), 2000)),
					{
						loading: "Creando cuenta...",
						success: (
							<b className="text-center text-lg">
								Cuenta creada y sesión iniciada con éxito.
							</b>
						),
						error: <b>Algo salió mal.</b>
					},
					{
						success: {
							style: {
								border: "3px solid #0f0",
								padding: "1rem"
							}
						},
						error: {
							style: {
								border: "2px solid #f00",
								padding: "1rem"
							}
						}
					}
				);
				router.push("/");
				return loginResponse.ok; //para que no ejecute más codigo
			}

			//* Entra a este error cuando el email ya existe.
		} catch (error) {
			setIsLoading(false);

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

	//? Registro y login con GOOGLE
	async function handleSubmitGoogle() {
		try {
			await signIn("google");

			//* Entra por algún error interno de NextAuth o Google
		} catch (error) {
			console.log(error);
		}
	}

	/* prettier-ignore */
	return (
		<div className="h-[100vh] flex flex-row items-center justify-center">
			<form
				onSubmit={handleSubmitCrendentials}
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
					id="name"
					type="text"
					name="name"
					value={userData.name}
					placeholder="John Doe"
					onChange={handleChange}
					className="bg-zinc-800 px-4 py-2 block"
				/>
				<p className="text-center text-xl text-[#fa0] font-bold -mt-4">
					{errors.name && errors.name}
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
				<p className="text-center text-xl text-[#fa0] font-bold -mt-4">
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
				<p className="text-center text-xl text-[#fa0] font-bold -mt-4">
					{errors.password && errors.password}
				</p>
				{/* Boton de Signup con credenciales */}
				<button
					type="submit"
					disabled={
						!errors.name && !errors.email && !errors.password ? false : true
					}
					className={`
          bg-indigo-600
            px-4
            py-2
            w-[50%]
            min-w-[200px]
            mx-auto
            transition
            disabled:grayscale
            hover:brightness-75
            disabled:hover:brightness-100
            hover:cursor-pointer
            disabled:hover:cursor-default
            ${isLoading ? "brightness-150" : ""}
            ${isLoading ? "hover:brightness-150" : ""}
            ${isLoading ? "hover:cursor-default" : ""}
          `}>
					{isLoading ? (
						<PacmanLoader
							color="#36d7b7"
							size={15}
							speedMultiplier={2}
							loading={isLoading}
							cssOverride={{
								display: "block",
								margin: "0 auto",
								transform: "translateX(-50%)"
							}}
						/>
					) : (
						"Registrarse"
					)}
				</button>
				<hr className="border-white" />
				{/* Boton de Signup con Google */}
				<button
					onClick={handleSubmitGoogle}
					className="
           px-6
           py-4
         bg-white
         text-black
           rounded-lg
           w-full
           relative
           hover:opacity-80">
					<FcGoogle size={24} className="absolute top-5 left-4" />
					Registrarse con Google
				</button>
				{/* Redirección a Login si ya tiene cuenta */}
				<div className="text-center text-neutral-100">
					<div className="flex flex-row items-center justify-center gap-2">
						<p>Ya tienes una cuenta?</p>
						<div
							className="
            text-neutral-800 
            cursor-pointer 
            hover:underline 
            ">
							<Link href={"/login"}>Iniciar sesión</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default RegisterPage;
