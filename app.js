


class Sum {
    constructor(name, quantity, kg, gm) {

        this.name = name;
        this.quantity = quantity;
        this.kg = kg;
        this.gm = gm;
    }

    cal() {

        const tbody = document.getElementById("table").tBodies.item(0);

        const rows = tbody.children;
        // const row1cells =rows[0].children[0].children[0].textContent

        let quantity = 0;
        let kg = 0;
        let gm = 0;

        for (let i = 0; i <= rows.length - 1; i++) {

            quantity += parseFloat(rows[i].children[0].children[0].textContent);
            kg += parseFloat(rows[i].children[1].children[0].textContent);
            gm += parseFloat(rows[i].children[2].children[0].textContent);

        }

        const totalKg = (kg + gm / 1000);

        const totalRate = totalKg * parseFloat(document.querySelector("#rate").value);

        document.querySelector(".totalAccounts").innerHTML =
            `<p>আপনার মোট <span class="totalKg">${totalRate}</span> কেজির মূল্য <span class="totalRate">${totalKg}</span> টাকা ।</p>`

        document.querySelector(".totalKg").textContent = totalKg;
        document.querySelector(".totalRate").textContent = totalRate;

        document.querySelector("#pices").textContent = "মোট" + " " + quantity + " পিছ";

        document.querySelector("#kgg").textContent = "মোট" + " " + kg + " কেজি";
        document.querySelector("#gmg").textContent = "মোট" + " " + gm + " গ্রাম";




    }


}


// adding in ui
class Ui {

    // add tiem 
    addItem({
        name,
        quantity,
        kg,
        gm
    }) {

        const person = document.querySelector("#person");

        person.textContent = name.toUpperCase();

        let tbody = document.querySelector("#tbody");

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td><span>${quantity}</span> পিছ</td>
        <td><span>${kg}</span> কেজি</td>
        <td><span>${gm}</span> গ্রাম</td>`

        tbody.appendChild(tr);
    }

    showMsg(massage, className) {

        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.textContent = massage;
        const jumbotron = document.querySelector(".jumbotron");
        const form = document.querySelector("form");


        jumbotron.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 2000);
    }
    clearField() {

        document.querySelector("#name").value = ""
        document.querySelector("#quantity").value = ""
        document.querySelector("#kg").value = ""
        document.querySelector("#gm").value = ""
        document.querySelector("#rate").value = "";
        document.querySelector("#name").setAttribute("disabled", "disabled");
    }
    reset() {

        document.querySelector("#name").value = ""
        document.querySelector("#quantity").value = ""
        document.querySelector("#kg").value = ""
        document.querySelector("#gm").value = ""
        document.querySelector("#rate").value = "";
        document.querySelector("#name").removeAttribute("disabled");
        document.querySelector(".totalAccounts").innerHTML = "";
        document.getElementById("table").tBodies.item(0).remove();
       
    }


}



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