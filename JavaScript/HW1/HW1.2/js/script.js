function calculatePrice(){
    let numberOfTablets= document.getElementById("NumberOfTabletsID").value;
    let tabletPrice= document.getElementById("TabletPriceID").value;
    let taxRate= document.getElementById("TaxRateID").value;

    let tabletPriceNoTax= tabletPrice/ (1+ taxRate / 100);
    

    document.getElementById("result").style.display="inline-block";
    document.getElementById("calculatedPrice").innerHTML= (tabletPriceNoTax * numberOfTablets).toFixed(2);
}

document.getElementById("btn1").addEventListener("click", calculatePrice);