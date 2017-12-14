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

//color palette
var colorPalette=["black","red","blue","green","coral","purple"];
for (var i=0;i<colorPalette.length;i++){
    var currentColor = colorPalette[i];
    var btn=document.createElement('label');
    btn.className="btn";
    btn.title=currentColor;
    controls.appendChild(btn);
    var btnInput=document.createElement('input');
    btnInput.type="radio";
    btnInput.class="button " + currentColor;
    btnInput.name="color";
    btnInput.value=currentColor;
    btnInput.addEventListener("click",setMarker);
    btn.appendChild(btnInput);
    var btnSquare=document.createElement('div');
    btnSquare.className=currentColor;
    btn.appendChild(btnSquare);
}

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