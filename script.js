let a1=document.getElementById("1");
let a2=document.getElementById("2");
let a3=document.getElementById("3");
window.onload =()=>{
    again = ()=>{
    const date=new Date;
    let hour=date.getHours();
    let minutes=date.getMinutes();
    let sec=date.getSeconds();
    a1.innerText=hour;
    a2.innerHTML=minutes;
    a3.innerHTML=sec;
    setTimeout(again,1000)
    }
    again();    
}

