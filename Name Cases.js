var Str="arham";
var lowerCase=Str.toLowerCase();
var uperCase=Str.toUpperCase();
var titleCase=titleCaseConversion();
console.log("LoweCase=="+lowerCase+"\n" ,"UperCase=="+uperCase+"\n","TitleCase=="+titleCase)

function titleCaseConversion()
{
   var firstChar=Str[0];
   var val=firstChar.toUpperCase();
   var titleCase=Str.replace(firstChar,val);
   return titleCase
}