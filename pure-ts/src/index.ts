/* class User {
    email:string
    private name:string
    private readonly city:string = "Kodoth"
    constructor(email:string, name:string) {
        this.email = email;
        this.name = name;
    }
} */


class User {
    private _courseCount = 1;
    readonly city: string = "Kodoth"
    constructor(public email: string, public name: string) { }

    set courseCount(courseNum){
        if(courseNum < 1){
            throw new Error("Course Count should be greater than 1");
        }
        this._courseCount = courseNum;
    }
    get courseCount():number{
        return this._courseCount;
    }
    get getEmail():string{
        return `My Email ${this.email}`

    }
}

const kp = new User("kp@k.com", "Krishnaprasad");

console.log(kp.city); // Not accessible