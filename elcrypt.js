//Encryption program
let chars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//Array stores a new encryption pattern which is declared as 'encChars' in 'encryptPass' and 'decryptPass' functions below
let encPattern = []; 

//stores the 'chars' array as a string
charsStr = "";

//converts 'chars' array into a string
for(i in chars){
	charsStr += chars[i];
}

//function takes charsStr as an argument to generate an encryption pattern
let genPattern = (pass = charsStr)=>{
	var newPass = pass.split("");
	var passArray = pass.split("");

	//generating a new encryption pattern for each of the possible characters in 'chars'
	for(var i=0;i<passArray.length;i++){
		var encCode = chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)] + chars[Math.floor(Math.random()*26)];
		passArray.splice(i, 1, encCode);
		encPattern[newPass[i]] = encCode;
	}

	return encPattern;
}

//encryption pattern(special characters are generated separately)
var encChars = [ '60a7199l0ec11jo0po7nlineg66892g3b6bcbpji7jn4jlgg0b7f0f3cj0fi3688aibhn',
  '9jcjmnm2g6ceapjkhcm7b5i0badhoooea9aopa1kli20coga1hmck04dgam1m5gb7ggl7',
  'hop6ngp1bgec925gii23mg437nep5b43bnf46o2e28cfnphk3fgk0bn07hfddmef87l6c',
  '9kpfaggi5kd8kb3b222ljodglh3id36b0ha1521abho49od6ib7c9ndoe3o1n3m6ahnh9',
  'hbfmf6f8c9f585b48o0aaee9l1im232pa11nc8b95o8ek2n2mci5ee20jhlnbbdh26m2e',
  'p5a7d0occk8pf5p119ha07c0pm89o3d1pb27a3b71n3oidifmm7bpicio1goph8f35341',
  'fll5cgo3pobp3dhk3h31gpdagjgea3h86k3pd2hl98ilnao5d0ckpagpgm2iaop2250b1',
  'lp1h7nbhgipikpn6pb4mp9l16ef0l75legcj2c3enj4id553i9d6ei1e2kmj6n89p6ahd',
  'og8eeea2ibc749ncmo77anaiia7c08op17071lm8obg54n4jjegnb996c3ik8ma852305',
  'ih7g4m0g37o378ed5elefi5p0d09n2cop430hlobh14ega5nbenm120acg26in27jk19f',
  {
  a: '88lkon0oajlo270hdi8da19518d55dicfi3age6jjl768lkijopaj0h0efd7k5f29305c',
  b: 'ffle3884f8mep12om9n0d7g63975p54e4h3kjjo7kj83ajg2ll10nhi2khj6haen7m151',
  c: '260gko417i3oe0d8k67lkepjc2i3c3571n5cb9nmjok1mgp6m37e3pim7b3oco0gecl99',
  d: '7ahg89na07gof0eckia7ak5l35cbo45a7fcd5lha65n7oj9nhf1ccoeo0de87li9ha2j0',
  e: '6jc76nc91i66a82b6hfgadkl77007li4eakke1814bm2nkl4n13h178jaiaae7id6fdfe',
  f: '92g8oim6ibmnkli490e4hgncig5in5l450gcdp5i50j04pjbingh412dpcpd7m4210iic',
  g: 'j23dpnhd12781jfiafk0k3c3d6a9j28angl7ofed92b4bebo11cbh4h9ljkg83ill374m',
  h: '8e18077d2dfcjnfde3obcfcd2ej4mjha6j355cch2ll4efepob3hjdhmp84jiannf9ib8',
  i: 'i870m7i7dd81fp5a2khg91pi7o303mc64n3d78e5kmgkmjd6i38452bl9cbkcbkgnl6db',
  j: 'nlf014ja68m0683p6kf2bii7li6ej56bgin0k301gjkk549fll4141fj36a131ibpa922',
  k: 'f6nak18f87nf5j5cdh7n8n6mm7m8m3geb0ka1m5pib5n493gg4l3m1kkfb8n4bg4fn371',
  l: 'ndemlb6gpm5k0fokle5pje82o3o3jd52ne8d33n7afp462ddgd7hhl5oge6e5m8eio74g',
  m: 'k5mk9c2hn2p6mgpp2l19kiiakoekgj8pa4nilph7o2aho7nnlmb5l6hl8ooclpl71dj2c',
  n: '7o36n3lj6o46kl0fhac730h8868gjj7nj81m5gpggj6iah6eiijjc2mlcb27ai4k9363k',
  o: 'fjhblelcl01d57fo8i8mk6mfc5f47oipf3i9ph2dgd52f28d165147hj590g5lnp92bgp',
  p: 'anoefec9icn12nj85j8ec95hb2l2kemob3iclc1n3alhj117akccpgdcbi69lmo30672d',
  q: '1n4he5a9mp1ljbdb8pa54k35a7h37ok0j02idlhg9c4kinlicm77mhc8518dpe89n6aba',
  r: 'mkh786j99772k8cp0c07mkl7mgoji0kg3lgahkn0o8me16nd852nhaijdg5hepda1398c',
  s: 'a3f2fm0m6fcbblfpfdlm1fcf3gg4ggkb3bcjcc62e1khfhpp767gcgmikpldk4coeijmg',
  t: 'd298o8jb065cd7dlogn4bfkogo298mj89g5hinl2peefd0eag799eio69h158igge6cpm',
  u: '3dd6g5p14f62l7jgeacdela1f4odn6759mii5cnc22k4gcd83li07col59di4e6pc1h9n',
  v: 'bflcheainah46pa5292l8e8hd753ol22f2k1619ifmh032bk73pmoijlbhnm97iafenii',
  w: 'p5hc93h7cbjldddc6l5f6cen53al6hj8l94gficcfd1mkei9cle0a10ek6no3mj0d24p4',
  x: 'k35ofjlmeg6a8c0fimhlbjmipgeo6757fjb0dc7bfa6ggcf4m3l0igm0k376bl7b9opfg',
  y: '89hhph8ip2ocf30j41ko6nal3jg4jn8fplfmoj15gbf9ckb14n5i65e87jag3cn6hbkdl',
  z: 'og9pikajh1p9lelccfhi3jpccl1684dn95npg96ii69lnc61e4mi80ecl1eci4iifm5bp'},
  {
  A: 'oi28n3g8o1gcfcd22nfknm6en2e398mnhepn50og51knk106lgm30mo4kh2hod74mf1dl',
  B: 'gp2hkp12a1ol03mdmg6jaglf66a9he10d2npk5lodg93ejpi9hp78c01ik4il43h63c89',
  C: 'ag19a70haf69agmfjln787n8fee20p2j6bcifa1a0hem0308ddgcno52aobicnkg930hd',
  D: 'k69gic8m8b717of05j7gfiekb02m317n9ligg215ejjpahb5lj31n72hggo0ihl0a556e',
  E: 'jj7m5m9ciplikn354feco2g6m00ddbd45hojpjdhjiiehccbc22pp0a5pi2mcnl1h5jel',
  F: '3nndf7525bb2i957610blfj891hdnkd11bma567d4f3hhgaph871p11fh5e3o8jok2n0j',
  G: '1nlmi6l1pl44ekfeabeeacd5iam7kc3pl7cck9jp283legl949kf8knfe4m1a099o0aa7',
  H: '31lj5l4dn35epe6omaec37722m7je54f7ghhkone5ion33k72h21mp7nb6nappk97p83n',
  I: 'oemgad6l9pck2e2mib134o003j4c5l146gg56cmo1ghn4di3nl7pghcmg916obh901k03',
  J: 'me1j0l16pne1bg66kdlke3hi6k34h2bjjml0llihi20knj32g607jbj3041pbh40d79pe',
  K: '107fk1fjo350f8k2ooi6i076il26d22ichnbadi0n7601p1e126akjfkipa1kjbhfdof9',
  L: 'ce1n1b4aaaacdeg9ieg9e9011ijio3777phcpo3jebmfni5pc3l930o0mf7p8c6i2ga75',
  M: 'j029oe2bpon23oon4chomcf5f5i2ooom997417hocpa82140d9mb80fl1g96n3iak512i',
  N: '6d86medpk88ec89i59hkj92jpk8k5kf01fpi63kec9e81pb107mmgg021i844alebb4ag',
  O: 'npebk1694lk2l605p078km6em2pa2f4mc3mlhiom955gdmaa8p5gni31h90leo719ikbc',
  P: 'jbpiii6omjji3kgd0j6i2a29p5b2p6cjmgf7g3gj9m05en4pe6k8ela11h87i5emc55ce',
  Q: '0ne4aim05pm9hjph70e8a06kjpnodmi94o1498ag7ikchkpe8kcj59kcifkpg5137bgc6',
  R: 'i9hdm5e48ikdpbpngc791b9h1kfl15elmjei5cgial30pfh39j2a02mhcd3e99c50h8fa',
  S: 'c4dam3b6l4ho8iba609jdimjom58g20blbd5hn520fpeh66b0hbhhh57l7kh63373ejcp',
  T: '3i9mplclmgac22o25mohga780gjjmd50ldg88o6n57mpfnh068g9bb7ibc7h7331oj2hh',
  U: 'ba25k0ajnlhnn4kabdk2k1004659337hko87ng86b68l05mccfil7lcfkhi58gmo7e8lp',
  V: 'b9cmdckm4kbopfl9hc0bf4ih9a65ma4ng2h8ochp70h54e6fkdjpm4di9a1p5ao81jbcl',
  W: '3jbm95j8f43ifcem2klogpienme4j29pi4d1kn9p7mcff3dg3jd44kf9e15lohfacpaeo',
  X: 'h0hf7ha10jaa42e0kgp39fa9kneg61bc9anjmmabdkl863j0eo4ahh7o635n4b59lf4kl',
  Y: 'fe8m2l9i17ja0c45l8ohc6p4mcm3doa10mle9dmdigmjp8laa3717okao1l2nd1o3jpil',
  Z: '38m5878a99ffa13c2mkp363p6gln3f1fi49ib3c607ggje18dobh0ff2pi45n8m6eo9on'},
  {
  at: 'm8b6gbafg6inbae6j4loh23ieg1ohe55ck87ad3h84jid9hek4dcfh0ej2fd37060pbh0',
  exc: '885d64d55a28b4efjb16h3ah6ldbd14hcm0lbb0ad831koapl8aoa9e04bo4b6bn340i5',
  que: 'je4310cno8clgmm94hfjed468kbedh3m9ppkmlaa1ml2da29pkh37oic4f5ji7ogojm33',
  dol: '08oo5540emcgl6cc50fcgipj6a412j37l3gnpl24m3bb6ablbab6bd27pncdkcnhahgc3',
  und: '7ecpc6b13kga0gao02cedjc24o6g0bbcmf1a4alfd70p598hf12dmdb1ho3bhi9e6cpnc'}]

