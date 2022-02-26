import React from 'react'
import vr_logo from './img/vr_icon.PNG'
import anim_logo from './img/animation_icon.PNG'
import unreal_tech_logo from './img/unreal_tech_icon.PNG'

export default function Services() {
  return (
    <div data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
    <p class="text-6xl font-medium text-center font-redhot">Services</p>
    <div class="py-8"></div>
    <div class="flex flex-row justify-center">
        <div class="service-item bg-gray-200 rounded">
            <img class="absolute w-12" 
                src={vr_logo} alt="vr"/>

            <ul class="text-center font-lora">
                <li>test</li>
                <li>test</li>
                <li>test</li>
            </ul>
        </div>
        
        <div class="service-item">
            <img src={anim_logo} alt="vr"/>
        </div>

        <div class="service-item">
            <img src={unreal_tech_logo} alt="vr"/>
        </div>
    </div>
    </div>
  )
}
