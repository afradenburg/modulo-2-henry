import Data from "../data"


export default function Card(props) {
const {id, name, status, species, gender, origin,onClose} = props

return (
      <div>
         {<><button onClick={onClose}>X</button>
         <h2>{id}</h2>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={props.image} alt='' /></> }
      </div>
   );
}
