import { GrNext } from "react-icons/gr";
import bottom from "/images/bottom.webp";

const Bottom = () => {
  return (
    <div className="relative">
      <img className=" w-full" src={bottom} alt="connection" />
      <div className="absolute  top-1/4 left-[180px]">
        <h2 className="fontfamily-MBC1961GulimM text-[30px] font-black text-white ">
          직방은 새로운 시대의 <br />
          주거 혁신을 만들어 갑니다.
        </h2>
        <button className="pt-5 pb-12 text-[#FF681B] text-[14px] flex items-center font-bold">
          기업 소개
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Bottom;
