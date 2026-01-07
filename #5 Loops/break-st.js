// break immediately terminates a loop when a condition is met
for (let i=0; i<=10; i++){
    if (i===5){
        console.log("Breaking the loop at "+i);
        break;
    }
    console.log(i);
}