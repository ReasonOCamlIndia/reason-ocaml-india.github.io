import { useRef, useEffect } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { render } from "./Animation.re";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const canvasRef = useRef();

  useEffect(() => {
    let x = canvasRef.current.width / 2;
    let y = canvasRef.current.height - 30;
    render(canvasRef, x, 2, y, -2);
  });

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="rb-homepage flex container m-auto px-4">
        <canvas width="480" height="320" ref={canvasRef}></canvas>
      </main>
    </Layout>
  );
}
