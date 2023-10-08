type MyBool = true | false;


const message = "Hello World!";


// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();



const user = {
    name: "Daniel",
    age: 26,
  };
  user.location; // [ts] Property 'location' does not exist on type '{ name: string; age: number; }'.

  export {}