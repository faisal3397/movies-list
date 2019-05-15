export class Movie{
    public title: string;
    public year: number;
    public genre: string;
    public plot: string;
    public posterUrl: string;

    constructor(title: string, year: number, genre: string, plot: string, posterUrl: string){
        this.title = title
        this.year = year
        this.genre = genre
        this.plot = plot
        this.posterUrl = posterUrl
    }
}