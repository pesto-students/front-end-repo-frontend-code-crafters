import harvestlyLogo from './assets/logo-white.svg'
import './App.css'


function App() {
  return (
    <>
      <div className='welcome'>
          <h1>Welcome to Harvestly!</h1>
          <img src={harvestlyLogo} className="logo" alt="Harvestly logo" />
      </div>
      
    </>
  )
}

export default App
