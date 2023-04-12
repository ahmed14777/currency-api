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
    let btn = document.getElementById("btn");
    btn.onclick = () => {
      let euroCr = (currency.rates["EUR"] * amount.value).toFixed(2);
      let egpCr = (currency.rates["EGP"] * amount.value).toFixed(2);
      EGP.innerHTML = egpCr;
      EUR.innerHTML = euroCr;
    };
  });
