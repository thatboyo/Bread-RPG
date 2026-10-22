import { resources } from './resource.js';
import './style.css'
const canvas  =  document.querySelector ("#game");
const ctx = canvas.getContext("2d");

const draw = () => {
    const sky = resources.images.sky;
    if (sky.isLoaded) { 
        ctx.drawImage(sky.image, 0, 0)
    }
}

setInterval(() => {
draw();    
}, 300);







