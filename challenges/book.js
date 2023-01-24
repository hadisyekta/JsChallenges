class Book {
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;

    }
    get availability(){
        return this.getAvailability()
    }
    getAvailability(){
        if (this.numCopies ===0){
            return "out of Stock";
        }else if (this.numCopies < 10){
            return "Low Stock: " + this.numCopies;
        }
            return "In Stock: " + this.numCopies
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }
    restock(numCopiesRestocked = 5){
        this.numCopies += numCopiesRestocked;
    }
}
const HarryPotter = new Book("Harry Potter", "J.K Rolling", 123919, 10);
console.log(HarryPotter.getAvailability())
HarryPotter.restock(12)
console.log(HarryPotter.getAvailability())
HarryPotter.sell()
HarryPotter.sell(20)
console.log(HarryPotter.getAvailability())
