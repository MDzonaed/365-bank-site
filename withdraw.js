document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldValue);


    withdrawField.value = '';

    if(isNaN(withdrawFieldAmount)){
        alert('Please provide a valid number');
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = withdrawTotal.innerText;
    const withdrawFieldAmountValue = parseFloat(withdrawTotalAmount);


    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = previousBalanceTotal.innerText;
    const previousAmountTotal = parseFloat(previousBalanceAmount);

    if(withdrawFieldAmount > previousAmountTotal){
        alert('Tumar Bank Atho Usd Nai')
        return;
    }


    const currentWithdrwTotal = withdrawFieldAmount + withdrawFieldAmountValue;
    withdrawTotal.innerText = currentWithdrwTotal;


    const fullBalanceTotal = previousAmountTotal - withdrawFieldAmount;
    previousBalanceTotal.innerText = fullBalanceTotal;
})