"use client";

import { SessionProvider } from "next-auth/react";

function Providers({ children }) {
	/* prettier-ignore */
	return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Providers;
