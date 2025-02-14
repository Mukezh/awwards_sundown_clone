
import './App.css'
import Box from './components/Boxcomponent'
import HeartbeatEffect from './components/Heartbeattesting';
import { TransitionLayout } from './components/transition';



function App() {
  
  return (
    <div>
      <div className='bg-orange-50 h-screen py-6'>
      <TransitionLayout children= {<Box />}/>
      {/* <HeartbeatEffect /> */}
      </div>  
    </div>

  )
}

export default App
