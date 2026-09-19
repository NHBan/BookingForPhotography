import { useState } from 'react'
import Home from './pages/Home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      {/* Bước 2: Gọi component Home ra giao diện */}
      <Home />
    </div>
    </>
  )
}

export default App
