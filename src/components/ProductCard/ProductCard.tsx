import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "./product-card-styles.css";


interface ProductCardProps {
    id: number,
    title: string,
    image: string,
}

export function ProductCard({ id, title, image }: ProductCardProps) {
  const [timeLeft, setTimeLeft] = useState(Math.floor(Math.random() * 60) + 40);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      setTimerEnded(true);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }


  return (
    <article className='card'>
      <div className='card-image'>
        <Image src={image} alt='' width={400} height={300} />
      </div>
      <div className='card-content'>
        <h3>{title}</h3>
      </div>

      <div className='timer'>
        <p>{formatTime(timeLeft)}</p>
        <Link href={`/products/${id}`}>
          {timerEnded ? (
            <>
              {/*
                The should be a disabled button
              */}
            </>
          ) : (
            <>
              {/*
                A useful button can be here
              */}
            </>
          )}
        </Link>
      </div>
    </article>
  );
}
