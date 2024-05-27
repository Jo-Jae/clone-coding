import { GrNext } from "react-icons/gr";

const Card = ({ name, description, image }) => {
  console.log(image);
  return (
    <li className="pb-12">
      <img
        className="rounded-xl"
        src={`/images/card/${image}.jpg`}
        alt={name}
      />
      <h3 className="pt-5 text-[#333333] text-xl font-bold">{name}</h3>
      <h5 className="pt-3 text-[#333333] text-md">{description}</h5>
      <div className="text-[#ff681b] text-[21px] font-bold ">
        <button className="pt-5 pb-12 text-[16px] flex items-center">
          더 알아보기
          <GrNext />
        </button>
      </div>
    </li>
  );
};

export default Card;
