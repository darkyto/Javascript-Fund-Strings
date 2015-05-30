console.log('===============');
console.log('START Problem 001');
var reverse = function (input) {
	var charArr = [];
	var index = 0;
	for (var i = input.length - 1; i >= 0; i--) {
		charArr[index] = input[i];
		index++;
	}
	return charArr.join('');
};

var testText = "Sofia";
console.log('Original word: '+testText);
console.log('Reversed word: '+reverse(testText));

console.log('END Problem 001');
console.log('===============');
console.log('===============');
console.log('START Problem 002');
var checkBrackets = function (input) {

	var pbrackets = 0;
	var conclusiveArr = [];

	for (var i = 0; i < input.length; i++) {
		if (input[i] === '(') {
			pbrackets +=1;
			conclusiveArr.push(input[i]);
			if (input[i+1] === ')') { // when we have empty brackets ()
				return false;
			}
		}
		else if (input[i] === ')') {
			pbrackets -= 1;
			conclusiveArr.push(input[i]);
		}
	}
	if ( pbrackets !=0 
		|| conclusiveArr[0] != '(' 
			|| conclusiveArr[conclusiveArr.length-1] != ')'
		|| conclusiveArr.length %2 !=0) {
		return false;
}
else return true;
};
var testBrackets = '((a+b)/5-d)';
var testBrackets2 = '(a+b)(-2)';
var testBrackets3 = '())1+)a+b)(-2 * 3)';
var testBrackets4 = '((.)+(.))';
var testBrackets5 = ')(a+b))';
var testBrackets6 = '()4+4';
console.log('Expression '+testBrackets+' is: '+checkBrackets(testBrackets));
console.log('Expression '+testBrackets2+' is: '+checkBrackets(testBrackets2));
console.log('Expression '+testBrackets3+' is: '+checkBrackets(testBrackets3));
console.log('Expression '+testBrackets4+' is: '+checkBrackets(testBrackets4));
console.log('Expression '+testBrackets5+' is: '+checkBrackets(testBrackets5));
console.log('Expression '+testBrackets6+' is: '+checkBrackets(testBrackets6));
console.log('END Problem 002');
console.log('===============');
console.log('===============');
console.log('START Problem 003');
var countSubtext = function (input, sub) {
	var count = 0;
	for (var i = 0; i < input.length - sub.length + 1; i++) {
		if (input.substr(i, sub.length).toLowerCase() === sub.toLowerCase()) {
			i += sub.length;
			count +=1;
		}
	}
	return count;
};
var subText = 'in';
var sampleText = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
console.log('Appereance of [in] in the sample text: '+countSubtext(sampleText, subText));
console.log('END Problem 003');
console.log('===============');
console.log('===============');
console.log('START Problem 004');
var parseTags = function (input) {
	var result = '';
	var lowtagOpen = '<lowcase>';
	var lowtagClose = '</lowcase>';
	var uptagOpen = '<upcase>';
	var uptagClose = '</upcase>';
	var mixtagOpen = '<mixcase>';
	var mixtagClose = '</mixcase>';		

	for (var i = 0; i < input.length; i++) {
		if (input.substr(i, lowtagOpen.length) === '<lowcase>') {
			input = input.replace(lowtagOpen,'');
			while (i < input.length - lowtagClose.length && input.substr(i, lowtagClose.length) !== lowtagClose) {
				result += '' + input[i].toLowerCase();
				i+=1;
			}
			input = input.replace(lowtagClose,'');
		}
		if (input.substr(i, uptagOpen.length) === '<upcase>') {
			input = input.replace(uptagOpen,'');
			while (i < input.length - uptagClose.length && input.substr(i, uptagClose.length) !== uptagClose) {
				result += '' + input[i].toUpperCase();
				i+=1;
			}
			input = input.replace(uptagClose,'');
		}
		if (input.substr(i, mixtagOpen.length) === '<mixcase>') {
			input = input.replace(mixtagOpen,'');
			while (i < input.length - mixtagClose.length && input.substr(i, mixtagClose.length) !== mixtagClose) {
				var rand = Math.floor((Math.random() * 10) + 1); // random withon 0 nad 10
				if (rand >= 0.5) {
					result += '' + input[i].toUpperCase();
				}
				else {
					result += '' + input[i].toLowerCase();
				}
				i+=1;
			}
			input = input.replace(mixtagClose,'');
		}
		result += input[i];
	}
	return result;
};
var textForParse = ' We are <mixcase>living</mixcase> in a <upcase>yellow '+
'submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
console.log(parseTags(textForParse));
console.log('END Problem 004');
console.log('===============');
console.log('===============');
console.log('START Problem 005');
var replaceSpace = function (input) {
	var result = '';
	for (var i = 0; i < input.length; i++) {
		if (input[i] === ' ') {
			result += '&nbsp;';
		}
		else {
			result += input[i].toString();
		}	
	}
	return result;
};
var sampleText = 'abra ca da bra';
console.log(replaceSpace(sampleText));
console.log('END Problem 005');
console.log('==============='); // 
console.log('===============');
console.log('START Problem 006');
var extractHTML = function (htmlsource) {
	var result = '';
	result = htmlsource.replace(/<[^>]*>/g, ""); 
	return result;
};
var sampleHTML = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
console.log(extractHTML(sampleHTML));
console.log('END Problem 006');
console.log('===============');
console.log('===============');
console.log('START Problem 007');
var parseURL = function (inputURL) {
	var objectURL = {
		protocol : '',
		server : '',
		resource : ''
	};
	objectURL.protocol = inputURL.match(/(.*):\/\//)[1];
	objectURL.server = inputURL.match(/:\/\/(.*?)\//)[1];
	objectURL.resource = inputURL.match(/[a-zA-Z](\/.*)/)[1];

	return objectURL;
};
var sampleURL = 'http://telerikacademy.com/Courses/Courses/Details/239';
console.log(sampleURL);
console.log('The URL above as a JSON:');
console.log(parseURL(sampleURL));
console.log('END Problem 007');
console.log('===============');
console.log('===============');
console.log('START Problem 008');
var replaceHref = function (inputHTML) {
	var result = '';
	inputHTML = inputHTML.replace(/<a href=/g,'[URL='); //str.replace(/[#_]/g,'')
	inputHTML = inputHTML.replace(/">/g,'"]');
	inputHTML = inputHTML.replace(/<\/a>/g, '[/URL]');
	return inputHTML;
};
var sampleHREF =' <p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
console.log('ORIGINAL input: '+ sampleHREF);
console.log(' ');
console.log('REPLACED output: '+replaceHref(sampleHREF));
console.log('END Problem 008');
console.log('===============');
console.log('===============');
console.log('START Problem 009');
var extractEmails = function (input) {
	return input.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
};
var sampleEmailtext = 'ala bala nica {gul gul} emnick@abv.bg zemnick@gmai.com gra[gra@] piu@a mini4k! istinski@mail.bg'; 
var emailsOutput = extractEmails(sampleEmailtext);
console.log('Original text: '+ sampleEmailtext);
console.log('Extracted mails: '+ emailsOutput.join(', '));
console.log('END Problem 009');
console.log('===============');
console.log('===============');
console.log('START Problem 010');
var findPalindromes = function (input) {
	var palindromes = [];
	var index = 0;
	var words = input.split(' ');
	for (var i = words.length - 1; i >= 0; i--) {
		if (isPalindrome(words[i].toLowerCase()) && words[i].length > 1) {
			palindromes[index] = words[i];
			index+=1;
		}
	}
	function isPalindrome (str) {
		var result = false;
		if (str === str.split("").reverse().join("")) {
			result = true;
		}
		return result;
	}
	return palindromes;
};
var samplePalinText = 'Otto wants to have a dog. He walks up the street and is about to step into the pets '+
'store when he sees a sign that reads ‘ Step on no pets ’ hanging on the door. Otto sees a lot of animals at the '+
'pets store. He sees the birds. He sees the squirrels.He sees the lamal. ABBA sees the dogs. “How much does '+
'the dog cost?” Otto says. “Ten dollars,” the ABBA says. Otto gives the man tendollars. Otto buys the dog. The dog '+
'walks home with Otto. Now Otto has a dog. “Thank God now I have a dog,” he says to himself."';
var resultPalindromes = findPalindromes(samplePalinText);
console.log(resultPalindromes);
console.log('END Problem 010');
console.log('===============');
console.log('===============');
console.log('START Problem 011');

function appendHolders (input, arr) {
	for (var i = arr.length - 1; i >= 0; i-=1) {
		while (input.indexOf('{'+i+'}') !== -1)
		{
			input = input.replace('{'+i+'}', arr[i]);
		}
	}
	return input;
}
var placeholders = [1, 'gosho', 'pesho'];
var textHolders = 'ala {0} bala {1} nica {2} ala {0}';
console.log('Original text : '+textHolders);
console.log('Replaced placehodlers: '+appendHolders(textHolders, placeholders));

console.log('END Problem 011');
console.log('===============');
console.log('===============');
console.log('START Problem 012');

function generateList(arrObj, template) {
	var objectArgs = ['name','age'];
	function generageLi(person) {
		var liCell = template;
		for (var i = 0; i < objectArgs.length; i++ ) {
			while (liCell.indexOf('<strong>-{'+objectArgs[i]+'}-') !== -1) {
				liCell = liCell.replace( ('-{'+objectArgs[i]+'}-') , person.name);
			}
			while (liCell.indexOf('<span>-{'+objectArgs[i]+'}-') !== -1) {
				liCell = liCell.replace( ('-{'+objectArgs[i]+'}-') , person.age);
			}
		}
		liCell = '<li>' + liCell + '</li>';
		return liCell;
	}
	var result = '<ul>';
	for (var i = 0; i < arrObj.length; i++) {
		result += generageLi(arrObj[i]);
	}
	result +='</ul>';
	return result;
}

var people = [{name: 'Peter', age: 14},{name: 'Maria', age: 28},{name: 'Ivan', age: 50}];
var tmpl = '<strong>-{name}-</strong> <span>-{age}-</span>';
var peopleList = generateList(people, tmpl);
console.log(peopleList);

//peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'

console.log('END Problem 012');
console.log('===============');
