import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
