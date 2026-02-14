const matchBtn = document.querySelector("#matchBtn");
const result = document.querySelector("#result");
const name1Input = document.querySelector("#name1");
const name2Input = document.querySelector("#name2");

matchBtn.addEventListener("click", () => {
    const name1 = name1Input.value.trim().toLowerCase();
    const name2 = name2Input.value.trim().toLowerCase();
    
    if (!name1 || !name2) {
        result.innerHTML = "Please enter both names! 😊";
        result.style.color = "#ff6b9d";
        return;
    }
    
    // Check if the names are Eirene and Max (in any order)
    const isEireneMax = (name1 === "eirene" && name2 === "max") || 
                        (name1 === "max" && name2 === "eirene");
    
    if (isEireneMax) {
        result.innerHTML = "💖 TOTALLY IN LOVE! 💖<br><span style='font-size: 1.2rem;'>100% Perfect Match!</span>";
        result.style.color = "#ff1493";
        result.style.animation = "pulse 1s infinite";
    } else {
        result.innerHTML = "0% match 😠<br><span style='font-size: 1rem;'>Sorry, not meant to be!</span>";
        result.style.color = "#666";
        result.style.animation = "none";
    }
});

// Allow Enter key to trigger the check
name1Input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") matchBtn.click();
});

name2Input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") matchBtn.click();
});