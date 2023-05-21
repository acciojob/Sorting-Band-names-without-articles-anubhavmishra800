//your code here
let bandNames = ['The Coronna Effect', 'DJ', 'Party Pack', 'The Deck', 'Band Copper Loss', 'Let X'];

function removeArticles(name) {
  // This function removes articles from the start of the band name
  let articles = ['the', 'a', 'an'];
  let words = name.split(' ');
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(' ');
}

// Sort the band names without articles in lexicographic order
bandNames.sort(function(a, b) {
  return removeArticles(a).localeCompare(removeArticles(b));
});

// Output the sorted band names in an unordered list
let ul = document.createElement('ul');
ul.setAttribute('id', 'band');

for (let i = 0; i < bandNames.length; i++) {
  let li = document.createElement('li');
  li.textContent = bandNames[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);
