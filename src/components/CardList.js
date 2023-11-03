import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
          />
        );
      })}
    </>
  );
};

export default CardList;
