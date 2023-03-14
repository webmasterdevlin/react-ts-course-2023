import { useEffect, useRef, useState } from 'react';
import Card from './components/Card';
import type { ChangeEvent } from 'react';

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly
export default function Ref() {
  const [name, setName] = useState('');

  const prevNameRef = useRef('');
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    prevNameRef.current = name;
  }, [inputRef.current?.value as string]);

  console.log('rendered');

  return (
    <>
      <input
        className="field"
        ref={inputRef} // inputRef.current = input element
        // value={inputRef.current?.value} // no need to set value
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (inputRef.current) {
            inputRef.current.value = e.target.value; // does not cause re-render
          }
          console.log(inputRef.current?.value);
          setName(e.target.value); // causes re-render
        }}
      />
      <div>
        <h2>My name is {inputRef.current?.value}</h2>
        <h3>Previous value is {prevNameRef.current}</h3>
      </div>
      <button className="btn btn--primary" onClick={focus}>
        Focus
      </button>
      <Card name={inputRef?.current?.value as string} />
    </>
  );
}
