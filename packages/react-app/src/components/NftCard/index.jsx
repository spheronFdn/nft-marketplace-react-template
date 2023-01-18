const NFTCard = (props) => {
  return (
    <div className="bg-slate-200 flex flex-col w-[300px] h-[400px] rounded-3xl text-center ">
      <img
        src={props.image}
        className="object-cover h-min-[300px] rounded-t-3xl "
      />
      <h1 className="text-3xl font-bold px-10px ">{props.name}</h1>
      <p className="text-md  px-[10px] ">{props.decs}</p>
      <div className=" flex justify-center items-center  pt-[30px]">
        <p className="text-3xl">{props.prize}</p>
        <button className="rounded-xl bg-slate-400 px-[20px]">Buy NFT</button>
      </div>
    </div>
  );
};

export default NFTCard;
