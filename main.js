const button = document.getElementById('button');
button.addEventListener('click',function(){
    const logInHide= document.getElementsByClassName('login_area');
    logInHide[0].style.display="none";
    const show = document.getElementsByClassName('show');
    show[0].style.display="block";
});


//Deposit Betton

const depoditBtn = document.getElementById('button1');
depoditBtn.addEventListener('click',function(){
    const depoditInput = document.getElementById('depoditAmount').value;
    const depositAmount = parseFloat(depoditInput);

    updateSpanText('currentDeposit',depositAmount);
    updateSpanText('currentBlance',depositAmount);

    document.getElementById('depoditAmount').value='';
});


//Withdeow Betton

const withdeowButton = document.getElementById('button2');
withdeowButton.addEventListener('click',function(){
    const withdrowInput = document.getElementById('withdrowInput').value;
    const withdrowNumber = parseFloat(withdrowInput);

    updateSpanText('withdrowSpan', withdrowNumber);
    updateSpanText('currentBlance', -1*withdrowNumber);

});

function updateSpanText(id, depositAmount){
    const current = document.getElementById(id).innerText;
    const currentNum= parseFloat(current);
    const totle = currentNum + depositAmount;
    document.getElementById(id).innerText= totle;
};


