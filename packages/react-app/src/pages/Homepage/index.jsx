import NFTCard from "../../components/NftCard";

const mockdata = [
  {
    image: "https://picsum.photos/400/200?random=1",
    name: "random1",
    desc: "some random decs",
    prize: "0.0l ETH",
  },
  {
    image: "https://picsum.photos/400/200?random=2",
    name: "random1",
    desc: "some random decs lorem jkhndfjk jkahdfj jhdjfhj ahjsdhjashdjs h ahskdj h",
    prize: "0.0l ETH",
  },
  {
    image: "https://picsum.photos/400/200?random=3",
    name: "random1",
    desc: "some random decs",
    prize: "0.0l ETH",
  },
  {
    image: "https://picsum.photos/400/200?random=4",
    name: "random1",
    desc: "some random decs",
    prize: "0.0l ETH",
  }, {
    image: "https://picsum.photos/400/200?random=10",
    name: "random1",
    desc: "some random decs",
    prize: "0.0l ETH",
  }, {
    image: "https://picsum.photos/400/200?random=6",
    name: "random1",
    desc: "some random decs",
    prize: "0.0l ETH",
  }, {
    image: "https://picsum.photos/400/200?random=7",
    name: "random1",
    desc: "some random decs",
    prize: "0.0l ETH",
  },
];

const Homepage = () => {
  return (
    <div className="p-10">
      <h1 className="py-10 text-2xl font-bold ">NFT Collection 🚀</h1>
      <div className="flex flex-wrap gap-5"> {mockdata.map((i)=>{
      return  <NFTCard image={i.image} name={i.name} decs={i.desc} prize={i.prize}/>
      })}</div>
     
    </div>
  );
};
export default Homepage;
