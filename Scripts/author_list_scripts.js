//Get data from sql

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


let book_names = [["1984","Hayvan Çiftliği"],['Tutunamayanlar']]


const author_list = document.getElementById("author_list");

console.log(author_list);



for(var i = 0; i<authors.length;i++){
    var img_src = authors[i].auth_mainImgUrl === null? 'https://picsum.photos/768':'../images/'+authors[i].auth_mainImgUrl; 
    var row_html = '<div class="card col-4 md-4" style="padding: 0px 0px;" data_index = ' + i +'>'+ 
    '<img src="' + img_src + '" alt="Card example image"> ' + 
    '<div class = "card-body" data_index = ' + i +'> <h4 class="card-title">' + authors[i].auth_name + ' ' +authors[i].auth_surname + '</h4> ' +
    '<p class="card-text">  <ul class="author-books" data_index = '+ i +' style="font-family: Patrick Hand SC,sans-serif;font-weight: 400;"> Books:';
        for(var j = 0; j<book_names[i].length;j++){
            row_html += '<li>' + book_names[i][j]+ '</li>';
        }
        row_html += "</p>";
        row_html += "</div></div>"
    author_list.innerHTML += row_html;
}



document.body.addEventListener('click',function(event){
    var data_index = event.target.parentElement.getAttribute('data_index');
    if(data_index != null)
        onCardClick(data_index);
});

function onCardClick(auth_index){
    location.href = "../Views/author_details.html?auth_id=" + authors[auth_index].auth_id;
}
