import { useEffect, useState } from "react";

const Lab07_03 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>{time.toLocaleTimeString("en-US", { hour12: true })}</h1>
    </div>
  );
};

export default Lab07_03;
