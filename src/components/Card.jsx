import { GrNext } from "react-icons/gr";

const Card = ({ name, description, image }) => {
  console.log(image);
  return (
    <li className="">
      <img
        className="rounded-xl"
        src={`/images/card/${image}.jpg`}
        alt={name}
      />
      <h3 className="pt-5 text-lg font-semibold">{name}</h3>
      <h5 className="pt-3 text-md">{description}</h5>
      <div className="text-[#ff681b] text-[21px] font-bold px-[80px]">
        <button className="p-5 text-[16px] flex items-center">
          더 알아보기
          <GrNext />
        </button>
      </div>
    </li>
  );
};

export default Card;
