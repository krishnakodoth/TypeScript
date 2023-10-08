import { ReactNode } from "react";

type CounterProps = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = ({ children, setCounter }: CounterProps) => {
  const handleIncrement = () => {
    setCounter((prevCounter) => (prevCounter += 1));
  };
  const handleDecrement = () => {
    setCounter((prevCounter) => (prevCounter -= 1));
  };

  return (
    <div>
      {children}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
