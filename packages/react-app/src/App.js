import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateNFT from "./pages/CreateNFT";
import OwnerNFTs from "./pages/OwnedNFTs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateNFT />} />
        <Route path="/ownednfts" element={<OwnerNFTs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
