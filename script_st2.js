let bloggerName=document.querySelector(".blogger");

let request = new XMLHttpRequest();

// let mybtn=document.querySelector("#myBtn");
// let myContent=document.querySelector("#content");


request.open('GET','https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09')

request.send();

request.addEventListener('load',function(){
    let data=JSON.parse(request.responseText);
    console.log(data);
    let tableData="";
    for(let i=0;i<data.length;i++){
        tableData+=`<tr>
        <td>${data[i].userId}</td>
        <td>${data[i].id}</td>
        <td>${data[i].title}</td>
        <td>${data[i].body}</td>
      </tr>`;
    };
    document.getElementById("table_body").innerHTML=tableData;
})

// fetch("https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09").then((data1)=>{
//     return data1.json();
// }).then((objectData)=>{
//     console.log(objectData);
//     let tableData="";
//     objectData.map((values)=>{
//         tableData+=`<tr>
//         <td>${values.userId}</td>
//         <td>${values.id}</td>
//         <td>${values.title}</td>
//         <td>${values.body}</td>
//       </tr>`;
//     });
//     document.getElementById("table_body").innerHTML=tableData;
// })