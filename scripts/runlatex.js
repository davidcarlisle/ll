
var preincludes={};

function llexamples() {
    var p = document.getElementsByTagName("pre");
    for(var i=0;i<p.length;i++) {
	p[i].setAttribute("id","pre" + i);
	// edit
	var b = document.createElement("button");
	b.innerText="edit";
	b.setAttribute("onclick",'allowedit("pre' + i + '")');
	p[i].parentNode.insertBefore(b, p[i]);
	// copy
	var c = document.createElement("button");
	c.innerText="copy";
	c.setAttribute("onclick",'copytoclipboard("pre' + i + '")');
	p[i].parentNode.insertBefore(c, p[i]);
	if(p[i].textContent.indexOf("\\documentclass") !== -1) {
	    //overleaf via multi file form 
	    var olff = document.createElement("button");
	    olff.innerText="OverLeaf form2test";
	    olff.setAttribute("onclick",'overleafform2("pre' + i + '")');
	    p[i].parentNode.insertBefore(olff, p[i].nextSibling);   
	    //overleaf via zip 
	    var olz = document.createElement("button");
	    olz.innerText="OverLeaf Zip test";
	    olz.setAttribute("onclick",'overleafzip("pre' + i + '")');
	    p[i].parentNode.insertBefore(olz, p[i].nextSibling);   
	    //download
	    var dn = document.createElement("button");
	    dn.innerText="Download";
	    dn.setAttribute("onclick",'downloadblob("pre' + i + '")');
		p[i].parentNode.insertBefore(dn, p[i].nextSibling);
	    // latexonline
	    var r = document.createElement("button");
	    r.innerText="LaTeX online";
	    r.setAttribute("onclick",'latexonlinecc("pre' + i + '")');
	    r.setAttribute("id","lo-pre" + i);
	    p[i].parentNode.insertBefore(r, p[i].nextSibling);
	    // overleaf
	    var o = document.createElement("button");
	    o.innerText="Open in OverLeaf";
	    o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
	    p[i].parentNode.insertBefore(o, p[i].nextSibling);
	    // form 1
	    var f=document.createElement("span");
	    // https://httpbin.org/post
	    // https://www.overleaf.com/docs
	    // <input id=\"snip_uri-pre" + i + "\" name=\"snip_uri\" value=\"\" />
	    f.innerHTML="<form style=\"display:none\" id=\"form-pre" + i +"\" action=\"https://www.overleaf.com/docs\" method=\"post\" target=\"_blank\"><input id=\"encoded_snip-pre" + i + "\" name=\"encoded_snip\" value=\"\" /><input id=\"engine-pre" + i + "\" name=\"engine\" value=\"pdflatex\" /></form>";
	    p[i].parentNode.insertBefore(f, p[i].nextSibling);
	    // form 2
	    var ff=document.createElement("span");
	    // https://httpbin.org/post
	    // https://www.overleaf.com/docs
	    // <input id=\"snip_uri-pre" + i + "\" name=\"snip_uri\" value=\"\" />
	    f.innerHTML="<form style=\"display:none\" id=\"form2-pre" + i +"\" action=\"https://www.overleaf.com/docs\" method=\"post\" target=\"_blank\"></form>";
	    p[i].parentNode.insertBefore(ff, p[i].nextSibling);
	}
    }
}

function latexonlinecc(nd) {
    var fconts="";
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    fconts= "\n\\makeatletter\\def\\input@path{{latex.out/}}\\makeatother\n";
	    var incl=preincludes[nd];
	    for(const prop in incl) {
		fconts=fconts+"\n\\begin{filecontents}{" +
		    incl[prop] +
		    "}\n" +
		    document.getElementById(prop).innerText +
		    "\n\\end{filecontents}\n";
	    }
	}
    }
    "\\makeatletter\\def\\input@path{{latex.out/}}\\makeatother\n"
    var p = document.getElementById(nd);
    if(p.innerText.indexOf("biblatex") !== -1) {
	fconts=fconts + "\n\\RequirePackage[backend=bibtex]{biblatex}\n";
    }
    var b = document.getElementById('lo-' + nd);
    var ifr= document.getElementById(nd + "ifr");
    if(ifr == null) {
	ifr=document.createElement("iframe");
	ifr.setAttribute("width","100%");
	ifr.setAttribute("height","500em");
	ifr.setAttribute("id",nd + "ifr");
	p.parentNode.insertBefore(ifr, b.nextSibling);
	d=document.createElement("button");
	d.innerText="Delete Output";
	d.setAttribute("id","del-" + nd);
	d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	p.parentNode.insertBefore(d, b.nextSibling);
    }
    // that looks to have all lines but still need to zap comments for some reason..
    // alert(encodeURIComponent(fconts));
   ifr.onload=function(){
       alert('here');
   };
    if(navigator.userAgent.match('Mobile.*Gecko')) {
    alert('MOBILE' + navigator.userAgent);
	document.location.href="https://latexonline.cc/compile?text=" + encodeURIComponent(fconts.replace(commentregex,'') + p.innerText) + ((p.innerText.indexOf("fontspec") !== -1) ? "&command=xelatex" : "");
    } else {
	ifr.setAttribute("src","https://latexonline.cc/compile?text=" + encodeURIComponent(fconts.replace(commentregex,'') + p.innerText) + ((p.innerText.indexOf("fontspec") !== -1) ? "&command=xelatex" : ""));
    }
}

