let countEl= document.getElementById("count-el")
let storeEl= document.getElementById("store-el")
console.log(countEl)
let count = 0
function increment(){
    count =count + 1
    countEl.innerText = count
}
function save(){
      let countStr = count + " - "
      storeEl.textContent += countStr
      count.textContent=0
    count=0
}
function reset(){
    let countStr = count + " - "
    storeEl.innerText += countStr
    count.innerText=0
    count=0
}