let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//console.log(story); //returns the story
//console.log(`There are ${story.length} characters in the string`); //returns There are 978 characters in the string.

const storyWords = story.split(" "); //splits the string into individual words.
//console.log(storyWords); //returns each string as individual words.
//console.log(`There are ${storyWords.length} words in the string`); //returns There are 188 words in the string.

betterWords = storyWords.filter(word => {
    return !unnecessaryWords.includes(word)
}); //filters through storyWords passes all words that are not included in unnecessaryWords to betterWords. Removes uncecessary words from our story.
//console.log(betterWords);

//set variables to count overused words
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

//example of a for loop
for (word of storyWords) {
    if (word === 'really') {
        reallyCount += 1;
    } else if (word === 'very') {
        veryCount += 1;
    } else if (word === 'basically') {
        basicallyCount += 1;
    }
};

let overusedLog = (reallyCount, veryCount, basicallyCount) => {
    console.log(`The word really is used = ${reallyCount} times.`);
    console.log(`The word very is used = ${veryCount} times.`);
    console.log(`The word basically is used = ${basicallyCount} times.`);
};

//overusedLog(reallyCount, veryCount, basicallyCount); //function returns all overused words. //function returns all overused words.

//console.log(`Really Count = ${reallyCount}`); //returns 2
//console.log(`Very Count = ${veryCount}`); //returns 5
//console.log(`Basically Count = ${basicallyCount}`); //returns 1

let sentenceCount = 0;
//forEach() iterator method example
storyWords.forEach(sentence => {
    if (sentence[sentence.length - 1] === '.' || 
    sentence[sentence.length - 1] === '!') {
        sentenceCount += 1;
    }
});


//console.log(`Total number of sentences = ${sentenceCount}`); //returns 12


const storyLog = (storyWords, sentenceCount, overusedLog) => {
    console.log(`There are ${storyWords.length} words in the story.`);
    console.log(`There are ${sentenceCount} sentences in the story.`);
    overusedLog(reallyCount, veryCount, basicallyCount);
    
};

storyLog(storyWords, sentenceCount, overusedLog);


console.log(betterWords.join(' '));

