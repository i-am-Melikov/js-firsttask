let date =  new Date();
let hh = date.getHours();
console.log(hh)
if(hh>=4 && hh<13){
    alert("Sabahiniz xeyr");
}
else if(hh>=13 && hh<20){
    alert("Gunortaniz xeyr");
}
else if(hh>=20 && hh<=24 && hh>=1 && hh<4){
    alert("axsaminiz xeyr");
}