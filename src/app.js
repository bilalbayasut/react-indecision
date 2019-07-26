console.log('app js is runnging');

const app = {
    title: 'indecision app',
    options: []
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
    render();
}

// JSX
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
    
}
const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should I do ?</button>
                <ul>
                {
                    app.options.map((option)=><li key={option}>{option}</li>)
                }
                </ul>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}
render();


