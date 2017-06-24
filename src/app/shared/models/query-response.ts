import { Triple } from './triple';

export interface QueryResponse {
    triples: Triple[];
    resourceFormat: string;
}
