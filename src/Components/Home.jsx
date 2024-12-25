import { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";
import {MDXComponent} from "./MDXComponent.jsx";

export default function Home({ questionName }) {
  const [ActiveContent, setActiveContent] = useState(null);
  const mdxFiles = import.meta.glob('../assets/Content/*.mdx');

  useEffect(() => {
    if (!questionName) return;
    const normalizedActiveSection =
        questionName.charAt(0).toUpperCase() + questionName.slice(1);
    const filePath = `../assets/Content/${normalizedActiveSection}.mdx`;

    console.log(mdxFiles[filePath]);

    if (mdxFiles[filePath]) {
      mdxFiles[filePath]()
          .then((mod) => setActiveContent(() => mod.default)) // Wrap as a function
          .catch((err) => console.error("Failed to load MDX file:", err));
    }
  }, [questionName]);


  return (
      <div className="py-10 col-span-3 grid grid-cols-5 min-h-screen text-white">
        <div className="col-span-5 pl-5 pr-10">
          {ActiveContent ? (
              <MDXProvider>
                {/* Explicitly pass the key prop */}
                <ActiveContent key={questionName} components={MDXComponent}/>
              </MDXProvider>
          ) : (
              <p>Loading...</p>
          )}
        </div>
      </div>
  );
}

Home.propTypes = {
  questionName: PropTypes.string.isRequired,
};
