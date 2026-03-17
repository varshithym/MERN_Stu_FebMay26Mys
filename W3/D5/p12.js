class book {
    constructor(title,author,pages,isavailable) {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isavailable;
        
    }
    borrow() {
        this.isAvailable = false;
        console.log(`${this.title} has benn borrowed.`);
    }
    returnbook (){
        this.isAvailable = true;
        console.log(`${this.title} has been returned`);

    }
}