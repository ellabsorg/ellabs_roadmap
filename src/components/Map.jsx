import React from 'react'
import { useEffect } from 'react';
import ELLabs_map from '../assets/new roadmap.svg?react'; 

export default function Map() {
    useEffect(() => {
        const islands = [... document.querySelectorAll(`[id^='island']`)]
        const info_window = [... document.querySelectorAll(`[id^='setting_window']`)]
        console.log(info_window)
        islands.map((x)=> {x.style.opacity=0})
        info_window.map((x)=> {x.style.opacity=0.6})
        islands.map((x,y)=> {x.addEventListener('mouseenter', ()=> {x.style.opacity=0.65;info_window[y].style.opacity=1})})
        islands.map((x,y)=> {x.addEventListener('mouseleave', ()=> {x.style.opacity=0;info_window[y].style.opacity=0.6})})
      }, []);
  return (
    <div> <ELLabs_map/></div>
  )
}
