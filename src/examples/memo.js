import { useState, useMemo, useEffect } from "react"

function complexCompute(num) {
  let i = 0
  while (i < 100000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  )

  const computed = useMemo(() => complexCompute(number), [number])

  useEffect(() => {
    console.log("styled change")
  }, [styles])

  return (
    <>
      <h1 style={styles}>Обчислювана властивість: {computed}</h1>
      <button
        className="btn btn-success"
        onClick={() => setNumber(prev => prev + 1)}
      >
        Додати
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setNumber(prev => prev - 1)}
      >
        Прибрати
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored(prev => !prev)}
      >
        Змінити
      </button>
    </>
  )
}

export default App
