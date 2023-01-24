function changeColor(color) {
    return function() {
        document.body.style.backgroundColor = color;
    }
    
};

// document.querySelector("#blue").addEventListener("click", () => changeColor("#0f62fe"));
// document.querySelector("#pink").addEventListener("click", () => changeColor("#ff7eb6"));
// document.querySelector("#green").addEventListener("click", () => changeColor("#42be65"));

// ********* OR **********

const changetoBlue = changeColor("#0f62fe");
const changetoPink = changeColor("#ff7eb6");
const changetoGreen = changeColor("#42be65");

document.querySelector("#blue").addEventListener("click", changetoBlue);
document.querySelector("#pink").addEventListener("click", changetoPink);
document.querySelector("#green").addEventListener("click", changetoGreen);