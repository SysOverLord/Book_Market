let books = [{
    bk_id: '1', bk_title: '1984', bk_authorId: '1',
    bk_description: 'Bin Dokuz Yüz Seksen Dört, İngiliz yazar George Orwell tarafından kaleme alınmış olan alegorik, distopik ve politik bir romandır. Romanın hikâyesi distopik bir dünyada geçer. Distopya romanlarının en ünlülerindendir. Özellikle kitapta tanımlanan Big Brother kavramı günümüzde de sıklıkla kullanılmaktadır.',
    bk_mainImgUrl: 'bk_1.jpg'
},
{
    bk_id: '2', bk_title: 'Hayvan Çiftliği', bk_authorId: '1',
    bk_description: "Hayvan Çiftliği; George Orwell'in mecazi bir dille yazılmış, fabl tarzındaki siyasi hiciv romanı. Roman ilk olarak 1945'te Birleşik Krallık'ta yayımlandı. 1996'da ise geçmiş tarihler için verilen Retro Hugo Ödülü'nü 1946 senesi için aldı. Roman, Stalinizmin eleştirisidir." ,
    bk_mainImgUrl: 'bk_2.jpg'
},
{
    bk_id: '3', bk_title: 'Tutunamayanlar', bk_authorId: '2',
    bk_description: "Selim Işık'ın intihar ettiğini öğrenen Turgut Özben, ihmal ettiğini düşündüğü arkadaşının geçmişinin izini sürmeye ve Selim'in tanıdığı insanlar aracılığıyla onu tanımaya çalışır. Her insana farklı bir yönünü gösteren Selim'in görüntüsü, Turgut'un bu insanlarla konuşması sonucu okuyucunun ve Turgut'un gözünde netlik kazanacaktır. Romanda birçok kişi vardır ama her biri aslında Selim'in hayatındaki kişilerdir ve tüm anlatılanlar Selim Işık'ı aydınlatır. Selim Işık, düşünen ve sorgulayan insanın simgesidir ve bu yüzden hayata tutunamamış ve bir tutunamayan olmuştur." ,
    bk_mainImgUrl: 'bk_3.jpg'
}];

let books_authors = [{
    auth_id: '1', auth_name: 'George', auth_surname: 'Orwell',
    auth_description: 'Eric Arthur Blair veya daha bilinen takma adıyla George Orwell 20. yüzyıl İngiliz edebiyatının önde gelen kalemleri arasında yer alan İngiliz romancı, gazeteci ve eleştirmen. En çok, dünyaca ünlü Bin Dokuz Yüz Seksen Dört adlı romanı ve bu romanda yarattığı Big Brother kavramı ile tanınır.'
    , auth_mainImgUrl: 'auth_1.jpg'
},
{
    auth_id: '1', auth_name: 'George', auth_surname: 'Orwell',
    auth_description: 'Eric Arthur Blair veya daha bilinen takma adıyla George Orwell 20. yüzyıl İngiliz edebiyatının önde gelen kalemleri arasında yer alan İngiliz romancı, gazeteci ve eleştirmen. En çok, dünyaca ünlü Bin Dokuz Yüz Seksen Dört adlı romanı ve bu romanda yarattığı Big Brother kavramı ile tanınır.'
    , auth_mainImgUrl: 'auth_1.jpg'
},
{
    auth_id: '2', auth_name: 'Oğuz', auth_surname: 'Atay',
    auth_description: "Oğuz Atay, 12 Ekim 1934'te Kastamonu'nun İnebolu ilçesinde dünyaya geldi. Babası, ağır ceza yargıcı ve Cumhuriyet Halk Partisi (CHP) VI. ve VII. dönem Sinop, VIII. dönem Kastamonu vekili Cemil Atay'dır. İlk ve ortaokulu Ankara'da okuyan Atay, 1951'de bugünkü adı TED Ankara Koleji olan Ankara Maarif Kolejinden, 1957'de İstanbul Teknik Üniversitesi İnşaat Fakültesinden mezun oldu. Askerliğini 1957-59 yılları arasında yaptıktan sonra tamir ve kontrol elemanı olarak Kadıköy vapur iskelesinin yapımında çalıştı. Görevinden istifa ettikten sonra İstanbul Devlet Mühendislik ve Mimarlık Akademisi (şimdiki Yıldız Teknik Üniversitesi) İnşaat Bölümü'nde öğretim üyesi oldu. 1975'te doçent olan Atay, Topografya adlı bir de mesleki kitap yazdı. Çeşitli dergi ve gazetelerde makale ve söyleşileri yayımlandı. Oğuz Atay, Tutunamayanlar'ın 1971-72'de yayımlanmasından sonra, önemli bir tartışmanın odak noktası oldu. Bu romanıyla 1970 TRT Roman Ödülü'nü kazandı. Roman, Oğuz Atay'ın 20. ölüm yıldönümü olan 1997 yılında UNESCO tarafından 20. yüzyıl Türk edebiyatının en seçkin eseri olarak seçilmiştir." 
    ,auth_mainImgUrl: 'auth_2.jpg'
},];

const book_img = document.getElementById("book-img");
const book_title = document.getElementById("book-title");
const book_description = document.getElementById("book-description");
const auth_img = document.getElementById("author-img");
const author_name = document.getElementById("author-name");
const author_description = document.getElementById("author-description");

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const bk_id = urlParams.get('bk_id')


var book_data = books[bk_id-1]
var auth_data = books_authors[bk_id-1]

book_img.src =  "../images/"+ book_data.bk_mainImgUrl; 
book_title.innerHTML = book_data.bk_title;
book_description.innerHTML = book_data.bk_description;
auth_img.src = "../images/" + auth_data.auth_mainImgUrl;
author_name.innerHTML = auth_data.auth_name + ' ' + auth_data.auth_surname;
author_description.innerHTML = auth_data.auth_description;

console.log(JSON.parse(sessionStorage.cart));

document.body.addEventListener('click', function (event) {
    //console.log(event.target.id);
    if(event.target.id == 'buy-btn'){
        onBuyClick();
    }
});

function onBuyClick(){
    var cart = JSON.parse(sessionStorage.cart);

    for(var i = 0;i <cart.length;i++){    
        if(cart[i].bk_id == bk_id){
            cart[i].count += 1;
            sessionStorage.cart = JSON.stringify(cart);
            window.location.reload();
            return;
        }    
    }
    
    var new_book = book_data;
    new_book.count = 1; 
    cart.push(new_book);
    sessionStorage.cart = JSON.stringify(cart);
    window.location.reload();
    
}

