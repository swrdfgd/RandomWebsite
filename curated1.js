daftarCurated1 = [
"cyclingreview.net",
"parhopak.com",
"sanavit.de",
"rotaryclubdemallorca.org",
"bioyungetir.com",
"gratedexpectations.com",
"nabeehapp.com",
"zonaemergente.com",
"atv.pripolar.ru",
"gloria-jeans.ru",
"industrial.sherwin-williams.com",
"forum.rossetimr.ru",
"maxpiler.com",
"schadenetvenlo.nl",
"stonexpo.ru",
"scrabbleplayers.org",
"politicasiputere.ro",
"innhanhthuduc.com",
"extremeindian.com",
"allo-entreprise-couverture.fr",
"connessiallopera.it",
"naturawit.cz",
"en.bells.fi",
["https://en.bells.fi/product/"+Math.ceil(Math.random()*95),"en.bells.fi"],
"calhountech.com",
"archives.hungaricana.hu",
"store.youjitaiwan.com",
'giga.de',
'kasubahleading.com',
'alliance-maladies-rares.org',
'axperience.ch',
'en.utrace.me',
'hartmannsdorf.info',
["http://forums.equipped.org/ubbthreads.php?ubb=showflat&Number="+Math.ceil(Math.random()*301698),"forums.equipped.org"],
["https://archive.schoenberg.at/resources/pages/home.php",'Arnold Schönberg Center Image Archive'],
'kalingatv.com',
'goonsgear.com',
'educationdunia.com',
'mondoreality.com',
'www.regione.fvg.it',
'kamservice.ir',
'surfhatteras.com',
'www.correct-pack.com',
'gocxanh.com.vn',
'splendorgolf.com',
'intl.petsafe.net',
'karatay-sanat-haberleri.com.tr',
'karibik-urlaub-reisen.com',
'birchbarandco.com',
'juanarmentia.com',
'sesaotomotiv.com',
'ford-samara.ru',
["https://xn--f9jh9iqa3556cjezb.com/"+Math.ceil(Math.random()*1651),"xn--f9jh9iqa3556cjezb.com"],

];

function getRandomDate(start, end) {
    const startDate1 = new Date(start);
    const endDate1 = new Date(end);
    const randomTime = new Date(startDate1.getTime() + Math.random() * (endDate1.getTime() - startDate1.getTime()));
    
    const year = randomTime.getFullYear();
    const month = ('0' + (randomTime.getMonth() + 1)).slice(-2); // Add leading zero and ensure month is 2 digits
    const day = ('0' + randomTime.getDate()).slice(-2); // Add leading zero and ensure day is 2 digits
    
    return `${year}${month}${day}`;
}

const startDate = '2003-01-21';
const endDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
const randomDate = getRandomDate(startDate, endDate);

daftarCurated1.push(['https://www.scrabbleplayers.org/cgi-bin/wotd.pl?date=' + randomDate,'NASPA Word of the Day']);

daftarSitus = daftarSitus.concat(daftarCurated1);
