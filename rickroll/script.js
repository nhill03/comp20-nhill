var songLyrics = ["We're no strangers to love",
"You know the rules and so do I",
"A full commitment's what I'm thinking of",
"You wouldn't get this from any other guy",
"I just wanna tell you how I'm feeling",
"Gotta make you understand",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"We've known each other for so long",
"Your heart's been aching, but",
"You're too shy to say it",
"Inside, we both know what's been going on",
"We know the game and we're gonna play it",
"And if you ask me how I'm feeling",
"Don't tell me you're too blind to see",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"(Ooh, give you up)",
"(Ooh, give you up)",
"Never gonna give, never gonna give",
"(Give you up)",
"Never gonna give, never gonna give",
"(Give you up)",
"We've known each other for so long",
"Your heart's been aching, but",
"You're too shy to say it",
"Inside, we both know what's been going on",
"We know the game and we're gonna play it",
"I just wanna tell you how I'm feeling",
"Gotta make you understand",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you",
"Never gonna give you up",
"Never gonna let you down",
"Never gonna run around and desert you",
"Never gonna make you cry",
"Never gonna say goodbye",
"Never gonna tell a lie and hurt you"];

function getSongLyrics() {
	return songLyrics;
}

function updateHTML(element, i) {
	element.innerHTML = i;
}

function displayLyrics(element) {
	var i = 0;
	element.innerHTML = "u suck";
	while (i < songLyrics.length) {
		doSetTimeout(element, i);
		i++;
	}
}

function doSetTimeout(element, i) {
	setTimeout(function(){element.innerHTML = i;}, 1000)
}