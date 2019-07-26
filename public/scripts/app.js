'use strict';

console.log('app js is runnging');

var app = {
    title: 'indecision app',
    options: []
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    render();
};

// JSX
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            React.createElement(
                'button',
                { disabled: app.options.length === 0, onClick: onMakeDecision },
                'what should I do ?'
            ),
            React.createElement(
                'ul',
                null,
                app.options.map(function (option) {
                    return React.createElement(
                        'li',
                        { key: option },
                        option
                    );
                })
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
