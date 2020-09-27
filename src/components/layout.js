import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Languages from "./languages";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
      <Languages></Languages>
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-black">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            <a
              className="font-bold no-underline"
              href="https://archive.org/details/GuerillaOpenAccessManifesto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Access Manifesto
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/everton137/openaccessmanifesto-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
