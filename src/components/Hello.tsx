import * as React from "react";
import { HelloJs } from "./HelloJs";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => (
  <div>
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
    <HelloJs>Hello</HelloJs>
  </div>
  );
