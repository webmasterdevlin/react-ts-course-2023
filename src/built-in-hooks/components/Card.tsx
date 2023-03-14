import { useEffect } from 'react';

type Props = {
  name: string;
};

export default function Card({ name }: Props) {
  useEffect(() => {
    console.log('card rendered');
  }, [name]);
  return <h2>Card : {name}</h2>;
}
