import top from "/public/images/topimage_files/top.webp";
import top_m from "/public/images/topimage_files/top_m.webp";

const Top = () => {
  return (
    <div className="">
      <div className=" relative w-full">
        <img className="w-full " src={top} alt="top-image" />
        <div className="absolute top-1/2 left-1/3">
          <h2 className="mx-3 fontfamily-MBC1961GulimM text-[55px] text-white ">
            Beyound Home
          </h2>
          <h3 className="mx-11 text-[28px] text-white">
            새로운 시대의 주거 혁신
          </h3>
        </div>
        {/* <img src={top_m} alt="top-image" /> */}
      </div>
    </div>
  );
};

export default Top;
