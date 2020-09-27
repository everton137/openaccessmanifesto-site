import { Link } from "gatsby";
import React from "react";

function Languages() {
  return (
    <div className="m-auto w-full px-16 bg-gray-400">
      {[
        {
          route: `/`,
          title: `English`,
        },
        {
          route: `/pt`,
          title: `Português`,
        },
      ].map((link) => (
        <Link
          className="block mt-4  no-underline md:inline-block md:mt-0 md:ml-6"
          key={link.title}
          to={link.route}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
export default Languages;
