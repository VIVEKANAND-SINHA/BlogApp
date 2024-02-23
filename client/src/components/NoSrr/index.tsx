import react from "react";
import dynamic from "next/dynamic";
import React from "react";
const NonSSRWrapper = (props: {
  children:
    | string
    | number
    | boolean
    | react.ReactElement<any, string | react.JSXElementConstructor<any>>
    | Iterable<react.ReactNode>
    | react.ReactPortal
    | react.PromiseLikeOfReactNode
    | null
    | undefined;
}) => <React.Fragment>{props.children}</React.Fragment>;
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});
