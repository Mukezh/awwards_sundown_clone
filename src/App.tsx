import './App.css'
import Section1 from './components/Section-one';
import { Section3 } from './components/Section-three';
import { Section2 } from './components/Section-two';
import { TransitionLayout } from './components/transition';



function App() {
  
  return (
    <div>
      <div className='bg-orange-50 h-screen py-6'>
      {/* <TransitionLayout children= {<Section1 />}/> */}
      <Section3 />
      
      </div>  
    </div>

  )
}

export default App
