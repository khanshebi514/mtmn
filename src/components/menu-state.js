'use client'

import { Provider } from "react-redux";
import Navbar from "./navbar";
import store from "@/store/store";

export default function MenuState() {
  return (
    <>
    <Provider store={store}>
      <Navbar/>
    </Provider>
        
    </>
  )
}
