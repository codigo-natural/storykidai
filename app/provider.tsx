import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <NextUIProvider>
        {children}
        <ToastContainer />
      </NextUIProvider>
    </ClerkProvider>
  )
}

export default Provider

