"use client";

import "animate.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import PacmanLoader from "react-spinners/PacmanLoader";

function LoginPage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	//? Login con credenciales
	async function handleSubmitCredentials(e) {
		e.preventDefault();

		setIsLoading(true);

		//* Referenciando el formulario
		const formData = new FormData(e.currentTarget);

		if (!formData.get("email")) {
			setIsLoading(false);
			return toast.error("Debe ingresar un email");
		}
		if (!formData.get("password")) {
			setIsLoading(false);
			return toast.error("Debe ingresar una contraseña");
		}

		//* Enviando el email y password al signin de credenciales
		const res = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false
		});

		//* Exito del login
		if (res.ok) {
			router.push("/");
			toast.promise(
				new Promise((resolve) => setTimeout(() => resolve(true), 1000)),
				{
					loading: "Validando cuenta...",
					success: <b>Sesión iniciada con éxito.</b>,
					error: <b>Algo salió mal.</b>
				}
			);
			return res.ok; // para que no se ejecute los errores de abajo
		}

		//* Error por email
		if (res.error.includes("Email")) {
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
			messageEmail.textContent = res.error;
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

		//* Error por password
		if (res.error.includes("Contraseña")) {
			setIsLoading(false);

			if (document.getElementById("notifyPassword") === null) {
				const messagePassword = document.createElement("div");
				messagePassword.id = "notifyPassword";
				messagePassword.style.display = "none";
				document
					.getElementById("password")
					.insertAdjacentElement("beforebegin", messagePassword);
			}
			const messagePassword = document.getElementById("notifyPassword");
			messagePassword.textContent = res.error;
			messagePassword.className =
				"border-[5px] border-red-500 bg-red-500 text-white px-4 py-2";
			messagePassword.style.display = "block";

			const passwordInput = document.getElementById("password");
			passwordInput.classList.add(
				"border-[5px]",
				"border-red-700",
				"animate__animated",
				"animate__shakeX"
			);

			passwordInput.addEventListener("input", (e) => {
				if ("block" === messagePassword.style.display) {
					passwordInput.classList.remove(
						"border-[5px]",
						"border-red-700",
						"animate__animated",
						"animate__shakeX"
					);
					messagePassword.style.display = "none";
				}
			});
		}

		//* Mensaje por consola - Errores
		console.log("NEXTAUTH SIGNIN RESPONSE - CREDENTIALS");
		console.log(res);
	}

	//? Login con google
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
				onSubmit={handleSubmitCredentials}
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
				<h1 className="text-center text-4xl font-bold mb-6">
					Entra a tu cuenta
				</h1>

				<input
					id="email"
					type="email"
					placeholder="usuario@gmail.com"
					name="email"
					className="bg-zinc-800 px-4 py-2 block"
				/>
				<input
					id="password"
					type="password"
					placeholder="***********"
					name="password"
					className="bg-zinc-800 px-4 py-2 block"
				/>
				{/* Boton de registro con credenciales */}
				<button
					type="submit"
					disabled={isLoading}
					className={`
          bg-indigo-600
           px-4
           py-2
           w-[50%]
           min-w-[200px]
           mx-auto
           transition
          ${isLoading ? "brightness-150" : "brightness-100"}
          ${isLoading ? "hover:brightness-150" : "hover:brightness-75"}
          ${isLoading ? "hover:cursor-default" : "hover:cursor-pointer"}
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
						"Iniciar sesión"
					)}
				</button>
				<hr className="border-white" />
				{/* Boton de Login con Google */}
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
					Iniciar sesión con Google
				</button>
				{/* Redirección a Registro si no tiene cuenta. */}
				<div className="text-center text-neutral-100">
					<div className="flex flex-row items-center justify-center gap-2">
						<p>Primera vez aquí?</p>
						<div
							className="
            text-neutral-800 
            cursor-pointer 
            hover:underline 
            ">
							<Link href={"/register"}>Registrate</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default LoginPage;
