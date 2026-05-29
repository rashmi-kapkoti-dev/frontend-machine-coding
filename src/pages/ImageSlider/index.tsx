import { useState } from 'react';
import { data } from './data';
import style from './ImageSlider.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={style.container}>
      <button
        className={style.btn}
        disabled={selectedIndex == 0}
        onClick={() => setSelectedIndex((prev) => prev - 1)}
      >
        <ChevronLeft />
      </button>
      <img
        className={style.img}
        src={data[selectedIndex].url}
        alt="Image of slider"
      />
      <button
        className={style.btn}
        disabled={selectedIndex == data.length - 1}
        onClick={() => setSelectedIndex((prev) => prev + 1)}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
