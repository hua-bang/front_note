function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={ number }>{number}</li>
  );
  return (
    <ul>
      { listItems }
    </ul>
  )
}

export default NumberList;