export class Movie{
    public id: number;
    public title: string;
    public year: number;
    public genre: string;
    public plot: string;
    public posterUrl: string;

    constructor(id: number, title: string, year: number, genre: string, plot: string, posterUrl: string){
        this.id = id;
        this.title = title
        this.year = year
        this.genre = genre
        this.plot = plot
        this.posterUrl = posterUrl
    }
}