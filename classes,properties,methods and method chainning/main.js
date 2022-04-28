
// creating classes and its properties
class User{
    constructor(name,email){
            this.name=name;
            this.email=email;
    }
    login(){
       console.log( this.email,' is logged in');
    }
    logout(){
        console.log(this.email,' is logged out');
    }
}

// var user1=new User('danish','aljnab@gmail.com');
// user1.login();
// user1.logout();

// console.log(user1);
// console.log(user1.name);
// console.log(user1.email);




// mehthod chaining
class Student{
    constructor(name,email){
            this.name=name;
            this.email=email;
            this.score=0;
    }
    login(){
       console.log( this.email,' is logged in');
       return this;
    }
    logout(){
        console.log(this.email,' is logged out');
        return this;
    }
    setScore(){
       this. score++;
        console.log(this.score);
        return this;
    }
}

var student1=new Student('aqib','aqib@gmail.com',);
student1.login().setScore().setScore().logout();