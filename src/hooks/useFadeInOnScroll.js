import { useEffect, useRef, useState } from 'react';

//Плавное появление блоков

export default function useFadeInOnScroll() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false); //состояние появления в зоне видимости

  //Наблюдатель
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); //отключение наблюдения, анимация сработает 1 раз
          }
        });
      },
      { threshold: 0.1 } //10% элемента находится в зоне видимости
    );

    if (ref.current) {
      observer.observe(ref.current); //если реф привязан к элементу, начинается наблюдение
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current); //убираем наблюдение
    };
  }, []);

  return [ref, isVisible];
}
