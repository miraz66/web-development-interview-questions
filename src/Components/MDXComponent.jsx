// import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import Code from "./Code.jsx";

export const MDXComponent = {
  h1: ({ children }) => (
      <h1 className="text-xl pt-10 max-w-[850px] leading-[1.2] md:leading-[1.2] md:text-2xl font-bold text-yellow-500">
        {children}
      </h1>
  ),
  h2: ({ children }) => (
      <h2 className="mt-4 text-lg leading-[1.2] font-medium text-yellow-600">
        {children}
      </h2>
  ),
  h3: ({ children }) => <h3 className="mt-8 text-lg font-bold ">{children}</h3>,
  p: ({ children }) => (
      <p className="my-2 text-sm leading-6 text-gray-400 tracking-wide">{children}</p>
  ),
  a: ({ children, href }) => (
      <a
          href={href}
          className="my-4 text-xl leading-normal underline underline-offset-[3px]"
      >
        {children}
      </a>
  ),
  li: ({ children }) => <li className="text-xl leading-normal ">{children}</li>,
  span: ({ children }) => <span className="text-xl leading-normal ">{children}</span>,
  ul: ({ children }) => <ul className="list-disc pl-10">{children}</ul>,
  ol: ({ children }) => <ul className="list-decimal pl-10">{children}</ul>,
  pre: ({ children }) => <Code>{children}</Code>,
  code: ({ children }) => (
      <code className="rounded-md p-10 bg-red-200 ">{children}</code>
  ),
  hr: () => <hr className="mt-10 border-neutral-500 border-spacing-0.5" />,
};
