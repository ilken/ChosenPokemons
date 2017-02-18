const pokemonData = {
	1: {
		name: 'Bulbasaur',
		rare: false
	},
	2: {
		name: 'Ivysaur',
		rare: false
	},
	3: {
		name: 'Venusaur',
		rare: true
	},
	4: {
		name: 'Charmander',
		rare: false
	},
	5: {
		name: 'Charmeleon',
		rare: false
	},
	6: {
		name: 'Charizard',
		rare: true
	},
	7: {
		name: 'Squirtle',
		rare: false
	},
	8: {
		name: 'Wartortle',
		rare: false
	},
	9: {
		name: 'Blastoise',
		rare: true
	},
	10: {
		name: 'Caterpie',
		rare: false
	},
	11: {
		name: 'Metapod',
		rare: false
	},
	12: {
		name: 'Butterfree',
		rare: false
	},
	13: {
		name: 'Weedle',
		rare: false
	},
	14: {
		name: 'Kakuna',
		rare: false
	},
	15: {
		name: 'Beedrill',
		rare: false
	},
	16: {
		name: 'Pidgey',
		rare: false
	},
	17: {
		name: 'Pidgeotto',
		rare: false
	},
	18: {
		name: 'Pidgeot',
		rare: false
	},
	19: {
		name: 'Rattata',
		rare: false
	},
	20: {
		name: 'Raticate',
		rare: false
	},
	21: {
		name: 'Spearow',
		rare: false
	},
	22: {
		name: 'Fearow',
		rare: false
	},
	23: {
		name: 'Ekans',
		rare: false
	},
	24: {
		name: 'Arbok',
		rare: false
	},
	25: {
		name: 'Pikachu',
		rare: false
	},
	26: {
		name: 'Raichu',
		rare: false
	},
	27: {
		name: 'Sandshrew',
		rare: false
	},
	28: {
		name: 'Sandslash',
		rare: false
	},
	29: {
		name: 'Nidoran♀',
		rare: false
	},
	30: {
		name: 'Nidorina',
		rare: false
	},
	31: {
		name: 'Nidoqueen',
		rare: false
	},
	32: {
		name: 'Nidoran♂',
		rare: false
	},
	33: {
		name: 'Nidorino',
		rare: false
	},
	34: {
		name: 'Nidoking',
		rare: false
	},
	35: {
		name: 'Clefairy',
		rare: false
	},
	36: {
		name: 'Clefable',
		rare: false
	},
	37: {
		name: 'Vulpix',
		rare: false
	},
	38: {
		name: 'Ninetales',
		rare: false
	},
	39: {
		name: 'Jigglypuff',
		rare: false
	},
	40: {
		name: 'Wigglytuff',
		rare: false
	},
	41: {
		name: 'Zubat',
		rare: false
	},
	42: {
		name: 'Golbat',
		rare: false
	},
	43: {
		name: 'Oddish',
		rare: false
	},
	44: {
		name: 'Gloom',
		rare: false
	},
	45: {
		name: 'Vileplume',
		rare: false
	},
	46: {
		name: 'Paras',
		rare: false
	},
	47: {
		name: 'Parasect',
		rare: false
	},
	48: {
		name: 'Venonat',
		rare: false
	},
	49: {
		name: 'Venomoth',
		rare: false
	},
	50: {
		name: 'Diglett',
		rare: false
	},
	51: {
		name: 'Dugtrio',
		rare: false
	},
	52: {
		name: 'Meowth',
		rare: false
	},
	53: {
		name: 'Persian',
		rare: false
	},
	54: {
		name: 'Psyduck',
		rare: false
	},
	55: {
		name: 'Golduck',
		rare: false
	},
	56: {
		name: 'Mankey',
		rare: false
	},
	57: {
		name: 'Primeape',
		rare: false
	},
	58: {
		name: 'Growlithe',
		rare: false
	},
	59: {
		name: 'Arcanine',
		rare: true
	},
	60: {
		name: 'Poliwag',
		rare: false
	},
	61: {
		name: 'Poliwhirl',
		rare: false
	},
	62: {
		name: 'Poliwrath',
		rare: true
	},
	63: {
		name: 'Abra',
		rare: false
	},
	64: {
		name: 'Kadabra',
		rare: false
	},
	65: {
		name: 'Alakazam',
		rare: true
	},
	66: {
		name: 'Machop',
		rare: false
	},
	67: {
		name: 'Machoke',
		rare: false
	},
	68: {
		name: 'Machamp',
		rare: true
	},
	69: {
		name: 'Bellsprout',
		rare: false
	},
	70: {
		name: 'Weepinbell',
		rare: false
	},
	71: {
		name: 'Victreebel',
		rare: false
	},
	72: {
		name: 'Tentacool',
		rare: false
	},
	73: {
		name: 'Tentacruel',
		rare: false
	},
	74: {
		name: 'Geodude',
		rare: false
	},
	75: {
		name: 'Graveler',
		rare: true
	},
	76: {
		name: 'Golem',
		rare: true
	},
	77: {
		name: 'Ponyta',
		rare: false
	},
	78: {
		name: 'Rapidash',
		rare: false
	},
	79: {
		name: 'Slowpoke',
		rare: false
	},
	80: {
		name: 'Slowbro',
		rare: false
	},
	81: {
		name: 'Magnemite',
		rare: false
	},
	82: {
		name: 'Magneton',
		rare: false
	},
	83: {
		name: 'Farfetch\'d',
		rare: false
	},
	84: {
		name: 'Doduo',
		rare: false
	},
	85: {
		name: 'Dodrio',
		rare: false
	},
	86: {
		name: 'Seel',
		rare: false
	},
	87: {
		name: 'Dewgong',
		rare: false
	},
	88: {
		name: 'Grimer',
		rare: false
	},
	89: {
		name: 'Muk',
		rare: true
	},
	90: {
		name: 'Shellder',
		rare: false
	},
	91: {
		name: 'Cloyster',
		rare: false
	},
	92: {
		name: 'Gastly',
		rare: false
	},
	93: {
		name: 'Haunter',
		rare: false
	},
	94: {
		name: 'Gengar',
		rare: false
	},
	95: {
		name: 'Onix',
		rare: false
	},
	96: {
		name: 'Drowzee',
		rare: false
	},
	97: {
		name: 'Hypno',
		rare: false
	},
	98: {
		name: 'Krabby',
		rare: false
	},
	99: {
		name: 'Kingler',
		rare: false
	},
	100: {
		name: 'Voltorb',
		rare: false
	},
	101: {
		name: 'Electrode',
		rare: false
	},
	102: {
		name: 'Exeggcute',
		rare: false
	},
	103: {
		name: 'Exeggutor',
		rare: true
	},
	104: {
		name: 'Cubone',
		rare: false
	},
	105: {
		name: 'Marowak',
		rare: false
	},
	106: {
		name: 'Hitmonlee',
		rare: true
	},
	107: {
		name: 'Hitmonchan',
		rare: true
	},
	108: {
		name: 'Lickitung',
		rare: true
	},
	109: {
		name: 'Koffing',
		rare: false
	},
	110: {
		name: 'Weezing',
		rare: false
	},
	111: {
		name: 'Rhyhorn',
		rare: false
	},
	112: {
		name: 'Rhydon',
		rare: true
	},
	113: {
		name: 'Chansey',
		rare: true
	},
	114: {
		name: 'Tangela',
		rare: false
	},
	115: {
		name: 'Kangaskhan',
		rare: false
	},
	116: {
		name: 'Horsea',
		rare: false
	},
	117: {
		name: 'Seadra',
		rare: false
	},
	118: {
		name: 'Goldeen',
		rare: false
	},
	119: {
		name: 'Seaking',
		rare: false
	},
	120: {
		name: 'Staryu',
		rare: false
	},
	121: {
		name: 'Starmie',
		rare: false
	},
	122: {
		name: 'Mr. Mime',
		rare: false
	},
	123: {
		name: 'Scyther',
		rare: false
	},
	124: {
		name: 'Jynx',
		rare: false
	},
	125: {
		name: 'Electabuzz',
		rare: false
	},
	126: {
		name: 'Magmar',
		rare: false
	},
	127: {
		name: 'Pinsir',
		rare: false
	},
	128: {
		name: 'Tauros',
		rare: false
	},
	129: {
		name: 'Magikarp',
		rare: false
	},
	130: {
		name: 'Gyarados',
		rare: true
	},
	131: {
		name: 'Lapras',
		rare: true
	},
	132: {
		name: 'Ditto',
		rare: true
	},
	133: {
		name: 'Eevee',
		rare: false
	},
	134: {
		name: 'Vaporeon',
		rare: true
	},
	135: {
		name: 'Jolteon',
		rare: true
	},
	136: {
		name: 'Flareon',
		rare: true
	},
	137: {
		name: 'Porygon',
		rare: true
	},
	138: {
		name: 'Omanyte',
		rare: false
	},
	139: {
		name: 'Omastar',
		rare: true
	},
	140: {
		name: 'Kabuto',
		rare: false
	},
	141: {
		name: 'Kabutops',
		rare: true
	},
	142: {
		name: 'Aerodactyl',
		rare: true
	},
	143: {
		name: 'Snorlax',
		rare: true
	},
	144: {
		name: 'Articuno',
		rare: true
	},
	145: {
		name: 'Zapdos',
		rare: true
	},
	146: {
		name: 'Moltres',
		rare: true
	},
	147: {
		name: 'Dratini',
		rare: false
	},
	148: {
		name: 'Dragonair',
		rare: false
	},
	149: {
		name: 'Dragonite',
		rare: true
	},
	150: {
		name: 'Mewtwo',
		rare: true
	},
	151: {
		name: 'Mew',
		rare: true
	},
	152: {
		name: 'Chikorita',
		rare: false
	},
	153: {
		name: 'Bayleef',
		rare: false
	},
	154: {
		name: 'Meganium',
		rare: false
	},
	155: {
		name: 'Cyndaquil',
		rare: false
	},
	156: {
		name: 'Quilava',
		rare: false
	},
	157: {
		name: 'Typhlosion',
		rare: true
	},
	158: {
		name: 'Totodile',
		rare: false
	},
	159: {
		name: 'Croconaw',
		rare: false
	},
	160: {
		name: 'Feraligatr',
		rare: true
	},
	161: {
		name: 'Sentret',
		rare: false
	},
	162: {
		name: 'Furret',
		rare: false
	},
	163: {
		name: 'Hoothoot',
		rare: false
	},
	164: {
		name: 'Noctowl',
		rare: false
	},
	165: {
		name: 'Ledyba',
		rare: false
	},
	166: {
		name: 'Ledian',
		rare: false
	},
	167: {
		name: 'Spinarak',
		rare: false
	},
	168: {
		name: 'Ariados',
		rare: false
	},
	169: {
		name: 'Crobat',
		rare: false
	},
	170: {
		name: 'Chinchou',
		rare: false
	},
	171: {
		name: 'Lanturn',
		rare: false
	},
	172: {
		name: 'Pichu',
		rare: false
	},
	173: {
		name: 'Cleffa',
		rare: false
	},
	174: {
		name: 'Igglybuff',
		rare: false
	},
	175: {
		name: 'Togepi',
		rare: false
	},
	176: {
		name: 'Togetic',
		rare: false
	},
	177: {
		name: 'Natu',
		rare: false
	},
	178: {
		name: 'Xatu',
		rare: false
	},
	179: {
		name: 'Mareep',
		rare: false
	},
	180: {
		name: 'Flaaffy',
		rare: false
	},
	181: {
		name: 'Ampharos',
		rare: true
	},
	182: {
		name: 'Bellossom',
		rare: false
	},
	183: {
		name: 'Marill',
		rare: false
	},
	184: {
		name: 'Azumarill',
		rare: false
	},
	185: {
		name: 'Sudowoodo',
		rare: false
	},
	186: {
		name: 'Politoed',
		rare: false
	},
	187: {
		name: 'Hoppip',
		rare: false
	},
	188: {
		name: 'Skiploom',
		rare: false
	},
	189: {
		name: 'Jumpluff',
		rare: false
	},
	190: {
		name: 'Aipom',
		rare: false
	},
	191: {
		name: 'Sunkern',
		rare: false
	},
	192: {
		name: 'Sunflora',
		rare: false
	},
	193: {
		name: 'Yanma',
		rare: false
	},
	194: {
		name: 'Wooper',
		rare: false
	},
	195: {
		name: 'Quagsire',
		rare: false
	},
	196: {
		name: 'Espeon',
		rare: true
	},
	197: {
		name: 'Umbreon',
		rare: true
	},
	198: {
		name: 'Murkrow',
		rare: false
	},
	199: {
		name: 'Slowking',
		rare: false
	},
	200: {
		name: 'Misdreavus',
		rare: false
	},
	201: {
		name: 'Unown',
		rare: false
	},
	202: {
		name: 'Wobbuffet',
		rare: false
	},
	203: {
		name: 'Girafarig',
		rare: false
	},
	204: {
		name: 'Pineco',
		rare: false
	},
	205: {
		name: 'Forretress',
		rare: false
	},
	206: {
		name: 'Dunsparce',
		rare: false
	},
	207: {
		name: 'Gligar',
		rare: false
	},
	208: {
		name: 'Steelix',
		rare: true
	},
	209: {
		name: 'Snubbull',
		rare: false
	},
	210: {
		name: 'Granbull',
		rare: false
	},
	211: {
		name: 'Qwilfish',
		rare: false
	},
	212: {
		name: 'Scizor',
		rare: true
	},
	213: {
		name: 'Shuckle',
		rare: false
	},
	214: {
		name: 'Heracross',
		rare: true
	},
	215: {
		name: 'Sneasel',
		rare: false
	},
	216: {
		name: 'Teddiursa',
		rare: false
	},
	217: {
		name: 'Ursaring',
		rare: true
	},
	218: {
		name: 'Slugma',
		rare: false
	},
	219: {
		name: 'Magcargo',
		rare: false
	},
	220: {
		name: 'Swinub',
		rare: false
	},
	221: {
		name: 'Piloswine',
		rare: false
	},
	222: {
		name: 'Corsola',
		rare: false
	},
	223: {
		name: 'Remoraid',
		rare: false
	},
	224: {
		name: 'Octillery',
		rare: false
	},
	225: {
		name: 'Delibird',
		rare: false
	},
	226: {
		name: 'Mantine',
		rare: false
	},
	227: {
		name: 'Skarmory',
		rare: false
	},
	228: {
		name: 'Houndour',
		rare: false
	},
	229: {
		name: 'Houndoom',
		rare: true
	},
	230: {
		name: 'Kingdra',
		rare: true
	},
	231: {
		name: 'Phanpy',
		rare: false
	},
	232: {
		name: 'Donphan',
		rare: true
	},
	233: {
		name: 'Porygon2',
		rare: true
	},
	234: {
		name: 'Stantler',
		rare: false
	},
	235: {
		name: 'Smeargle',
		rare: false
	},
	236: {
		name: 'Tyrogue',
		rare: false
	},
	237: {
		name: 'Hitmontop',
		rare: false
	},
	238: {
		name: 'Smoochum',
		rare: false
	},
	239: {
		name: 'Elekid',
		rare: false
	},
	240: {
		name: 'Magby',
		rare: false
	},
	241: {
		name: 'Miltank',
		rare: false
	},
	242: {
		name: 'Blissey',
		rare: true
	},
	243: {
		name: 'Raikou',
		rare: true
	},
	244: {
		name: 'Entei',
		rare: true
	},
	245: {
		name: 'Suicune',
		rare: true
	},
	246: {
		name: 'Larvitar',
		rare: true
	},
	247: {
		name: 'Pupitar',
		rare: true
	},
	248: {
		name: 'Tyranitar',
		rare: true
	},
	249: {
		name: 'Lugia',
		rare: true
	},
	250: {
		name: 'Ho-Oh',
		rare: true
	},
	251: {
		name: 'Celebi',
		rare: true
	}
};

export default pokemonData;
