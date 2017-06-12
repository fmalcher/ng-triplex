import { TripleSet } from './triple-set';

export interface QueryResponse {
    tripleSets: TripleSet[];
    uri: string;
    resourceFormat: string;
}
