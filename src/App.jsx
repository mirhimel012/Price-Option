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
      <h1 className='text-4xl text-center text-white font-bold w-fit m-auto rounded p-4 bg-slate-800 hover:bg-slate-600'>Price Option GYM</h1>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
    </>
  )
}

export default App
