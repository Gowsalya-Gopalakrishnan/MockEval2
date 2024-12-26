const navbar = ()=>{
    let cart = `<div id="nav-container">
        <a id="app" href="index.html">Quiz App</a>
        <div id="nav-links">
            <a href="index.html">Home</a>
            <a href="quiz.html">Quiz</a>
            <a href="question.html">Question</a>
        </div>
    </div>`;

    document.getElementById("nav").innerHTML =cart;
}
navbar();
export {navbar};