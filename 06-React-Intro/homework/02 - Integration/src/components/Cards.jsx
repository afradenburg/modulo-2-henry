import Card from './Card';
 

export default function Cards(props) {
   const {characters} = props
   return <div>
      {
         characters.map(info => (
            <Card
            key = {info.id}
            name= {info.name} 
            status = {info.status}
            species = {info.species} 
            gender = {info.gender}
            origin = {info.origin.name} 
            image = {info.image}
            onClose= {() => window.alert('Emulamos que se cierra la card')}
            />
         ))

        
      }
   </div>

}
