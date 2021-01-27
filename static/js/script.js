// Challenge 1 : Age in days

function ageIndays() {
  var dob = prompt('What is the year you were born');
  var age_days = (2021 - dob) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode(
    'Your are ' + age_days + ' days old'
  );
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-container-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

function generatecat() {
  var Image = document.createElement('img');
  var div = document.getElementById('catgenimg');
  Image.setAttribute('id', 'catimg');
  Image.src = 'https://media4.giphy.com/media/jRlP4zbERYW5HoCLvX/200_d.gif';
  div.appendChild(Image);
}

function resetcontainer2() {
  document.getElementById('catimg').remove();
}
