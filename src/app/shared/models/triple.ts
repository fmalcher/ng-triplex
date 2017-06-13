import { TripleObject } from './triple-object';
export { TripleObject } from './triple-object';

export interface Triple {
    subject: string;
    predicate: string;
    object: TripleObject;
}
