<!---------------------------------------->

var righe=0;
var percdiaframma=new Array();
var percsugna=new Array();
var classe=new Array();
var tipisuino=new Array();
var righeok=new Array();

var ic;
var is;


function cambianome(){
    link = document.getElementById('downloadlink').download=document.getElementById('nomefile').value

}



function riempi (diaframma, sugna, cla, tisu){
percdiaframma= diaframma;
percsugna=sugna;
classe=cla;
tipisuino=tisu;

}
/*
function aggiungirighe(num){

 for (i=1;i<=num;i++) {

      val=i+righe;
      var dis=' disabled="true"' ;
      var sel='';
      if(righe==0)  {dis=''; sel='checked';}
     // righe++;
var table = document.getElementById("righe")
var row = table.insertRow(righe);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);



    cell1.innerHTML = '  <input type="radio" id="ck_'+righe +'" name="val" onclick="abilita('+righe+')" value="'+righe+'" '+sel+'/> ';
   cell2.innerHTML =  ic.replace('###',righe)+is.replace('###',righe);
    cell3.innerHTML =  '<input type="text" id="num1_'+righe+'" onblur="controllanumero('+"'"+'num1_'+righe+"'"+')" '+dis+'/> ' ;
    cell4.innerHTML =  '<input type="text" id="num2_'+righe+'" onblur="controllanumero('+"'"+'num2_'+righe+"'"+')" '+dis+'/> ' ;
    cell5.innerHTML =  '<input type="text" id="num3_'+righe+'" onblur="controllanumero('+"'"+'num3_'+righe+"'"+')" '+dis+'/> ';
    cell6.innerHTML =  '<span id="valori_'+righe+'"></span> <span id="numvalori_'+righe+'"> </span> ' ;
    cell7.innerHTML =  '<button id="delrighe" onclick="eliminarighe(this,'+righe+')">glyphicon glyphicon-remove</button>    <button id="calcola'+righe+'" onclick="calcola('+righe+')">c</button>  ' ;

  }

}
function arr_input (v) {

    var ris='<select>';
  for (var key in v) {
    if (v.hasOwnProperty(key)) {
      //console.log((valY*1)+ "classe is: " + key + '. Value is: ' + varclasse[key]);
      ris+='<option value="'+key+'">'+key+'</option>';
      }
  }
  ris='</select>';
  return  ris;
}




function abilita (val){

  for(i=1; i<=righe; i++){
    if(i==val) valore=false; else valore=true;

    document.getElementById('num1_'+i ).disabled=valore;
    document.getElementById('num2_'+i ).disabled=valore;
    document.getElementById('num3_'+i ).disabled=valore;
  }

}
*/

function controllanumero (id){
  val0=val= document.getElementById(id ).value;
  var indice=id.substr((id.lastIndexOf("_"))+1, 3);




  if(val=='') return;
  if(!isNumeric(val) ) {
    val=val.replace('.','');
    val=val.replace(',','.');
  }

  if(!isNumeric(val) ) {val=0; alert("Attenzione: "+val0+" valore non ammesso");}
  else {
      //if( isNumeric(document.getElementById('num1_'+indice ).value) &&  isNumeric(document.getElementById('num2_'+indice ).value) &&  isNumeric(document.getElementById('num3_'+indice ).value) )calcola(indice);
      if( isNumeric(document.getElementById('vnum1_'+indice ).value) &&  isNumeric(document.getElementById('vnum2_'+indice ).value) &&  isNumeric(document.getElementById('vnum3_'+indice ).value) )calcola(indice);

  }
  document.getElementById(id ).value=val;
}



function controllanumerogen (id){
  val0=val= document.getElementById(id ).value;




  if(val=='') return;
  if(!isNumeric(val) ) {
    val=val.replace('.','');
    val=val.replace(',','.');
  }

  if(!isNumeric(val) ) {val=0; alert("Attenzione: "+val0+" valore non ammesso");}

  document.getElementById(id ).value=val;
}



function eliminarighe(btn, i) {

  valYtot[i]=0;
  if (confirm('Vuoi eliminare la riga?')) {
 var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
  righeok[i]='';
  righe--;
  if(righe<0) righe=0;

  scrivixml( );
}

}



