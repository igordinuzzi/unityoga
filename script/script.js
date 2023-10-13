document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-button");
    const contents = document.querySelectorAll(".accordion-content");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const content = contents[index];

            // Close all accordion items
            contents.forEach((item) => {
                item.style.display = "none";
            });

            // Open the clicked accordion item
            content.style.display = "block";
        });
    });
});
