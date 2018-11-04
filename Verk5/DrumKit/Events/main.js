<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .selected {
      background: #0f0;
    } //Gerir bakgrunnin, á þeim sem er valinn, grænan

    li {
      cursor: pointer; //Þegar notandi hefur músina yfir textanum breytist cursor í pointer (hendi sem bendir)
    }
  </style>
</head>

<body>

  Click on a list item to select it.
  <br>

  <ul id="ul"> //býr til "lista"
    <li>Christopher Robin</li>
    <li>Winnie-the-Pooh</li>
    <li>Tigger</li>
    <li>Kanga</li>
    <li>Rabbit. Just rabbit.</li>
  </ul>

  <script> //Javascript
    ul.onclick = function(event) {
      if (event.target.tagName != "LI") return; //Ef textinn hefur ekki tagName "li" keyrir þetta

      if (event.ctrlKey || event.metaKey) { //Ef notandi ýtir á ctrl á PC eða CMD á MAC keyrir þetta
        toggleSelect(event.target);
      } else {
        singleSelect(event.target); //Annars keyrir þetta
      }

    }

    // prevent unneeded selection of list elements on clicks
    ul.onmousedown = function() {
      return false;
    };

    function toggleSelect(li) {
      li.classList.toggle('selected');
    }

    function singleSelect(li) {
      let selected = ul.querySelectorAll('.selected');
      for(let elem of selected) {
        elem.classList.remove('selected');
      }
      li.classList.add('selected');
    }

  </script>

</body>
</html>