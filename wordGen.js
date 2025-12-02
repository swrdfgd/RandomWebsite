
    // Data frekuensi huruf dari kamus (dalam persentase)
    const kamusFrequency = {
       'A': 0.078,
       'B': 0.02,
       'C': 0.04,
       'D': 0.038,
       'E': 0.11,
       'F': 0.014,
       'G': 0.03,
       'H': 0.023,
       'I': 0.086,
       'J': 0.0021,
       'K': 0.0097,
       'L': 0.053,
       'M': 0.027,
       'N': 0.072,
       'O': 0.061,
       'P': 0.028,
       'Q': 0.0019,
       'R': 0.073,
       'S': 0.087,
       'T': 0.067,
       'U': 0.033,
       'V': 0.01,
       'W': 0.0091,
       'X': 0.0027,
       'Y': 0.016,
       'Z': 0.0044
    };
    const kamusFrequencyIndonesia = {
       'A': 0.2039,
       'B': 0.0264,
       'C': 0.0076,
       'D': 0.0500,
       'E': 0.0828,
       'É': 0.0001,
       'F': 0.0021,
       'G': 0.0366,
       'H': 0.0274,
       'I': 0.0798,
       'J': 0.0087,
       'K': 0.0514,
       'L': 0.0326,
       'M': 0.0421,
       'N': 0.0933,
       'O': 0.0126,
       'P': 0.0261,
       'Q': 0.0001,
       'R': 0.0464,
       'S': 0.0415,
       'T': 0.0558,
       'U': 0.0462,
       'V': 0.0018,
       'W': 0.0048,
       'X': 0.0003,
       'Y': 0.0188,
       'Z': 0.0004
    };

    // Fungsi untuk menghasilkan huruf acak berdasarkan peluang kemunculannya di kamus
    function getRandomLetter(probabilities) {
       const random = Math.random();
       let cumulativeProbability = 0;

       for (const char in probabilities) {
          cumulativeProbability += probabilities[char];
          if (random < cumulativeProbability) {
             return char;
          }
       }

       // Jika seluruh huruf telah diiterasi tetapi belum ada yang dipilih, pilih huruf terakhir sebagai default.
       return Object.keys(probabilities)[Object.keys(probabilities).length - 1];
    }

    // Contoh penggunaan fungsi untuk menghasilkan huruf acak berdasarkan frekuensi kamus
    const randomLetter = getRandomLetter(kamusFrequency);

  //random unicode string
  function getRandomUnicodeCharacter(font = getComputedStyle(document.body).fontFamily) {
  // Generate a random code point within the entire Unicode range (0x0000 to 0x10FFFF).
  const codePoint = Math.floor(Math.random() * (0x10FFFF + 1));
  
  if(!characterIsSupported(String.fromCodePoint(codePoint),font)){return getRandomUnicodeCharacter(font);}
  
  // Convert the code point to a Unicode character.
  return String.fromCodePoint(codePoint);
  }

  function getRandomLatinLetter() {
    // Generate a random code point within the Unicode Latin Letters range (U+0041 to U+005A for uppercase letters, U+0061 to U+007A for lowercase letters).
    const uppercaseCodePoint = Math.floor(Math.random() * (0x005A - 0x0041 + 1) + 0x0041);
    const lowercaseCodePoint = Math.floor(Math.random() * (0x007A - 0x0061 + 1) + 0x0061);

    // Randomly choose between uppercase and lowercase letters.
    const codePoint = Math.random() < 0.5 ? uppercaseCodePoint : lowercaseCodePoint;

    // Convert the code point to a Unicode character.
    const character = String.fromCodePoint(codePoint);

    return character;
  }

  //new Word
  function getRandomWord(font = getComputedStyle(document.body).fontFamily) {
	var mode = Math.floor(Math.random()*5);
   if (mode == 0){
      //mode full acak
      var panjangKata = 5;
      while (Math.random() < 1/2){panjangKata++;}
      panjangKata = Math.ceil(Math.random()*panjangKata);
      var kataBaru = '';
      for (j = 0; j < panjangKata; j++){kataBaru += getRandomUnicodeCharacter(font);}
      return kataBaru;
   }

   if (mode == 1){
      //mode hurufLatin
      var panjangKata = 5;
      while (Math.random() < 1/2){panjangKata++;}
      panjangKata = Math.ceil(Math.random()*panjangKata);
      var kataBaru = '';
      for (j = 0; j < panjangKata; j++){kataBaru += getRandomLatinLetter();}
      return kataBaru;
   }

   if (mode == 2){
      //mode hurufLatinSesuaiFrekuensi
      var panjangKata = 5;
      while (Math.random() < 1/2){panjangKata++;}
      panjangKata = Math.ceil(Math.random()*panjangKata);
      var kataBaru = '';
      for (j = 0; j < panjangKata; j++){kataBaru += getRandomLetter(kamusFrequency);}
      if (Math.random() < 1/2){
         kataBaru = kataBaru.toLowerCase();
         if (Math.random() < 1/2){
            kataBaru = kataBaru.charAt(0).toUpperCase() + kataBaru.slice(1)
         }
      }
      return kataBaru;
   }

   if (mode == 3){
      //mode hurufLatinSesuaiFrekuensi
      var panjangKata = 5;
      while (Math.random() < 1/2){panjangKata++;}
      panjangKata = Math.ceil(Math.random()*panjangKata);
      var kataBaru = '';
      for (j = 0; j < panjangKata; j++){kataBaru += getRandomLetter(kamusFrequencyIndonesia);}
      if (Math.random() < 1/2){
         kataBaru = kataBaru.toLowerCase();
         if (Math.random() < 1/2){
            kataBaru = kataBaru.charAt(0).toUpperCase() + kataBaru.slice(1)
         }
      }
      return kataBaru;
   }
   
   if (mode == 4){
      //mode kataSemuaBahasa

      var kataBaru = kata[Math.floor(Math.random()*kata.length)];
      if (Math.random() < 1/2){
         kataBaru = kataBaru.toUpperCase();
      }
      else if (Math.random() < 1/2){
         kataBaru = kataBaru.charAt(0).toUpperCase() + kataBaru.slice(1)
      }
      return kataBaru;
   }

  }
  
	function getRandomSearch(){
		var searchKey = ''
		searchKey = getRandomWord();
		while (Math.random() < 1/2){
			searchKey += ' ' + getRandomWord();
		}
		return searchKey;
	}