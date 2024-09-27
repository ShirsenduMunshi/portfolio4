/* ========================================== Typing Animation ========================================== */
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Programmer", "Web Developer", "JS Developer", "Artist"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

var ty = new Typed(".ty", {
    strings: ["", "Web Designer", "Programmer", "Web Developer", "JS Developer", "Artist"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

document.getElementById('downloadButton').addEventListener('click', function() {
    // Create an anchor element
    var link = document.createElement('a');
    // Set the href attribute to the path of your CV PDF file
    link.href = './info/CV.pdf';
    // Set the download attribute to specify the filename
    link.download = 'CV.pdf';
    // Programmatically trigger a click event on the anchor element
    document.body.appendChild(link);
    link.click();
    // Clean up the anchor element
    document.body.removeChild(link);
});

//resetting the form

function resetForm() {
    setTimeout(() => {
        document.getElementById('myForm').reset();
    }, 3000);
}