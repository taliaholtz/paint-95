var setMarker=function(){
    var paintColor=document.getElementById("color").selected;
    localStorage.setItem("marker",paintColor);
}
var bobRoss=function(){
    var paint=localStorage.getItem("marker");
    document.getElementsByTagName(td).className=paint;
}

var controls=document.createElement('div');
controls.id="controls";
document.body.appendChild(controls);
var easel=document.createElement('div');
easel.id="easel";
document.body.appendChild(easel);
var canvas=document.createElement('div');
canvas.id="canvas";
easel.appendChild(canvas);

var tbl=document.createElement('table');
var tblBody=document.createElement('tbody');
for (var i=0;i<50;i++){
    var row=document.createElement('tr');
    for (var j=0;j<50;j++){
        var cell=document.createElement('td');
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
canvas.appendChild(tbl);
tbl.id="table";
tbl.cellSpacing="0";

var red=document.createElement('button');
red.className="color red";
red.addEventListener("click",setMarker);
controls.appendChild(red);
var blue=document.createElement('button');
blue.className="color blue";
blue.addEventListener("click",setMarker);
controls.appendChild(blue);
var green=document.createElement('button');
green.className="color green";
green.addEventListener("click",setMarker);
controls.appendChild(green);
var coral=document.createElement('button');
coral.className="color coral";
coral.addEventListener("click",setMarker);
controls.appendChild(coral);
var purple=document.createElement('button');
purple.className="color purple";
purple.addEventListener("click",setMarker);
controls.appendChild(purple);

td.onclick="bobRoss();"