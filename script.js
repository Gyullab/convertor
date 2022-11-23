const inputbox1 = document.getElementById('first-box')
const inputbox2 = document.getElementById('second-box')
const leftButtons = document.querySelectorAll(".first-half button");
const rightButtons = document.querySelectorAll(".second-half button");
const rates1=document.querySelector('.rates1')
const rates2=document.querySelector('.rates2')


const url = 'https://api.exchangerate.host/latest?'
let base = '';

function onChangeCurrency(event, whichSide, currency) {
    if (whichSide === 'left') {
        fetch(`${url}base=${base}&symbols=${currency}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            rates1.innerHTML=`1${currency}`;
        })

        
        base = currency;        
        [...leftButtons].forEach((button) => {
            button.classList.remove('activeButton')
        })
    }
    if (whichSide === 'right') {
        
        [...rightButtons].forEach((button) => {
            button.classList.remove('activeButton')
        })
        fetch(`${url}base=${base}&symbols=${currency}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);                
                const v1 = inputbox1.value
                const mezenne = data.rates[currency]
                inputbox2.value = v1 * mezenne
                rates2.innerHTML=`${data.rates[currency]}`
            });
    }
    event.target.classList.add('activeButton')
    console.log(whichSide, currency)
    }


