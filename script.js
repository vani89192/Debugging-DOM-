<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Debugging Task</title>
</head>
<body>
  <p id="message">Original Message</p>
  <button id="textButton">Change Text</button>
  <br><br>
  <div id="box" style="width: 100px; height: 100px; background-color: lightgray;"></div>
  <button id="colorButton">Change Background</button>

  <script>
/*correct js code*/
// Selected the paragraph element correctly. Earlier the ID was misspelled as '#massage'
    const para = document.querySelector('#message'); // FIXED id

// Selected the button by ID. Earlier there was a wrong method used in some versions
    const textButton = document.getElementById('textButton');  

// Added a click event listener to the button. Earlier the event method name was wrong
    textButton.addEventListener('click', () => { 
    // Updating the text of the paragraph. Earlier 'TextContent' was used which is incorrect
      para.textContent = 'New Message'; 
    });

    const box = document.getElementById('box');
    const colorButton = document.getElementById('colorButton');

    colorButton.addEventListener('click', () => {
      box.style.backgroundColor = 'blue'; //there is a typo error in the "styl"
    });
  </script>
</body>
</html>
