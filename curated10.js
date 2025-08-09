daftarCurated10 = [
"hackertyper.com",
"maze.toys",
"window-swap.com",
"radiooooo.com",
"pointerpointer.com",
"mondrianandme.com",
"boredbutton.com",
"alwaysjudgeabookbyitscover.com",
"ffffidget.com",
"trypap.com",
"smashthewalls.com",
"weirdorconfusing.com",
"thezen.zone",
"creativetechguy.com",
["https://creativetechguy.com/fishfeeder","Fish Feeder"],
"play2048.co",
"screamintothevoid.com",
"29a.ch",
["https://29a.ch/sandbox/2011/neonflames/","Neonflames"],
"patience-is-a-virtue.org",
"endless.horse",
"papertoilet.com",
];

const dafontLetter = [
  ['a', 261],
  ['b', 373],
  ['c', 287],
  ['d', 182],
  ['e', 94],
  ['f', 149],
  ['g', 162],
  ['h', 210],
  ['i', 47],
  ['j', 76],
  ['k', 118],
  ['l', 145],
  ['m', 298],
  ['n', 90],
  ['o', 66],
  ['p', 165],
  ['q', 34],
  ['r', 191],
  ['s', 421],
  ['t', 177],
  ['u', 27],
  ['v', 70],
  ['w', 105],
  ['x', 9],
  ['y', 23],
  ['z', 27],
  ['%23', 15]
];

let chosenDafont = dafontLetter[Math.floor(Math.random()*dafontLetter.length)];
angkaDafont = chosenDafont[1]
while (Math.random()<1/2){angkaDafont++}
daftarCurated10.push(['https://www.dafont.com/alpha.php?lettre='+chosenDafont[0]+'&page='+(1+Math.floor(Math.random()*angkaDafont)),'Dafont']);

daftarSitus = daftarSitus.concat(daftarCurated10);
