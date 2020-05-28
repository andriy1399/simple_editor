'use strict'

// those functions get desired selectors from DOM document
const getS = (selector) => document.querySelector(selector);
let getSAll = (s) => document.querySelectorAll(s);
//==================================================


/* start the function which displays edit block and inserts innerHTML from the top of the block into the textarea  */
let openEditBlock = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
}
/* end the function which displays edit block and inserts innerHTML from the top of the block into the textarea  */

/*start the functions which do focus efect of the button edit */
getS('.btn-edit').onfocus = function () {
    this.classList.add('shadow-for-focus-edit')
}
getS('.btn-edit').onblur = function () {
    this.classList.remove('shadow-for-focus-edit')
}
/*end the functions which do focus efect of the button edit */


/* start the function which displays style block and turn off edit block if need be.*/
let openStyleBlock = function () {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
}
/* end the function which displays style block and turn off edit block if need be.*/

/*start the functions which do focus efect of the button style */
getS('.btn-style').onfocus = function () {
    this.classList.add('shadow-for-focus-style')
}
getS('.btn-style').onblur = function () {
    this.classList.remove('shadow-for-focus-style')
}
/*end the functions which do focus efect of the button style */

/* start the function which seves some html code from textarea and tranform it in text */
let saveCode = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}
/* end the function which seves some html code from textarea and tranform it in text */


/* this function make method of choice the radio which marking font size in top block */
let fontSize = function () {
    getS('.top-block').style.fontSize = event.target.value;
}
/* end the function what make method of choice the radio which marking font size in top block */

/* start the function what make first option disablet and turn font-family of top-block in font-family checked option value*/
let getOption = function () {
    event.target.options[0].disabled = true;
    getS('.top-block').style.fontFamily = event.target.value;
}
/* end the function what make first option disablet and turn font-family of top-block in font-family checked option value*/

//  -------------------------------------------  is NOT interesting here, only focus and blur!! --------------------------------------

// just focus efect for select
getS('.select-font-family').onfocus = function () {
    this.classList.add('focus-select')
}
getS('.select-font-family').onblur = function () {
    this.classList.remove('focus-select')
}
// end functions for focus efect for select
// just focus efect for btn-gray which for  block of colors;
getS('.btn-text-color').onfocus = function () {
    this.classList.add('focus-btn-choice-color')
}
getS('.btn-text-color').onblur = function () {
    this.classList.remove('focus-btn-choice-color')
}

getS('.btn-bg-color').onfocus = function () {
    this.classList.add('focus-btn-choice-color')
}
getS('.btn-bg-color').onblur = function () {
    this.classList.remove('focus-btn-choice-color')
}
// end functions for  focus efect for btn-gray which for  block of colors;

// just focus efect for textarea
getS('.edit-area').onfocus = function () {
    this.classList.add('focus-select')
}
getS('.edit-area').onblur = function () {
    this.classList.remove('focus-select')
}
// end functions for focus efect for textarea

// just focus efect for btn-create-list
getS('.btn-create-list').onfocus = function () {
    this.classList.add('focus-btn-create')
}
getS('.btn-create-list').onblur = function () {
    this.classList.remove('focus-btn-create')
}
// end functions for focus efect for btn-create-list

// just focus efect for btn-create-table
getS('.btn-create-table').onfocus = function () {
    this.classList.add('focus-btn-create')
}
getS('.btn-create-table').onblur = function () {
    this.classList.remove('focus-btn-create')
}
// end functions for focus efect for btn-create-table

//  -------------------------------------------  the end of boring zone  ---------------------------------------------------


// this loop fills some colors from array all boxes 

let colorsArray = ['blue', 'red', 'white', 'yellow', 'pink', 'black', 'orange', 'green', 'grey'];

for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colorsArray[i];
}
// end the loop which fills some colors from array all boxes 

//    here 
// if colorText = true , we get color from boxes and make the text color ;
// if bg  = true , we get color from boxes and make in background ;
// Sorry about my English)
let colorText;
let bg;
let getColorBox = function () {
    getS('.colors').classList.remove('hide');
    colorText = false;
    bg = false;
    if (event.target.value === 'Color of text') {
        colorText = true;
    } else if (event.target.value === 'Background color') {
        bg = true;
    }
}

let textColorF = function () {
    if (colorText === true) {
        getS('.top-block').style.color = event.target.style.backgroundColor;
    } else if (bg === true) {
        getS('.top-block').style.backgroundColor = event.target.style.backgroundColor;
    }
    getS('.colors').classList.add('hide');
    colorText = false;
    bg = false;
}

// =======================================================================================================================

/* start function bold style for text */
let fontWeight = function () {
    if (event.target.checked) {
        getS('.top-block').classList.add('text-bold');
    } else getS('.top-block').classList.remove('text-bold');
}
/* end function bold style for text */


/* start function cursive style for text */
let fontStyle = function () {
    if (event.target.checked) {
        getS('.top-block').classList.add('text-cursive');
    } else getS('.top-block').classList.remove('text-cursive');
}
/* end function cursive style for text */

// when we are clicking add button , form in second block reset. And second block add class show 
let windowAdd = function () {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
    getS('.form-choose').reset()
    getS('.create-list').classList.remove('show');
    getS('.create-table').classList.remove('show')
    getS('.block-for-table').classList.remove('big-block')
}
//=================================================================
// start the functions which create some list.

const list = document.forms['form-list'];
let createList = () => {
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}; margin-left: 20px">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li> Text item ${i+1}</li>`;
    }


    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    getS('.column-flex').reset();
}
// end the functions which create some list.

//this function show block where we can create list
let showBlockCreateList = function () {
    getS('.create-list').classList.add('show');
    getS('.block-for-table').classList.remove('big-block');
    getS('.form-create-table').reset();
    getS('.create-table').classList.remove('show');
}
//======================================================

//this function show block where we can create table
let showBlockCreateTable = function () {
    getS('.create-list').classList.remove('show');
    getS('.column-flex').reset();
    getS('.block-for-table').classList.add('big-block');
    getS('.create-table').classList.add('show');
}
//======================================================

// start the function which create some table whan we are clicking this button.
let table = getS('.form-create-table');
let makeTable = function () {
    let countTR = table.countTR.value;
    let countTD = table.countTD.value;
    let widthTD = +table.widthTD.value;
    let heightTD = +table.heightTD.value;
    let widthBorder = +table.widthBD.value;
    let typeBorder = table.typeBD.value;
    let colorBorder = table.colorBD.value;
    let tD = ''
    getS('.edit-area').value += `<table>`;

    for (let i = 0; i < countTD; i++) {
        tD += `<td style="width: ${widthTD}px; height: ${heightTD}px; border: ${widthBorder}px ${typeBorder} ${colorBorder}" >TD</td>` + ' ';
    }
    for (let i = 0; i < countTR; i++) {
        getS('.edit-area').value += `<tr>${tD}</tr>`
    }

    getS('.edit-area').value += '</table>';

    getS('.second').classList.remove('show');
    getS('.first').classList.add('show');
    table.reset()
}
// end the function which create some table whan we are clicking this button.
