import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import data from "./data";
import Info from "./Info";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        description={item.description}
        location={item.location}
        imageURL={item.imageURL}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        Exchange semester in Chile
      </header>
      <Info/>
      <section className="cards">{cards}</section> {/* </div> */}
    </div>
  );
}

export default App;
