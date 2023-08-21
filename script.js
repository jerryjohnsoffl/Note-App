document.addEventListener('DOMContentLoaded', () => {
    const noteList = document.getElementById('note-list');
    const noteInput = document.getElementById('note-input');
    const saveButton = document.getElementById('save-button');

    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(note => {
        addToNoteList(note);
    })

    saveButton.addEventListener('click', (e) => {
        const noteValue = noteInput.value;
        if (noteValue.trim() !== "") {
            savedNotes.push(noteValue);
            localStorage.setItem('notes', JSON.stringify(savedNotes))
            addToNoteList(noteValue);
        }
        e.preventDefault();
        noteInput.value = "";
    })

    function addToNoteList(note) {
        const li = document.createElement('li');
        li.textContent = note;
        li.setAttribute = 'class';
        li.className = 'list-item';
        const deleteBox = document.createElement('div');
        deleteBox.setAttribute = 'class'
        deleteBox.className = 'delete'
        const del = document.createElement('img');
        del.setAttribute = 'src';
        del.setAttribute = 'class'
        del.className = 'del-icon'
        del.src = "./img/clear_black_24dp.svg"
        noteList.appendChild(li);
        li.appendChild(deleteBox);
        deleteBox.appendChild(del);
    }

    noteList.addEventListener('click',(e) => {
        if (e.target.classList.contains("del-icon")) {
            const li = e.target.closest('.list-item');
            if (li) {
                const noteIndex = Array.from(noteList.children).indexOf(li);
                savedNotes.splice(noteIndex,1);
                localStorage.setItem('notes', JSON.stringify(savedNotes));
                li.remove();
            }
        }
    })
})