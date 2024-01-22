const buttons = document.querySelectorAll('button')
console.log(buttons)
// const changeClass = () => {
//     document.body.classList.toggle('black')
// }
//let buttons=['','','','','','','','',]


let colors= ['black','black','yellow','yellow','blue','blue','orange','orange','pink','pink']
buttons.forEach((b) => {

b.addEventListener('click', () =>{
    b.classList.toggle('black')
    })
})



// const changeColor = () => {
// buttons.classList.toggle(colors)
    
//    //document.getElementById('button').style.background='black';
    
// }

// button.addEventListener('click', () =>{
//     sendMessage()
//     changeClass()
//     })

//button.addEventListener('click', changeColor)