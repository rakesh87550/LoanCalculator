// fetch form data
document.querySelector('#loan-form').addEventListener('submit', function(e)
{
    // fetch all values
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    
    const principle = parseFloat(amount);
    const calculatedInterest = parseFloat(interest)/100/12;
    const calculatedPayments = parseFloat(years)*12;
    // compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle*x*calculatedInterest)/(x-1);
    
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principle).toFixed(2);
    } else {
        alert("Please Check Your Numbers");
    }
    e.preventDefault();
});