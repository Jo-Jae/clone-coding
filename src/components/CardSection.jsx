import Card from "./Card";
import cardData from "../data/cardData.json";

const CardSection = () => {
  return (
    <section className="max-w-[1080px] mx-auto">
      <h2 className="text-center p-10 text-[32px] font-extrabold">
        직방이 만드는 <br />
        주거생활의 새로운 정의
      </h2>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
        {cardData?.map((v, i) => (
          <Card
            key={i}
            name={v.name}
            description={v.description}
            image={v.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default CardSection;
