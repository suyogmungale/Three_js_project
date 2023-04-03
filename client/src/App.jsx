 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/Home';
import Canvas from './canvas/Index';
import Customizer from './pages/customizer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app transition-all ease-in'>
      <Home/>
      <Canvas/>
      <Customizer/>
    </main>
  )
}

export default App
