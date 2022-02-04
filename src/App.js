import "./App.css";
import Card from "./components/Card";

const App = () => {

  const data = [
    {
      img: "https://i.imgur.com/C0C1Y3T.jpeg",
      apiLink: "https://sarcasm-api.herokuapp.com/",
    },
    {
      img: "https://i.imgur.com/U83RsVZ.jpeg",
      apiLink: "https://fightclub-api.herokuapp.com/",
    },
  ]

  return (
    <div className="container row">
      <Card
      img = {data[0].img}
      apiLink = {data[0].apiLink}
      />
      <Card
      img = {data[1].img}
      apiLink = {data[1].apiLink}
      />
    </div>
  );
};

export default App;
