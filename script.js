const campaigns =[];

function calculate() {
  const spend = Number(document.getElementById("spend").value);
  const revenue = Number(document.getElementById("revenue").value);
  const costOfGoods = Number(document.getElementById("costOfGoods").value);
  const campaignName = document.getElementById("campaignName").value;

  if (!spend || !revenue || !costOfGoods) {
    document.getElementById("result").innerText = 
      "Please enter spend, revenue and cost of goods.";
    return;
  }

  const profit = revenue - spend -costOfGoods;
  const roi = (profit / spend) * 100;

  const campaign = {
    campaignName: campaignName,
    spend: spend,
    revenue: revenue,
    costOfGoods: costOfGoods,
    profit: profit,
    roi: roi,
  };

  campaigns.push(campaign);

  renderCampaigns();


  document.getElementById("result").innerText =
  "Profit: $" + profit.toFixed(2) +  
  " | ROI: " + roi.toFixed(2) + "%";
}

function renderCampaigns() {
  const list = document.getElementById("campaignList");

  list.innerHTML = "";

  for (let i = 0; i < campaigns.length; i++) {
    const campaign = campaigns[i];

    const item = document.createElement("li");

    item.innerText =
    "Campaign Name: " +campaign.campaignName +
    " | Spend: $" + campaign.spend +
    " | Revenue: $" + campaign.revenue +
    " | Cost of goods: $" +campaign.costOfGoods +
    " | Profit: $" +campaign.profit +
    " | ROI: " + campaign.roi.toFixed(2) + "%";

    list.appendChild(item);
  }
}
