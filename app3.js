for (let step = 0; step < 10; step++) {
    console.log(step)
}

while (true) {
    if (true) {
        break
    }
}

for (let step = 99; step > 0; step--) {
    console.log(step + " bottles of beer on the wall! " + step + " bottles of beer! You take one down and pass it around! ")
}

let bools = [true, true, false, true, false, true, true, true]

bools.forEach(element => {
    if (element) {
        console.log(element)
    }
});

var str = "apples"

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }