import { useState, useEffect } from 'react';
import Button from '../components/Button';

// The React useMemo Hook returns a memoized value.
// Think of memoization as caching a value so that it does not need to be recalculated.
// The useMemo Hook only runs when one of its dependencies update.
// This can improve performance. The useMemo and useCallback Hooks are similar.
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
export default function Memo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = slowFunction(number); // changing theme will cause this to run

  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number); // changing theme will not cause this to run
  // }, [number]); // only run when number changes

  const themeStyles = {
    // useEffect will run when setNumber is called
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  // const themeStyles = useMemo(() => {
  //   // useEffect will not run when setNumber is called
  //   return {
  //     backgroundColor: dark ? 'black' : 'white',
  //     color: dark ? 'white' : 'black',
  //   };
  // }, [dark]);

  useEffect(() => {
    console.log('Theme changed');
  }, [themeStyles]);

  return (
    <>
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
        Change Theme
      </Button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num: number) {
  console.log('Calling slow function');
  for (let i = 0; i <= 1000000000; i++) {
    // console.log('i', i);
  }
  return num * 2;
}
