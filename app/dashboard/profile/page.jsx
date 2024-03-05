"use client";

import { useSession } from "next-auth/react";

function ProfilePage() {
	const { data: session } = useSession();
	console.log("session", session);

	return (
		<div className="flex flex-col items-center justify-center h-[50vh] my-20">
			<h1 className="text-3xl text-center font-bold">Profile</h1>

			<pre className="text-xl bg-slate-800 text-white font-semibold">
				{JSON.stringify(
					{
						session,
						status
					},
					null,
					2
				)}
			</pre>
		</div>
	);
}

export default ProfilePage;
