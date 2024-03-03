"use client";

//import { toast } from "react-hot-toast";
//import "animate.css";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function RegisterPage() {
	const router = useRouter();

	async function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		try {
			const signupResponse = await axios.post("/api/auth/signup", {
				fullname: formData.get("fullname"),
				email: formData.get("email"),
				password: formData.get("password")
			});
			console.log("Respuesta del backkend", signupResponse);

			const res = await signIn("credentials", {
				email: signupResponse.data.email,
				password: formData.get("password"),
				redirect: false
			});

			console.log("Respuesta del signIn de Next Auth", res);

			if (res.ok) return router.push("/");
		} catch (error) {
			console.log(error);
			if (error instanceof AxiosError) {
				setError(error.response.data.message);
			}
		}
	}

	/* prettier-ignore */
	return (
		<div className="h-[80vh] flex flex-row items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="
        bg-slate-400  
        text-xl
        text-white
        p-6
        flex
        flex-col
        gap-4
        w-2/5 h-[400px]">

				<h1 className="text-center text-2xl font-bold">Registro</h1>
				<input
					type="text"
					placeholder="John Doe"
					name="fullname"
          className="
            bg-zinc-800
            px-4
            py-2
            block
            "/>
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
					type="password"
					placeholder="***********"
					name="password"
					className="bg-zinc-800 px-4 py-2 block"
				/>
        <button
          type="submit"
          className="bg-indigo-500 px-4 py-2">
          Registrarse
        </button>
			</form>
		</div>
	);
}

export default RegisterPage;
