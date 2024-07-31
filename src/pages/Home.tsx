import  {useState} from "react"
function Home() {
   const [color, setColor] = useState('red');
   return(
    <div>
        <h1>My favorite color is {color}</h1>
        <button onClick={()=> setColor('blue')}>Blue</button>
        <button onClick={()=> setColor('red')}>Red</button>
        <button onClick={()=> setColor('green')}>Green</button>
        <button onClick={()=> setColor('Brown')}>Brown</button>
    </div>
    
   )
   
}
  
  export default Home;