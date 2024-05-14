import { useRef, useEffect } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const ballRadius = 10;
function render(canvasRef, x, dx, y, dy) {
  let ctx = canvasRef.current.getContext("2d");
  ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

  ctx.beginPath();
  ctx.arc(x + dx, y + dy, ballRadius, 0, Math.PI * 2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();

  if (x + dx > canvasRef.current.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  if (y + dy > canvasRef.current.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  requestAnimationFrame(() => render(canvasRef, x + dx, dx, y + dy, dy));
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const canvasRef = useRef();
  let canvas = canvasRef.current;
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
