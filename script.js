function compute()
{
    if(validation())
    {
        //Calculate the interest
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        alert(interest)
            document.getElementById("result").innerHTML = `<br>If you deposit <mark>` + principal +`</mark>, <br>
                                                        at an interest rate of <mark>` + rate +`% </mark>. <br>
                                                        You will receive an amount of <mark>`+ interest +`</mark>, <br>
                                                        in the year `+ year +`.`;
        
    }

}

function updateRate()
{
    //Display the rate in the span, based on the range
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + `%`;
}

function validation()
{
    var principal = document.getElementById("principal").value;
    if(principal != "")
    {
        //If principal is less that zero it should display a msg.
        if(parseInt(principal) <= 0)
        {
            alert("Enter a positive number.");
            principal.focus;
            return false;
        }
    } 
    return true;
}