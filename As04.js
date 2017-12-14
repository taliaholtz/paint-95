var setMarker=function(){
    var choices=document.getElementsByName('color');
    for (var i=0;i<choices.length;i++){
        if(choices[i].checked){
            var paintColor=(choices[i].value);
            localStorage.setItem("marker",paintColor);            
        }
    }
}
var bobRoss=function(){
    draw=true;
    var paint=localStorage.getItem("marker");
    var pixel=event.target;
    pixel.className=paint;
}
var bobRossPro=function(){
    if(draw===true){
        var paint=localStorage.getItem("marker");
        var pixel=event.target;
        pixel.className=paint;
    }
}
var stopRoss=function(){
    draw=false;
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

//color choices
var redBtn=document.createElement('label');
redBtn.className="btn";
controls.appendChild(redBtn);
var redInput=document.createElement('input');
redInput.type="radio";
redInput.class="button red";
redInput.name="color";
redInput.value="red";
redInput.addEventListener("click",setMarker);
redBtn.appendChild(redInput);
var redSquare=document.createElement('div');
redSquare.className="red";
redBtn.appendChild(redSquare);

var blueBtn=document.createElement('label');
blueBtn.className="btn";
controls.appendChild(blueBtn);
var blueInput=document.createElement('input');
blueInput.type="radio";
blueInput.class="button blue";
blueInput.name="color";
blueInput.value="blue";
blueInput.addEventListener("click",setMarker);
blueBtn.appendChild(blueInput);
var blueSquare=document.createElement('div');
blueSquare.className="blue";
blueBtn.appendChild(blueSquare);

var greenBtn=document.createElement('label');
greenBtn.className="btn";
controls.appendChild(greenBtn);
var greenInput=document.createElement('input');
greenInput.type="radio";
greenInput.class="button green";
greenInput.name="color";
greenInput.value="green";
greenInput.addEventListener("click",setMarker);
greenBtn.appendChild(greenInput);
var greenSquare=document.createElement('div');
greenSquare.className="green";
greenBtn.appendChild(greenSquare);

var coralBtn=document.createElement('label');
coralBtn.className="btn";
controls.appendChild(coralBtn);
var coralInput=document.createElement('input');
coralInput.type="radio";
coralInput.class="button coral";
coralInput.name="color";
coralInput.value="coral";
coralInput.addEventListener("click",setMarker);
coralBtn.appendChild(coralInput);
var coralSquare=document.createElement('div');
coralSquare.className="coral";
coralBtn.appendChild(coralSquare);

var purpleBtn=document.createElement('label');
purpleBtn.className="btn";
controls.appendChild(purpleBtn);
var purpleInput=document.createElement('input');
purpleInput.type="radio";
purpleInput.class="button purple";
purpleInput.name="color";
purpleInput.value="purple";
purpleInput.addEventListener("click",setMarker);
purpleBtn.appendChild(purpleInput);
var purpleSquare=document.createElement('div');
purpleSquare.className="purple";
purpleBtn.appendChild(purpleSquare);

//eraser
var eraseBtn=document.createElement('label');
eraseBtn.className="btn";
controls.appendChild(eraseBtn);
var eraseInput=document.createElement('input');
eraseInput.type="radio";
eraseInput.class="button white";
eraseInput.name="color";
eraseInput.value="white";
eraseInput.addEventListener("click",setMarker);
eraseBtn.appendChild(eraseInput);
var eraseImg=document.createElement('img');
eraseImg.className="white";
eraseImg.src="http://pngimg.com/uploads/eraser/eraser_PNG33.png";
eraseBtn.appendChild(eraseImg);

//canvas set-up
var tbl=document.createElement('table');
var tblBody=document.createElement('tbody');
for (var i=0;i<50;i++){
    var row=document.createElement('tr');
    for (var j=0;j<50;j++){
        var cell=document.createElement('td');
        var draw=false;
        cell.addEventListener("mousedown",bobRoss);
        cell.addEventListener("mousemove",bobRossPro);
        cell.addEventListener("mouseup",stopRoss);
        row.appendChild(cell);
    }
    tblBody.appendChild(row);
}
tbl.appendChild(tblBody);
canvas.appendChild(tbl);
tbl.id="table";
tbl.cellSpacing="0";