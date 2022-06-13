
let site = {
  siteName: "W3Docs",
  bookName: "Javascript",

  get fullName() {
    return `Welcome to ${this.siteName}, ${this.bookName} book`;
  },

  set fullName(value) {
    [this.siteName, this.bookName] = value.split(" ");
  }
};

console.log(site.fullName);

site.fullName = "W3 CSS";
console.log(site.siteName); 
console.log(site.bookName); 


Object.defineProperty(site, "getFullName", {
    get : function () {
        return `Welcome to ${this.siteName}, ${this.bookName} book`;
    }
});

Object.defineProperty(site, "changeFullName", {
    set : function (value) {
        [this.siteName, this.bookName] = value.split(" ");
    }
});

site.changeFullName = "W3 CSS";
console.log(site.fullName);
console.log(site.siteName); 
console.log(site.bookName); 


