function validate()
{
    let cname = document.regform.cname.value;
    let dob = document.regform.dob.value;
    let gender = document.regform.gen.value;
    let qual = document.regform.qual.value;
    let marks = document.regform.mscored.value;
    let grade = document.regform.grade.value;
    let lang = document.regform.lang.value;
    let phnum = document.regform.phnum.value;
    let addr = document.regform.addr.value;
    let email = document.regform.email.value;
    console.log(cname,dob,gender,qual,marks,grade,lang,phnum,addr,email);
     let unameformat = /([A-Za-z]){7}/g;
    if(!cname.match(unameformat))
    {
        alert("Invalid Username Format")
    }
    else if(!marks.match(/([0-9]){3}.([0-9]){2}/))
    {
        alert("Mark Format is not Correct!");
    }
    else if(!phnum.match())
    {

    }
   else{
    document.getElementById("showdetails").style="display:block;height:600px;width:600px;background-color:black;color:aqua;padding:30px;text-align:center;font-size:20px";
    document.getElementById("head").innerHTML="<h2>Your Details<h2>"
    document.getElementById("cname").innerHTML=cname;
    document.getElementById("dob").innerHTML=dob;
    document.getElementById("gen").innerHTML=gender;
    document.getElementById("qual").innerHTML=qual;
    document.getElementById("marks").innerHTML=marks;
    document.getElementById("grade").innerHTML=grade;
    document.getElementById("lang").innerHTML=lang;
    document.getElementById("phnum").innerHTML=phnum;
    document.getElementById("email").innerHTML=email;
    document.getElementById("addr").innerHTML=addr;

   }
}