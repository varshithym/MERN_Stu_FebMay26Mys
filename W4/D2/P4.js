const studentform = document.getElementById("studentform");
const nameinput = document.getElementById("nameinput");
const emailinput = document.getElementById("emailinput");
const inspectbtn = document.getElementById("inspectbtn");
const terms = document.getElementById("terms");
const country = document.getElementById("country");

inspectbtn.addEventListener("click",function(){
    console.log("Form ",studentform);
    console.log("Name ",nameinput.value);
    console.log("Email ",emailinput.value);

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    console.log("Gender :", selectedGender ? selectedGender.value : "Not selected");


    console.log("accepted terms: ",terms.checked);
    console.log("country :",country.value);
});
  
