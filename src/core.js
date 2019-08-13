import {SPLITTER_TEMPLATE, SPLITTER_CLASS_SELECTOR} from './templates/splitter';

const UIView = {};

let $firstImageBlock, $secondImageBlock;

/**
 * Initilize the ImageView
 */
UIView.init = function($container) {
    // binding data
    $firstImageBlock = $container.find("div:first-child");
    $secondImageBlock = $container.find("div:last-child");

    // render more info
    renderContent($container);

    // init functional
    initFunctional($container);

    return true;
}

let renderContent = function($container) {
    // render the splitter
    $container.append(SPLITTER_TEMPLATE);

    // calculate the middle width
    let middleWidth = $container.width() / 2;
    $container.find(SPLITTER_CLASS_SELECTOR).css('left', middleWidth + "px");
    $secondImageBlock.css('left', middleWidth + "px");
}

let initFunctional = function($container) {
    $container.find(SPLITTER_CLASS_SELECTOR).draggable({
        addClasses:false,
        containment:$container,
        axis:'x',
        drag:function(event,ui){
            $secondImageBlock.css('left',ui.position.left);
        }
    });
}

export {
    UIView
}