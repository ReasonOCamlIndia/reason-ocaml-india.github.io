import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="rb-homepage flex container m-auto px-4">
        <section className="sm:flex-column mt-8">
          <section className="flex-1 pr-2">
            <h1>Reason Bangalore</h1>
            <p className="rb-description">
              Bengaluru's very own Reason/OCaml community
            </p>
            <h2 className="rb-light my-4">is meeting up (virtually) next on</h2>
            <h3 className="rb-date">June 9, 2024</h3>
            <h2 className="rb-light my-4">at</h2>
            <section className="rb-address">
              <h3> Google Meet </h3>
              <p></p>
            </section>
            <a className="rb-btn" href="https://discord.com/invite/RamP7SCKcU">
              Join us
            </a>
          </section>
        </section>
      </main>
    </Layout>
  );
}

/*

          <section className="flex-1 flex items-center mt-8 sm:mt-0">
            <section className="rb-location w-full">
              <div className="rb-map">
                <iframe
                  height="450"
                  frameborder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.5524271253!2d77.4905086874752!3d12.954294415932461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1580760500545!5m2!1sen!2sin"
                  allowfullscreen
                ></iframe>
              </div>
            </section>
          </section>

*/
