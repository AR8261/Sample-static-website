function add2cart(x,myid)
{  var totalsum=localStorage.getItem("sum");
    if (!totalsum){
        totalsum=0;
    }
var dic={
    "py-1" : "python1",
    "py-2" : "python2",
    "py-3" : "python3",
    "py-4" : "python4",
    "py-5" : "python5",
    "jv-1" : "java1",
    "jv-2" : "java2",
    "jv-3" : "java3",
    "jv-4" : "java4",
    "jv-5" : "java5",
    "cp-1" : "cplus1",
    "cp-2" : "cplus2",
    "cp-3" : "cplus3",
    "hm-1" : "html1",
    "hm-2" : "html2",
    "hm-3" : "html3",
    "hm-4" : "html4",
    "js-1" : "JScript1",
    "js-2" : "JScript2"

}

    if (!localStorage.getItem(dic[myid])){
        var totalsum=parseFloat(totalsum)+ parseFloat(x);
        localStorage.setItem("sum", totalsum);
        localStorage.setItem(dic[myid], myid);
        window.alert('Successfully added to cart')
    }
    else{
        window.alert('You have this course in your cart');
    }
   
}

function clearcart()
{
    localStorage.setItem("sum", 0);
    document.getElementById("cart").value=0;
    const program_storages = ["python1","python2","python3","python4","python5","java1","java2","java3","java4","java5","cplus1","cplus2","cplus3","html1","html2","html3","html4","JScript1","JScript2"]
    program_storages.forEach(function(item){localStorage.setItem(item, "");});
    const program_container = ["shop-py-1","shop-py-2","shop-py-3","shop-py-4","shop-py-5","shop-jv-1","shop-jv-2","shop-jv-3","shop-jv-4","shop-jv-5","shop-cp-1","shop-cp-2","shop-cp-3","shop-hm-1","shop-hm-2","shop-hm-3","shop-hm-4","shop-js-1","shop-js-2"]
    program_container.forEach(function(item){document.getElementById(item).innerHTML="";});
    const program_clear = ["claer-py-1","claer-py-2","claer-py-3","claer-py-4","claer-py-5","claer-jv-1","claer-jv-2","claer-jv-3","claer-jv-4","claer-jv-5","claer-cp-1","claer-cp-2","claer-cp-3","claer-hm-1","claer-hm-2","claer-hm-3","claer-hm-4","claer-js-2"]
    program_clear.forEach(function(item){document.getElementById(item).remove();});
    
    document.getElementById("tps").value=0;
    document.getElementById("tvq").value=0;
    document.getElementById("total").value=0;
}
function checkmy(sum)
{
      let taxps=parseFloat((sum*0.05).toFixed(2));
      document.getElementById("tps").value=taxps;
      let tvq=parseFloat(sum*0.09975).toFixed(2);
      document.getElementById("tvq").value=tvq;
      var subtotal=(parseFloat(sum)+parseFloat(taxps)+parseFloat(tvq)).toFixed(2);
      document.getElementById("total").value=subtotal;
}
function remove(x,shop_container,clear_container,price){
    localStorage.setItem(x, '');
    document.getElementById(shop_container).innerHTML="";
    document.getElementById(clear_container).innerHTML="";           
    var totalsum=parseFloat(localStorage.getItem("sum")-(price)).toFixed(2);
    localStorage.setItem("sum", totalsum);
    document.getElementById("cart").value=totalsum;
    checkmy(totalsum);
    // button.remove();   
}


