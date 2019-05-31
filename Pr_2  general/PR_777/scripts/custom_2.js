

function getCoinAjax2(coinId, createTime) {
  $.ajax({
    url: "https://api.coingecko.com/api/v3/coins/" + coinId,
    type: "GET",
    success: function(responseCoin) {
      coinItem = {
        id: coinId,
        usd: responseCoin.market_data.current_price.usd,
        eur: responseCoin.market_data.current_price.eur,
        ils: responseCoin.market_data.current_price.ils,
        time: createTime,
        imgSrc: responseCoin.image.small
      };

      CheckAndSaveToLocal(coinId);

      $("#" + coinId).html(`
                <div class="card">
                <img src="${responseCoin.image.small}" alt="">
                <ul>Price another valute
                    <li>UDS:${responseCoin.market_data.current_price.usd}</li>
                    <li>EUR:${responseCoin.market_data.current_price.eur}</li>
                    <li>ILS:${responseCoin.market_data.current_price.ils}</li>
                </ul>
                </div>`);
    }
  });
}

function getCoinAjax3(coinsSpecial) {
  var multiUrl = "https://min-api.cryptocompare.com/data/pricemulti?fsyms="; //&tsyms=USD";
  for (let index = 0; index < coinsSpecial.length; index++) {
    multiUrl += coinsSpecial[index].toUpperCase() + ",";
  }
  multiUrl += "&tsyms=USD";
  console.log(multiUrl);


}

function CheckAndSaveToLocal(coinId) {
  if (coinsArray.length == 0) {
    coinsArray.push(coinItem);
    localStorage.setItem("coinsArray", JSON.stringify(coinsArray));
    console.log(coinsArray);
  } else {
    var isIs = false;
    for (var i = 0; i < coinsArray.length; i++) {
      if (coinsArray[i]["id"] == coinId) {
        coinsArray[i] = coinItem;
        isIs = true;
      }
    }

    if (isIs == false) {
      coinsArray.push(coinItem);
      localStorage.setItem("coinsArray", JSON.stringify(coinsArray));
    }
    console.log(coinsArray);
  }
}

function checkIsInLocal(coinId) {
  if (coinsArray.length == 0) {
    return false;
  } else {
    for (var i = 0; i < coinsArray.length; i++) {
      if (coinsArray[i]["id"] == coinId) {
        $("#" + coinId).html(`

                         <div class="card">
                         <img src="${coinsArray[i].imgSrc}" alt="">
                         <ul>Price another valute
                             <li>UDS:${coinsArray[i].usd}</li>
                             <li>EUR:${coinsArray[i].eur}</li>
                             <li>ILS:${coinsArray[i].ils}</li>
       
                         </ul>
                         </div>`);
      } else {
        return false;
      }
    }
  }
}

function saveCoinsToLocal() {
  if (localStorage !== undefined) {
    localStorage.setItem("coinsArray", JSON.stringify(coinsArray));
  } else {
    // Sorry! No Web Storage support..
  }
}

function getCoinsFromLocal() {
  if (localStorage !== undefined) {
    coinsArray = JSON.parse(localStorage.getItem("coinsArray"));
  } else {
    // Sorry! No Web Storage support..
  }
}


//       graph    //


function graf() {



  var hisCoins = JSON.parse(localStorage.getItem("coinsArray"));


  if (hisCoins == null) {
      alert("not choose allready");
  }

  var coins = [];
  var str = hisCoins.join(",").toUpperCase();
  var chart = new CanvasJS.Chart("chartcontainer", {

      exportEnabled: true,
      animationEnabled: true,
      title: {
          text: `${str} to USD`
          //   not sync here//
      },

      axisX: {
          title: "time"
      },
      axisY: {
          title: "coin value",
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC",
          includeZero: false
      },
      axisY2: {
          title: "Profit in USD",
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E",
          includeZero: false
      },
      toolTip: {
          shared: true
      },
      legend: {
          cursor: "pointer",
          itemclick: toggleDataSeries
      },
      data: coins


  });


  // =====================================


  $.ajax({
      url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${str}&tsyms=USD`,
      type: "GET",
      success: function (response) {
          console.log(response);
          var dt = new Date();
          Object.keys(response).forEach(function (item) {

              console.push({
                  type: "spline",
                  name: item,
                  axisYType: "secondary",
                  showInLegend: true,
                  xValueFormatString: "MMM YYYY",
                  yValueFormatString: "#,##0 Units",
                  dataPoints: [{ x: dt, y: response[item].USD }]
              });
          });

          chart.render();
      }

  });


  // =========================================


  function updateChart() {
      $.ajax({
          url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${str}&tsyms=USD`,
          type: "GET",
          success: function (response) {
              console.log(response);
              var i = 0;
              var dt = new Date();
              Object.keys(response).forEach(function (item) {

                  coins[i].dataPoints.push({ x: dt, y: response[item].USD });
                  i++
              });

              chart.render();
          }
      });
  }
  setInterval(updateChart, 2000);






  function toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
      } else {
          e.dataSeries.visible = true;
      }
      e.chart.render();
  }

  
}
