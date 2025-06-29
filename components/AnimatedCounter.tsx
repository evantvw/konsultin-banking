"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      <CountUp end={value} prefix="$" decimals={2} />;
    </div>
  );
};

export default AnimatedCounter;
