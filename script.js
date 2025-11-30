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
    const para = document.querySelector('#message'); // FIXED id
    const textButton = document.getElementById('textButton');  

    textButton.addEventListener('click', () => { 
      para.textContent = 'New Message'; 
    });

    const box = document.getElementById('box');
    const colorButton = document.getElementById('colorButton');

    colorButton.addEventListener('click', () => {
      box.style.backgroundColor = 'blue';
    });
  </script>
</body>
</html>