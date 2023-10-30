import React from "react";

export default function Compose(
  props: React.PropsWithChildren<{
    providers: Array<React.ComponentType<React.PropsWithChildren<unknown>>>;
  }>
) {
  const { children, providers } = props;

  return providers.reduceRight(
    (Child, Provider) => <Provider>{Child}</Provider>,
    children
  );
}
