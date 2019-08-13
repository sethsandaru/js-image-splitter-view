import {UIView} from './core';

(function( $ ){
    $.fn.imageSplitter = function() {
        let $container = $(this);

        // check block
        if ($container.find("div > img").length !== 2) {
            console.error("Image Splitter Initialize Error: Not enough image block inside the container. Min and max must be 2");
            return;
        }

        // run the initialize
        UIView.init($container);

        return this;
    };
 })( jQuery );