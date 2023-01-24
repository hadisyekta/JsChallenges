class Movie {
    constructor(title, director, genra, releaseYear, rate){
        this.title = title;
        this.director=director;
        this.genra = genra;
        this.releaseYear = releaseYear;
        this.rate = rate;
    }

    getLogsOverView(){
        return `${this.title}, a  ${this.genra} film directed by  ${this.director} +
         was released in  ${this.releaseYear}  it received a rating of:  + ${this.rate}`

    }
    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
      }
}


const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);

const Batman = new Movie(
  "The Dark Knight",
  "Christopher Nolan",
  "Action",
  2008,
  83
);

const TheNotebook = new Movie(
  "The Notebook",
  "Nick Cassavetes",
  "Romance",
  2004,
  54
);

console.log(Spiderman);
console.log(Spiderman.getLogsOverView());
console.log(Batman.getLogsOverView());
console.log(TheNotebook.getLogsOverView());

