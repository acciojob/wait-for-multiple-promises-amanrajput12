console.log("hello")

window.addEventListener("DOMContentLoaded",()=>{
  let output =   document.querySelector("#output")

 let loadingrow = document.createElement("tr");
 let loadingtd = document.createElement("td");
 loadingtd.setAttribute("colspan","2");
 loadingtd.textContent="loading...";
 loadingrow.appendChild(loadingtd);
 output.appendChild(loadingrow)



   
    Promise.all([promise1,promise2,promise3]).then((result)=>{
   
    output.innerHTML="";
    console.log("result is ",result)
    let total =0;
    result.forEach((data,index)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.textContent =`Promise ${index+1}`;
        td2.textContent=data;
        tr.appendChild(td1)
        tr.appendChild(td2);
        output.appendChild(tr)
    if(total<Number(result[index])){
        total=Number(result[index]);
        }
		
    });

     let trtotal = document.createElement("tr");
     let td1total = document.createElement("td");
     let td2total = document.createElement("td");

       td1total.textContent="Total";
       td2total.textContent=total;
       td1total.style.fontSize="20px"
       td1total.style.fontWeight="600"
       trtotal.appendChild(td1total);
       trtotal.appendChild(td2total);
       output.appendChild(trtotal);
    })

})

function randomPromise(time,promise){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${time}`)
        },time)
    })
}

let promise1 = new randomPromise(1000,"Promise1")
let promise2 = new randomPromise(1000,"Promise2")
let promise3 = new randomPromise(1000,"Promise3");



