import React, { ReactElement, ReactNode } from "react";
import "./App.css";

// Conventional props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

/* function HeadingWithContent({ children }: { children: string }) {
  return <h1>{children}</h1>;
} */

function HeadingWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

// Default Props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
function Container({
  heading,
  children,
}: {
  children: ReactNode;
} & typeof defaultContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{children}</p>
    </div>
  );
}

Container.defaultProps = defaultContainerProps;
function App() {
  return (
    <div>
      <Heading title="Hello"></Heading>
      <HeadingWithContent>Hello</HeadingWithContent>
      <HeadingWithContent>
        <strong>Hello</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
    </div>
  );
}

export default App;
