function formValidation()
{
var yintake = document.registration.intake;

var ucountry = document.registration.country;

var y2ndchoice = document.registration.secchoice;

var y3rdchoice = document.registration.trdchoice;

var yyes = document.registration.yes;

var yno = document.registration.no;

var name = document.registration.name;

var ymsex = document.registration.msex;

var yfsex = document.registration.fsex;

var ynric = document.registration.NRIC;

var yrace = document.registration.race;

var yreligion = document.registration.religion;

var yph = document.registration.ph;

var ypostcode = document.registration.postcode;

var ystate = document.registration.state;

var ysec = document.registration.sec;

var ysec3 = document.registration.sec3;

var ycertificates = document.registration.certificates;

var ysub = document.registration.sub;




if(validyintake(yintake))
{
if(countryselect(ucountry))
{
if(y2ndchoiceselect(y2ndchoice))
{
if(y3rdchoiceselect(y3rdchoice))
{ 
if(validaccomodation(yyes,yno))
{
if(allword(name))
{
if(validsex(ymsex,yfex))
{

if(validnric(ynric))
{
if(raceselect(yrace))
{
if(religionselect(yreligion))
{
if(numph(yph))
{
if(validpoc(ypoc))
{
if(stateselect(ystate))
{
if(secselect(ysec))
{
if(sec3select(ysec3))
{
if(certificateselect(ycertificate))
{
if(subselect(ysub))
{


}
return false;
} 
function validyintake(yintake){

    x=0;
    if(yintake.checked) 
    {
    x++;
    return true;
    } 
    if(x==0)
    {
    alert('pleace select year intake');
    yintake.focus();
    return false;
    }
    
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select from the 1st list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function y2ndchoiceselect(y2ndchoice)
{
if(y2ndchoice.value == "Default")
{
alert('Select  2 choices from the list');
y2ndchoice.focus();
return false;
}
else
{
return true;
}
}

function y3rdchoiceselect(y3rdchoice)
{
if(y3rdchoice.value == "Default")
{
alert('Select 3 choices from the list');
y3rdchoice.focus();
return false;
}
else
{
return true;
}
}

function validaccomodation(yyes,yno)
{
    x=0;
    if(yyes.checked) 
    {
    x++;
    return true;
    }
    if(yno.checked)
    {
        x++;
        return true;
  
}

function allword(name)
{ 
var letters = /^[A-Za-z]+$/;
if(name.value.match(letters))
{
return true;
}
else
{
alert('This field must include only alphabet characters');
uname.focus();
return false;
}
}
function validsex(ymsex,yfsex)
{
    x=0;
    if(ymsex.checked) 
    {
    x++;
    return true;
    }
    if(yfsex.checked)
    {
        x++;
        return true;
    }
    if(x==0)
    {
    alert('Please select your gender');
    yfsex.focus();
    return false;
    } 
}


else
{
return true;
}

function validnric(ynric)
{ 
var numbers = /^[0-9]+$/;
if(ynric.value.match(numbers))
{
return true;
}
else
{
alert('This field must include only numeric characters');
ynric.focus();
return false;
}
}

function raceselect(yrace)
{
if(yrace.value == "Default")
{
alert('Select your race');
yrace.focus();
return false;
}
else
{
return true;
}
}

function religionselect(yreli)
{
if(yreligion.value == "Default")
{
alert('Select your religion');
yreligion.focus();
return false;
}
else
{
return true;
}
}

function phnum(yph)
{ 
var numbers = /^[0-9]+$/;
if(yph.value.match(numbers))
{
return true;
}
else
{
alert('This field must include only numeric characters');
yph.focus();
return false;
}
}

function validpostcode(ypostcode)
{
var numbers = /^[0-9]+$/;
if(ypostcode.value.match(numbers))
{
return true;
}
else
{
alert('This field must include only numeric characters');
ypoc.focus();
return false;
}
}

function stateselect(ystate)
{
if(ystate.value == "Default")
{
alert('Select your state');
ystate.focus();
return false;
}
else
{
return true;
}
}


function certificatesselect(ycertificates)
{
if(ycertificates.value == "Default")
{
alert('Please select your certificates');
ycertificates.focus();
return false;
}
else
{
return true;
}
}

function subselect(ysub)
{
if(ysub.value == "Default")
{
alert('Select the certificate type');
ysub.focus();
return false;
}
else
{
return true;
}
}

function subjectselect(ysubject)
{
if(ysubject.value == "Default")
{
alert('Select your subject');
ysubject.focus();
return false;
}
else
{
return true;
}
}

function gredselect(ygred)
{
if(ygred.value == "Default")
{
alert('Select your subject grade');
ygred.focus();
return false;
}
else
{
    alert('Success! We will get back to you soon!');
    window.location.reload()
return true;
}
}

