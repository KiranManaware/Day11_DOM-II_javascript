// Element creation

// 1) Add new list item in ul
// let li=document.createElement("li");
// li.innerText="4";
// li.className="new-class";
// li.id="newId";
// li.setAttribute("herf","#")
// li.style.color="pink"
// let ul=document.querySelector("ul")
// // ul.appendChild(li)
// let list=document.querySelector("#listItem");
// ul.insertBefore(li,list)
// console.log(li)

// 2) Add a new heading after the first heading
// let newHeading=document.createElement("h1");
// newHeading.innerText="Hello, I am new class"
// newHeading.className="class1"
// let head=document.querySelector(".h1")
// // console.log(head);
// head.appendChild(newHeading)
// console.log(newHeading);

// 3) Add a paragraph in the html after the all heading and before ul
let para=document.createElement("p");
para.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt quisquam quod ratione nisi laboriosam consectetur ipsum eius! Eaque laborum qui natus deleniti omnis accusamus unde quisquam officiis hic obcaecati."
para.className="para"
para.id="idpara";
para.style.color="Pink"
let body=document.querySelector("body")
// console.log(body);
let ul=document.querySelector("ul")
body.insertBefore(para,ul)
console.log(para);



