import { useEffect, useState } from "react";

export function relog() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Relog</h1>
      <h2> {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default relog;
