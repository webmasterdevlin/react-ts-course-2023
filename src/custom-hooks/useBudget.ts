import { useState } from 'react';

export default function useBudget() {
  const [randomValues, setRandomValues] = useState(0);
  const createRandomBudget = () => {
    return setRandomValues(Math.random() * 100);
  };

  return {
    createRandomBudget,
    randomValues,
  };
}
