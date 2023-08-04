
import React from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))

const createButton = ({text}) => {
  return (
    <button>
      {text}
    </button>
  )
}

root.render(
  <React.Fragment>
    {createButton({ text: 'Button1' })}
    {createButton({ text: 'Button2' })}
    {createButton({ text: 'Button3' })}
  </React.Fragment>
)
