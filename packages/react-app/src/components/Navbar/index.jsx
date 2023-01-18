import { ConnectKitButton } from "connectkit";
import { Router } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between px-10 bg-slate-50 shadow-xl py-4 text-xl w-full">
      <h2 className="w-full">MarketPlace</h2>
      <div className="flex justify-evenly w-full">
        <button onClick={() => Router.push("/")}>Home</button>
        <h2>Owned</h2>
        <h2>Mint NFT</h2>
      </div>
      <div className="w-full flex justify-end">
        <ConnectKitButton />
      </div>
    </div>
  );
};

export default Navbar;
