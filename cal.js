// const calculation = function formatNumber(num) {
//     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
//   }

// the sum class 
class Sum {
    constructor(name, quantity, kg, gm) {
        this.name = name;
        this.quantity = quantity;
        this.kg = kg;
        this.gm = gm;
    }
    calculation(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    // calculation the all mathmathical term
    cal() {

        const tbody = document.getElementById("table").tBodies.item(0);
        const rows = tbody.children;
        console.log(rows);
        let quantity = 0;
        let kg = 0;
        let gm = 0;
        for (let i = 0; i <= rows.length - 1; i++) {
            quantity += parseFloat(rows[i].children[0].children[0].textContent);
            kg += parseFloat(rows[i].children[1].children[0].textContent);
            gm += parseFloat(rows[i].children[2].children[0].textContent);
        }
        const totalKg = (kg + gm / 1000);
        const totalRate = Math.round(totalKg * parseFloat(document.querySelector("#rate").value));
        document.querySelector(".totalAccounts").innerHTML =
            `<h2>আপনার মোট <span class="totalKg">${totalRate}</span> কেজির মূল্য <span class="totalRate">${totalKg}</span> টাকা ।</h2>`

        //select ui field to add data 
        document.querySelector(".totalKg").textContent = totalKg;
        document.querySelector(".totalRate").textContent = totalRate;
        document.querySelector("#pices").textContent = "মোট" + " " + quantity + " পিছ";
        document.querySelector("#kgg").textContent = "মোট" + " " + kg + " কেজি";
        document.querySelector("#gmg").textContent = "মোট" + " " + gm + " গ্রাম";

    }


}