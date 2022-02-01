import "./App.css";
import Card from "./components/Card";

import comments from './data.js'
import quote from './fightClub.js';

const App = () => {

  return (
    <div>
      <div className="app">
        <Card 
        reply="Hi I am Chandler, I make jokes when I am uncomfortable"
        data={comments}
        heading="sarcasm-API" 
        subheading="Can I interest you in a sarcastic comment?
        "/>

        <Card 
        reply="The things you own end up owning you."
        data={quote} 
        heading="fightClub-API" 
        subheading="Never talk about fight club
        "/>
      </div>
    </div>
  );
};

export default App;