//encryption
let encryptPass = (pass)=>{
	pass.toString();
	var newPass = pass.split("");
	var passArray = pass.split("");

	function inArray(arrayToCheck) {
		for (var i = 0; i < arrayToCheck.length; i++) {
			if (arrayToCheck[i]==="0") {
				arrayToCheck.splice(i, 1, encChars[0]);
			}else if (arrayToCheck[i]==="1") {
				arrayToCheck.splice(i, 1, encChars[1]);
			}else if (arrayToCheck[i]==="2") {
				arrayToCheck.splice(i, 1, encChars[2]);
			}else if (arrayToCheck[i]==="3") {
				arrayToCheck.splice(i, 1, encChars[3]);
			}else if (arrayToCheck[i]==="4") {
				arrayToCheck.splice(i, 1, encChars[4]);
			}else if (arrayToCheck[i]==="5") {
				arrayToCheck.splice(i, 1, encChars[5]);
			}else if (arrayToCheck[i]==="6") {
				arrayToCheck.splice(i, 1, encChars[6]);
			}else if (arrayToCheck[i]==="7") {
				arrayToCheck.splice(i, 1, encChars[7]);
			}else if (arrayToCheck[i]==="8") {
				arrayToCheck.splice(i, 1, encChars[8]);				
			}else if (arrayToCheck[i]==="9") {
				arrayToCheck.splice(i, 1, encChars[9]);
			}else if (arrayToCheck[i]==="a") {
				arrayToCheck.splice(i, 1, encChars[10].a);
			}else if (arrayToCheck[i]==="b") {
				arrayToCheck.splice(i, 1, encChars[10].b);
			}else if (arrayToCheck[i]==="c") {
				arrayToCheck.splice(i, 1, encChars[10].c);
			}else if (arrayToCheck[i]==="d") {
				arrayToCheck.splice(i, 1, encChars[10].d);
			}else if (arrayToCheck[i]==="e") {
				arrayToCheck.splice(i, 1, encChars[10].e);
			}else if (arrayToCheck[i]==="f") {
				arrayToCheck.splice(i, 1, encChars[10].f);
			}else if (arrayToCheck[i]==="g") {
				arrayToCheck.splice(i, 1, encChars[10].g);
			}else if (arrayToCheck[i]==="h") {
				arrayToCheck.splice(i, 1, encChars[10].h);
			}else if (arrayToCheck[i]==="i") {
				arrayToCheck.splice(i, 1, encChars[10].i);
			}else if (arrayToCheck[i]==="j") {
				arrayToCheck.splice(i, 1, encChars[10].j);
			}else if (arrayToCheck[i]==="k") {
				arrayToCheck.splice(i, 1, encChars[10].k);
			}else if (arrayToCheck[i]==="l") {
				arrayToCheck.splice(i, 1, encChars[10].l);
			}else if (arrayToCheck[i]==="m") {
				arrayToCheck.splice(i, 1, encChars[10].m);
			}else if (arrayToCheck[i]==="n") {
				arrayToCheck.splice(i, 1, encChars[10].n);
			}else if (arrayToCheck[i]==="o") {
				arrayToCheck.splice(i, 1, encChars[10].o);
			}else if (arrayToCheck[i]==="p") {
				arrayToCheck.splice(i, 1, encChars[10].p);
			}else if (arrayToCheck[i]==="q") {
				arrayToCheck.splice(i, 1, encChars[10].q);
			}else if (arrayToCheck[i]==="r") {
				arrayToCheck.splice(i, 1, encChars[10].r);
			}else if (arrayToCheck[i]==="s") {
				arrayToCheck.splice(i, 1, encChars[10].s);
			}else if (arrayToCheck[i]==="t") {
				arrayToCheck.splice(i, 1, encChars[10].t);
			}else if (arrayToCheck[i]==="u") {
				arrayToCheck.splice(i, 1, encChars[10].u);
			}else if (arrayToCheck[i]==="v") {
				arrayToCheck.splice(i, 1, encChars[10].v);
			}else if (arrayToCheck[i]==="w") {
				arrayToCheck.splice(i, 1, encChars[10].w);
			}else if (arrayToCheck[i]==="x") {
				arrayToCheck.splice(i, 1, encChars[10].x);
			}else if (arrayToCheck[i]==="y") {
				arrayToCheck.splice(i, 1, encChars[10].y);
			}else if (arrayToCheck[i]==="z") {
				arrayToCheck.splice(i, 1, encChars[10].z);
			}else if (arrayToCheck[i]==="A") {
				arrayToCheck.splice(i, 1, encChars[11].A);
			}else if (arrayToCheck[i]==="B") {
				arrayToCheck.splice(i, 1, encChars[11].B);
			}else if (arrayToCheck[i]==="C") {
				arrayToCheck.splice(i, 1, encChars[11].C);
			}else if (arrayToCheck[i]==="D") {
				arrayToCheck.splice(i, 1, encChars[11].D);
			}else if (arrayToCheck[i]==="E") {
				arrayToCheck.splice(i, 1, encChars[11].E);
			}else if (arrayToCheck[i]==="F") {
				arrayToCheck.splice(i, 1, encChars[11].F);
			}else if (arrayToCheck[i]==="G") {
				arrayToCheck.splice(i, 1, encChars[11].G);
			}else if (arrayToCheck[i]==="H") {
				arrayToCheck.splice(i, 1, encChars[11].H);
			}else if (arrayToCheck[i]==="I") {
				arrayToCheck.splice(i, 1, encChars[11].I);
			}else if (arrayToCheck[i]==="J") {
				arrayToCheck.splice(i, 1, encChars[11].J);
			}else if (arrayToCheck[i]==="K") {
				arrayToCheck.splice(i, 1, encChars[11].K);
			}else if (arrayToCheck[i]==="L") {
				arrayToCheck.splice(i, 1, encChars[11].L);
			}else if (arrayToCheck[i]==="M") {
				arrayToCheck.splice(i, 1, encChars[11].M);
			}else if (arrayToCheck[i]==="N") {
				arrayToCheck.splice(i, 1, encChars[11].N);
			}else if (arrayToCheck[i]==="O") {
				arrayToCheck.splice(i, 1, encChars[11].O);
			}else if (arrayToCheck[i]==="P") {
				arrayToCheck.splice(i, 1, encChars[11].P);
			}else if (arrayToCheck[i]==="Q") {
				arrayToCheck.splice(i, 1, encChars[11].Q);
			}else if (arrayToCheck[i]==="R") {
				arrayToCheck.splice(i, 1, encChars[11].R);
			}else if (arrayToCheck[i]==="S") {
				arrayToCheck.splice(i, 1, encChars[11].S);
			}else if (arrayToCheck[i]==="T") {
				arrayToCheck.splice(i, 1, encChars[11].T);
			}else if (arrayToCheck[i]==="U") {
				arrayToCheck.splice(i, 1, encChars[11].U);
			}else if (arrayToCheck[i]==="V") {
				arrayToCheck.splice(i, 1, encChars[11].V);
			}else if (arrayToCheck[i]==="W") {
				arrayToCheck.splice(i, 1, encChars[11].W);
			}else if (arrayToCheck[i]==="X") {
				arrayToCheck.splice(i, 1, encChars[11].X);
			}else if (arrayToCheck[i]==="Y") {
				arrayToCheck.splice(i, 1, encChars[11].Y);
			}else if (arrayToCheck[i]==="Z") {
				arrayToCheck.splice(i, 1, encChars[11].Z);
			}else if (arrayToCheck[i]==="@") {
				arrayToCheck.splice(i, 1, encChars[12].at);
			}else if (arrayToCheck[i]==="!") {
				arrayToCheck.splice(i, 1, encChars[12].exc);
			}else if (arrayToCheck[i]==="?") {
				arrayToCheck.splice(i, 1, encChars[12].que);
			}else if (arrayToCheck[i]==="$") {
				arrayToCheck.splice(i, 1, encChars[12].dol);
			}else if (arrayToCheck[i]==="_") {
				arrayToCheck.splice(i, 1, encChars[12].und);
			}	
		}

		return arrayToCheck;
	}


	var myArray = inArray(passArray);
	encPass = "";

	for(i in myArray){
		encPass += myArray[i];
	}
	return encPass;
}


