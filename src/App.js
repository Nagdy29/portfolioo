import { Route, Router, Routes } from "react-router-dom";
import { About } from "./About";
import "./App.css";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { Nvv } from "./Nvv";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { More } from "./More";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div className="home  bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nvv />
        <About />
        <Work />
        <Routes>
          <Route path="/more" element={<More />} />
        </Routes>
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
