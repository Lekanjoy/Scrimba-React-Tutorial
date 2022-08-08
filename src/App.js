import Info from "./components/Info";
import Footer from "./components/Footer";
import About from "./components/About";
import Interest from './components/Interests';
import Card from './components/Card'
import data from './components/data'


//This where you Receive all your created components
function App() {

  //  using array.map to map out all the data in the JSON file or API calls
  let mappedCards = data.map(card => {

    return (
       <Card 
       key={card.id}
       img={card.image}
       title={card.title}
       text={card.text}
       />
    )

  });

  return (
    <div className="container">

      <div className="wrapper">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>

     <div className="card-container">
      {mappedCards}
      </div>

    </div>
  );
}

export default App;
