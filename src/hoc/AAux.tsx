import type { ReactNode } from "react";

const Aux = (props: {children: ReactNode}): JSX.Element => (<>{props.children}</>);

export default Aux;