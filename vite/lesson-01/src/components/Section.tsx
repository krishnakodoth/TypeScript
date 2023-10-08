// import React, { ReactNode } from 'react';
import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};
const Section = ({ children, title }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

/* 
// Old way
const Section:React.FC<{title:string}> = ({children,title}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
} */

export default Section;
