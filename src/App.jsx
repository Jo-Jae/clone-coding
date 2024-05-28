import Top from "./components/Top";
import CardSection from "./components/CardSection";
import Middle from "./components/Middle";
import News from "./components/News";
import Bottom from "./components/Bottom";
import Low from "./components/Low";
import Footer from "./components/Footer";
import Header from "./components/header";

const App = () => {
  return (
    <div className="font-pretendard ">
      <Header />
      <Top />
      <CardSection />
      <Middle />
      <News />
      <Bottom />
      <Low />
      <Footer />
    </div>
  );
};

export default App;
