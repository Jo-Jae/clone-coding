import newsData from "../data/newsData.json";
import NewsCard from "./NewsCard";
import { GrNext } from "react-icons/gr";

const News = () => {
  return (
    <section className="max-w-[1080px] mx-auto mt-11 mb-11">
      <h2 className="text-center p-10 text-[32px] font-black">최신 소식</h2>
      <ul className="mt-10 grid  grid-cols-1  lg:grid-cols-2 gap-6 justify-items-center">
        {newsData.map((v, i) => (
          <NewsCard key={i} title={v.title} date={v.date} index={i} />
        ))}
      </ul>
      <div className="m-9 flex items-center justify-center">
        <button className="pt-5 pb-12 text-[#FF681B] text-[14px] font-black flex items-center hover:text-black ">
          소식 더 보기
          <GrNext />
        </button>
      </div>
    </section>
  );
};

export default News;
