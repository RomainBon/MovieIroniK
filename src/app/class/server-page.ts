import {Movie} from'./movie'
export interface ServerPage {
    page:number;
    results: Movie[];
    total_result:number;
    total_pages:number;
}
