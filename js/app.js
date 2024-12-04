import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDF2vgI7mdPxN6q93On_ZghaO_o_CQ8Tp4',
    authDomain: 'pocket-59d33.firebaseapp.com',
    projectId: 'pocket-59d33',
    storageBucket: 'pocket-59d33.firebasestorage.app',
    messagingSenderId: '353388690562',
    appId: '1:353388690562:web:bf04245e1b3982457a489b',
    measurementId: 'G-9S4LH4GJPR'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

// HTML 요소 가져오기
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const signupButton = document.getElementById('signupButton');
const message = document.getElementById('message');

// 로그인 처리
loginButton.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert('로그인 완료');
  } catch (error) {
    message.textContent = `이메일/비밀번호 재확인 필요`;
    message.style.color = 'red';
  }
});

// 회원가입 처리
signupButton.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    message.textContent = `${user.email} 계정 생성 완료`;
    message.style.color = 'green';
  } catch (error) {
    message.textContent = `계정 생성 실패`;
    message.style.color = 'red';
  }
});

// 데이터 저장 함수
function saveToFirebase(uid, cardId, value) {
  console.log(`Saving to Firebase: uid=${uid}, cardId=${cardId}, value=${value}`); // 디버깅용 로그 추가
  const db = getDatabase();
  const cardRef = ref(db, `users/${uid}/${cardId}`); // 사용자별 데이터 경로
  set(cardRef, { count: value })
    .then(() => {
      console.log(`Data for card ${cardId} saved for user ${uid}: ${value}`);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
}

// 이벤트 리스너 추가
function enableInputListeners(uid) {
  document.querySelectorAll('input[name="cardCount"]').forEach((input) => {
    const clone = input.cloneNode(true);
    input.parentNode.replaceChild(clone, input);

    clone.addEventListener("input", (event) => {
      const cardId = event.target.dataset.id;
      const value = event.target.value;
      saveToFirebase(uid, cardId, value);
    });

    clone.disabled = false;
  });
}

function disableInputListeners() {
  document.querySelectorAll('input[name="cardCount"]').forEach((input) => {
    input.removeEventListener("input", () => {});
    input.disabled = true;
  });
}

// 데이터 로드 함수
function loadUserData(uid) {
  const userRef = ref(db, `users/${uid}`);
  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("User data:", data);

        Object.keys(data).forEach((cardId) => {
          const input = document.querySelector(`input[data-id="${cardId}"]`);
          if (input) {
            input.value = data[cardId].count;
          }
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("Error loading data:", error);
    });
}

// 로그인 상태 확인 및 데이터 로드
document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in as:", user.uid);
      const uid = user.uid;
      enableInputListeners(uid);
      loadUserData(uid);
    } else {
      console.log("User is not logged in");
      disableInputListeners();
    }
  });
});