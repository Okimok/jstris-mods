if(typeof trim != "function"){var trim=a=>{a=a.slice(0,-1);a=a.substr(a.indexOf("{")+1);return a}}

document['addEventListener']('keydown', press);
document['addEventListener']('keyup', press);

function press(e) {
	if(~Game['set2ings'].indexOf(e.keyCode)){
		corresponding = [6,8,1,2,3,5,4,0][Game['set2ings'].indexOf(e.keyCode)]
		document.getElementsByClassName("kbkey")[corresponding].style.backgroundColor = ["lightgoldenrodyellow",""][+(e.type=="keyup")]
	}
}

var kbhold=document.createElement("div");
kbhold.id="keyboardHolder";
kbhold.style.position="absolute"
kbhold.style.left = (myCanvas.getBoundingClientRect().left - 300) + "px";
kbhold.style.top = (myCanvas.getBoundingClientRect().top + 100) + "px";
document.body.appendChild(kbhold);

f='<R>M{text-align:center;position: absolute;font-size:15px`{]-Q:QIspacing:0;Nred`td|th|Uwp8o_000000;]:inherit`UT_34ff34`Ujy2k_f8a102`UO_f8ff00;}</RYbo"Yps"KPJV"Ptr^Tq180~TqSD~TqHDZ[CCWZXtr^OqHL~OqCWZ[&lt;[v[&gt;X/JK>~</td^|{padding:10px 5pxIR:solidIwidth:2px`q kbkey">`;}M.tg _{]-N#^PtdV-]border[~jy2kqZ~wp8o">YPdiv id="kX</tdP/trPV class="tgU.tg-Ttc3eRstyleQcollapseP><Op39mNcolor:M#kbo KP/divJtableI;]-';for(i in g='IJKMNOPQRTUVXYZ[]^_`q|~')e=f.split(g[i]),f=e.join(e.pop())
keyboardHolder.innerHTML = f

var set2ings = Game['prototype']['readyGo'].toString()
set2ings = "Game['set2ings']=this.Settings.controls;" + trim(set2ings)
Game['prototype']['readyGo'] = new Function(set2ings);

var updateTextBarFunc = Game['prototype']['updateTextBar'].toString()
updateTextBarFunc = trim(updateTextBarFunc) + ";kps.innerHTML='KPS: '+(this.getKPP()*this.placedBlocks/this.clock).toFixed(2)"
Game['prototype']['updateTextBar'] = new Function(updateTextBarFunc);
