import "./App.css";
import Card from "./components/Card";

const App = () => {

  return (
    <div>
      <div className="app">
        <Card 
        apiLink="https://sarcasm-api.herokuapp.com"
        heading="sarcasm-API" 
        subheading="Can I interest you in a sarcastic comment?
        "/>  
         <Card 
        apiLink="https://api.kanye.rest/"
        heading="kanye.REST-API" 
        subheading="Kanye Says...
        "/>       
      </div>
    </div>
  );
};

export default App;
