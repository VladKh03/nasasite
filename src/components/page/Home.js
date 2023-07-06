import '../styles/Home.css'
import React, {useRef, useEffect} from 'react';
import { gsap } from 'gsap-trial';
import wrapperAddGsap from '../utils/wrapper.gsap'
import Upper from './HomeUpper'
import Body from './HomeBody'

export default function Home() {
  let app = useRef(null)
  useEffect(() => {
      gsap.to(app, {duration:0, visibility:'visible'})
      wrapperAddGsap()
      
  }, [])

  return (
      <div className="wrapper" ref={el => app = el}>
          <div className="content">
              <Upper/>
              <Body/>
          </div>
      </div>
  )
}