import { useState } from "react";
import { useEffect } from "react";

export default function CompleteCV({generalInfo}) {
    const image = generalInfo.image;
    const [anteprima, setAnteprima] = useState(null);
  
  useEffect(() => {
    if (!image) return;

    const objectUrl = URL.createObjectURL(image);
    setAnteprima(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);
  
  return(
  <img src={anteprima} alt="" />
  );
}