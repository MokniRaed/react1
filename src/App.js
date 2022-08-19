import './App.css';
import Container from './Components/Nav/Container';
import Footer from './Components/Nav/Footer';
import NavBar from './Components/Nav/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Container className="container"/>
      <Footer/>
    </div>
  );
}

export default App;
