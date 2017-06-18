import { TriplePart } from './triple-part';
export { TriplePart } from './triple-part';

export interface Triple {
    subject: TriplePart;
    predicate: TriplePart;
    object: TriplePart;
}
