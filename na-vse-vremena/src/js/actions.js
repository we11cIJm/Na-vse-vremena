
function addNote(note, context) {
    addAction({
        type: "add_note",
        note: note
    }, context);
}

function Topic(note, context){
    addAction({
        type: "new_topic",
        note: note
    }, context);
}

function Answer(note, context){
    addAction({
        type: "answer",
        note: note
    }, context);
}

function Next(note, context){
    addAction({
        type: "next",
        note: note
    }, context);
}

function Menu(note, context){
    addAction({
        type: "menu",
        note: note
    }, context);
}

function StartGame(note, context){
    addAction({
        type: "start_game",
        note: note
    }, context);
}


function newNote(note, context) {
    addAction({
        type: "new_note",
        note: note
    }, context);
}
function returnTopics(note, context) {
    addAction({
        type: "return_topic",
        note: note
    }, context);
}
function showResults(note, context) {
    addAction({
        type: "show_results",
        note: note
    }, context);
}
function resetResults(note, context) {
    addAction({
        type: "reset_results",
        note: note
    }, context);
}

function close(note, context) {
    addAction({
        type: "close",
        note: note
    }, context);
}