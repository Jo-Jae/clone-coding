const NewsCard = ({ title, date, index }) => {
  return (
    <li
      className={`pb-7 m-auto p-7 rounded-xl bg-[#F5F4F6] ${
        index === 1 && "hidden lg:inline-block"
      }`}
    >
      <div>
        <h6 className="text-[#3B5866] font-semibold text-sm">보도자료</h6>
        <h3 className="pt-5 text-[#333333] text-xl font-bold">{title}</h3>
        <div className="mt-11 pt-5 text-[#a8a8a8] font-bold">{date}</div>
      </div>
      <div className="text-[#ff681b] text-[21px] font-bold "></div>
    </li>
  );
};

export default NewsCard;
