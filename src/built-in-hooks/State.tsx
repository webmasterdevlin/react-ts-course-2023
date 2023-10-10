import { useState } from 'react';
import Button from '../components/Button';
import type { User } from './models/user';

// React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.
export default function State() {
  // hooks, prefixed with use, can only be used in a function component, not in a class component
  // you can't put hooks in a loop, condition, or nested function

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
  });

  const decrementCount = () => {
    setCount(prevCount => {
      return prevCount - 1;
    });
    // setCount(prevCount => prevCount - 1); // not gonna work before React 17's batched updates.
    setTheme('red');
  };

  const incrementCount = () => {
    setCount(prevCount => {
      return prevCount + 1;
    });
    // setCount(prevCount => prevCount + 1); // not gonna work before React 17's batched updates.
    setTheme('blue');
  };

  return (
    <>
      <div className="mb-10 flex">
        <Button color="primary" onClick={decrementCount}>
          DECREMENT
        </Button>
        <div className="m-5">
          <span>{count} : </span>
          <span>{theme}</span>
        </div>
        <Button color="primary" onClick={incrementCount}>
          INCREMENT
        </Button>
      </div>
      <section className="mb-8">
        <p className="text-indigo-800">
          {user.firstName} {user.lastName}
        </p>
      </section>
      <div>
        <section>
          <label htmlFor="firstName">First Name: </label>
          <input
            id="firstName"
            value={user.firstName}
            onChange={e => {
              return setUser({ ...user, firstName: e.target.value });
            }}
          />
        </section>

        <section>
          <label htmlFor="lastName">Last Name: </label>
          <input
            id="lastName"
            value={user.lastName}
            onChange={e => {
              return setUser(prev => {
                return { ...prev, lastName: e.target.value };
              });
            }}
          />
        </section>
      </div>
    </>
  );
}
