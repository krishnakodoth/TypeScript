import React, { ReactElement, ReactNode, useState } from "react";
import "./App.css";

// Functional Props
function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, setState] = useState<number>(1);
  return (
    <div>
      <h2>{header?.(state)}</h2>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState((prevState) => prevState! + 1)}>
          Add
        </button>
      </div>
    </div>
  );
}

// List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

// App
function App() {
  return (
    <div>
      <TextWithNumber>
        {(num: number) => <div>Today's Number is {num}</div>}
      </TextWithNumber>

      <TextWithNumber
        header={(num: number) => <span>Number in Header {num}</span>}
      >
        {(num: number) => <div>Today's Number is {num}</div>}
      </TextWithNumber>

      <List
        items={["Item1", "Item2", "Item3"]}
        render={(item: string) => <p>{item.toUpperCase()}</p>}
      />
    </div>
  );
}

export default App;
