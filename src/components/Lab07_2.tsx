import { useEffect, useState } from "react";

const Lab07_02 = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time === 0) {
      alert("Time's up");
      setTime(10);
      return;
    }
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);
  return (
    <div>
      <h1>Countdown from {time}</h1>
    </div>
  );
};

export default Lab07_02;
