import Home from "../components/Home/Home";
import About from "../components/About/About";

export const routes = [
    {
        page: "Home",
        path: "/",
        component: <Home />
    },
    {
        page: "About",
        path: "about",
        component: <About />
    }
];