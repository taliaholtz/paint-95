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
var startOver=function(){
    var pixels=document.getElementsByTagName('td');
    for (var i=0;i<pixels.length;i++){
        pixels[i].className="white";
    }
}
var defaultBlack=function(){
    localStorage.setItem("marker","black");
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
var blackBtn=document.createElement('label');
blackBtn.className="btn";
blackBtn.title="black";
controls.appendChild(blackBtn);
var blackInput=document.createElement('input');
blackInput.type="radio";
blackInput.class="button black";
blackInput.name="color";
blackInput.value="black";
blackInput.checked=true;
blackInput.addEventListener("click",setMarker);
blackBtn.appendChild(blackInput);
var blackSquare=document.createElement('div');
blackSquare.className="black";
blackBtn.appendChild(blackSquare);

var redBtn=document.createElement('label');
redBtn.className="btn";
redBtn.title="red";
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
blueBtn.title="blue";
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
greenBtn.title="green";
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
coralBtn.title="coral";
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
purpleBtn.title="purple";
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
eraseBtn.title="eraser";
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

//clear screen
var clearBtn=document.createElement('label');
clearBtn.className="btn";
clearBtn.title="clear canvas";
controls.appendChild(clearBtn);
var clearAll=document.createElement('button');
clearAll.textContent="Start Over";
clearAll.addEventListener("click",startOver);
clearBtn.appendChild(clearAll);

//canvas set-up
var tbl=document.createElement('table');
var tblBody=document.createElement('tbody');
for (var i=0;i<110;i++){
    var row=document.createElement('tr');
    for (var j=0;j<175;j++){
        var cell=document.createElement('td');
        cell.className="pixel";
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

window.addEventListener("load",defaultBlack);