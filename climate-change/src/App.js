import Header from './components/Header'
import Button from './components/Button'

// //creating a styled button
// const Button = styled.button``

function button_clicked(){ //will print string that the butttons was clicked 
  alert("you clicked me breh");
}

const App = () =>{
  return (
    //root 
    <div className = "container"> 
     <Header />

    </div>

   
  );
}



export default App
