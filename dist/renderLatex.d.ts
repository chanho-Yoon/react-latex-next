/** Adapted from /contrib/auto-render/auto-render.js at github.com/Khan/KaTeX */
import { Delimiter } from './types';
export declare type Macros = {
    [name: string]: string;
};
export default function renderLatexInTextAsHTMLString(text: string, delimiters: Delimiter[], strict: boolean, macros?: Macros, trust?: boolean): string;
