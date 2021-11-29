import {
    Footer,
    Blog,
    Possibility,
    Header,
    Features,
    About,
} from "./containers";
import { Navbar, Brand, CTA } from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="bg__gradient">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Features />
            <About />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
