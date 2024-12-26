const navbar = ()=>{
    let cart = `<div id="nav-contaier">
             <a id="top"href="index.html">My Personal App</a>
        <div id="nav-items">
            
            <a href="signup.html">Sign Up</a>
            <a href="login.html">Login</a>
            <a href="todos.html">Todos</a>
        </div>
    </div>`;

    document.getElementById("nav").innerHTML =cart;
}
navbar();

export {navbar};