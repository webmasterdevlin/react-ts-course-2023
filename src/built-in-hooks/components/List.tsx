import { useState, useEffect } from 'react';

type Props = {
  getItems: (param: number) => any; // This function gets renewed if not memoized using useCallback.
};

const List = ({ getItems }: Props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(10));
    console.log('Updating Items');
  }, [getItems]);

  return (
    <>
      {items.map(value => {
        return <h3 key={value}>{value}</h3>;
      })}
    </>
  );
};

export default List;
