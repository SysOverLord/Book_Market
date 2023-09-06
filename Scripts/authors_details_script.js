
let authors = [{
    auth_id: '1', auth_name: 'George', auth_surname: 'Orwell',
    auth_description: 'Eric Arthur Blair veya daha bilinen takma adıyla George Orwell 20. yüzyıl İngiliz edebiyatının önde gelen kalemleri arasında yer alan İngiliz romancı, gazeteci ve eleştirmen. En çok, dünyaca ünlü Bin Dokuz Yüz Seksen Dört adlı romanı ve bu romanda yarattığı Big Brother kavramı ile tanınır.'
    , auth_mainImgUrl: 'auth_1.jpg'
},
{
    auth_id: '2', auth_name: 'Oğuz', auth_surname: 'Atay',
    auth_description: "Oğuz Atay, 12 Ekim 1934'te Kastamonu'nun İnebolu ilçesinde dünyaya geldi. Babası, ağır ceza yargıcı ve Cumhuriyet Halk Partisi (CHP) VI. ve VII. dönem Sinop, VIII. dönem Kastamonu vekili Cemil Atay'dır. İlk ve ortaokulu Ankara'da okuyan Atay, 1951'de bugünkü adı TED Ankara Koleji olan Ankara Maarif Kolejinden, 1957'de İstanbul Teknik Üniversitesi İnşaat Fakültesinden mezun oldu. Askerliğini 1957-59 yılları arasında yaptıktan sonra tamir ve kontrol elemanı olarak Kadıköy vapur iskelesinin yapımında çalıştı. Görevinden istifa ettikten sonra İstanbul Devlet Mühendislik ve Mimarlık Akademisi (şimdiki Yıldız Teknik Üniversitesi) İnşaat Bölümü'nde öğretim üyesi oldu. 1975'te doçent olan Atay, Topografya adlı bir de mesleki kitap yazdı. Çeşitli dergi ve gazetelerde makale ve söyleşileri yayımlandı. Oğuz Atay, Tutunamayanlar'ın 1971-72'de yayımlanmasından sonra, önemli bir tartışmanın odak noktası oldu. Bu romanıyla 1970 TRT Roman Ödülü'nü kazandı. Roman, Oğuz Atay'ın 20. ölüm yıldönümü olan 1997 yılında UNESCO tarafından 20. yüzyıl Türk edebiyatının en seçkin eseri olarak seçilmiştir." 
    ,auth_mainImgUrl: 'auth_2.jpg'
},];



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


let books_categories = [[{ cat_id: 1, cat_name: 'Science Fiction' }, { cat_id: 2, cat_name: 'Dystopia' }],
                        [{ cat_id:3, cat_name: 'Politics'}],[{cat_id:4, cat_name:'Drama'}]];




const author_name = document.getElementById("author-name-surname");
const author_description = document.getElementById("author-description");
const author_img = document.getElementById("auth-img");



const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const auth_id = urlParams.get('auth_id')

let auth_data = authors[auth_id -1 ];



author_img.src =  "../images/"+ auth_data.auth_mainImgUrl; 
author_name.innerHTML = auth_data.auth_name + " " + auth_data.auth_surname;
author_description.innerHTML = auth_data.auth_description;


    const book_row = document.getElementById("book_row");

    for(var i = 0; i<books.length;i++){

        if(books[i].bk_authorId != auth_id)
            continue;

        var img_src = books[i].bk_mainImgUrl === null? 'https://picsum.photos/768':'../images/'+books[i].bk_mainImgUrl; 
        var row_html = '<div class="card col-4 md-4" style="padding: 0px 0px;" data_index = ' + i +'>'+ 
        '<img src="' + img_src + '" alt="Card example image"> ' + 
        '<div class = "card-body" data_index = ' + i +'> <h4 class="card-title">' + books[i].bk_title + '</h4> ' +
        '<h5 class="card-subtitle">' + auth_data.auth_name + ' ' +auth_data.auth_surname +'</h5> '  + 
        '<p class="card-text">  <ul class="book-category" data_index = '+ i +' style="font-family: Patrick Hand SC,sans-serif;font-weight: 400;"> Categories:';
        for(var j = 0; j<books_categories[i].length;j++){
            row_html += '<li>' + books_categories[i][j].cat_name+ '</li>';
        }
        row_html += "</p>";
        row_html += "</div></div>"
        book_row.innerHTML += row_html;
    }




document.body.addEventListener('click',function(event){
    var data_index = event.target.parentElement.getAttribute('data_index');
    if(data_index != null)
        onCardClick(data_index);
});

function onCardClick(book_index){
    location.href = "../Views/book_details.html?bk_id=" + books[book_index].bk_id;
}



