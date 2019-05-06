$(document).ready(function() {
  $.ajax({
    url: "https://api.coingecko.com/api/v3/coins/list",
    async: false,
    success: function(result) {
      console.log(result);

      result.forEach(function(result, index) {
        if (index <= 11) {
          $("#card").append(` 
          <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <h4 class="card-title">${result.symbol}</h4>
              <p class="card-text">${result.name}</p>
              <button type="button" id="${
                result.id
              }" class="btn btn-secondary">More Info</button>
            </div>
          </div>
        </div>`);
        }
      });
    }
  });
});

$("#dataTable tbody").on("click", "tr", function() {
  console.log($(this).text());
});
