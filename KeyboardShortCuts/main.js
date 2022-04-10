document.addEventListener("keydown", e => {
    e.preventDefault();
    if (e.key.toLowerCase() === "a" && e.ctrlKey) {
        alert("You press Ctr + A key");
    }
});