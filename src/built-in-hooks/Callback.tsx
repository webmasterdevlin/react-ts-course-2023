import { useState } from 'react';
import Button from '../components/Button';
import List from './components/List';

// The React useCallback Hook returns a memoized callback function.
// Think of memoization as caching a value so that it does not need to be recalculated.
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// The useCallback Hook only runs when one of its dependencies update.
// This can improve performance.
// The useCallback and useMemo Hooks are similar.
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
export default function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // imagine this function is resource intensive or an HTTP request
  const fetchItems = (incrementor: number) => {
    // This function gets re-created on every render.
    console.log('HTTP GET fetching items');
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor];
  };

  // const fetchItems = useCallback(
  //   (incrementor: number) => {
  //     console.log('HTTP GET fetching items');
  //     return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor];
  //   },
  //   [number],
  // );

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => {
          return setNumber(parseInt(e.target.value));
        }}
      />
      <Button
        color="primary"
        onClick={() => {
          return setDark(prevDark => {
            return !prevDark;
          });
        }}
      >
        Toggle Theme
      </Button>
      <List getItems={fetchItems} />
    </div>
  );
}
