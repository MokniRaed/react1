import {Button,Card} from "react-bootstrap"
import Details from "./Details";
import './Cardd.css'

function showName(name)
{
  alert(`3aslema, m3ak ${name} en personne`);
}


const Cardd =(props)=>{
    return(
        <div  style={{display : 'flex', justifyContent:'center', alignItems : "center" }}>
        <Card  style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{width: '100%',
    height: undefined,
    aspectRatio: 1,}} src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
         <Details details={props.phone}/>
         <Details details={props.email}/>
        </Card.Text>
        <Button variant="primary" onClick= { () => showName(props.name)}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    )
}

export default Cardd;