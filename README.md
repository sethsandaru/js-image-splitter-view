# js-image-splitter-view
Simple JS/JQuery Library to create an Image Splitter View. Best use-case is for Compare Products/Images/... Website :D

Demo (demo file is in the demo folder of this repository):   
![Hehe](https://i.imgur.com/6pF4gzp.gif)

Version: **1.0.0**

## Dependencies
- JQuery
- JQuery UI

Note: you must include both JQuery and JQuery UI in order to use this library.

## Usage
Include those files in `dist` to your project, then:
```html
<link rel="stylesheet" href="css/image.splitter.view.css" />
<script src="js/jquery.image.splitter.view.js"></script>
```

### Preparation
You need prepare this HTML structure before initialize the UI View:
```html
    <div class="splitter-container" id="splitterContainer">
        <div>
            <img class="img-responsive" src="img1.png">
        </div>
        <div>
            <img class="img-responsive" src="img2.png">
        </div>
    </div>
```

### Initialize
```javascript
<script>
	$(document).ready(function() {
		$("#splitterContainer").imageSplitter();
	});
</script>
```

Result:   
![Result Default](https://i.imgur.com/h866olV.png)

### Available Colors for Splitter Control
- .is-primary
- .is-success
- .is-info
- .is-warning
- .is-danger

You need to add it like this:
```html
<div class="splitter-container is-primary" id="splitterContainer">
```

Result:   
![Splitter Control Image](https://i.imgur.com/J2TMZWx.png)

## Important Note
- You have to make sure both of your images is full-width and have a same width & height. Otherwise it will break.

## Copyright & Supporting the project
If you really like this project & want to contribute a little for the development. You can buy me a coffee. Thank you very much for your supporting ♥.

<a href="https://www.buymeacoffee.com/xKOM9NB8p" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Copyright &copy; 2018 by [Seth Phat](https://sethphat.com) aka Phat Tran Minh!
