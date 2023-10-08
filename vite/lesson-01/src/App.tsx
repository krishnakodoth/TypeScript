import { useState } from "react";

import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  // const [counter, setCounter] = useState<number>(1);
  const [counter, setCounter] = useState(1);

  return (
    <>
      <Heading title={"Hello"} />
      {/* <Section> */}
      <Section title={"My Title"}>
        This is a section
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad beatae
          modi qui dolores nisi est sed atque? At esse dignissimos eius labore
          suscipit? Quos eum non qui saepe maxime doloremque.
        </p>
      </Section>
      <Counter setCounter={setCounter}>
        <h1>Counter : {counter} </h1>
      </Counter>

      <List
        items={["☕ cofee", "🌮 Tacos", "💻 code"]}
        render={(item) => <span className="gold">{item}</span>}
      />
      {/* <List items={[{id:'1',name:'Test1'},{id:'2',name:'Test2'}]} */}
    </>
  );
}

export default App;
