fetch(
    "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=fa8bd71ea46b4468ace8d03dd3e0e8cf"
)
    .then((result) => {
        let data = result.json();
        return data;
    })
    .then((currency) => {
        let amount = document.querySelector("#amount");
        let EGP = document.querySelector(".EGP span");
        let EUR = document.querySelector(".EUR span");
        let SAR = document.querySelector(".SAR span");
        let btn = document.getElementById("btn");
        btn.onclick = () => {
            let euroEgy = currency.rates["EGP"] / currency.rates["EUR"];
            let euroSar = currency.rates["SAR"] / currency.rates["EUR"];
            let egpCr = (euroEgy * amount.value).toFixed(2);
            let sarCr = (euroSar * amount.value).toFixed(2); // let euroCr = (currency.rates["EUR"] * amount.value).toFixed(2);
            // let egpCr = (currency.rates["EGP"] * amount.value).toFixed(2);
            // let sarCr = (currency.rates["SAR"] * amount.value).toFixed(2);
            EGP.innerHTML = `${egpCr} جنيه مصري`;
            // EUR.innerHTML = ` ${euroCr} يورو`;
            SAR.innerHTML = `${sarCr} ريال سعودي`;
        };
    });
