const counter1 = document.querySelector('#counter1')
const counter2 = document.querySelector('#counter2')
const counter3 = document.querySelector('#counter3')
const counter4 = document.querySelector('#counter4')
const counter5 = document.querySelector('#counter5')
const counter6 = document.querySelector('#counter6')
const counter7 = document.querySelector('#counter7')
const counter8 = document.querySelector('#counter8')
const counter9 = document.querySelector('#counter9')
const counter10 = document.querySelector('#counter10')
const counter11 = document.querySelector('#counter11')
const counter12 = document.querySelector('#counter12')

const btns = document.querySelector('.btn')

let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
let count7 = 0
let count8 = 0
let count9 = 0
let count10 = 0
let count11 = 0
let count12 = 0

    btns.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('reset')) {
            count1 = 0
            count2 = 0
            count3 = 0
            count4 = 0
            count5 = 0
            count6 = 0
            count7 = 0
            count8 = 0
            count9 = 0
            count10 = 0
            count11 = 0
            count12 = 0
    }
    counter1.textContent = count1
    counter2.textContent = count2
    counter3.textContent = count3
    counter4.textContent = count4
    counter5.textContent = count5
    counter6.textContent = count6
    counter7.textContent = count7
    counter8.textContent = count8
    counter9.textContent = count9
    counter10.textContent = count10
    counter11.textContent = count11
    counter12.textContent = count12

})



document.addEventListener('keydown', (e) => {
    if (event.keyCode == '49') {
        count1++
    } else if (event.keyCode == '50') {
        count2++
    } else if (event.keyCode == '51') {
        count3++
    } else if (event.keyCode == '52') {
        count4++
    } else if (event.keyCode == '53') {
        count5++
    } else if (event.keyCode == '54') {
        count6++
    } else if (event.keyCode == '55') {
        count7++
    } else if (event.keyCode == '56') {
        count8++
    } else if (event.keyCode == '57') {
        count9++
    } else if (event.keyCode == '48') {
        count10++
    } else if (event.keyCode == '189') {
        count11++
    } else if (event.keyCode == '187') {
        count12++
    }

    counter1.textContent = count1
    counter2.textContent = count2
    counter3.textContent = count3
    counter4.textContent = count4
    counter5.textContent = count5
    counter6.textContent = count6
    counter7.textContent = count7
    counter8.textContent = count8
    counter9.textContent = count9
    counter10.textContent = count10
    counter11.textContent = count11
    counter12.textContent = count12
})