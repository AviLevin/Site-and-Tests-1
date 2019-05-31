



$(document).ready(function () {


    $(".tab-pane container fade").on("click", function(){
       
      

    var hisCoins = JSON.parse(localStorage.getItem("coinsArray1"));


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
});
});