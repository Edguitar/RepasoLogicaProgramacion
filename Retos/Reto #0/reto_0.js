for (var i = 1; i <= 100; i++) {
    var divisibleByThree = i % 3 == 0
    var divisibleByFive = i % 5 == 0
    if (divisibleByThree && divisibleByFive) {
        console.log("fizzbuzz")
    } else if (divisibleByThree) {
        console.log("fizz")
    } else if (divisibleByFive) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}