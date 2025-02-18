import './App.css'
import { Section4 } from './components/Section-four';
import Section1 from './components/Section-one';
import { Section3 } from './components/Section-three';
import { Section2 } from './components/Section-two';
import { Section5 } from './components/Section-five';
import { TransitionLayout } from './components/transition';
import MyComponent from './components/Scroll';



function App() {
  
  return (
    <div>
      <div className='bg-orange-50 w-screen'>
       {/* <TransitionLayout children= {<Section1 />}/> */}
       {/* <Section2 />  */}
      {/* <Section3 />  */}
      {/* <Section4 /> */}
      {/* <TransitionLayout children= {<Section5 />}/> */}
      {/* <Section5 /> */}
      <MyComponent />
      </div>  
    </div>

  )
}

export default App
