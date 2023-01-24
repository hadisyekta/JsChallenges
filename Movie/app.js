function Movie(title, director, genra, releaseYear, rate){
    this.title = title;
    this.director=director;
    this.genra = genra;
    this.releaseYear = releaseYear;
    this.rate = rate;

}

Movie.prototype.getrate = function(){
    return this.rate
}
