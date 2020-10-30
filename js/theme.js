const Themes = {
	stock: {
		appBackground: '#000000',
		foregroundHigh: '#FFFFFF',
		foregroundMed: '#A1A1A6',
		foregroundLow: '#4C4C4E',
		backgroundHigh: '#4C4C4E',
		backgroundMed: '#1D1D1F',
		backgroundLow: ' #000000',
	},
};

window.applyColourTheme = function (themeName) {
	document.documentElement.style.setProperty('--a-b', Themes[themeName].appBackground);
	document.documentElement.style.setProperty('--f-h', Themes[themeName].foregroundHigh);
	document.documentElement.style.setProperty('--f-m', Themes[themeName].foregroundMed);
	document.documentElement.style.setProperty('--f-l', Themes[themeName].foregroundLow);
	document.documentElement.style.setProperty('--b-h', Themes[themeName].backgroundHigh);
	document.documentElement.style.setProperty('--b-m', Themes[themeName].backgroundMed);
	document.documentElement.style.setProperty('--b-l', Themes[themeName].backgroundLow);
};

applyColourTheme('stock');
