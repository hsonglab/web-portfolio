// 커스텀 커서 요소 선택
const cursor = document.querySelector(".cursor");

// 실제 마우스 위치
let mouseX = 0;
let mouseY = 0;

// 화면에 표시되는 커서 위치
let cursorX = 0;
let cursorY = 0;

// 마우스가 움직일 때 좌표 저장
document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// 커서가 마우스를 부드럽게 따라가도록 실행
function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();

// 마우스를 올렸을 때 커서를 확대할 요소
const hoverElements = document.querySelectorAll(
    "a, button, .project_card, .about_stat, .contact_sticker_blue, .contact_sticker_red"
);

// 각 요소에 마우스 이벤트 적용
hoverElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor_active");
    });

    element.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor_active");
    });
});