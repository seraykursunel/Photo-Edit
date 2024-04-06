import { useState } from 'react'
import './styles.css'
export default function App() {
  const [filter, setFilter] = useState({
    brightness: 1,
    contrast: 1,
    saturation: 1,
  })


const valueChange = (e) =>{
  const {name, value} = e.target
    setFilter({...filter, [name]:value})
  //console.log(filter)
}
  return (
    <div className='main-container'>
      <h1>
        <span>📷</span> Photo Editörü <span>📷</span>
      </h1>

      <div className='image-container'>
        <img src='./images/kunal-goswami-CuUn__aMGD4-unsplash.jpg' 
        style={{
          "--brightness":filter.brightness, 
          "--contrast":filter.contrast,
          "--saturation":filter.saturation
          }}/>
      </div>

      <form>
        <label>
          <input type='range' name='brightness' value={filter.brightness} min={0} max={2} step={0.1} onChange={valueChange}/>
          <span>Brightness</span>
        </label>

        <label>
          <input type='range' name='contrast' value={filter.contrast} min={0} max={2} step={0.1} onChange={valueChange}/>
          <span>Contrast</span>
        </label>

        <label>
          <input type='range' name='saturation' value={filter.saturation} min={0} max={2} step={0.1} onChange={valueChange}/>
          <span>Saturation</span>
        </label>
      </form>
    </div>
  )
}
