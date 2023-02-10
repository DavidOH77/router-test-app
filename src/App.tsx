import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";
import { useState } from "react";
import SongDetail from "./pages/SongDetail";

export type MemberType = { name: string; photo: string };
export type SongType = {
  id: number;
  title: string;
  musician: string;
  youtube_link: string;
};

const App = () => {
  const [members] = useState<Array<MemberType>>([
    { name: "Maggie Adams", photo: "photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/Tim.png" },
    { name: "Scott King", photo: "photos/King.png" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/Toby.jpg" },
  ]);

  const [songs] = useState<Array<SongType>>([
    {
      id: 1,
      title: "Sunny Drop",
      musician: "Novel Bright",
      youtube_link: "EGVWyjTQkDE",
    },
    {
      id: 2,
      title: "Sparkle",
      musician: "YOASOBI",
      youtube_link: "tUjHpgB3EgA",
    },
    {
      id: 3,
      title: "Gone",
      musician: "Leellamarz",
      youtube_link: "UvOISFON4M4",
    },
    {
      id: 4,
      title: "Fallin for you",
      musician: "Colbie callet",
      youtube_link: "PABUL_EX_hw",
    },
    {
      id: 5,
      title: "Everything",
      musician: "The Black Skirts",
      youtube_link: "ScHpv1OfSSg",
    },
    {
      id: 6,
      title: "Ling Ling",
      musician: "The Black Skirts",
      youtube_link: "CqQJVpO5vbQ",
    },
    {
      id: 7,
      title: "Fallin for you",
      musician: "Colbie callet",
      youtube_link: "PABUL_EX_hw",
    },
    {
      id: 8,
      title: "You Raise Me Up",
      musician: "Car, the garden",
      youtube_link: "8KoT1ZoNnx8",
    },
  ]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title={"스포티파이"} />} />
          <Route path="/members" element={<Members members={members} />} />
          <Route path="/songs" element={<SongList songs={songs} />} />
          <Route path="/songs/:id" element={<SongDetail songs={songs} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
