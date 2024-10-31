// 체크박스 상태를 저장하는 함수
function saveCheckedState() {
    const paramInput = document.getElementById("params").value;
    const checkedIds = Array.from(document.querySelectorAll("input[type='checkbox']"))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    // `ssj` 파라미터 입력 시에만 로컬 스토리지에 상태 저장
    if (paramInput === "ssj") {
        localStorage.setItem("ssjCheckedState", JSON.stringify(checkedIds));
        alert("Checked states saved for 'ssj'.");
    }
}

// 페이지 로드 시 체크박스 상태 불러오는 함수
function loadCheckedState() {
    const paramInput = document.getElementById("params").value;
    if (paramInput === "ssj") {
        const savedCheckedIds = JSON.parse(localStorage.getItem("ssjCheckedState"));
        if (savedCheckedIds) {
            savedCheckedIds.forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox) checkbox.checked = true;
            });
        }
    }
}

// 페이지 로드 시 자동으로 체크 상태 로드
window.onload = loadCheckedState;