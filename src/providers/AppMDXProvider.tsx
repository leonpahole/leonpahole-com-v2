import { MDXProvider } from "@mdx-js/react";
import React from "react";

const ExternalLink = ({ href, children }: any) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const AppMDXProviderComponents = {
  a: ExternalLink,
};

interface IProps {
  children: React.ReactNode;
}

export const AppMDXProvider: React.FC<IProps> = ({ children }) => {
  return (
    <MDXProvider components={AppMDXProviderComponents}>{children}</MDXProvider>
  );
};
