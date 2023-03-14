import { useState, useEffect } from 'react';

type Props = {
  getItems: (param?: number) => any; // This function gets renewed if not memoized using useCallback.
};

const List = ({ getItems }: Props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    // setItems(getItems(5));
    console.log('Updating Items');
  }, [getItems]);

  return (
    <>
      {items.map(value => {
        return <div key={value}>{value}</div>;
      })}
    </>
  );
};

export default List;
