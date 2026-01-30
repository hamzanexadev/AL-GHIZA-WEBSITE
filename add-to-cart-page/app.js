const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function () {

    this.classList.toggle('clicked');

    if (this.classList.contains('clicked')) {
        this.textContent = '300 grams';
    } else {
        this.textContent = '300 grams';
    }
});
const toggleButton1 = document.getElementById('toggleButton1')
toggleButton1.addEventListener('click', function () {

    this.classList.toggle('clicked')

    if (this.classList.contains('clicked')) {
        this.textContent = '500 grams';
    } else {
        this.textContent = '500 grams';
    }

})
const toggleButton2 = document.getElementById('toggleButton2');

toggleButton2.addEventListener('click', function () {

    this.classList.toggle('clicked');

    if (this.classList.contains('clicked')) {
        this.textContent = '1 kg';
    } else {
        this.textContent = '1 kg';
    }
});
let count = 0;

function updateCount() {
    document.getElementById("count").innerHTML = count;
}

function increaseCount() {
    if (count <= 9) {
        count++;
        updateCount()
    }
}

function decreaseCount() {
    if (count <= 0) {
    }
    else {
        count--;
        updateCount()
    }
}

function resetCount() {
    count = 0;
    updateCount();
}

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

function openModal() {
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

/* Close when clicking outside the modal box */
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

/* Close when pressing Escape */
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

let count1 = 0;

function updateCount1() {
    document.getElementById("count1").innerHTML = count1;
}

function increaseCount1() {
    if (count1 <= 9) {
        count1++;
        updateCount1()
    }
}

function decreaseCount1() {
    if (count1 <= 0) {
    }
    else {
        count1--;
        updateCount1()
    }
}

function resetCount1() {
    count1 = 0;
    updateCount1();
}