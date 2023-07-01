import { useContext } from "react";
import Header from "./Header";
import { ThemeContext } from "../ThemeContext";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`${darkMode ? "bg-black" : "bg-base-100"}`}>
            <Header></Header>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;