//decryption
let decryptPass = (enc)=>{
	enc.toString();

	var dec = [];

	var no = (enc.length)/69;

	var k=68;

	for (var i = 0; i < no; i++) {
		var j=69;
		if (i===0) {
			var item = enc.substr(i,j);
			dec.push(item);
		}else{
			k++;
			var item = enc.substr(k,j);
			dec.push(item);
			k=k+68;
		}
	}

	function inArray(arrayToCheck) {
		for (var i = 0; i < arrayToCheck.length; i++) {
			if (arrayToCheck[i]===encChars[0]) {
				arrayToCheck.splice(i, 1, "0");
			}else if (arrayToCheck[i]===encChars[1]) {
				arrayToCheck.splice(i, 1, "1");
			}else if (arrayToCheck[i]===encChars[2]) {
				arrayToCheck.splice(i, 1, "2");
			}else if (arrayToCheck[i]===encChars[3]) {
				arrayToCheck.splice(i, 1, "3");
			}else if (arrayToCheck[i]===encChars[4]) {
				arrayToCheck.splice(i, 1, "4");
			}else if (arrayToCheck[i]===encChars[5]) {
				arrayToCheck.splice(i, 1, "5");
			}else if (arrayToCheck[i]===encChars[6]) {
				arrayToCheck.splice(i, 1, "6");
			}else if (arrayToCheck[i]===encChars[7]) {
				arrayToCheck.splice(i, 1, "7");
			}else if (arrayToCheck[i]===encChars[8]) {
				arrayToCheck.splice(i, 1, "8");				
			}else if (arrayToCheck[i]===encChars[9]) {
				arrayToCheck.splice(i, 1, "9");
			}else if (arrayToCheck[i]===encChars[10].a) {
				arrayToCheck.splice(i, 1, "a");
			}else if (arrayToCheck[i]===encChars[10].b) {
				arrayToCheck.splice(i, 1, "b");
			}else if (arrayToCheck[i]===encChars[10].c) {
				arrayToCheck.splice(i, 1, "c");
			}else if (arrayToCheck[i]===encChars[10].d) {
				arrayToCheck.splice(i, 1, "d");
			}else if (arrayToCheck[i]===encChars[10].e) {
				arrayToCheck.splice(i, 1, "e");
			}else if (arrayToCheck[i]===encChars[10].f) {
				arrayToCheck.splice(i, 1, "f");
			}else if (arrayToCheck[i]===encChars[10].g) {
				arrayToCheck.splice(i, 1, "g");
			}else if (arrayToCheck[i]===encChars[10].h) {
				arrayToCheck.splice(i, 1, "h");
			}else if (arrayToCheck[i]===encChars[10].i) {
				arrayToCheck.splice(i, 1, "i");
			}else if (arrayToCheck[i]===encChars[10].j) {
				arrayToCheck.splice(i, 1, "j");
			}else if (arrayToCheck[i]===encChars[10].k) {
				arrayToCheck.splice(i, 1, "k");
			}else if (arrayToCheck[i]===encChars[10].l) {
				arrayToCheck.splice(i, 1, "l");
			}else if (arrayToCheck[i]===encChars[10].m) {
				arrayToCheck.splice(i, 1, "m");
			}else if (arrayToCheck[i]===encChars[10].n) {
				arrayToCheck.splice(i, 1, "n");
			}else if (arrayToCheck[i]===encChars[10].o) {
				arrayToCheck.splice(i, 1, "o");
			}else if (arrayToCheck[i]===encChars[10].p) {
				arrayToCheck.splice(i, 1, "p");
			}else if (arrayToCheck[i]===encChars[10].q) {
				arrayToCheck.splice(i, 1, "q");
			}else if (arrayToCheck[i]===encChars[10].r) {
				arrayToCheck.splice(i, 1, "r");
			}else if (arrayToCheck[i]===encChars[10].s) {
				arrayToCheck.splice(i, 1, "s");
			}else if (arrayToCheck[i]===encChars[10].t) {
				arrayToCheck.splice(i, 1, "t");
			}else if (arrayToCheck[i]===encChars[10].u) {
				arrayToCheck.splice(i, 1, "u");
			}else if (arrayToCheck[i]===encChars[10].v) {
				arrayToCheck.splice(i, 1, "v");
			}else if (arrayToCheck[i]===encChars[10].w) {
				arrayToCheck.splice(i, 1, "w");
			}else if (arrayToCheck[i]===encChars[10].x) {
				arrayToCheck.splice(i, 1, "x");
			}else if (arrayToCheck[i]===encChars[10].y) {
				arrayToCheck.splice(i, 1, "y");
			}else if (arrayToCheck[i]===encChars[10].z) {
				arrayToCheck.splice(i, 1, "z");
			}else if (arrayToCheck[i]===encChars[11].A) {
				arrayToCheck.splice(i, 1, "A");
			}else if (arrayToCheck[i]===encChars[11].B) {
				arrayToCheck.splice(i, 1, "B");
			}else if (arrayToCheck[i]===encChars[11].C) {
				arrayToCheck.splice(i, 1, "C");
			}else if (arrayToCheck[i]===encChars[11].D) {
				arrayToCheck.splice(i, 1, "D");
			}else if (arrayToCheck[i]===encChars[11].E) {
				arrayToCheck.splice(i, 1, "E");
			}else if (arrayToCheck[i]===encChars[11].F) {
				arrayToCheck.splice(i, 1, "F");
			}else if (arrayToCheck[i]===encChars[11].G) {
				arrayToCheck.splice(i, 1, "G");
			}else if (arrayToCheck[i]===encChars[11].H) {
				arrayToCheck.splice(i, 1, "H");
			}else if (arrayToCheck[i]===encChars[11].I) {
				arrayToCheck.splice(i, 1, "I");
			}else if (arrayToCheck[i]===encChars[11].J) {
				arrayToCheck.splice(i, 1, "J");
			}else if (arrayToCheck[i]===encChars[11].K) {
				arrayToCheck.splice(i, 1, "K");
			}else if (arrayToCheck[i]===encChars[11].L) {
				arrayToCheck.splice(i, 1, "L");
			}else if (arrayToCheck[i]===encChars[11].M) {
				arrayToCheck.splice(i, 1, "M");
			}else if (arrayToCheck[i]===encChars[11].N) {
				arrayToCheck.splice(i, 1, "N");
			}else if (arrayToCheck[i]===encChars[11].O) {
				arrayToCheck.splice(i, 1, "O");
			}else if (arrayToCheck[i]===encChars[11].P) {
				arrayToCheck.splice(i, 1, "P");
			}else if (arrayToCheck[i]===encChars[11].Q) {
				arrayToCheck.splice(i, 1, "Q");
			}else if (arrayToCheck[i]===encChars[11].R) {
				arrayToCheck.splice(i, 1, "R");
			}else if (arrayToCheck[i]===encChars[11].S) {
				arrayToCheck.splice(i, 1, "S");
			}else if (arrayToCheck[i]===encChars[11].T) {
				arrayToCheck.splice(i, 1, "T");
			}else if (arrayToCheck[i]===encChars[11].U) {
				arrayToCheck.splice(i, 1, "U");
			}else if (arrayToCheck[i]===encChars[11].V) {
				arrayToCheck.splice(i, 1, "V");
			}else if (arrayToCheck[i]===encChars[11].W) {
				arrayToCheck.splice(i, 1, "W");
			}else if (arrayToCheck[i]===encChars[11].X) {
				arrayToCheck.splice(i, 1, "X");
			}else if (arrayToCheck[i]===encChars[11].Y) {
				arrayToCheck.splice(i, 1, "Y");
			}else if (arrayToCheck[i]===encChars[11].Z) {
				arrayToCheck.splice(i, 1, "Z");
			}else if (arrayToCheck[i]===encChars[12].at) {
				arrayToCheck.splice(i, 1, "@");
			}else if (arrayToCheck[i]===encChars[12].exc) {
				arrayToCheck.splice(i, 1, "!");
			}else if (arrayToCheck[i]===encChars[12].que) {
				arrayToCheck.splice(i, 1, "?");
			}else if (arrayToCheck[i]===encChars[12].dol) {
				arrayToCheck.splice(i, 1, "$");
			}else if (arrayToCheck[i]===encChars[12].und) {
				arrayToCheck.splice(i, 1, "_");
			}	
		}

		return arrayToCheck;
	}


	  var decPassArr = inArray(dec);

	  var decPass = "";

	  for(i in decPassArr){
	  	decPass += decPassArr[i];
	  }

	  return decPass;
}

module.exports.genPattern = genPattern;
module.exports.encryptPass = encryptPass;
module.exports.decryptPass = decryptPass;