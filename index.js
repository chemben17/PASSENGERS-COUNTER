let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let left = 0;
let entered = 0;

// let entered = 0

function increment() {
    count += 1
    countEl.textContent = count
    entered = count;
}

function save() {
    let entry = 0;
    entry++;
    // let countStr = count + " - "
    // saveEl.textContenttStr
    // countEl.textContent = 0
    // count = 0
    // let totalNu = count;
    let combine = ` on your ${entry} trip, you have ${entered} people entered the bus from the pack, and ${left} left the bus before it got to the final terminal \n`
    saveEl.textContent += combine;
    count = 0;
    entered = 0;
    countEl.textContent = count
    left = 0;
    if (entry >= 24)
        entry = 0;
    // console.log(count);
}
function decrement () {
    if (count >= 1)
    {
        left++
        // let numberleft = count - 1
        // countEl.innerText = numberleft;
        
        count--;
        countEl.innerText = count;
        // entered = count;
    }
}

console.log("Let's count people on the subway!")
