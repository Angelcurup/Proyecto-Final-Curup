import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDy4NwtM4pYT_RK_MCq6841YwfhsQNE6lo",
  authDomain: "e-commerce-49905.firebaseapp.com",
  projectId: "e-commerce-49905",
  storageBucket: "e-commerce-49905.appspot.com",
  messagingSenderId: "796359315630",
  appId: "1:796359315630:web:0f0d0b2cc85b35fb14dd3f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
