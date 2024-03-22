import './App.css'
import Chart from './components/Chart/Chart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <h1 className='text-4xl text-center font-bold'>Price Option</h1>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
    </>
  )
}

export default App
