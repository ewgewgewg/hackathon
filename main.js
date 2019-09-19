// const content = document.querySelector('svg');
// content.parentNode.removeChild(content);

// import {howMany} from './background.js'

function getWordCounts(nodeList) {
    var wordCount = 0;
    for ( var i = 0; i < nodeList.length; i++ ) {
        wordCount += nodeList[i].textContent.trim().split(' ').length;
    }
    return wordCount;
}

const words = getWordCounts(document.querySelectorAll('p'));

console.log(`words ${words}`);



let now = new Date()
document.title = `${now.getHours()}${now.getMinutes()} ${document.title}`;

