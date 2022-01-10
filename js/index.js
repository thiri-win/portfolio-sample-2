const up = document.querySelector("#up");
const navbar = document.querySelector('.navbar');
const project_counts = document.querySelectorAll(".project-count");


up.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

window.onscroll = function () {
    if (window.scrollY > 650) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }

    if (window.scrollY > 400) {
        navbar.style.backgroundColor = "#f9a111";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
    if (window.scrollY > 2400 && window.scrollY < 2600) {

        project_counts.forEach(project_count => {
            const total = +project_count.dataset.value;
            const steps = 9;
            let data = 0;

            function move() {
                data += Math.ceil(total / steps);
                if (data < total) {
                    project_count.textContent = data;
                    setTimeout(move, 300);
                } else {
                    project_count.textContent = total;
                }
            }
            move();
        })

    }
}
