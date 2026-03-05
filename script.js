function calculate() {
  const spend = Number(document.getElementById("spend").value);
  const revenue = Number(document.getElementById("revenue").value);

  if (!spend || !revenue) {
    document.getElementById("result").innerText = 
      "Please enter both spend and revenue.";
    return;
  }

  const roi = ((revenue - spend) / spend) * 100;

  document.getElementById("result").innerText =
    "ROI: " + roi.toFixed(2) + "%";
}

