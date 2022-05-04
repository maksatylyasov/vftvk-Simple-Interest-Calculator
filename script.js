

function compute()
{
    //Set up Variables
    var principal = document.getElementById("principal").value;
        //check if the amount more than 0
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    //Displays the final interest rate
    if(principal>0)
        document.getElementById("result").innerHTML="If you deposit <highlight>"+principal+"</highlight>,\<br\>at an interest rate of <highlight>"+rate+"%</highlight>\<br\>You will receive an amount of <highlight>"+interest+"</highlight>,\<br\>in the year <highlight>"+year+"</highlight>\<br\>";
    


}
        