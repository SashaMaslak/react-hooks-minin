import { useState, useEffect, useRef } from "react"

function App() {
  //const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState("initial")
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef("")

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Кількість рендерів: {renderCount.current}</h1>
      <h1>Минулий стан: {prevValue.current}</h1>
      <input
        ref={inputRef}
        value={value}
        type="text"
        onChange={e => setValue(e.target.value)}
      />
      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </div>
  )
}

export default App
