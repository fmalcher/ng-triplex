import { Triple } from './triple';

export interface QueryResponse {
    triples: Triple[];
    uri: string;
    resourceFormat: string;
}
