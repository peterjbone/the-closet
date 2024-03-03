"use client";

import "animate.css";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
	const router = useRouter();

	async function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const res = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false
		});

		//* Exito
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
			return res.ok;
		}

		//* Error por email
		if (res.error.includes("Email")) {
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

		//* Mensaje por consola
		console.log("Respuesta del signIn de Next Auth", res);
	}

	/* prettier-ignore */
	return (
		<div className="h-[100vh] flex flex-row items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="
        bg-slate-400  
        text-xl
        text-white
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
				<h1 className="text-center text-4xl font-bold mb-6">Entra a tu cuenta</h1>
	
        <input
          id="email"
					type="email"
					placeholder="pablito@gmail.com"
					name="email"
          className={`
          bg-zinc-800 
            px-4 
            py-2 
            block
            `}/>
        <input
          id="password"
					type="password"
					placeholder="***********"
					name="password"
					className="bg-zinc-800 px-4 py-2 block"
				/>
        <button
          type="submit"
          className="bg-indigo-500 px-4 py-3 min-w-[200px] w-[50%] mx-auto text-1xl hover:bg-indigo-700 transition">
          Login
        </button>
			</form>
		</div>
	);
}

export default LoginPage;
