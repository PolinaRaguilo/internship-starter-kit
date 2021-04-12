import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  return { onIncrease, onDecrease, count };
};

const Counter = () => {
  const { onIncrease, onDecrease, count } = useCounter(0);

  return (
    <>
      <Typography variant="h3">Count: {count}</Typography>
      <Button variant="contained" onClick={onIncrease}>
        +
      </Button>
      <Button variant="contained" onClick={onDecrease}>
        -
      </Button>
    </>
  );
};

export default Counter;
