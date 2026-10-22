class Resources{
    constructor(){
        this.toLoad = {
            sky: new URL("./sprites/sky.png", import.meta.url).href,
            ground: new URL("./sprites/ground.png", import.meta.url).href,
            hero: new URL("./sprites/hero-sheet.png", import.meta.url).href,
            shadow: new URL("./sprites/shadow.png", import.meta.url).href,
        };

        //load the images
        this.images = {};
        Object.keys(this.toLoad).forEach(key => {
            const img =new Image();
            this.images[key] = {
                image: img,
                isLoaded: false,
            }
            img.onload = () => {
             this.images[key].isLoaded = true;
            }
            img.onerror = () => {
                console.error(`Failed to load ${key} image: ${img.src}`);
            }
            img.src = this.toLoad[key];
        })
    } 
}
export const resources = new Resources(); 