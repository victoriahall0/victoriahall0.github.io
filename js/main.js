const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went to see their friend at :inserty: to get ice cream. They stared in horror as :inserty: :insertz:. Bob was watching it all go down. :insertx: weighs 300 pounds, and it was a hot and sticky day.";

let insertX = ["Eren Yeager", "Bill Nye", "Joseph Joestar"];
let insertY = ["Dairy Queen", "Gelato Boy", "Glaciers"];
let insertZ = ["was hosting a furry meeting", "had ice cream all over the walls", "had poop all over the floors"];

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replaceAll(":inserty:", yItem);
newStory = newStory.replaceAll(":insertz:", zItem);

function result() {
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round((300/14)) + " stone";
    newStory = newStory.replace("300 pounds", weight)
    const temperature =  Math.round((94-32)*(5/9)) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