// function active_tab(){
//     document.getElementById("url").innerHTML=window.location.pathname;
//     document.getElementById("url2").innerHTML=tab_name;
// //  var active=tab_name;
//     // document.getElementById("url2").innerHTML=active;
//     //      if (tab_name == "/main.html"){
//     //         $('base.html #home').addClass('active');
//     //         $('base.html #py').removeClass('active');
//     //         $('base.html #jv').removeClass('active');
//     //         $('base.html #c++').removeClass('active');
//     //  }
//     //  else if (tab_name == "/Python.html")
//     //  {
//     //     $('base.html #home').removeClass('active');
//     //     $('base.html #py').addClass('active');
//     //     $('base.html #jv').removeClass('active');
//     //     $('base.html #c++').removeClass('active');
//     //  }
// }
function create_button(x,shop_container,clear_container,price){
    var button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'Remove';
        button.className = 'btn';
        button.style="width: 100px; background-color: #EFE4B0;"
        button.onclick = function() {
            remove(x,shop_container,clear_container,price);
            };
        var container = document.getElementById(clear_container);
        container.appendChild(button);
}
function showcart(){
    
    // var dic={
    //     "py-1" : "python1",
    //     "py-2" : "python2",
    //     "py-3" : "python3",
    //     "py-4" : "python4",
    //     "py-5" : "python5",
    //     "jv-1" : "java1",
    //     "jv-2" : "java2",
    //     "jv-3" : "java3",
    //     "jv-4" : "java4",
    //     "jv-5" : "java5",
    //     "cp-1" : "cplus1",
    //     "cp-2" : "cplus2",
    //     "cp-3" : "cplus3",
    //     "hm-1" : "html1",
    //     "hm-2" : "html2",
    //     "hm-3" : "html3",
    //     "hm-4" : "html4",
    //     "js-1" : "JScript1",
    //     "js-2" : "JScript2"
    
    // }
    
    // if (localStorage.getItem(dic[myid])==

    var python1=localStorage.getItem("python1");
    var python2=localStorage.getItem("python2");
    var python3=localStorage.getItem("python3");
    var python4=localStorage.getItem("python4");
    var python5=localStorage.getItem("python5");
    var java1=localStorage.getItem("java1");
    var java2=localStorage.getItem("java2");
    var java3=localStorage.getItem("java3");
    var java4=localStorage.getItem("java4");
    var java5=localStorage.getItem("java5");
    var cplus1=localStorage.getItem("cplus1");
    var cplus2=localStorage.getItem("cplus2");
    var cplus3=localStorage.getItem("cplus3");
    var html1=localStorage.getItem("html1");
    var html2=localStorage.getItem("html2");
    var html3=localStorage.getItem("html3");
    var html4=localStorage.getItem("html4");
    var JScript1=localStorage.getItem("JScript1");
    var JScript2=localStorage.getItem("JScript2");


    if (python1 == 'py-1'){
        $("#shop-py-1").load("Python.html #py-1");
        create_button("python1","shop-py-1",'claer-py-1',15.99);
    }
    if (python2 == 'py-2'){
        $("#shop-py-2").load("Python.html #py-2");
        create_button("python2","shop-py-2",'claer-py-2',11.99);
    }
    if (python3 == 'py-3'){
        $("#shop-py-3").load("Python.html #py-3");
        create_button("python3","shop-py-3",'claer-py-3',23.79);
    }
    if (python4 == 'py-4'){
        $("#shop-py-4").load("Python.html #py-4");
        create_button("python4","shop-py-4",'claer-py-4',11.85);
    }
    if (python5 == 'py-5'){
        $("#shop-py-5").load("Python.html #py-5");
        create_button("python5","shop-py-5",'claer-py-5',15.95);
    }
    if (java1 == 'jv-1'){
        $("#shop-jv-1").load("Java.html #jv-1");
        create_button("java1","shop-jv-1",'claer-jv-1',15.99);
    }
    if (java2 == 'jv-2'){
        $("#shop-jv-2").load("Java.html #jv-2");
        create_button("java2","shop-jv-2",'claer-jv-2',23.99);
    }
    if (java3 == 'jv-3'){
        $("#shop-jv-3").load("Java.html #jv-3");
        create_button("java3","shop-jv-3",'claer-jv-3',21.99);
    }
    if (java4 == 'jv-4'){
        $("#shop-jv-4").load("Java.html #jv-4");
        create_button("java4","shop-jv-4",'claer-jv-4',27.99);
    }
    if (java5 == 'jv-5'){
        $("#shop-jv-5").load("Java.html #jv-5");
        create_button("java5","shop-jv-5",'claer-jv-5',24.99);
    }
    if (cplus1 == 'cp-1'){
        $("#shop-cp-1").load("cplusplus.html #cp-1");
        create_button("cplus1","shop-cp-1",'claer-cp-1',21.99);
    }
    if (cplus2 == 'cp-2'){
        $("#shop-cp-2").load("cplusplus.html #cp-2");
        create_button("cplus2","shop-cp-2",'claer-cp-2',27.99);
    }
    if (cplus3 == 'cp-3'){
        $("#shop-cp-3").load("cplusplus.html #cp-3");
        create_button("cplus3","shop-cp-3",'claer-cp-3',21.99);
    }
    if (html1 == 'hm-1'){
        $("#shop-hm-1").load("html.html #hm-1");
        create_button("html1","shop-hm-1",'claer-hm-1',21.99);
    }
    if (html2 == 'hm-2'){
        $("#shop-hm-2").load("html.html #hm-2");
        create_button("html2","shop-hm-2",'claer-hm-2',26.99);
    }
    if (html3 == 'hm-3'){
        $("#shop-hm-3").load("html.html #hm-3");
        create_button("html3","shop-hm-3",'claer-hm-3',21.99);
    }
    if (html4 == 'hm-4'){
        $("#shop-hm-4").load("html.html #hm-4");
        create_button("html4","shop-hm-4",'claer-hm-4',27.99);
    }
    if (JScript1 == 'js-1'){
        $("#shop-js-1").load("javascript.html #js-1");
        create_button("JScript1","shop-js-1",'claer-js-1',19.99);
    }
    if (JScript2 == 'js-2'){
        $("#shop-js-2").load("javascript.html #js-2");
        create_button("JScript2","shop-js-2",'claer-js-2',27.99);
    }

}
function loading(){

    var name = document.getElementById("name").value;
    var cardnum=document.getElementById("cardnum").value;
    var date=document.getElementById("date").value;
    var cvv=document.getElementById("cvv").value;
    if  (!(name) || !(cardnum) || !(date) ||!(cvv))

    {
        window.alert("Please fill all items");

    }
    else {
        window.alert("Thank you for your payment.");
        clearcart();
        window.location.replace("/main.html");
        
    }

 
  }