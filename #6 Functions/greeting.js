//Greeting according to the time of the day
// new Date()
// Creates a Date object
// Represents the current date and time (according to the user’s system clock)

function greet(name) {
    const date = new Date();
    console.log(date); // 2026-01-20T14:35:10.123Z is ISO timestamp in UTC(Universal Time Coordinated)- aka GMT(Greenwich Mean Time) aka Z(Zulu time)
    console.log(date.toString()); // Wed Jan 20 2026 14:35:10 GMT...
    const hours = new Date().getHours();
    console.log(hours); // 0-23
    const timeOfDay = (hours < 12 ? "Good morning" : 
        (hours < 18 ? "Good afternoon" : "Good evening"));
    console.log(timeOfDay + ", " + name + "!");
}

greet("Abi");