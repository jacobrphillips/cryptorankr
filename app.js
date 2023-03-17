



//Search Event for Table created below

$(document).ready(function (){
    $('#search').on('keyup', function(){
        var value = $(this).val().toLowerCase();
        $('tbody tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })
})



//Table created with jQuery using AJAX calls 

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


//second API call to generate most popular cards

$.get("https://api.coingecko.com/api/v3/search/trending", function trending(data){


for (let key in data){
    for (let i = 0; i < data[key].length-1; i++){
        // console.log(data[key][i].item);
        let $rank = data[key][i].item.market_cap_rank;
        let $img = data[key][i].item.small;
        let $name = data[key][i].item.name;
        let $symbol = data[key][i].item.symbol;

        let $completeName = (`<img src=${$img} class="trending-img" width="50" height="50" alt=''/><span class="trending-name">${$name}</span>`)

        let $card = $(`<div class="trending-card"><span class="trending-rank">${$rank}</span> ${$completeName} <span class="trending-symbol">${$symbol}</span></div>`);
        $('.trending-container').append($card);
    }
}


})