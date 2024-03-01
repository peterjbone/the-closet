"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import "animate.css";

function RegisterPage() {
	const [error, setError] = useState();

	async function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		try {
			const res = await axios.post("/api/auth/signup", {
				fullname: formData.get("fullname"),
				email: formData.get("email"),
				password: formData.get("password")
			});
			console.log(res);
		} catch (error) {
			console.log(error);

			//toast.error(error.response.data.message);

			setError(error.response.data.message);
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
					type="email"
					placeholder="pablito@gmail.com"
					name="email"
          className={`
          bg-zinc-800 
            px-4 
            py-2 
            block
            animate__animated
            ${error ? "animate__shakeX" : null}
            ${error ? "border-red-600 border-[5px]" : null}
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
