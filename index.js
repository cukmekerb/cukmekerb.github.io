window.addEventListener("DOMContentLoaded", () => {
	let quotes = [
		[
			"Thinking you know why you behave as you do gives you all sorts of excuses for extraordinary behavior.",
			"Frank Herbert,",
			"Chapterhouse: Dune."
		],
		[
			"How do you know I won't respond to your curiosity with a flow of pure shit?",
			"Frank Herbert,",
			"Chapterhouse: Dune."
		],
		[
			"The one who is watched does not see. And the watchers have a billion eyes.",
			"Frank Herbert,",
			"Heretics of Dune."
		],
		[
			"And take thou to thee whete, and barli, and bene, and lent, and mylie, and vetche; and thou shalt sende hem in to a vessel. And thou shalt make to thee looues in noumbre of dais, whiche thou shalt sleepe vpon thi side; thre hundrid and nynti dais thou shalt ete it.",
			"Ezekiel 4:9"
		],
		[
			"[Coca-Cola] is a difficult thing to feed a frog. Have you ever tried it?",
			"Dr. William Boos."
		],
		[
			"In flateryng wordis lyeth gyle.",
			"John Heywood,",
			"The Prouerbs of Wysdom."
		],
		[
			"Lete þy neyghburgh thy frendshep fele.",
			"John Heywood,",
			"The Prouerbs of Wysdom."
		],
		[
			"The world turnyþe, as a ball",
			"John Heywood,",
			"The Prouerbs of Wysdom."
		],
		[
			"Off þy sorow be nott to sad,<br>Of þy ioy be not to glad.",
			"John Heywood,",
			"The Prouerbs of Wysdom."
		],
		[
			"Monster, I do smell horse piss, at which my nose is in great indignation",
			"William Shakespeare,",
			"The Tempest."
		],
		[
			"Eueryman, stande styll! Whyder arte thou goynge<br>Thus gayly? / Hast thou thy Maker forgete?",
			"",
			"The Somonyng of Everyman."
		],
		[
			"Never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.",
			"Lewis Caroll",
			"Alice's Adventures in Wonderland."
		],
		[
			"Rice Krispies are essentially feminine.",
			"Ernest Dichter."
		],
		[
			"Monster, I do smell horse piss, at which my nose is in great indignation.",
			"Trinculo,",
			"The Tempest."
		],
		[
			"Laws to suppress tend to strengthen what they would prohibit. This is a fine point on which all the legal professions of history have based their job security.",
			"Frank Herbert,",
			"Chapterhouse: Dune."
		],
		[
			"The conventional teacher feels threatened by emerging talents and squelches them because of a deep-seated desire to feel superior and safe in a safe environment.",
			"Frank Herbert,",
			"Chapterhouse: Dune."
		],
		[
			"The car has become the premier object of consumerist affection not only because of its price and display value, but also because of its multi-sexed status as phallus, vagina, and womb all rolled into one hard, soft, supple, wet techno dream.",
			"R. C. Lutz,",
			"On the Road to Nowhere? California's Car Culture."
		],
	];
	
	let quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.querySelector("#quote").innerHTML = quote[0];
	document.querySelector("#author").innerHTML = quote[1] || "";
	document.querySelector("#work").innerHTML = quote[2] || "";
});
