import './App.css';
import Container from './Components/Nav/Container';
import Footer from './Components/Nav/Footer';
import Navii from './Components/Nav/Navii'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navii/>
      
      <Container className="container"/>
      <Footer/>
    </div>
  );
}

export default App;
