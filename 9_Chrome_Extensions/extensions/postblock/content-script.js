alert("You are on Facebook! Do not panic, we got you covered.");

// How Facebook writes "Sponsored". Why?
const SPONSORED = "S\nt\nS\nS\np\ns\no\np\no\nn\nh\ns\no\nf\nt\nt\nn\nr\nS\nso\nr\nf\nr\ne\ng\nd\ned\nr";

const SPONSORED2 = "S\nr\npo\nt\nh\nl\ng\nu\nn\nS\nS\np\no\no\nn\nu\ns\no\na\nn\nr\ne\ns\nm\nored\nd"

let lastFound = 0;

let hiddenPosts = [];

// We do the search for unwanted posts every 5 seconds, not great, but OK.

// Attempt 1: SPONSORED keyword.
// let interval = setInterval(doSearchBySponsored, 5000);
// Attempt 2: IMG SRC scontent.
// let interval = setInterval(doSearchByImg, 5000);
// Attempt 3: Number of children in SPAN.
// let interval = setInterval(doSearchByNumChildren, 5000);


// Message passing ref:
// https://developer.chrome.com/docs/extensions/mv3/messaging/
function updateBadge(n) {
    chrome.runtime.sendMessage({ hidden: n });
}

function doSearchBySponsored() {

    // It's very difficult to locate via attributes 
    // the sponsored posts, so we look into all <SPAN> tags. 
    let spans = document.getElementsByTagName('span');
    
    console.log('<SPAN>s found', spans.length);
    // Facebook keeps add new spans as we scroll down, 
    // no need to re-search the same one over and over,
    // so we start from the last examined. 
    for (let i = lastFound; i < spans.length ; i++) {
        
        // If you are curious to look into all texts.
        // console.log()
        // console.log()
        // console.log(spans[i].innerText);
        // console.log()
        // console.log()
        
        if (spans[i].innerText === SPONSORED ||
            spans[i].innerText === SPONSORED2) {
            let res = hidePost(spans[i]);
            // If post was hidden, add a reference to the hidden posts.
            if (res) hiddenPosts.push(i);
        }
    }

    // Keep reference to the last span found.
    lastFound = spans.length;

    updateBadge(hiddenPosts.length);
}

function doSearchByNumChildren() {

    // It's very difficult to locate via attributes 
    // the sponsored posts, so we look into all <SPAN> tags. 
    let spans = document.getElementsByTagName('span');
    
    console.log('<SPAN>s found', spans.length);
    // Facebook keeps add new spans as we scroll down, 
    // no need to re-search the same one over and over,
    // so we start from the last examined. 
    for (let i = 0; i < spans.length ; i++) {
        
        // If you are curious to look into all texts.
        // console.log()
        // console.log()
        // console.log(spans[i].innerText);
        // console.log()
        // console.log()

        console.log(spans[i].children.length);
        let len = spans[i].children ? spans[i].children.length : 0; 
        // It is fishy to have more than 20 children in a span.
        // It turns out that 'Sponsored' tags have these many children.
        if (len > 20 && len < 30) {
            let res = hidePost(spans[i], 10);
            // If post was hidden, add a reference to the hidden posts.
            if (res) hiddenPosts.push(i);
        }
    }

    // Keep reference to the last span found.
    lastFound = spans.length;

    updateBadge(hiddenPosts.length);
}


function doSearchByImg() {
    // It's very difficult to locate via attributes 
    // the sponsored posts, so we look into all <SPAN> tags. 
    let imgs = document.getElementsByTagName('img');
    
    console.log('<A>s found', imgs.length);
    // Facebook keeps add new imgs as we scroll down, 
    // no need to re-search the same one over and over,
    // so we start from the last examined. 
    for (let i = lastFound; i < imgs.length ; i++) {
        
        // If you are curious to look into all texts.
        console.log()
        console.log()
        console.log(imgs[i].src);
        console.log()
        console.log()
        
        if (imgs[i].src.indexOf('scontent') !== -1) {
            let res = hidePost(imgs[i], 12);
            // If post was hidden, add a reference to the hidden posts.
            if (res) hiddenPosts.push(i);
        }
    }

    // Keep reference to the last span found.
    lastFound = imgs.length;

    
    updateBadge(hiddenPosts.length);

}

// function isSponsored(el) {
//     let children = el.children;
//     let idx = 0;
//     let sponsored = 'Sponsored';
//     debugger;
//     for (let i = 0 ; i < children.length ; i++) {
//         // "position: absolute; top: 3em;"
//         if (!children[i].hasAttribute('style')) {
//             if (children[i].innerText !== sponsored.charAt(idx)) return false;
//             idx++;
//         }
//     }
// }

function hidePost (el, limit) {
        debugger
    // We go up the DOM, from child to parent and
    // hide the whole post (8 parents above is enough).
    const LIMIT = limit || 9; 
    let counter = 0;
    let curElement = el;
    while (counter < LIMIT) {
        let parent = curElement.parentNode;
        if (!parent || !parent.style) return false;
        parent.style.display = 'none';
        parent.innerHTML = '';
        curElement = parent;
        counter++;
    }
    return true;
}