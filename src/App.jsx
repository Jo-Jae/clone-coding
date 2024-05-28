import Top from "./components/Top";
import CardSection from "./components/CardSection";
import News from "./components/News";
import Bottom from "./components/Bottom";
import Low from "./components/Low";
import Footer from "./components/Footer";
import Header from "./components/header";
import Middle from "./components/middle";

const App = () => {
  return (
    <div className="fond-pretendard ">
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
