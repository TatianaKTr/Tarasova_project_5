let x = '';
let y = '';
let sign = '';
let end = false;

const m = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const act =  ['+', '-', '*', '/'];


const out = document.querySelector('.calc-screen p');

function clearAll() {
    let x = '';
    let y = '';
    let sign = '';
    let end = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {

    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    
    out.textContent = '';

    // if(event.target.classList.contains('+/-')) {
    //     x = -1 * x;
    // }
    // out.textContent = x;
        
    const key = event.target.textContent;
 
    // если нажата цифра
    if (m.includes(key)) {

        if (y === '' && sign === '') {
            x += key;
            out.textContent = x;
            }
        else if (x !== '' && y !== '' && end) {
            y = key;
            end = false;
            out.textContent = y;
            } 
        else {
            y += key;
            out.textContent = y;
        }
        console.log(x, y, sign)
        return;
        }
    

    // if (key === "back") {
    //     x = x.substring(0, x.length - 1);
    //     y = y.substring(0, x.length - 1);
    //     end = true;
    //     out.textContent = x;
    //     console.log(x, y, sign);
    //     return;
    // };

    // if (key === "+/-") {
    //    if (x !== '') {
    //     x = -1 * x;
    //     }
    //     else{
    //         y = -1 * y;
    //     }
    //     end = true;
    //     out.textContent = x;
    //     console.log(x, y, sign);
    //     return;
    // }
    
  

   // если нажата кнопка действие
    if (act.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(x, y, sign);
        return;
     }
    // если нажата кнопка равно делаем вычисления
    if (key === "=") {
        if ( y==="") y = x;
        switch (sign) {
            case '+':
                x = (+x) + (+y);
                break;
            case '-':
                x = x - y;
                break;
            case '*':
                x = x * y;
                break;
            case '/':
                x = x / y;
                break;
         }
        end = true;
        out.textContent = x;
        console.log(x, y, sign);

    };
      
};

