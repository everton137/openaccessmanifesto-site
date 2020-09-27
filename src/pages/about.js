import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="bg-white p-6 shadow-xl">
        <h2 className="flex justify-center inline-block p-3 mb-4 text-2xl font-bold text-white bg-gray-700">
          About
        </h2>
        <p>
          {`This website will host the Guerilla Open Access Manifesto written by Aaron Swartz in 2008, its translation into serveral languages and a list of projects,
           groups and organizations that support free/open knowledge. The manifesto is in public domain, please, see here. All the content of this site is also 
           intended to be in public domain.`}
        </p>
      </section>
    </Layout>
  );
}

export default AboutPage;
