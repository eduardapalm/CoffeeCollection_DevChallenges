import ICoffeeCard from "@/interfaces/ICoffeeCard";
import Image from "next/image";

export const getStaticData = async (): Promise<ICoffeeCard[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
  );
  const data: ICoffeeCard[] = await response.json();

  return data;
};

const Home = async () => {
  const cards = await getStaticData();

  return (
    <div className="grid md:grid-cols-3 justify-center gap-5 py-10">
      {cards.map((card) => (
        <div key={card.id}>
          <Image
            src={card.image}
            alt={`Image of ${card.name}`}
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
