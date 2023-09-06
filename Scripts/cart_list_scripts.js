
const cart_data = JSON.parse(sessionStorage.cart);

const cart_row = document.getElementById("cart-row")


cart_data.forEach(element => {
    console.log(element);
    var img_src = element.bk_mainImgUrl === null ? 'https://picsum.photos/768' : '../images/' + element.bk_mainImgUrl;
    var row_html = '<div class="card col-4 md-4" style="padding: 0px 0px;">' +
        '<img src="' + img_src + '" alt="Card example image"> ' +
        '<div class = "card-body"> <h4 class="card-title">' + element.bk_title + '</h4> ' + 
        '<h5 class="card-subtitle"> Amount: ' + element.count + '</h5> ';
    row_html += "</div></div>"
    cart_row.innerHTML += row_html;
});

