import Header from "./components/Header";
import Top from "./components/Top";
import CardSection from "./components/CardSection";

const App = () => {
  return (
    <div className="fond-pretendard ">
      <Header />
      <Top />
      <CardSection />
      <div className="bg-[#FF681B]">
        <h2 className="text-white">공간에서 경험까지, 완전히 새롭게 </h2>
        <h4 className="text-white">Beyond Home, Zigbang</h4>
      </div>
    </div>
  );
};

export default App;
