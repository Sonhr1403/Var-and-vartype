// function cong() {
//     let numb1 = document.getElementById('Number1').value;
//     let numb2 = document.getElementById('Number2').value;
//     let Result = numb1 + numb2;
//     document.getElementById("Result").innerHTML = Result;
// }
//
// function tru() {
//     let numb1 = document.getElementById('Number1').value;
//     let numb2 = document.getElementById('Number2').value;
//     let Result = numb1 - numb2;
//     document.getElementById("Result").innerHTML = Result;
// }
//
// function nhan() {
//     let numb1 = document.getElementById('Number1').value;
//     let numb2 = document.getElementById('Number2').value;
//     let Result = numb1 * numb2;
//     document.getElementById("Result").innerHTML = Result;
// }
//
// function chia() {
//     let numb1 = document.getElementById('Number1').value;
//     let numb2 = document.getElementById('Number2').value;
//     let Result = numb1 / numb2;
//     document.getElementById("Result").innerHTML = Result;
// }



function tinh (toantu) {
    let numb1 = document.getElementById('Number1').value;
    let numb2 = document.getElementById('Number2').value;
    numb1 = parseInt(numb1);
    numb2 = Number(numb2);
let Result;
    switch (toantu) {
        case "+":
            Result = numb1 + numb2;
            break;
        case "-":
            Result = numb1 - numb2;
            break;
        case "*":
            Result = numb1 * numb2;
            break;
        case "/":
            if (numb2 === 0) {
                Result = "Không tính được"
            } else {
                Result = numb1 / numb2;
            }
    }
    document.getElementById("Result").innerHTML = Result;
}
