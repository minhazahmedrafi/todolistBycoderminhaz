// // let myHeading = document.getElementById('heading1');
// // myHeading.innerHTML = 'Hello Minhaz';

// // let tagName = document.getElementsByTagName('h1');

// // let para = document.getElementsByClassName('para');

// function $(selector) {
//     return document.querySelector(selector);
// }

// let btn = $('#clickMe');
// let colors = ['red', 'green', 'yellow', 'blue', 'purple'];
// let i = 0;
// let isShow = false;
// btn.style.backgroundColor = "brown"
// btn.style.color = "orange"

// btn.addEventListener('click', function () {
//     btn.style.background = colors[i]
//     para.style.background = colors[i]
//     let h1 = $('#heading1');
//     h1.innerHTML = 'Hello coderminhaz';
//     h1.style.background = colors[i];
//     if (i >= colors.length) {
//         i = 0
//     } else {
//         i++
//     }

//     if(isShow){
//         para.style.visibility = "hidden"
//         isShow = false
//         btn.innerHTML = "Show Para"
//     }else{
//         para.style.visibility = "visible"
//         isShow = true
//         btn.innerHTML = "Hide Para"
//     }
// })
// let heading = $('#heading1')

// // heading.style.color = 'orange'
// // heading.style.background = 'brown'
// // heading.style.padding = '20px'
// // heading.style.fontFamily = 'Arial'

// let h1Style = {
//     background: "brown",
//     color: "orange",
//     padding: "20px",
//     fontFamily: "Arial"

// }
// Object.assign(heading.style, h1Style)

// let para = $('#para');
// let paraStyle = {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: "24px",
//     padding: "20px",
//     backgroundColor: "purple"
// }
// Object.assign(para.style, paraStyle)







// let root = document.querySelector('#root');

// let jumboDiv = document.createElement('div');
// jumboDiv.className = 'jumbotron';
// jumboDiv.setAttribute('id','my-jumb');

// let h1 = document.createElement('h1');
// h1.innerHTML = "<strong>Hello Bangladesh</strong>"
// h1.className = "display-2 py-5"
// jumboDiv.appendChild(h1)

// root.appendChild(jumboDiv)
// // Jumbo
// jumboDiv.style.background = "green"
// jumboDiv.style.height = "200px";
// jumboDiv.style.width = "100%";
// // h1
// h1.style.color = "red";
// h1.style.textAlign = "center"

let heading = document.querySelector('.heading');
heading.style.color = 'red'
heading.style.marginBottom = '10px'

let headSpan = document.querySelector('.myInfo');
headSpan.style.color = 'purple'
headSpan.style.fontWeight = '500'
headSpan.style.marginBottom = '10px'



let inputBox = document.querySelector('#nameField');
inputBox.style.padding = '12px'
let ul = document.querySelector('#nameList')
inputBox.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        let name = event.target.value;
        (createLi(ul,name))
        event.target.value = ''
    }
})

function createLi(ul,name) {
    let li = document.createElement('li')
    li.className = "list-group-item my-2 bg-dark text-light d-flex";
    li.innerHTML = name;

    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.className = 'ms-auto'
    span.style.color = 'red'
    span.style.cursor = 'pointer'
    span.style.userSelect = 'none'
    li.appendChild(span);

    span.addEventListener('click',function(){
        ul.removeChild(li)
    })


    ul.appendChild(li)
}