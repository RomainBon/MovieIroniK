export interface  Movie {
    title: string;
    original_title:string;
    poster_path? : string|null;
    adult: boolean;
    overview: string;
    release_date:string;
    popularity:number;
    vote_count:number;
    vote_average:number;
}
