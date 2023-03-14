import { useEffect } from 'react';

type Props = {
  cost: number;
  discount: number;
};

export default function Effect3({ cost, discount }: Props) {
  // run multiple useEffects

  useEffect(() => {
    console.log('useEffect 1: ', cost);
  }, []);

  useEffect(() => {
    console.log('useEffect 2: ', discount);
  }, []);

  useEffect(() => {
    console.log('useEffect 3: ', cost - discount);
  }, []);

  // const { total } = useAudioEqualizer(cost, discount);

  return (
    <>
      <h1>Effect3 :</h1>
      {/* <h1>Effect3 with custom hooks: {total}</h1> */}
    </>
  );
}

// Hooks are reusable functions.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch.
function useItemDiscounts(cost: number, discount: number) {
  useEffect(() => {
    console.log('useEffect 1: ', cost);
  }, []);

  useEffect(() => {
    console.log('useEffect 2: ', discount);
  }, []);

  useEffect(() => {
    console.log('useEffect 3: ', cost - discount);
  }, []);

  return { total: cost - discount };
}
