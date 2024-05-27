import Slider from "react-slick";

// const SlideimageData = [
//   {image: "apartment"},
//   {image: "cleaning"},
//   {image: "doorlock"},
//   {image: "person"},
//   {image: "screen"},
//   {image: "storage"},
//   {image: "brokerage"},
//   {image: "connection"},
//   {image: "globe"},
//   {image: "protection"},
//   {image: "smarthome"},
// ];


const Middle = () => {
  return (
    <div className="flex bg-[#FF681B]">
      <div className="">
        <div>
          <h2 className="text-white">공간에서 경험까지, 완전히 새롭게 </h2>
          <h4 className="text-white">Beyond Home, Zigbang</h4>
        </div>
            <img className="h-[200px]" src="/images/slideimages/apartment.png" alt="apartment"/>
      </div>
        
    </div>
  );
};

export default Middle;