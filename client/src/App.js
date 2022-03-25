import React, {useState, useEffect} from 'react'

export default function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message))
  }, [])
  return (
    <div>
      <p>{!data ? "Loading.." : data}</p>
    </div>
  )
}
