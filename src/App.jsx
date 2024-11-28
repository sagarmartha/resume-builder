import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Resuma Builder
      <button className='bg-blue-400 text-white w-full rounded-sm p-2'></button>
      <Button></Button>
      
    </>
  ) 
}

export default App
