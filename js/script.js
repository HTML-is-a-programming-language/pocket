// 체크박스 상태를 저장하는 함수
function saveCheckboxState() {
    const param = document.getElementById('params').value.trim();
    if (!param) {
        alert("Please enter a parameter to save.");
        return;
    }

    // 체크박스 상태를 객체에 저장
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const state = {};

    checkboxes.forEach(checkbox => {
        state[checkbox.id] = checkbox.checked;
    });

    // 로컬 스토리지에 체크박스 상태 저장
    localStorage.setItem(`checkboxState_${param}`, JSON.stringify(state));
    alert(`State saved with parameter: ${param}`);
}

// URL의 파라미터를 기준으로 체크박스 상태를 불러오는 함수
function loadCheckboxState() {
    const param = document.getElementById('params').value.trim();
    if (!param) {
        alert("Please enter a parameter to load.");
        return;
    }

    // 로컬 스토리지에서 저장된 상태 불러오기
    const savedState = localStorage.getItem(`checkboxState_${param}`);
    if (savedState) {
        const state = JSON.parse(savedState);
        Object.keys(state).forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) checkbox.checked = state[id];
        });
        alert(`State loaded for parameter: ${param}`);
    } else {
        alert("No saved state found for this parameter.");
    }
}

// 입력된 파라미터가 붙은 URL로 이동하는 함수
function navigateToUrl() {
    const param = document.getElementById('params').value.trim();
    if (!param) {
        alert("Please enter a parameter to navigate.");
        return;
    }
    // 해당 파라미터가 붙은 URL로 이동
    window.location.href = `https://html-is-a-programming-language.github.io/pocket/?${param}`;
}

// 페이지 로드 시 이전에 입력한 파라미터를 불러오기
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.toString();
    if (param) document.getElementById('params').value = param;
};