function scrivixml(){
  var conta=0;
  var carcasse='';
var rigamin=0;
var i;
if (righe==0)  {document.getElementById('xml').value=''; $("#creaxml").addClass('nascondi');$("#mostraxml").addClass('nascondi'); return;}
for (i = 0; i < righeok.length; i++) {
  if (!righeok[i]) continue;
  rigamin=i;
  break;
}
var valYmedia=Math.round(sommay()/righe*100)/100;
var valYmedia=Math.round(sommay()/($('#totsuimac').val())*100)/100;

var ops = document.getElementById("cla_"+rigamin).options.length;
var op='';

var sts = document.getElementById("str_"+rigamin).options.length;
var st='';
var date = new Date();
var base='<?xml version="1.0" encoding="UTF-8" ?>'+
 '<dcm:dichiarazione-cumulativa-macello xmlns:dcm="http://www.impresa.gov.it/servizi_impresa/schema/mipaf/dcm">'+
'<codice-fiscale>'+codicefiscale+'</codice-fiscale>'+
'<codice-macello>'+codicemacello+'</codice-macello>'+
'<codice-fiscale-macello>'+codicefiscalemacello+'</codice-fiscale-macello>'+
'<ragione-sociale-macello>'+ragionesocialemacello+'</ragione-sociale-macello>'+
'<data>'+formattaData(document.getElementById("datamac").value)+'</data>'+
'<totale-certificati>#totsuicert</totale-certificati>'+
'<totale-macellati>#totsuimac</totale-macellati>'+
'<dettaglio>'+
'<codice-allevamento>'+document.getElementById("codall").value+'</codice-allevamento>'+
'<numero-suini-certificati>#nsuicert</numero-suini-certificati>'+
'<numero-certificato>'+document.getElementById("numcert").value+'</numero-certificato>'+
'<data-certificato>'+formattaData(document.getElementById("datacert").value)+'</data-certificato>'+
'<allevamento-di-origine>'+document.getElementById("orall").value+'</allevamento-di-origine>'+
'<numero-suini-macellati>#nsuimac</numero-suini-macellati>'+
'<regolarizzazione></regolarizzazione>'+
'<partita numero="1">'+
'<tipo-standard>'+tipostandard+'</tipo-standard>'+
'<media-carne-magra>#media</media-carne-magra>'+
'<totale-capi-classificati>#suini</totale-capi-classificati>'+
'<peso-vivo>'+document.getElementById("pesovivo").value+'</peso-vivo>'+
'#operatori'+
'</partita>'+
   '</dettaglio>'+
  '</dcm:dichiarazione-cumulativa-macello>';

var operatorebase='  <operatore><classificatore>#cla</classificatore><strumento>#str</strumento><tipo-strumento>#tsr</tipo-strumento><test-funzionamento>OK</test-funzionamento> #carcassa </operatore> ';
var operatoritot='';

  for (k = 0; k < ops; k++) {
    op=document.getElementById("cla_"+rigamin).options[k].value;
    carcasse='';
   // alert (op);
    conta=0;
    for (i = 0; i < righeok.length; i++) {
      if (!righeok[i]) continue;
      conta++;
      //if(conta==1) carcasse='';
      if (document.getElementById("cla_"+i).value== op) {// alert(document.getElementById("cla"+i).value);
      carcasse+=/*document.getElementById('xml').value+=*/righeok[i].replace('###',conta);
      document.getElementById('numvalori_'+i ).innerHTML=conta;
    }


  }
  if(carcasse)operatoritot+=operatorebase.replace('#carcassa', carcasse).replace('#cla',op).replace('#str',document.getElementById("str_"+i).options[document.getElementById("str_"+i).selectedIndex].text).replace('#tsr',document.getElementById("str_"+i).options[document.getElementById("str_"+i).selectedIndex].value);
}
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

document.getElementById('xml').value=vkbeautify.xml(base.replace('#media',valYmedia).replace('#operatori',operatoritot).replace('#totsuicert',$('#totsuicert').val()).replace('#totsuimac',$('#totsuimac').val()).replace('#nsuicert',$('#nsuicert').val()).replace('#nsuimac',$('#nsuimac').val()).replaceAll('#suini',conta));

}
<!---------------------------------------->



     function makeTextFile(text) {

      var link = document.getElementById('downloadlink');
      $("#downloadlink").addClass('nascondi');
    var data = new Blob([text], {type: 'text/plain'});
var textFile = null;
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };

function crea(){
    var link = document.getElementById('downloadlink');

    link.href = makeTextFile(document.getElementById('xml').value);

  $("#downloadlink").attr('download',$("#nomefile").val());
    $("#downloadlink").removeClass('nascondi');
  }
//////////////////////////////////////////
//////////////////////////////////////////

function selectstrumento( idnum ){
  var s =  "<select id=\"str_"+idnum+"\" name=\"str"+idnum+"\" disabled=\"true\" >" ;

  $.each( strumento, function( i, v ) {
    s+="<option   value=\""+i+"\">"+i+"</option>";

  });
  s+="</select>";
  return(s);
}

