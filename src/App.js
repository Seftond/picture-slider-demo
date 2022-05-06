import React from 'react';
import { useState } from 'react';
import './App.css';

const images = [{
  id: 1,
  url: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
  alt: 'Cat image'
},
{
  id: 2,
  url: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
  alt: 'Dog image'
},
{
  id: 3,
  url: 'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg',
  alt: 'Cow image'
},
{
  id: 4,
  url: 'https://images.squarespace-cdn.com/content/v1/5b71e83f1aef1d3e4bbd03f2/1534201222036-JHLKSIPN8AOXD4XNLRAN/Esther_main_image_1.jpg?format=2500w',
  alt: 'Pig image'
}]

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  
  let nextImage = () => {
    if(currentImage === images.length - 1){
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1)
    }
  }
  setInterval(nextImage, 5000)
  
  let previousImage = () => {
    if(currentImage === 0){
      setCurrentImage(images.length - 1)
    } else {
      setCurrentImage(currentImage - 1)
    }
  }

  return (
    <div className="App">
      <div>
        <section>
          <button onClick={previousImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </section>
        <img src={images[currentImage].url} alt={images[currentImage].alt} height='400px' width='400px'/>

      </div>
    </div>
  );
}

export default App;
