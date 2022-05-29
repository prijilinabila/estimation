var selectitem = document.getElementById('dropdown');
var add = document.getElementById('btn');
add.addEventListener('click',accessories);
function accessories(){
    var selectedacces = selectitem.value;
    if(selectedacces=='Door'){
        var items = ['frame','door','screw','stopper'];
    }
    else if(selectedacces=='Window'){
        var items = ['frame','glass','screw','stopper'];
    }
     else if(selectedacces=='fan'){
        var items = ['coke','regulator','screw','stopper'];
     }
    else{
    var items = ['grill','lock','screw','stopper'];
    }
    var table = '<tr>'+
    '<td>Accessories</td>'+
    '<td>Unit Price</td>'+
    '<td>Quantity</td>'+
    '<td>Price</td>'+       
    '<td>Action</td>'+
    '</tr>';
    for(i=0;i<items.length;i++){
        table += '<tr>'+
                 '<td>'+items[i]+'</td>'+
                 '<td ><input type="number" id="unitprice'+i+'"></td>'+
                 '<td ><input type="number" id="qty'+i+'"></td>'+
                 '<td ><input type="number" id="price'+i+'"></td>'+
                 '<td ><input type="button" value="X" id="clear'+i+'"></td>'+
                 '</tr>';
                 
    } 
document.getElementById('tblcontent').innerHTML = table;
addrow = '<input type="button" value="+" id="addrow">';
document.getElementById('addnewdiv').innerHTML = addrow;

    var price0 = document.getElementById("qty0");
    price0.addEventListener("keyup", function() {
            calculate(0);
        });

    var price1 = document.getElementById("qty1");
    price1.addEventListener("keyup", function() {
            calculate(1);
        });

    var price2 = document.getElementById("qty2");
    price2.addEventListener("keyup", function() {
            calculate(2);
        });

    var price3 = document.getElementById("qty3");
    price3.addEventListener("keyup", function() {
            calculate(3);
        });
        
        
        var price0 = document.getElementById("clear0");
        price0.addEventListener("click", function() {
                clearall(0);
            });
            var price0 = document.getElementById("clear1");
        price0.addEventListener("click", function() {
                clearall(1);
            });
            var price0 = document.getElementById("clear2");
        price0.addEventListener("click", function() {
                clearall(2);
            });
            var price0 = document.getElementById("clear3");
        price0.addEventListener("click", function() {
                clearall(3);
            });
            var newbtn = document.getElementById("addrow");
            newbtn.addEventListener("click",function(){
                addrow1();
            })

           
}
function calculate(i){
var a = document.getElementById("unitprice"+i).value;
var b = document.getElementById("qty"+i).value;
document.getElementById("price"+i).value = a*b;
}
    
function clearall(i){
    
document.getElementById("unitprice"+i).value ="";
document.getElementById("qty"+i).value = "";
document.getElementById("price"+i).value ="";

}
function addrow1(){
     var newrow=  '<tr>'+
                 '<th><input type="text" id="item'+i+'"></th>'+
                 '<td ><input type="number" id="unitprice'+i+'"></td>'+
                 '<td ><input type="number" id="qty'+i+'"></td>'+
                 '<td ><input type="number" id="price'+i+'"></td>'+
                 '<td ><input type="button" value="X" id="clear'+i+'"></td>'+
                 '</tr>';
    var table = document.getElementById('tblcontent');
    table.insertRow(5).innerHTML = newrow;
                 //document.getElementById('tblcontent').innerHTML += newrow;
}