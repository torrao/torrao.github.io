import React from "react";
import NextLink from "next/link";

const assetPrefix = process.env.ASSET_PREFIX;

const Link = ({ href, ...rest }) => (
  <NextLink href={href} as={`${assetPrefix}${href}`} {...rest} />
);

export default Link;
