import "./Card.css";
import useFetch from "./useFetch";


const Card = (props) => {
  const { data: quote, loading, error, refetch } = useFetch(props.apiLink);

  if (loading) console.log("Loading...");

  if (error) console.log(error);

  return (
    <div style = {{backgroundImage: `url(${props.img})`}} className="card card__1 col">
      <div className="quote"><span>{quote?.sarcasm || quote?.quote}</span></div>
      <div onClick={refetch} className="btn">
        <a href="#no-where">
          Refresh
        </a>
      </div>
    </div>
  );
};

export default Card;
