



//Search Event

$(document).ready(function (){
    $('#search').on('keyup', function(){
        var value = $(this).val().toLowerCase();
        $('tbody tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })
})




//Creating a table using AJAX calls

$.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=100&page=1&sparkline=false", function buildTable(data){




    for (let i = 0; i < data.length; i++){
        // console.log(data[i]);
        let $rank = data[i].market_cap_rank;
        let $id = data[i].id;
        let $name = `<img src=${data[i].image} width="30" height="30" alt=''/> <span>${data[i].name}</span>`;
        let $symbol = data[i].symbol;
        let $price = data[i].current_price;
        let $twentyFourHours = data[i].price_change_percentage_24h;
        let $volume = data[i].total_volume;
        let $marketCap = data[i].market_cap;
        let $lastUpdated = data[i].last_updated;
      
        
        var $tableRow = $(`<tr>  <td class ="data-rank">${$rank}</td> <td class="data-name">${$name}</td> <td class="data-symbol">${$symbol}</td> <td class="data-price">${new Intl.NumberFormat('en-GB',
        { style: 'currency', currency: 'GBP' }
      ).format($price)}</td> <td class="data-twentyFourHours">${$twentyFourHours.toLocaleString()}</td> <td class="data-volume">${new Intl.NumberFormat('en-GB',
      { style: 'currency', currency: 'GBP' }
    ).format($volume)}</td> <td class="data-marketCap">${new Intl.NumberFormat('en-GB',
    { style: 'currency', currency: 'GBP' }
  ).format($marketCap)}</td>   </tr>`);
       
        if (data[i].price_change_percentage_24h < 0){
            $tableRow.children('.data-twentyFourHours').addClass('red');
           }

           $('.last-updated').text(`Last Updated: ${$lastUpdated}`);


        $('tbody').append($tableRow);


    }


 
});


