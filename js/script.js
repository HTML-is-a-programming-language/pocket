        // 체크박스 상태를 저장하는 함수
        function saveCheckboxState() {
            const param = document.getElementById('params').value.trim();
            if (!param) {
                alert("Please enter a parameter.");
                return;
            }

            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const state = {};

            checkboxes.forEach(checkbox => {
                state[checkbox.id] = checkbox.checked;
            });

            // 로컬 스토리지에 체크박스 상태 저장
            localStorage.setItem(`checkboxState_${param}`, JSON.stringify(state));
            alert(`State saved with parameter: ${param}`);
            window.location.href = `?${param}`; // 페이지를 해당 파라미터 URL로 이동
        }

        // URL의 파라미터를 기준으로 체크박스 상태를 불러오는 함수
        function loadCheckboxState() {
            const urlParams = new URLSearchParams(window.location.search);
            const param = urlParams.toString();  // 전체 쿼리 파라미터를 문자열로 가져옴

            if (param) {
                const savedState = localStorage.getItem(`checkboxState_${param}`);
                if (savedState) {
                    const state = JSON.parse(savedState);
                    Object.keys(state).forEach(id => {
                        const checkbox = document.getElementById(id);
                        if (checkbox) checkbox.checked = state[id];
                    });
                } else {
                    console.log("No saved state found for this parameter.");
                }
            } else {
                alert("No parameter in URL to load state.");
            }
        }

        // 페이지 로드 시 체크박스 상태 불러오기
        window.onload = loadCheckboxState;