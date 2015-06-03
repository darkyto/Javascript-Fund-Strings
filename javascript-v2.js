console.log('##############');
console.log('S----00?-----');
console.log('E----00?-----');
console.log('##############');

console.log('##############');
console.log('S----001-----');
var reverseText = function(str) {
	var newStr = '';
	for (var i = str.length - 1; i >= 0; i-=1) {
		newStr += str[i];
	}
	return newStr;
};
var reverseText2 = function(str) {
	var newStr = [];
	for (var i = str.length - 1 , j = 0; i >= 0; i-=1, j+=1) {
		newStr[j] = str[i];
	}
	return newStr.join('');
};
var reverseText3 = function(str) {
	var newStr = [];
	var len = str.length;
	for (var i = 0; i <= len; i++) {
		newStr.push(str.charAt(len- i));
	}
	return newStr.join('');
};
var reverseText4 = function(str) {
	return str.split('').reverse().join('');
};
var reverseText5 = function(str) {
	var len = str.length;
	var newStr = '';
	while (len > 0) {
		newStr += str[len - 1];
		len -= 1;
	}
	return newStr;
};
var reverseText6 = function(str) {
	return (str === '') ? '' : reverseText6(str.substr(1)) + str.charAt(0);
};
var test = 'ABCDEFGHIJKLMNOP';
var result = reverseText(test);
console.log('Original: '+test);
console.log('Reversed: '+result);
console.log('E----001-----');
console.log('##############');
console.log('##############');
console.log('S----002-----');
console.log('Correct brackets');
var checkBrackets = function(input) {
	var i = 0;
	var stack = [];
	while (input[i]) {
		if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
			stack.push(input[i]);
			if (input[i] === '(' && input[i+1] === ')') { //in case we have empty brackets ()
				return false;
			}
			if (input[i] === '[' && input[i+1] === ']') { //in case we have empty brackets []
				return false;
			}
			if (input[i] === '{' && input[i+1] === '}') { //in case we have empty brackets {}
				return false;
			}
		}
		if (input[i] === ')'  || input[i] === ']' || input[i] === '}') {
			if (stack.length === 0 ) return false;
			else if (!isMatchingPair( stack.pop() , input[i])) return false;
		}
		i+=1;
	}
	function isMatchingPair(character1, character2){
   		if(character1 === '(' && character2 === ')') return 1;
   		else if (character1 === '[' && character2 === ']') return 1; 
   		else if (character1 === '{' && character2 === '}') return 1;
   		else return false;
	}
	if (stack.length === 0) return true;
	else return false;
};
var testBrackets = [
	'((a+b)/5-d)',
	'(a+b)(-2)',
	'())1+)a+b)(-2 * 3)',
	'((.)+(.))',
	')(a+b))',
	'()4+4',
	'{[(2+2)/(4*4)]}'
];
for (var i = testBrackets.length ; i > 0; i--) {
	console.log(testBrackets[testBrackets.length-i] + ' ' + checkBrackets(testBrackets[testBrackets.length-i]));
}

