import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Overview from "./components/Overview";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="app-container"
      style={{
        background:
          "linear-gradient(to right, #26453E, #008080, #0D98BA, #f5f5dc)",
      }}
    >
      <Navbar />
      <Header />
      <Main />
      <Problem />
      <Solution />
      <Overview />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
