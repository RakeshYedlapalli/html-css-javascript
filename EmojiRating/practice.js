
setInterval(1,f1())


function f1(){


    //let data = document.anchors();

    document.getElementById('PTag').innerHTML = 'Hell this is changed'+new Date();
    

    const para = document.createElement("p");

    let textNode = document.createTextNode('this is sdfasfa p1');

    para.appendChild(textNode);

   let divElemet = document.getElementById('divElement').style.fontSize;

   //para = para.innerHTML = 'This is P tag'
   divElemet.appendChild(para);

    //document.getElementById('divElement').onclick(onClickHappen())


    let dataa = document.getElementsByTagName("p");

    let value = dataa[0].innerText;
    //let h1Tag = document.getElementsByTagName('h1');
    
}
function onClickHappen(){
    window.alert();
}
