const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');



const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = [ "Willy the Goblin",
                  "Big Daddy",
                  "Father Christmas",
                ];

const insertY = ["the soup kitchen",
                "Disney land",
                "the White House",];

const insertZ = ["spontaneously combusted",
                  "melted into a puddle on the sidewalk",
                "turned into a slug and crawled away",];





function randomValueFromArray(array){
    //Takes an Array as input then selects a random element from the string
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}




randomize.addEventListener('click', result);

function result() {
    /*
    This function Generates random Strings and Changes the <p> HTML element(contents) to display
    Some random Concatenated  strings When a button is clicked
    */
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    //Re edits the storyText string  i.e replaces some sub strings 
    newStory = newStory.replace(":insertx:",xItem);
    newStory = newStory.replace(":inserty:",yItem);
    newStory = newStory.replace(":insertz:",zItem);



   //Replaces all BOB strings with custom name that the user input
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob",name);


  }
  //If the uk radio is checked the units are converted to UK SI
  if(document.getElementById("uk").checked) {
    const weight = Math.round(`${300 * 0.0714286 }`) + " Stone";
    const temperature =  Math.round(`${94/20 }`) + " Centigrade";

    newStory = newStory.replace("94 fahrenheit",temperature);
    newStory = newStory.replace("300 pounds",weight);


  }

  story.textContent =newStory ;
  story.style.visibility = 'visible';
}
