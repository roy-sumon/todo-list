import './App.css'
import Tittle from './components/Tittle'
import TodoInput from './components/TodoInput'

function App() {
  
  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center'>
      <div className='w-2/3 h-[80%] bg-[#FFCCE1] scroll-v rounded-sm overflow-y-auto overflow-hidden p-5'>
        <Tittle />
        <TodoInput />
      </div>
      </div>
    </>
  )
}

export default App
