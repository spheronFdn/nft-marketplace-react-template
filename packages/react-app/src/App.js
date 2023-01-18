import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CreateNFT from "./pages/CreateNFT";
import OwnerNFTs from "./pages/OwnedNFTs";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateNFT />} />
        <Route path="/ownednfts" element={<OwnerNFTs />} />
      </Routes>
    </Router>
  );
};

export default App;
