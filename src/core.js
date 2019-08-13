import {SPLITTER_TEMPLATE, SPLITTER_CLASS_SELECTOR} from './templates/splitter';

const UIView = {};

/**
 * Initilize the ImageView
 */
UIView.init = function($container) {
    // render more info
    renderContent($container);

    // init functional
    initFunctional($container);

    return true;
};

let renderContent = function($container) {
    // render the splitter
    $container.append(SPLITTER_TEMPLATE);

};

let initFunctional = function($container) {
    $container.find(SPLITTER_CLASS_SELECTOR).draggable({
        addClasses:false,
        containment:$container,
        axis:'x',
        drag:function(event,ui){
            $container.find("div:nth-child(2)").css('left',ui.position.left);
        }
    });
};

export {
    UIView
}