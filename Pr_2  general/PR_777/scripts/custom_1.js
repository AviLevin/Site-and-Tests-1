var coinsArray = [];
var coinsSpecial = [];
var allCoins = [];











// =====================================



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

$(document).ready(function () {
  console.log(allCoins);



  $(document).ajaxStart(function () {
    $('.loader').css("display", "block");
  });


  $(document).ajaxComplete(function () {
    $(".loader").css("display", "none");
  });




  $.ajax({
    url: "https://api.coingecko.com/api/v3/coins/list",
    type: "GET",
    success: function (response) {
      for (let index = 0; index < 14; index++) {
        let coinItem = {
          id: response[index].id,
          symbol: response[index].symbol,
          name: response[index].name
        };
        allCoins.push(coinItem);

        $("#output").append(`
                    <div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card-header">
                    <div class="row">
                        <div class="col-sm-8">
                        <p class="card-header">${response[index].symbol}</p>
                        </div>
                        <div class="col-sm-4">
                        <label class="switch">
                         <input type="checkbox" class="toggle-group" data-group="${
          response[index].symbol
          }">
                        <span class="slider round"></span>
                        </label>
                        </div>
                        </div>

                        </div>
                        <div class="card-body">
                            <p class="card-text">${response[index].name}</p>
                            <button class="btn btn-info moreInfoBtn" data-id="${
          response[index].id
          }">More info.....</button>
                        </div>
                        <div class="moreInfo" id="${response[index].id}">
                        </div>
                        <div class="spinner-border spinner-border-sm" id="wait"></div>
                    </div>
                    `);
      }
      // console.log(allCoins);

      $(".chkToggle").bootstrapToggle();
      $(".moreInfo").hide("slow");

      $(".moreInfoBtn").on("click", function () {
        $(this).text(function (i, text) {
          return text === "More info....."
            ? ".....less info"
            : "More info.....";
        });

        var createTime = Date.now();
        var coinId = $(this).attr("data-id");
        // console.log(coinId);

        $(".moreInfo").hide(1000);
        $(this)
          .parent()
          .parent()
          .children(".moreInfo")
          .html("");
        $("#" + coinId).slideToggle(1000);

        getCoinAjax2(coinId, createTime);

        $(document).ajaxStart(function () {
          $("#wait").css("display", "block");
        });

        $(document).ajaxComplete(function () {
          $("#wait").css("display", "none");
        });
      });

      $(".toggle-group").on("click", function () {
        var coinSpecialId = $(this).attr("data-group");

        localStorage.setItem("coinsArray", JSON.stringify(coinsArray));


        console.log(coinSpecialId);

        // console.log(coinsSpecial);
        if (coinsSpecial.length < 5 && $(this).is(":checked")) {
          coinsSpecial.push(coinSpecialId);
          console.log(coinsSpecial);
        } else if (coinsSpecial.length <= 5 && !$(this).is(":checked")) {
          for (var i = 0; i < coinsSpecial.length; i++) {
            localStorage.setItem("coinsSpecial", JSON.stringify(coinsSpecial));

            if (coinsSpecial[i] === coinSpecialId) {
              coinsSpecial.splice(i, 1);


              localStorage.setItem("coinsSpecial", JSON.stringify(coinsSpecial));

              console.log(coinsSpecial);
            }
          }
        } else if (coinsSpecial.length >= 5 && $(this).is(":checked")) {
          // alert("wow it is 5");
          $(".modal-body").html("");
          for (let index = 0; index < coinsSpecial.length; index++) {
            // $('.modal-body').append(`<p>${coinsSpecial[index]}<button class="btn btn-warning delete-coin">Delete</button></p>
            // `);
            $(".modal-body").append(`<div class="row">
                        <div class=" col-sm-9">
                      <span class="modal-item">${coinsSpecial[index]}</span> 
                      </div> 
                      <div class=" col-sm-3">
                      
                      <label class="switch">
                     <input type="checkbox" checked class="delete-coin" data-id="${
              coinsSpecial[index]
              }" data-group="${coinsSpecial[index]}">
                     <span class="slider round"></span>
                        </label></div>
                        </div>
                            
                        
`);
            $(".delete-coin").on("click", function () {
              let coinSpecialIdDelete = $(this).attr("data-id");

              if (!$(this).is(":checked")) {
                for (var i = 0; i < coinsSpecial.length; i++) {
                  if (coinsSpecial[i] === coinSpecialIdDelete) {
                    coinsSpecial.splice(i, 1);
                    console.log(coinsSpecial);
                    $(
                      'input[type="checkbox"][data-group="' +
                      coinSpecialIdDelete +
                      '"]'
                    ).prop("checked", false);
                  }
                }
              } else if ($(this).is(":checked") && coinsSpecial.length < 5) {
                if (
                  coinsSpecial[coinsSpecial.length - 1] !== coinSpecialIdDelete
                ) {
                  coinsSpecial.push(coinSpecialIdDelete);
                  $(
                    'input[type="checkbox"][data-group="' +
                    coinSpecialIdDelete +
                    '"]'
                  ).prop("checked", true);

                  console.log(coinsSpecial);
                }
              }
            });
          }
          $("#myModal").modal();

          return false;
        }
      });
    }
  });









  // =======================================================


  var coins = [];
  var coin = "";
  var coinRemove = "";
  var togglecount = 0;

  $("document").on("click", ".custom-control-input ", function (event) {
    if ($(this).is(":checked")) {
      ++togglecount;

      if (togglecount <= 5) {

        coin = $(this).attr("data-id");
        coins.push(coin);
        localStorage.setItem("coinsSpecial", JSON.stringify(coinsSpecial));
      }
    }

  });








  // ========================================================

  // search filters!!//

  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#output .card").filter(function () {
      $(this).toggle($(this).html().toLowerCase().indexOf(value) > -1)
    });
  });






  // ================================================================================================================



  // var hisCoins = JSON.parse(localStorage.getItem("coinsSpecial"));


  // if (hisCoins == null) {
  //     alert("not choose allready");
  // }

  // var coins = [];
  // var str = hisCoins.join(",").toUpperCase();
  // var chart = new CanvasJS.Chart("chartcontainer1", {

  //     exportEnabled: true,
  //     animationEnabled: true,
  //     title: {
  //         text: `${str} to USD`
  //         //   not sync here//
  //     },

  //     axisX: {
  //         title: "time"
  //     },
  //     axisY: {
  //         title: "coin value",
  //         titleFontColor: "#4F81BC",
  //         lineColor: "#4F81BC",
  //         labelFontColor: "#4F81BC",
  //         tickColor: "#4F81BC",
  //         includeZero: false
  //     },
  //     axisY2: {
  //         title: "Profit in USD",
  //         titleFontColor: "#C0504E",
  //         lineColor: "#C0504E",
  //         labelFontColor: "#C0504E",
  //         tickColor: "#C0504E",
  //         includeZero: false
  //     },
  //     toolTip: {
  //         shared: true
  //     },
  //     legend: {
  //         cursor: "pointer",
  //         itemclick: toggleDataSeries
  //     },
  //     data: coins


  // });


  // // =====================================


  // $.ajax({
  //     url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${str}&tsyms=USD`,
  //     type: "GET",
  //     success: function (response) {
  //         console.log(response);
  //         var dt = new Date();
  //         Object.keys(response).forEach(function (item) {

  //             console.push({
  //                 type: "spline",
  //                 name: item,
  //                 axisYType: "secondary",
  //                 showInLegend: true,
  //                 xValueFormatString: "MMM YYYY",
  //                 yValueFormatString: "#,##0 Units",
  //                 dataPoints: [{ x: dt, y: response[item].USD }]
  //             });
  //         });

  //         chart.render();
  //     }

  // });


  // // =========================================


  // function updateChart() {
  //     $.ajax({
  //         url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${str}&tsyms=USD`,
  //         type: "GET",
  //         success: function (response) {
  //             console.log(response);
  //             var i = 0;
  //             var dt = new Date();
  //             Object.keys(response).forEach(function (item) {

  //                 coins[i].dataPoints.push({ x: dt, y: response[item].USD });
  //                 i++
  //             });

  //             chart.render();
  //         }
  //     });
  // }
  // setInterval(updateChart, 2000);






  // function toggleDataSeries(e) {
  //     if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
  //         e.dataSeries.visible = false;
  //     } else {
  //         e.dataSeries.visible = true;
  //     }
  //     e.chart.render();
  // }




  // ===================================================================================================================
  // =
  // =================================================================================================================





  // window.onload = function () {

  //   var options = {
  //     exportEnabled: true,
  //     animationEnabled: true,
  //     title:{
  //       text: "Units Sold VS Profit"
  //     },
  //     subtitles: [{
  //       text: "Click Legend to Hide or Unhide Data Series"
  //     }],
  //     axisX: {
  //       title: "States"
  //     },
  //     axisY: {
  //       title: "Units Sold",
  //       titleFontColor: "#4F81BC",
  //       lineColor: "#4F81BC",
  //       labelFontColor: "#4F81BC",
  //       tickColor: "#4F81BC",
  //       includeZero: false
  //     },
  //     axisY2: {
  //       title: "Profit in USD",
  //       titleFontColor: "#C0504E",
  //       lineColor: "#C0504E",
  //       labelFontColor: "#C0504E",
  //       tickColor: "#C0504E",
  //       includeZero: false
  //     },
  //     toolTip: {
  //       shared: true
  //     },
  //     legend: {
  //       cursor: "pointer",
  //       itemclick: toggleDataSeries
  //     },
  //     data: [{
  //       type: "spline",
  //       name: "Units Sold",
  //       showInLegend: true,
  //       xValueFormatString: "MMM YYYY",
  //       yValueFormatString: "#,##0 Units",
  //       dataPoints: [
  //         { x: new Date(2016, 0, 1),  y: 120 },
  //         { x: new Date(2016, 1, 1), y: 135 },
  //         { x: new Date(2016, 2, 1), y: 144 },
  //         { x: new Date(2016, 3, 1),  y: 103 },
  //         { x: new Date(2016, 4, 1),  y: 93 },
  //         { x: new Date(2016, 5, 1),  y: 129 },
  //         { x: new Date(2016, 6, 1), y: 143 },
  //         { x: new Date(2016, 7, 1), y: 156 },
  //         { x: new Date(2016, 8, 1),  y: 122 },
  //         { x: new Date(2016, 9, 1),  y: 106 },
  //         { x: new Date(2016, 10, 1),  y: 137 },
  //         { x: new Date(2016, 11, 1), y: 142 }
  //       ]
  //     },
  //     {
  //       type: "spline",
  //       name: "Profit",
  //       axisYType: "secondary",
  //       showInLegend: true,
  //       xValueFormatString: "MMM YYYY",
  //       yValueFormatString: "$#,##0.#",
  //       dataPoints: [
  //         { x: new Date(2016, 0, 1),  y: 19034.5 },
  //         { x: new Date(2016, 1, 1), y: 20015 },
  //         { x: new Date(2016, 2, 1), y: 27342 },
  //         { x: new Date(2016, 3, 1),  y: 20088 },
  //         { x: new Date(2016, 4, 1),  y: 20234 },
  //         { x: new Date(2016, 5, 1),  y: 29034 },
  //         { x: new Date(2016, 6, 1), y: 30487 },
  //         { x: new Date(2016, 7, 1), y: 32523 },
  //         { x: new Date(2016, 8, 1),  y: 20234 },
  //         { x: new Date(2016, 9, 1),  y: 27234 },
  //         { x: new Date(2016, 10, 1),  y: 33548 },
  //         { x: new Date(2016, 11, 1), y: 32534 }
  //       ]
  //     }]
  //   };
  //   $("#chartContainer2").CanvasJSChart(options);

  //   function toggleDataSeries(e) {
  //     if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
  //       e.dataSeries.visible = false;
  //     } else {
  //       e.dataSeries.visible = true;
  //     }
  //     e.chart.render();
  //   }

  //   }









}); //end


// ==========================//




