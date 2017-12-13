var setMarker=function(){
    var paintColor=document.getElementsByClassName("color").checked;
    console.log(paintColor);
    localStorage.setItem("marker",paintColor);
}
var bobRoss=function(){
    var paint=localStorage.getItem("marker");
    console.log(paint);    
    document.getElementsByTagName(cell).className=paint;
}

//color choices
var redBtn=document.createElement('label');
redBtn.className="btn";
redBtn.addEventListener("click",setMarker);
controls.appendChild(redBtn);
var redInput=document.createElement('input');
redInput.type="radio";
redInput.class="button red";
redInput.name="color";
redInput.value="red";
redBtn.appendChild(redInput);
var redSquare=document.createElement('div');
redSquare.className="red";
redBtn.appendChild(redSquare);

var blueBtn=document.createElement('label');
blueBtn.className="btn";
blueBtn.addEventListener("click",setMarker);
controls.appendChild(blueBtn);
var blueInput=document.createElement('input');
blueInput.type="radio";
blueInput.class="button blue";
blueInput.name="color";
blueInput.value="blue";
blueBtn.appendChild(blueInput);
var blueSquare=document.createElement('div');
blueSquare.className="blue";
blueBtn.appendChild(blueSquare);

var greenBtn=document.createElement('label');
greenBtn.className="btn";
greenBtn.addEventListener("click",setMarker);
controls.appendChild(greenBtn);
var greenInput=document.createElement('input');
greenInput.type="radio";
greenInput.class="button green";
greenInput.name="color";
greenInput.value="green";
greenBtn.appendChild(greenInput);
var greenSquare=document.createElement('div');
greenSquare.className="green";
greenBtn.appendChild(greenSquare);

var coralBtn=document.createElement('label');
coralBtn.className="btn";
coralBtn.addEventListener("click",setMarker);
controls.appendChild(coralBtn);
var coralInput=document.createElement('input');
coralInput.type="radio";
coralInput.class="button coral";
coralInput.name="color";
coralInput.value="coral";
coralBtn.appendChild(coralInput);
var coralSquare=document.createElement('div');
coralSquare.className="coral";
coralBtn.appendChild(coralSquare);

var purpleBtn=document.createElement('label');
purpleBtn.className="btn";
purpleBtn.addEventListener("click",setMarker);
controls.appendChild(purpleBtn);
var purpleInput=document.createElement('input');
purpleInput.type="radio";
purpleInput.class="button purple";
purpleInput.name="color";
purpleInput.value="purple";
purpleBtn.appendChild(purpleInput);
var purpleSquare=document.createElement('div');
purpleSquare.className="purple";
purpleBtn.appendChild(purpleSquare);

//canvas set-up
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
        cell.addEventListener("click",bobRoss);
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
canvas.appendChild(tbl);
tbl.id="table";
tbl.cellSpacing="0";
