// Importing functionand styling from other pages
import './App.css';

import Todolist from './Todolist';
import Urbanlist from './UrbanList'





// Main function for the APP
function App() {
return(
  <div className="App">
    <div>
      <Urbanlist/>
    </div>
    <div>
      < Todolist/>
    </div>
    

  </div>
)
  
}

export default App;
