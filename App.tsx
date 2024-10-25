import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import "./src/styles/global.css";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
