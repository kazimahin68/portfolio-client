import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Skills from "./SKills";
import Projects from "./Projects";
import { Helmet } from "react-helmet";
import AboutMe from "./AboutMe";

const Home = () => {
    // const { darkMode } = useContext(ThemeContext);
    return (
        <div>
            <Helmet>
                <title>Home || Kazi Modasser Hossain</title>
            </Helmet>
            <Header></Header>
            <About>
            </About>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;