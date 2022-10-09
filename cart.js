
function insertRow(id,name1,price){
    var x=document.getElementById("table").insertRow(1);
    var y=x.insertCell(0);
    var z=x.insertCell(1);
    var n=x.insertCell(2);
    var m=x.insertCell(3);
    var total=0;
    y.innerHTML=id;
    z.innerHTML=name1;
    n.innerHTML=price;
    var col_len=document.getElementById("table").rows.length;
    for(var i=1;i<col_len-1;i++){
        var x=document.getElementById("table").rows[i].cells.item(2).innerHTML;
        x=parseInt(x,10);
        console.log(document.getElementById("table").rows[i].cells.item(2).innerHTML);
        total=total+x;
        console.log(total,col_len);
    }
    document.getElementById("total").innerHTML=total;
    }