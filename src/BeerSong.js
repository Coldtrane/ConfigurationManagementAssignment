Main();

function Main() {
    Ninety_Nine_Bottles_of_Beer();
}

function Ninety_Nine_Bottles_of_Beer() {
  for (beer=99; beer>2 ; beer--) {
        console.log(
          beer + " bottles of beer on the wall, " +
          beer + " bottles of beer. Take one down and pass it around, " +
          (beer-1) + " bottles of beer on the wall." + "<br>"
        );
        }
        console.log('2	bottles	of	beer	on	the	wall,	2	bottles	of	beertake	one	down,	pass	it	around,	1	bottle	of	beer	on	the	wall.');
        console.log('1	bottle	of	beer	on	the	wall,	1	bottle	of	beer take	one	down,	pass	it	around,	no	more	bottles	of	beer	on	the	wall.');
}
