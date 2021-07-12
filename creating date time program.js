//First you have to enter the date and know the day
let prop=prompt('Enter the Date and year to know the day')
let out=new Date(prop)
out=out.getDay()
if(out==0){
    alert("Sunday")
}
if(out==1){
    alert("Monday")
}
if(out==2){
    alert("Tuesday")
}
if(out==3){
    alert("Wednesday")
}
if(out==4){
    alert("Thursday")
}
if(out==5){
    alert("friday")
}
if(out==6){
    alert("Saturday")
}
//very simple logic