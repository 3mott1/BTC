btn = document.getElementById("btn");
btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
cvb = document.getElementById("cvb");
cvb1 = document.getElementById("cvb1");

btn.addEventListener("click",btn_f)
btn1.addEventListener("click",btn1_f)
btn2.addEventListener("click",btn2_f)

function btn2_f(){
    console.log("ok")
cvb.innerHTML ="1)Суд арештував $1,5 мільйона криптоактивів ексголови Держспецзв’язку: відео, інфографіка <br>2)Хабар у криптовалюті: підозрюваного нардепа взяли під варту <br>3)Криптобіржа Binance визнала відмивання грошей і виплатить понад $4 млрд – Мінʼюст США<br>4)Суд арештував криптовалюту ексголови Держспецзв’язку Щиголя<br>5)У Києві затримали групу осіб, які били та калічили підприємця, вимагаючи криптовалюту"

}
function btn_f(){
    console.log("ok")
cvb1.innerHTML = "<img  class = small_img src =https://www.binance.com/bapi/fe/growth/coin-price/assets/ru-UA/bitcoin.png>"

}
function btn1_f(){
    console.log("ok")
cvb1.innerHTML ="<img  class = small_img src =https://www.binance.com/bapi/fe/growth/coin-price/assets/ru-UA/bitcoin.png>"

}