console.log('E----002-----');
console.log('##############');
console.log('##############');
console.log('S----003-----');
console.log('Substring text count');
var countSubtext = function (str, sub) {
	var count = 0;
	var len = str.length;
	for (var i = 0; i < len - sub.length + 1; i++) {
		if (str.substr(i, sub.length) === sub) {
			count += 1;
			i += sub.length;
		}
	}
	return count;
};
var countSubtext2 = function (str, sub) {
	var count = 0;
	var len = str.length;
	for (var i = 0; i < len - sub.length + 1; i++) {
		if (str.substring(i, i+sub.length) === sub) {
			count += 1;
			i += sub.length;
		}
	}
	return count;
};
var countSubtext3 = function(str, sub , caseIs) {
	if (caseIs || caseIs > 0 || caseIs === undefined) {
		str = str.toLowerCase();
		sub = sub.toLowerCase();
	}
	var count = 0;
	while(str.indexOf(sub) > -1) {
		count += 1;
		str = str.substr(str.indexOf(sub) + sub.length);
	}
	return count;
};
var countSubtext4 = function(str, sub) {
	var count = 0;
	str = str.toLowerCase();
	var re = new RegExp(sub.toLowerCase(),'g');
	while(str.search(re) > -1) {
		count += 1;
		str = str.substr(str.indexOf(sub) + sub.length);
	}
	return count;
};
var subText = 'in';
var sampleText = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
console.log(countSubtext(sampleText, subText));
console.log('E----003-----');
console.log('##############');
console.log('##############');
console.log('S----004-----');
console.log('Parse tags');
var parseTags = function (str, tags) {
	var len = str.length;
	var result ='';
	for (var i = 0; i < str.length; i++) {
		if (str.substr(i, tags[0].length) === tags[0]) { // lowcase (remove tags and change content ch by ch)
			str = str.replace(tags[0], '');
			while (i < len - tags[0].length && str.substr(i, tags[1].length) !== tags[1]) {
				result += '' + str[i].toLowerCase();
				i +=1;
			}
			str = str.replace(tags[1], '');
		}
		if (str.substr(i, tags[2].length) === tags[2]) { // upcase
			str = str.replace(tags[2], '');
			while (i < len - tags[2].length && str.substr(i, tags[3].length) !== tags[3]) {
				result += '' + str[i].toUpperCase();
				i +=1;
			}
			str = str.replace(tags[3], '');
		}
		if (str.substr(i, tags[4].length) === tags[4]) { // mixcase with random
			str = str.replace(tags[4], '');
			while (i < len - tags[4].length && str.substr(i, tags[5].length) !== tags[5]) {
				var rand = Math.floor( (Math.random() * 10) );
				if (rand >= 5) {
					result += '' + str[i].toUpperCase();					
				}
				else {
					result += '' + str[i].toLowerCase();
				}
				i +=1;
			}
			str = str.replace(tags[5], '');
		}
		result += str[i]; 
	}
	return result;
};
var tags = ['<lowcase>','</lowcase>','<upcase>','</upcase>','<mixcase>','</mixcase>'];
var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
console.log(text);
console.log('---------------');
console.log(parseTags(text, tags));
console.log('E----004-----');
console.log('##############');
console.log('##############');
console.log('S----005-----');
function replaceWhiteSpace(input) {
	while (input.search(' ') > -1) {
		input = input.replace(' ','&nbsp;');
	}
	return input;
}
function replaceWhiteSpace2(input) {
	var result = '';
	for (var i = 0; i < input.length; i++) {
		if (input[i] === ' ') {
			result += '&nbsp;';
		}
		else {
			result += input[i];
		}
	}
	return result;
}
function replaceWhiteSpace3(input) {
	var result = [];
	for (var i = 0; i < input.length; i++) {
		if (input[i] === ' ') result[i] = '&nbsp;';
		else result[i] = input[i];		
	}
	return result.join('');
}
function replaceWhiteSpace4 (input) {
	return input.replace(/[ ]/g,'&nbsp;');
}
var sampleText = '001 Abra Ca Dabra Sin Saladin 009!';
console.log('Original text: '+sampleText);
console.log('Replaced text: '+replaceWhiteSpace4(sampleText));
console.log('E----005-----');
console.log('##############');
console.log('##############');
console.log('S----006-----');
function extractHTML(input) {
	var result = '';
	result =  input.replace(/<[^>]*>/g,'');
	return result;
}
function extractHTML2(input) {
	var result = '';
	for (var i = 0; i < input.length; i++) {
		if (input[i] === '<') {
			while (input[i] !== '>') {
				i+=1;
			}
		}
		else result += input[i];	
	}
	return result;
}
function extractHTML3(input) {
	var result = [];
	for (var i = 0; i < input.length; i++) {
		if (input[i] === '<') {
			while(input[i] !== '>') i += 1;
		}
		else result.push(input[i]);
	}
	return result.join('');
}
var sampleHTML = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
console.log(extractHTML3(sampleHTML));
console.log('E----006-----');
console.log('##############');
console.log('##############');
console.log('S----007-----');
function parseURL(input) {
	var urlObject = {
		protocol : '',
		server : '',
		resource : ''
	};
	var num = input.indexOf('/');
	urlObject.protocol = input.substring( 0, input.indexOf('/', parseInt(num+1))-2 );
	urlObject.server = input.substring( input.indexOf('/', parseInt(num+1))+1, input.indexOf('/', parseInt(num+2)) );
	urlObject.resource = input.substring( input.indexOf('/', parseInt(num+2) ) );
	return urlObject;
}
function parseURL2(inputURL) {
	var objectURL = {
		protocol : '',
		server : '',
		resource : ''
	};
	objectURL.protocol = inputURL.match(/(.*):\/\//)[1];
	objectURL.server = inputURL.match(/:\/\/(.*?)\//)[1];
	objectURL.resource = inputURL.match(/[a-zA-Z](\/.*)/)[1];
	return objectURL;
}
var sampleURL = 'http://telerikacademy.com/Courses/Courses/Details/239';
console.log(sampleURL);
console.log('The URL above as a JSON:');
console.log(parseURL(sampleURL));
console.log('E----007-----');
console.log('##############');
console.log('##############');
console.log('S----008-----');
function replaceHref(input) {
	var result = '';
	result = input.replace(/<a href=/g, '[URL=');
	result = result.replace(/">/g, '"]');
	result = result.replace(/<\/a>/g, '[/URL]');
	return result;
}
function replaceHref2(input) {
	var anyTags = input.indexOf('<a href=') > -1;
	if (anyTags) {
		while (input.indexOf('<a href=') > -1) {
		input = input.replace('<a href=','[URL=');
		input = input.replace('">','"]');
		input = input.replace('</a>','[/URL]');
		}
	}
	return input;
}
var sampleHREF =' <p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
console.log('ORIGINAL input: '+ sampleHREF);
console.log(' ');
console.log('REPLACED output: '+replaceHref(sampleHREF));
console.log('E----008-----');
console.log('##############');
console.log('##############');
console.log('S----009-----');
function extractEmails(str) { // basic email matches
	return str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}
function extractEmails2(str){ // less strick version
	return str.match(/[a-zA-Z0-9._-]+@+[a-zA-Z0-9._-]+/g);
}
function extractEmails3(str){ // as the original tasks wants (all words with #)
	var result = [];
	var temp = str.split(' ');
	for (var i = 0; i < temp.length; i++) {
		if (temp[i].indexOf('@') > -1) {
			result.push(temp[i]);
		}
	}
	return result;
}
var sampleEmailtext = 'ala bala nica {gul gul} em_nick@abv.bg Z-emnick@gmai.com gra[gra@] piu@a mini4k! istinski@mail.bg'; 
var emailsOutput = extractEmails(sampleEmailtext);
console.log(emailsOutput);
console.log('E----009-----');
console.log('##############');
console.log('##############');
console.log('S----010-----');
var findPalindromes = function(str) {

	var result = [];
	var tempArr = str.split(' ');
	for (var i = 0; i < tempArr.length; i+=1) {
		if (checkWord(tempArr[i]) && tempArr[i].length > 1) {
			result.push(tempArr[i]);
		}
	}
	return result;

	function checkWord(word) {
		var len = word.length;
		for (var i = 0; i < len/2; i++) {
			if (word.charAt(i) !== word.charAt(len - 1 - i)) {
            return false;
        	}
		}
		return true;
	}
};
var findPalindromes2 = function(str) {
 	var result = [];
 	var wordsArr = str.split(' ');
 	for (var i = wordsArr.length - 1; i >= 0; i--) {
 		if (checkWord(wordsArr[i])) {
 			result.push(wordsArr[i]);
 		}
 	}
 	return result;

 	function checkWord(word) {
 		if (word.length > 1 && word === word.split('').reverse().join('')) return true;
 		else return false;
 	}
}
var samplePalinText = '1233321 Otto wants to have a dog. He walks up the street and is about to step into the pets '+
'store when he sees a sign that reads ‘ Step on no pets ’ hanging on the door. Otto sees a lot of animals at the '+
'pets store. He sees the birds. He sees the squirrels.He sees the lamal. ABBA sees the dogs. “How much does '+
'the dog cost?” Otto says. “Ten dollars,” the ABBA says. Otto gives the man tendollars. Otto buys the dog. The dog '+
'walks home with Otto. Now Otto has a dog. “Thank God now I have a dog,” he says to himself."';
var resultPalindromes = findPalindromes2(samplePalinText);
console.log(resultPalindromes);
console.log('E----010-----');
console.log('##############');
console.log('##############');
console.log('S----011-----');
var placeHolders = function(input, placeholders) {
	var pl = placeholders;
	for (var i = pl.length - 1; i >= 0; i--) {
		while (input.indexOf('{'+i+'}') > -1){
			input = input.replace('{'+i+'}' , pl[i]);
		}
	}
	return input;	
};
var holders = [100200, 'algoCoding', 'alert("hi")'];
var sampleText = 'ala {0} bala {1} nica {2} ala {0}';
console.log('Original text : '+sampleText);
console.log('Replaced placehodlers: '+placeHolders(sampleText, holders));
console.log('E----011-----');
console.log('##############');
console.log('##############');
console.log('S----012-----');
var generateList = function(input, objArr) {
	var obj = ['name','age'];
	function generateLi(person) {
		var cell = input;
		for (var i = 0; i < obj.length; i++) {
			while(cell.indexOf('<strong>-{'+obj[i]+'}-</strong>') > -1) {
				cell = cell.replace( ('-{'+obj[i]+'}-'), person.name);
			}
			while(cell.indexOf( '<span>-{'+obj[i]+'}-</span>') > -1) {
				cell = cell.replace( ('-{'+obj[i]+'}-'), person.age);
			}
		}
		cell = '<li>'+cell+'</li>';
		return cell;
	}
	var result = '<ul>';
	for (var i = 0; i < objArr.length; i++) {
		result += generateLi(objArr[i]);
	}
	result += '</ul>';
	return result;
};
var generateList2 = function(objArr) {   // DOM working 
	var list = document.createElement('ul');
	for (var i = 0; i < objArr.length; i++) {
		var li = document.createElement('li');
		var stro = document.createElement('strong');
		var span = document.createElement('span');
		stro.appendChild(document.createTextNode(objArr[i].name));
		span.appendChild(document.createTextNode(objArr[i].age));
		li.appendChild(stro);
		li.appendChild(span);
		list.appendChild(li);
	}
	return list;
};
var people = [{name: 'Peter', age: 14},{name: 'Maria', age: 28},{name: 'Ivan', age: 50}];
var sampleHTML = '<strong>-{name}-</strong> <span>-{age}-</span>';
var peopleList = generateList(sampleHTML, people);
document.getElementById('foo').appendChild(generateList2(people)); // DOM working variant
console.log(peopleList);
console.log('E----012-----');
console.log('##############');