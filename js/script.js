// 체크박스 상태를 로컬 스토리지에 저장하는 함수
function saveCheckboxState() {
    const checkedIds = Array.from(document.querySelectorAll("input[type='checkbox']"))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    localStorage.setItem("checkedCheckboxes", JSON.stringify(checkedIds));
}

// 체크박스 체크 시 이벤트 리스너 추가
document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", saveCheckboxState);
});

// 체크된 항목 URL로 이동하는 함수
function goToCheckedUrl() {
    const checkedIds = JSON.parse(localStorage.getItem("checkedCheckboxes") || "[]");
    const params = new URLSearchParams();
    params.set("ssj", checkedIds.join(","));

    // URL 이동
    window.location.href = `https://html-is-a-programming-language.github.io/pocket?${params.toString()}`;
}

// URL에서 체크된 항목을 불러오는 함수
function loadCheckboxStateFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const checkedIds = urlParams.get("ssj");

    if (checkedIds) {
        checkedIds.split(",").forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) checkbox.checked = true;
        });
    }
}

// 페이지 로드 시 URL로부터 체크박스 상태 불러오기
window.onload = loadCheckboxStateFromUrl;