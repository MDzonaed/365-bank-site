document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = depositField.value;
    const newDepositValue = parseFloat(depositFieldValue);


    depositField.value = '';


    const depositTotal = document.getElementById('deposit-total');
    const depositTotalElement = depositTotal.innerText;
    const oldDepositTotal = parseFloat(depositTotalElement);


    const totalDepositAmount = oldDepositTotal + newDepositValue;

    depositTotal.innerText = totalDepositAmount;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalElement = balanceTotal.innerText;
    const balanceTotalElementValue = parseFloat(balanceTotalElement);

    const currentBalanceBothSide = balanceTotalElementValue + totalDepositAmount;

    balanceTotal.innerText = currentBalanceBothSide;
})