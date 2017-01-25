export function initFireBaseConfig(){
	const config = {
		apiKey: "AIzaSyByjyug-5bk8ZM6VC1XmPxqEqJ0sAVKo9A",
		authDomain: "chosenpokemons.firebaseapp.com",
		databaseURL: "https://chosenpokemons.firebaseio.com",
		storageBucket: "chosenpokemons.appspot.com",
		messagingSenderId: "648454588454"
	};

	firebase.initializeApp(config);
}
