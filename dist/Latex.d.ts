import * as React from 'react';
import { Macros } from './renderLatex';
import { Delimiter } from './types';
import './Latex.css';
export interface LatexProps {
    children: string;
    delimiters?: Delimiter[];
    strict?: boolean;
    trust?: boolean;
    macros?: Macros;
}
export default class Latex extends React.Component<LatexProps> {
    static defaultProps: Partial<LatexProps>;
    render(): JSX.Element;
}
