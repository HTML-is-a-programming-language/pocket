import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';

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
function saveToFirebase(cardId, value) {
    const db = getDatabase();
    const cardRef = ref(db, `cards/${cardId}`); // cards/{cardId} 경로에 저장
    set(cardRef, { count: value })
      .then(() => {
        console.log(`Data for card ${cardId} saved: ${value}`);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  }

// 이벤트 리스너 추가
document.querySelectorAll('input[name="cardCount"]').forEach((input) => {
    input.addEventListener('input', (event) => {
      const cardId = event.target.dataset.id; // input의 data-id 값
      const value = event.target.value; // 입력된 값
      saveToFirebase(cardId, value);
    });
  });

  // Firebase에서 데이터 가져와 각 input에 value 설정
function loadDataFromFirebase() {
    const db = getDatabase();
    const cardRef = ref(db, 'cards'); // cards 경로에서 데이터 가져오기

    onValue(cardRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        // 저장된 데이터를 input 필드에 설정
        document.querySelectorAll('input[name="cardCount"]').forEach((input) => {
          const cardId = input.dataset.id; // input의 data-id 값
          if (data[cardId]) {
            input.value = data[cardId].count; // 데이터베이스에서 값 가져와 설정
          }
        });
      }
    });
  }

  // 문서 로딩 시 데이터 로드
  document.addEventListener('DOMContentLoaded', () => {
    loadDataFromFirebase();
  });