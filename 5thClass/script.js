function displayData(){
var data=[
{'firstname':'Rizwan','lastname':'Akhter','address':'Karachi','gender':'Male'},
{'firstname':'Asif','lastname':'Akhter','address':'Karachi','gender':'Male'},
{'firstname':'Kiran','lastname':'A . wadood','address':'Karachi','gender':'Male'},
{'firstname':'Ali','lastname':'Jazim','address':'Karachi','gender':'Male'},
{'firstname':'Salman','lastname':'Batool','address':'Karachi','gender':'Male'}

];
var table ="";
for(var i in data){

    table+="<tr>";
        table+= "<td>" +data[i].firstname+"</td> "
         +"<td>"+data[i].lastname+"</td> "
         +"<td>"+data[i].address+"</td>"
         +"<td>"+data[i].gender+"</td>";
    table+="</tr>";
}
document.getElementById('result').innerHTML=table;

}
function toPrint() {
	var el=document.getElementById("table");
	el.setAttribute('border', '1px');
	el.setAttribute('cellpadding', '10');
	el.setAttribute('class', 'table table-bordered');
	el.style.borderCollapse='collapse';
	
	newPrint=window.open("");
	newPrint.document.write(el.outerHTML);
	newPrint.print();
	newPrint.close();
}
