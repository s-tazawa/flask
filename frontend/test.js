var person = {
    name: "Brendan Eich",
    hello: function(thing) {
      console.log(this + " says hello " + thing);
    }
  }
  
  // this:
  person.hello("world")
  
  // desugars to this:
  person.hello.call(person, "world");