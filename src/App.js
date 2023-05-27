import './App.css';
import Card from './components/Card';

function App() {
  const card1 = {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
    additionalClass: 'row my-2',
  }

  const card2 = {
    additionalClass: 'row my-2'
  }

  return (
    <div className="container g-2">
        <Card {...card1}>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
        <Card {...card2}>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>
    </div>
  );
}

export default App;


                