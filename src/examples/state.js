import { useState } from "react"

function computeInitialCounter() {
  console.log("Some calculations...")
  return Math.trunc(Math.random() * 20)
}

function App() {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })

  const [state, setState] = useState({
    title: "Лічильник",
    date: Date.now(),
  })

  function increment() {
    setCounter(prevState => {
      return prevState + 1
    })
  }

  function decrement() {
    setCounter(prev => prev + 1)
  }

  function updateTitle() {
    setState(prev => ({ ...prev, title: "нова назва" }))
  }

  return (
    <div>
      <h1>Лічильник: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Додати
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Прибрати
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Змінити назву
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}

export default App
