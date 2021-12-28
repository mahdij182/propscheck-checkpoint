import './App.css';
import Profile from'./profile/profile';


function App() {
  return(
    <div className='App'>
     <Profile fullName="Mahdi jenhani" bio="MMA fighter" profession="DJ">
        <img src="Capture.PNG"  style={{
            borderRadius: 400/ 2,
            width: 200}} />
      </Profile>
      </div>
  )
        }
        export default App;