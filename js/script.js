// 체크박스 상태를 URL 파라미터로 전송하는 함수
function generateCheckedUrl() {
    const paramInput = document.getElementById("params").value; // 파라미터 입력값 가져오기
    const checkedIds = Array.from(document.querySelectorAll("input[type='checkbox']"))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    const params = new URLSearchParams();
    params.set("param", paramInput); // 입력된 파라미터 값 추가
    params.set("checked", checkedIds.join(",")); // 체크된 체크박스 ID 추가

    // URL 이동
    window.location.href = `https://html-is-a-programming-language.github.io/pocket/?${params.toString()}`;
}

// URL에서 체크된 항목을 불러오는 함수
function loadCheckboxStateFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const checkedIds = urlParams.get("checked");

    if (checkedIds) {
        checkedIds.split(",").forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) checkbox.checked = true;
        });
    }
}

// 페이지 로드 시 URL로부터 체크박스 상태 불러오기
window.onload = loadCheckboxStateFromUrl;