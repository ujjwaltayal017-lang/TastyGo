import Tailwind from "./Tailwind"
import Home from "./pages/Home"
import React from 'react';
import Features from "./components/Features";

import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      {/* <Tailwind /> */}
      <Home />

      <ToastContainer/>
    </>
  )
}

export default App
