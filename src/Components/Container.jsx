import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";

export const Container = ({ children, meta }) => {

  return (
      <>
        <div className="container">

          <main className="pb-2 text-white">
            <section className=" px-8 mt-8 grid gap-2">
              <h1 className="text-2xl font-serif font-bold md:text-4xl">
                {meta.title}
              </h1>
              <p className="text-sm opacity-80">
                Written on {meta.publishedAt} by {meta.author}
              </p>
              <p className="text-sm opacity-80 font-medium">{meta.description}</p>
              <hr className="mt-1 dark:border-gray-600 border-2" />
              <section className="mt-4 prose max-w-4xl ">
                <MDXProvider>{children}</MDXProvider>
              </section>
            </section>
          </main>
        </div>
      </>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.object,
};

