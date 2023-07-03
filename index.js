//  Changing Text Content:
function functionOne() {
    // Access the element by its ID
    const paragraph = document.getElementById('myParagraph');

    // Change the text content
    paragraph.textContent = 'Hello, OpenAI!';
}

// Modifying HTML Attributes:
function functionTwo() {
    // Access the element by its ID
    const image = document.getElementById('myImage');

    // Change the src and alt attributes
    image.src = 'new_image.jpg';
    image.alt = 'New Image';
}

// Adding and Removing CSS Classes:
function functionThree() {
    // Access the element by its ID
    const div = document.getElementById('myDiv');

    // Add a CSS class
    div.classList.add('highlight');

    // Remove a CSS class
    div.classList.remove('box');
}

// Handling Events:
function functionFour() {
    // Access the element by its ID
    const button = document.getElementById('myButton');

    // Add an event listener
    button.addEventListener('click', function() {
    alert('Button clicked!');
    });
}

function functionFive() {
    // Access the element by its ID
    const container = document.getElementById('myContainer');

    // Create a new element
    const newElement = document.createElement('p');

    // Set the text content
    newElement.textContent = 'This is a new paragraph.';

    // Append the new element to the container
    container.appendChild(newElement);
}
