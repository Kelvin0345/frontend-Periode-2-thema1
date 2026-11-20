import { useState } from 'react'
import './sass/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body bg-primary">
                <h5 className="card-title">
                  Eerste card
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus incidunt repellendus excepturi molestias officiis. Aliquam eaque nemo esse est cumque, tenetur saepe beatae incidunt, officiis consectetur at, labore sapiente velit!</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body bg-secondary">
                <h5 className="card-title">
                  tweede card
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus incidunt repellendus excepturi molestias officiis. Aliquam eaque nemo esse est cumque, tenetur saepe beatae incidunt, officiis consectetur at, labore sapiente velit!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