function selectclassificatore( idnum ){
  var s =  "<select id=\"cla_"+idnum+"\" name=\"cla"+idnum+"\" disabled=\"true\" >" ;

  $.each( classificatore, function( i, v ) {
    s+="<option   value=\""+i+"\">"+i+"</option>";

  });
  s+="</select>";
  return(s);
}

function addriga(idnum){
  var riga='<tr id="riga_'+idnum+'" class=" cssriga nascondi">';

  riga+='<td class="csscella1" id="cella1_'+idnum+'">'+selectclassificatore( idnum )+'</td>';
  riga+='<td class="csscella1"  id="cella2_'+idnum+'">'+selectstrumento( idnum )+'</td>';
  riga+='<td class="csscella2"><input type="text" id="vnum1_'+idnum+'" onblur="controllanumero('+"'"+'vnum1_'+idnum+"'"+')" disabled="true"/> </td>' ;
  riga+='<td class="csscella2"><input type="text" id="vnum2_'+idnum+'" onblur="controllanumero('+"'"+'vnum2_'+idnum+"'"+')" disabled="true"/> </td>' ;
  riga+='<td class="csscella2"><input type="text" id="vnum3_'+idnum+'" onblur="controllanumero('+"'"+'vnum3_'+idnum+"'"+')" disabled="true"/> </td>' ;
  riga+= '<td class="csscella1" id="cella5_'+idnum+'">  <button id="calcola'+idnum+'" onclick="calcola('+idnum+')"><span class="glyphicon glyphicon-list-alt"></span></button> </td> ' ;
  riga+= '<td class="csscella1" id="cella6_'+idnum+'"><span id="valori_'+idnum+'"></span> <input type="hidden" id="valY_'+idnum+'" value="0"/> <span id="numvalori_'+idnum+'"></span></td> ' ;
  riga+= '<td class="csscella1" id="cella7_'+idnum+'"><button id="delrighe" onclick="eliminarighe(this,'+idnum+')"><span class="glyphicon glyphicon-remove"></span></button> </td>';

  riga+='</tr>';

  return riga;

}
function showriga(){

  for (i = maxrighe+1; i <= maxrighe+1; i++) {
  $("#riga_"+i).removeClass('nascondi');
  }
  maxrighe+=1;
}
function attivariga (val){

  for(i=1; i<=maxrighe; i++){
    if (!document.getElementById('vnum1_'+i )) continue;
    if(i==val) valore=false; else valore=true;

    document.getElementById('vnum1_'+i ).disabled=valore;
    document.getElementById('vnum2_'+i ).disabled=valore;
    document.getElementById('vnum3_'+i ).disabled=valore;
    document.getElementById('cla_'+i ).disabled=valore;
    document.getElementById('str_'+i ).disabled=valore;
  }

}

 function calcola(i){

  var debug=0;



  var n1=document.getElementById('vnum1_'+i ).value;
  var n2=document.getElementById('vnum2_'+i ).value;
  var n3=document.getElementById('vnum3_'+i ).value;


  var calo= n1* varcalo;
  var percdiaframma=0;

  for (var key in vardia) {
    if (vardia.hasOwnProperty(key)) {
      //console.log((n1*1)+ "Key is: " + key + '. Value is: ' + vardia[key]);
      if (n1*1 <= key*1 ) {percdiaframma=vardia[key]; break;}
      }
  }
  var diaframma=n1*percdiaframma/100;

  var percsugna=0;
  for (var key in varsugna) {
    if (varsugna.hasOwnProperty(key)) {
      //console.log((n1*1)+ "sugna is: " + key + '. Value is: ' + varsugna[key]);
      if (n1*1 <= key*1 ) {percsugna=varsugna[key]; break;}
      }
  }
  var sugna=n1*percsugna/100;

  var netto= n1-calo-diaframma-sugna;

  var tipologia='';
  for (var key in vartipopeso) {
    if (vartipopeso.hasOwnProperty(key)) {
      //console.log((n1*1)+ "sugna is: " + key + '. Value is: ' + varsugna[key]);
      if (netto*1 <= key*1 ) {tipologia=vartipopeso[key]; break;}
      }
  }

  var valfisso=0;
  for (var key in fisso) {
    if (fisso.hasOwnProperty(key)) {
      //console.log((n1*1)+ "sugna is: " + key + '. Value is: ' + varsugna[key]);
      if (tipologia == key ) {valfisso=fisso[key]; break;}
      }
  }

  var molx1=0;
  for (var key in x1) {
    if (x1.hasOwnProperty(key)) {
      //console.log((n1*1)+ "sugna is: " + key + '. Value is: ' + varsugna[key]);
      if (tipologia == key ) {molx1=x1[key]; break;}
      }
  }


  var molx2=0;
  for (var key in x2) {
    if (x2.hasOwnProperty(key)) {
      //console.log((n1*1)+ "sugna is: " + key + '. Value is: ' + varsugna[key]);
      if (tipologia == key ) {molx2=x2[key]; break;}
      }
  }


  var valx1= n2*molx1;
  var valx2= n3*molx2;

  var valY= valfisso-valx1+valx2

  var classe='';
  for (var key in varclasse) {
    if (varclasse.hasOwnProperty(key)) {
      //console.log((valY*1)+ "classe is: " + key + '. Value is: ' + varclasse[key]);
      if (valY*1 <= key*1 ) {classe=varclasse[key]; break;}
      }
  }


  //console.log(valfisso +' '+valx1+' '+valx2+' '+classe);
  document.getElementById('valori_'+i ).innerHTML='<b>'+classe;

  if (debug){
    document.getElementById('valori_'+i ).innerHTML+=
    'calo=' +varcalo+' - diaframma='+percdiaframma+' -sugna='+percsugna+ ' - tipologia:'+tipologia+' - valore fisso='+valfisso+' - moltiplicatori='+molx1+' '+molx2+ 'valori='+valx1+' '+valx2+' '+valY;

  }

  document.getElementById('valori_'+i ).innerHTML+='</b>'
  if (varclasse.indexOf(classe)) //righeok[i]=''+
    righeok[i]='<carcassa> <fom>###</fom> <percentuale-carne-magra>'+number_format(Math.round(valY*100)/100,2,'.',',')+'</percentuale-carne-magra><peso-lordo>'+number_format(n1,2,'.','')+'</peso-lordo><peso-netto>'+number_format(netto,2,'.','')+'</peso-netto><europ>'+classe+'</europ><spessore-magro>'+number_format(n3,2,'.','')+'</spessore-magro><spessore-grasso>'+number_format(n2,2,'.','')+'</spessore-grasso><x1>0</x1><x2>0</x2><x3>0</x3><x4>0</x4><x5>0</x5><x6>0</x6></carcassa>';
  else righeok[i]='';
  righe++;
  valYtot[i]=Math.round(valY*100)/100;
 // $("#valY_"+i).value(valY);
 // document.getElementById('valY_'+i ).value=Math.round(valY*100)/100;

scrivixml();
  if (controlla_campitestata ()){
    $("#creaxml").removeClass('nascondi');
    $("#mostraxml").removeClass('nascondi');
    //console.log(righeok[i]);
  }
}

