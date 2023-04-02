//배당금 계산값나1오게
function calculateDividend() {
  const investmentAmount = parseFloat(
    document.getElementById("investmentAmount").value.replace(/,/g, "")
  );
  const currency = document.getElementById("currency").value;
  const dividendRate = parseFloat(
    document.getElementById("dividendRate").value
  );
  const exchangeRate = document.getElementById("exchangeRate").value;
  let currencySymbol = "";

  if (isNaN(investmentAmount)) {
    return (document.getElementById(
      "result"
    ).innerHTML = `Enter investment Amount`);
  }

  if (currency === "USD") {
    dividendAmount = investmentAmount * (dividendRate / 100);
    currencySymbol = "$";
  } else if (currency === "KRW") {
    dividendAmount = investmentAmount * (dividendRate / 100) * exchangeRate;
    currencySymbol = "₩";
  }

  document.getElementById(
    "result"
  ).innerHTML = `Your dividend amount is ${numberWithCommas(
    dividendAmount.toFixed(0)
  )} ${currencySymbol} this year.`;
}

function numberWithCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//KRW 할때 환율 입력 칸 나오게
function toggleExchangeRate() {
  const currency = document.getElementById("currency").value;
  const exchangeRateContainer = document.getElementById(
    "exchangeRateContainer"
  );
  if (currency === "KRW") {
    exchangeRateContainer.style.display = "block";
  } else {
    exchangeRateContainer.style.display = "none";
  }
}

//다크모드 적용 버트
function toggleDarkMode() {
  var darkMode = document.getElementById("dark-mode");
  if (darkMode.getAttribute("href") == "style.css") {
    darkMode.href = "dark-mode.css";
  } else {
    darkMode.href = "style.css";
  }
}

//3자리 숫자마다 콤마적용
const input = document.querySelector("#investmentAmount");
input.addEventListener("keyup", function (e) {
  let value = e.target.value;
  value = Number(value.replaceAll(",", ""));
  if (isNaN(value)) {
    input.value = 0;
  } else {
    const formatValue = value.toLocaleString("ko-KR");
    input.value = formatValue;
  }
});
