
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {

  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className="flex gap-5 justify-center mt-20">
      <div>
        <button onClick={() => dispatch(increment())} className="border bg-red-200 p-5 rounded">Increment</button>
      </div>
      <div>{count}</div>
      <button onClick={()=> dispatch(decrement())} className="border bg-red-200 p-5 rounded">Decreemnt</button>
      <button onClick={()=> dispatch(incrementByAmount(5))} className="border bg-red-200 p-5 rounded">Increment by value</button>
    </div>
  )
}

export default App
