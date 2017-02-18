/** LOAD FIREBASE **/
let _script = document.createElement('script');
_script.type = 'text/javascript';
_script.async = true;
_script.src = 'https://www.gstatic.com/firebasejs/3.4.1/firebase.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_script);

setTimeout(() => {
	/** FIREBASE CONFIG **/
	const firebaseConfig = {
		apiKey: 'AIzaSyByjyug-5bk8ZM6VC1XmPxqEqJ0sAVKo9A',
		authDomain: 'chosenpokemons.firebaseapp.com',
		databaseURL: 'https://chosenpokemons.firebaseio.com',
		storageBucket: 'chosenpokemons.appspot.com',
		messagingSenderId: '648454588454'
	  };
	  firebase.initializeApp(firebaseConfig);

	/** SET INTERVAL **/
	let myInterval = setInterval(() => {
		let dbID = 0;
		let dbPokemon = {};

		for (let p of pokemons) {
			dbPokemon[dbID] = {
				id: p.id,
				attack: p.attack,
				defence: p.defence,
				stamina: p.stamina,
				lat: p.center.lat,
				lng: p.center.lng,
				expires: p.despawn,
				firstMove: p.move1 || null,
				secondMove: p.move2 || null
			};
			dbID++;
		}

		if (dbPokemon) {
			let dbRef = firebase.database().ref('pokemon');
			dbRef.set(dbPokemon);
		}
	}, 60000);
}, 2000);
