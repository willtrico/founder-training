function calculate() {
  const spend = Number(document.getElementById("spend").value);
  const revenue = Number(document.getElementById("revenue").value);
  const costOfGoods = Number(document.getElementById("costOfGoods").value)

  if (!spend || !revenue || !costOfGoods) {
    document.getElementById("result").innerText = 
      "Please enter spend, revenue and cost of goods.";
    return;
  }

  const roi = ((revenue - spend - costOfGoods) / spend) * 100;

  document.getElementById("result").innerText =
    "ROI: " + roi.toFixed(2) + "%";
}