const commentregex = / %.*/;

// https://www.overleaf.com/devs
function openinoverleaf(nd) {
    var fconts="";
    if(typeof(preincludes) == "object") {
      if(typeof(preincludes[nd]) == "object") {
	  var incl=preincludes[nd];
	  for(const prop in incl) {
	      fconts=fconts+"\n\\begin{filecontents}{" +
		  incl[prop] +
		  "}\n" +
		  document.getElementById(prop).innerText +
		  "\n\\end{filecontents}\n";
	  }
      }
  }
  var p = document.getElementById(nd);
    document.getElementById('encoded_snip-' + nd ).name ="encoded_snip";
    document.getElementById('encoded_snip-' + nd ).value =encodeURIComponent(fconts + p.innerText);
    if(p.innerText.indexOf("fontspec") !== -1) {
	document.getElementById('engine-' + nd ).value ="xelatex";
    }
  document.getElementById('form-' + nd).submit();
}



function overleafzip(nd) {
    var zipped=false;
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    zipped=true;
	    var zip = new JSZip();
	    var p = document.getElementById(nd);
	    zip.file("document/main.tex",p.innerText);
	    var incl=preincludes[nd];
	    for(const prop in incl) {
		zip.file("document/" + incl[prop],document.getElementById(prop).innerText);
	    }
	      zip.generateAsync({type:"base64"}).then(function (base64) {
		  document.getElementById('encoded_snip-' + nd ).name ="snip_uri";
		  document.getElementById('encoded_snip-' + nd ).value ="data:application/zip;base64," + base64;
		     document.getElementById('form-' + nd).submit();
		});
	}
    }
    if(! zipped) {
	var p = document.getElementById(nd);
	document.getElementById('encoded_snip-' + nd ).name ="encoded_snip";
	document.getElementById('encoded_snip-' + nd ).value =encodeURIComponent(p.innerText);
    if(p.innerText.indexOf("fontspec") !== -1) {
	document.getElementById('engine-' + nd ).value ="xelatex";
    }
	    document.getElementById('form-' + nd).submit();
    }

}




function overleafform2(nd) {
    var p = document.getElementById(nd);
    var ovform=document.getElementById('form2-' + nd);
    var incl=[];
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name","snip_uri[]");
    inp.value="data:," + encodeURIComponent(p.innerText);
    ovform.appendChild(inp);
    if(typeof(preincludes) == "object") {
      if(typeof(preincludes[nd]) == "object") {
	  incl=preincludes[nd];
	  for(const prop in incl) {
	      var inp=document.createElement("input");
	      inp.setAttribute("type","text");
	      inp.setAttribute("name","snip_uri[]");
	      inp.value="data:," + encodeURIComponent(document.getElementById(prop).innerText);
	      ovform.appendChild(inp);

	  }
      }
    }
        var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name","snip_name[]");
    inp.value="document.tex";
    ovform.appendChild(inp);
	  for(const prop in incl) {
	      var inp=document.createElement("input");
	      inp.setAttribute("type","text");
	      inp.setAttribute("name","snip_name[]");
	      inp.value=incl[prop];
	      ovform.appendChild(inp);
	  }
    ovform.submit();
}


function downloadblob(nd) {
    var zipped=false;
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    zipped=true;
	    var zip = new JSZip();
	    var p = document.getElementById(nd);
	    zip.file("document/main.tex",p.innerText);
	    var incl=preincludes[nd];
	    for(const prop in incl) {
		zip.file("document/" + incl[prop],document.getElementById(prop).innerText);
	    }
	      zip.generateAsync({type:"blob"})
		.then(function (blob) {
		    saveAs(blob, "document.zip");
		});
	}
    }
    if(! zipped) {
	var p = document.getElementById(nd);
	var blob = new Blob([p.innerText], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "document.tex");
    }
}


function copytoclipboard(nd){
    var p = document.getElementById(nd);
    var nn=document.createElement("textarea");
    nn.value=p.innerText;
    document.body.appendChild(nn);
    nn.select();
    document.execCommand("copy");
    document.body.removeChild(nn);
}


function allowedit(nd){
    var p = document.getElementById(nd);
    p.contentEditable="true";
    p.setAttribute("spellcheck","false");
    p.innerHTML=p.innerText;
    p.style.border="solid thin green";
}

function deleteoutput(nd){
    var b = document.getElementById('del-' + nd);
    var ifr = document.getElementById(nd + 'ifr');
    b.parentNode.removeChild(b);
    ifr.parentNode.removeChild(ifr);
}


window.addEventListener('load', llexamples, false);
