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
        tr.innerHTML = `<td><span>${quantity}</span> পিছ</td><td><span>${kg}</span> কেজি</td><td><span>${gm}</span> গ্রাম</td>`
        tbody.appendChild(tr);
    }
    // show massege in ui
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
    // clear all value frome input field 
    clearField() {
        document.querySelector("#name").value = ""
        document.querySelector("#quantity").value = ""
        document.querySelector("#kg").value = ""
        document.querySelector("#gm").value = ""
        document.querySelector("#rate").value = "";
        document.querySelector("#name").setAttribute("disabled", "disabled");
    }
    // clear all value frome all input field and table rows 
    reset() {
        document.querySelector("#pices").textContent = "";
        document.querySelector("#kgg").textContent = "";
        document.querySelector("#gmg").textContent = "";
        document.querySelector("#name").value = ""
        document.querySelector("#quantity").value = ""
        document.querySelector("#kg").value = ""
        document.querySelector("#gm").value = ""
        document.querySelector("#rate").value = "";
        document.querySelector("#name").removeAttribute("disabled");
        document.querySelector(".totalAccounts").innerHTML = "";
        document.getElementById("table").children[1].innerHTML = "";
    }
}