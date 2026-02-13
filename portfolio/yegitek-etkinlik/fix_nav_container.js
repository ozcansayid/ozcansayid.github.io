const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'games/sozcuk_olusturalim/index.html');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find the problematic div line
// <div class="nav-buttons-container w-100 d-flex justify-content-center align-items-center gap-3"
//                 style="margin-top: auto; padding-bottom: 20px;">

const regex = /<div class="nav-buttons-container w-100 d-flex justify-content-center align-items-center gap-3"\s+style="margin-top: auto; padding-bottom: 20px;">/g;

if (regex.test(content)) {
    content = content.replace(regex, '<div class="nav-buttons-container" style="margin-top: auto;">');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Fixed container class.");
} else {
    // Try broader match
    const broadRegex = /<div class="nav-buttons-container[^>]*gap-3"[^>]*>/;
    if (broadRegex.test(content)) {
        content = content.replace(broadRegex, '<div class="nav-buttons-container" style="margin-top: auto;">');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Fixed container class (broad match).");
    } else {
        console.log("Could not find the target line.");
    }
}
