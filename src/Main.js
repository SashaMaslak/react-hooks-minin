import React from "react"
import { useAlert } from "./alert/AlertContext"

const Main = () => {
  const { show } = useAlert()
  return (
    <>
      <h1>Привіт в прикладі з Context</h1>
      <button
        onClick={() => show("Цей текст із Main.js")}
        className="btn btn-success"
      >
        Показати alert
      </button>
    </>
  )
}

export default Main
