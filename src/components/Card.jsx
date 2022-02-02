import "./Card.css";
import useFetch from "./useFetch";

const Card = (props) => {
  const { data: quote, loading, error, refetch } = useFetch(props.apiLink);

  if (loading) console.log("Loading...");

  if (error) console.log(error);

  return (
    <div className="card">
      <div className="heading">
        <div className="heading--main">{props.heading}</div>
        <div className="heading--sub">{props.subheading}</div>
      </div>
      <div className="comment">{quote?.sarcasm || quote?.quote}</div>
      <button onClick={refetch} className="btn">
        Refresh
      </button>
    </div>
  );
};

export default Card;
