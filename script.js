let add = document.getElementById('add');

document.getElementById('add').addEventListener('click', function() {
    let list = document.getElementById('list');
    let item = document.createElement('li');

    // Create checkbox
    let checkBox = document.createElement('i');
    checkBox.className = 'fa-regular fa-square';

    // Append checkbox to the list item
    item.appendChild(checkBox);

    // Set the content of the list item using innerHTML
    item.innerHTML += document.getElementById('input').value;

    // Check if the input value is empty
    if (item.innerText.trim() === '') {
        alert('Please enter a task');
        return false;
    }

    // Create delete button
    let del = document.createElement('button');
    let delIcon = document.createElement('i');
    delIcon.className = 'fa-solid fa-trash';
    del.appendChild(delIcon);
    del.classList.add('del');

    // Append delete button to the list item
    item.appendChild(del);

    // Append the list item to the list
    list.appendChild(item);

    // Clear the input field
    document.getElementById('input').value = '';

    document.getElementById('iAmEmpty').style.display = 'none';

    // Add event listener to the newly created checkbox
    checkBox = item.querySelector('.fa-regular');
    checkBox.addEventListener('click', function() {
        if (checkBox.classList.contains('fa-square')) {
            checkBox.classList.remove('fa-square');
            checkBox.classList.add('fa-check-square');
            item.style.textDecoration = 'line-through';
            item.style.color='#fff';
        } else {
            checkBox.classList.remove('fa-check-square');
            checkBox.classList.add('fa-square');
            item.style.textDecoration = 'none';
            item.textContent.style.color = '#FAF0E6';
        }
    });

    // Add event listener to the newly created delete button
    del.addEventListener('click', function() {
        item.remove();

        if (list.children.length === 1) {
            document.getElementById('iAmEmpty').style.display = 'block';
        }
    });
});


var check = document.querySelectorAll('.fa-regular');
check.forEach(function(item) {
    item.addEventListener('click', function() {
        if (item.classList.contains('fa-square')) {
            item.classList.remove('fa-square');
            item.classList.add('fa-check-square');
            item.parentElement.style.textDecoration = 'line-through';
            item.style.color = '#FAF0E6';
        } else {
            item.classList.remove('fa-check-square');
            item.classList.add('fa-square');
            item.parentElement.style.textDecoration = 'none';
            item.style.color='#fff';
        }
    });
});



var deleteBtn = document.querySelectorAll('.del');
deleteBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        item.parentNode.remove();

        if (list.children.length === 1) {
            document.getElementById('iAmEmpty').style.display = 'block';
        }
    });
});
