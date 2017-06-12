import { TripleObject } from './triple-object';
export { TripleObject } from './triple-object';

export interface TripleSet {
    subject: string;
    predicate: string;
    object: TripleObject[];
}
