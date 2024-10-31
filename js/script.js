        // 체크박스 상태를 저장하는 함수
        function saveCheckboxState() {
            const param = document.getElementById('params').value;
            if (!param) return alert("Please enter a parameter.");

            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const state = {};

            checkboxes.forEach(checkbox => {
                state[checkbox.id] = checkbox.checked;
            });

            // 로컬 스토리지에 저장
            localStorage.setItem(`checkboxState_${param}`, JSON.stringify(state));
            alert(`State saved with parameter: ${param}`);
        }

        // 페이지 로드 시 체크박스 상태 불러오기
        window.onload = function () {
            const urlParams = new URLSearchParams(window.location.search);
            const param = urlParams.get('param');

            if (param) {
                const savedState = localStorage.getItem(`checkboxState_${param}`);
                if (savedState) {
                    const state = JSON.parse(savedState);
                    Object.keys(state).forEach(id => {
                        const checkbox = document.getElementById(id);
                        if (checkbox) checkbox.checked = state[id];
                    });
                }
            }
        };