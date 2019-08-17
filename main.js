

//adding event in btn 
document.querySelector("#btn").addEventListener("click", function () {

    const person = document.querySelector("#name").value;
    const quantity = document.querySelector("#quantity").value;
    const kg = document.querySelector("#kg").value;
    const gm = document.querySelector("#gm").value;

    const profile = new Sum(person, quantity, kg, gm);

    const ui = new Ui();

    if (quantity === "" || kg === "" || gm === "") {

        ui.showMsg("দয়া করে প্রয়োজনীয় তথ্য প্রদান করুন", "danger");

    } else {
        ui.addItem(profile);
        ui.showMsg("আপনার তথ্য যুক্ত হয়েছে", "success");
        ui.clearField();




    }

})



document.querySelector(".btn2").addEventListener("click", () => {
    const sum = new Sum();
    const ui = new Ui();

    if (document.querySelector("#rate").value === "") {
        ui.showMsg("দয়া করে প্রতি কেজির মূল্য প্রদান কুরন !", "danger");

    } else {
        sum.cal();
        ui.clearField();
    }


});



// adding click event in rest button 


document.querySelector(".btn3").addEventListener("click", () => {
    const ui = new Ui();
    ui.reset();
})