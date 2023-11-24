import { useState, useCallback } from "react"
import ItemsList from "./ItemsList"

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? "darkred" : "black",
  }

  const generateItemsfromAPI = useCallback(
    indexNumber => {
      return new Array(count)
        .fill("")
        .map((_, i) => `Element ${i + indexNumber}`)
    },
    [count]
  )

  return (
    <>
      <h1 style={styles}>Кількість елементів: {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCount(prev => prev + 1)}
      >
        Додати
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored(prev => !prev)}
      >
        Змінити
      </button>
      <ItemsList getItems={generateItemsfromAPI} />
    </>
  )
}

export default App
