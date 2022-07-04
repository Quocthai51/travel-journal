import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import datas from "../data";

function App() {
  const cards = datas.map((data) => {
    return <Card key={data.id} {...data} />;
  });


  return (
    <div className="App">
      <Header />
      <div className="Main">
        {cards}
      
      </div>
    </div>
  );
}

export default App;
