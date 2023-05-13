import './App.css'
import { BiArrowBack } from 'react-icons/bi';
import { BsGeoAlt } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import someAudio from '../public/Jim Yosef - Link [NCS Release].mp3'

function App() {

  return (
    <>
      <div className="container">
        <BiArrowBack id='arrowBack'/>
        
        <Link to='https://yandex.ru/maps/1094/elista/?ll=44.269759%2C46.307743&z=14' className='geoLink'>
          <p><BsGeoAlt className='geo-icon'/> проложить маршрут</p>
        </Link>

        <audio className='audio' controls src={someAudio}></audio>

        <button className='btnCall'>Позвонить</button>

        <div className="textStyles">
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, quasi.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, soluta natus quo in quos temporibus minima fugiat necessitatibus quaerat illum officiis dicta blanditiis dolorem deleniti facilis quam nihil! Laudantium, exercitationem.</p>
        </div>
      </div>
      <h1 className='smallDeviceOnly'>я сделал компоненты только для малых девайсов, так что чтобы их увидеть нужно сузить сайт под мобильную версию</h1>
    </>
  )
}

export default App
