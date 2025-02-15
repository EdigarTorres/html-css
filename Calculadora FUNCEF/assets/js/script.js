document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById("value").value;
    const fee = document.getElementById("fee").value / 100;
    const time =document.getElementById("time").value;

    const total = (2*value)  * ((((1 + fee)**time)-1)/fee);

    document.getElementById("total").innerHTML = ("R$ " + total.toFixed(2).replace(".",","))
})