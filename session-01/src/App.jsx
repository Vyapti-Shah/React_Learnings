import react from 'react';
import Temp from './Temp';

function App() {
  return (
    <div className='bg-black h-screen w-full text-white text-4xl flex items-center justify-center '>
      <div className='border rounded-md p-4 border-white'>
        <Temp/>
      </div>
    </div>
  )
}


export default App;