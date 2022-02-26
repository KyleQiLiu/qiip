import React from 'react'
import placeholder from './img/bgvr_logo.png'

export default function Card_Big() {
  return (
      <div data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="200">
        
        <p class="text-6xl text-center font-redhot py-32">Our Experience</p>
        
        <div class="flex flex-row">     
            <div>
                <button class="max-w-screen-sm">
                    <img class="card_img" src={placeholder}/>
                </button>
            </div>
            <div class="px-8">
              <p class="font-lora text-3xl py-2">Brown Girl VR </p>
              <p> 
                <span class="tag">Oculus Quest2 Mobile</span>
                <span class="px-1"></span>
                <span class="tag">Unreal Engine</span>
              </p>
              <p class="font-lora py-6">Detail</p>
            </div>

        </div>
    </div>
  )
}