function sommay(){
  var t=0;
  for (i = 1; i <= 100; i++) {
      t+=valYtot[i] ;
  }
  return t;
}


function mostraxml(){
  if ($("#xml").hasClass('nascondi')){
      $("#xml").removeClass('nascondi');
    $("#mostraxml").html('Nascondi XML');}
  else {
    $("#xml").addClass('nascondi');

  $("#mostraxml").html('Mostra XML');
  }
}

function controlla_campitestata () {

  if($("#nomefile").val()=='') return 0;
  if($("#datacert").val()=='') return 0;
  if(! isDate($("#datacert").val())) return 0;
  if($("#numcert").val()=='') return 0;
  if($("#codall").val()=='') return 0;
  if($("#orall").val()=='') return 0;
  if($("#totsuicert").val()=='') return 0;
  if($("#totsuimac").val()=='') return 0;
  if($("#nsuicert").val()=='') return 0;
  if($("#nsuimac").val()=='') return 0;

  return 1;

}

function isDate(str) {
  var parms = str.split(/[\.\-\/]/);
  var yyyy = parseInt(parms[2],10);
  var mm   = parseInt(parms[1],10);
  var dd   = parseInt(parms[0],10);
  var date = new Date(yyyy,mm-1,dd,0,0,0,0);
  return mm === (date.getMonth()+1) && dd === date.getDate() && yyyy === date.getFullYear();
}

function controlladata(cosa){
    if($("#"+cosa).val()=='') return 1;
    if(! isDate($("#"+cosa).val()))
      alert ("Inserire una data valida nel formato GG/MM/AAAA");

}



function formattaData(str) {
  var parms = str.split(/[\.\-\/]/);
  return parseInt(parms[2],10)+'-'+parseInt(parms[1],10)+'-'+ parseInt(parms[0],10);
}