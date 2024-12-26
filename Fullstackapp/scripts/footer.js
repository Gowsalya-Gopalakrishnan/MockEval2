const footer = ()=>{
    let foot = `
    <div id="footer">
        <a id="footer-a"
        href="#">EmpowerHer Learning New Things <span id="footer-span"> &copy; All Rights Reserved</span></a>
    </div>`;

    document.getElementById("footer-content").innerHTML = foot;
}
footer();
export {footer};