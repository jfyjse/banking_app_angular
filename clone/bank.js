static deposit() {
        // alert("in deposit")
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pswd").value;
        let amtt =Number(document.querySelector("#amt").value);
        let data = Bank.getAccountdetails()
        let user = Bank.accountValidate(accno, pwd)

        if (user == 0) {
            data[accno]["balance"] += amtt
            alert("avail bal "+ data[accno]["balance"])
        }
        else if (user == 1) {
            alert("pwd error")
        }
        else {
            alert("acc error")
        }

    }



    static withdraw() {
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pswd").value;
        let amtt = document.querySelector("#amt").value;
        let data = Bank.getAccountdetails()
        let user = Bank.accountValidate(accno, pwd)


        if (amtt > data[accno]["balance"]) {
            alert("no amt")

        }
        else
        {
            if (user == 0) {
                data[accno]["balance"] -= amtt
                alert("avail bal "+ data[accno]["balance"])
            }
            else if (user == 1) {
                alert("pwd error")
            }
            else {
                alert("acc error")
            }  
        }
