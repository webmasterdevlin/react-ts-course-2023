import React, { useState } from "react";

export default function useBudget() {
  // vue.js 3: const randomValues = ref(0);
  const [randomValues, setRandomValues] = useState(0);

  // vue.js 3: const createRandomBudget = () => randomValues.values = (Math.random() * 100);
  const createRandomBudget = () => setRandomValues(Math.random() * 100);

  // 
  return {
    createRandomBudget,
    randomValues,
  };
}
