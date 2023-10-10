import { ReactNode } from "react";

// Style
import "./index.css";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return <div className="layout">{children}</div>;
}
