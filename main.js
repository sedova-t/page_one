function addMessageToHTML(elem, message) {
    document.querySelector(elem).innerHTML = message;
}

addMessageToHTML('#message', 'git commit!!!');
addMessageToHTML('#message', 'git commit second HTML!!!');
