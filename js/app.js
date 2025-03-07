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
  if (value < 0) {
    console.log(`Value is less than 0. Skipping save: cardId=${cardId}, value=${value}`);
    return;
  }

  const db = getDatabase();
  const cardRef = ref(db, `users/${uid}/${cardId}`);
  set(cardRef, { count: value })
    .then(() => console.log(`Data saved: ${cardId}, ${value}`))
    .catch((error) => console.error("Error saving data:", error));
}

// 버튼 활성화/비활성화 함수
function toggleButtonClass(input) {
  const value = parseInt(input.value, 10) || 0;
  const button = input.closest(".card-item").querySelector(".view-button");

  if (value >= 1) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
}

// 이벤트 리스너 추가
function enableInputListeners(uid) {
  document.querySelectorAll('input[name="cardCount"]').forEach((input) => {
    const clone = input.cloneNode(true);
    input.parentNode.replaceChild(clone, input);

    toggleButtonClass(clone); // 초기 상태 확인 후 버튼 활성화

    clone.addEventListener("input", (event) => {
      const cardId = event.target.dataset.id;
      const value = parseInt(event.target.value, 10) || 0;
      if (value < 0) {
        event.target.value = 0; // 음수 입력 방지
      }
      saveToFirebase(uid, cardId, value); // Firebase에 데이터 저장
      toggleButtonClass(event.target); // 버튼 상태 갱신
      updateDeckListButtons(); // 덱 리스트 버튼 상태 갱신
    });

    clone.disabled = false;
  });
}

// 덱 리스트 활성화 상태 갱신 함수
async function updateDeckListButtons() {
  const deckLists = document.querySelectorAll(".deck-list-container");
  const cardItems = document.querySelectorAll(".card-list .card-item");

  // 카드 리스트에서 이름별 input 값 합산
  const cardInputCounts = {};
  cardItems.forEach((cardItem) => {
    const img = cardItem.querySelector("img");
    const input = cardItem.querySelector("input[name='cardCount']");

    if (img && input) {
      const cardName = img.alt;
      const inputValue = parseInt(input.value, 10) || 0;
      cardInputCounts[cardName] = (cardInputCounts[cardName] || 0) + inputValue;
    }
  });

  deckLists.forEach((deck) => {
    const cardCounts = {}; // 각 덱 별 카드 개수 초기화

    // 현재 덱에서 카드 개수 집계
    const deckItems = deck.querySelectorAll(".deck-list .deck-item img");
    deckItems.forEach((img) => {
      const cardName = img.alt;
      cardCounts[cardName] = (cardCounts[cardName] || 0) + 1;
    });

    // 덱 리스트의 버튼 활성화 상태 갱신
    const deckItemElements = deck.querySelectorAll(".deck-list .deck-item");
    deckItemElements.forEach((deckItem) => {
      const img = deckItem.querySelector("img");
      const viewButton = deckItem.querySelector(".view-button");

      if (img && viewButton) {
        const cardName = img.alt;
        const deckCount = cardCounts[cardName] || 0; // 현재 덱에서 해당 카드의 개수
        const inputCount = cardInputCounts[cardName] || 0; // 카드 리스트에서 합산된 개수

        if (inputCount >= deckCount) {
          // 카드 리스트의 개수가 덱 개수 이상인 경우 모든 버튼 활성화
          viewButton.classList.add("active");
        } else if (inputCount > 0) {
          // 카드 리스트의 개수가 덱 개수보다 적을 때 앞 카드부터 순차적으로 활성화
          const activeCards = inputCount; // 활성화 가능한 카드 개수
          const cardIndexInDeck = Array.from(deckItemElements).filter(
            (item) => item.querySelector("img").alt === cardName
          ).indexOf(deckItem);

          if (cardIndexInDeck < activeCards) {
            viewButton.classList.add("active");
          } else {
            viewButton.classList.remove("active");
          }
        } else {
          // 카드 리스트에 해당 카드가 없을 경우 버튼 비활성화
          viewButton.classList.remove("active");
        }
      }
    });
  });
}

// 이벤트 리스너 비활성화
function disableInputListeners() {
  document.querySelectorAll('input[name="cardCount"]').forEach((input) => {
    input.removeEventListener('input', () => {});
    input.disabled = true;
  });
}

// 데이터 로드 함수
async function loadUserData(uid) {
  const userRef = ref(db, `users/${uid}`);
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      Object.keys(data).forEach((cardId) => {
        const input = document.querySelector(`input[data-id="${cardId}"]`);
        if (input) {
          input.value = data[cardId].count;
          toggleButtonClass(input); // 로드된 데이터에 따라 버튼 활성화 상태 체크
        }
      });
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// 로그인 상태 확인 및 초기화
document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      enableInputListeners(uid); // 이벤트 리스너 설정
      await loadUserData(uid); // 데이터 로드
      updateDeckListButtons(); // 덱 리스트 상태 갱신
    } else {
      console.log("User is not logged in");
      disableInputListeners(); // 비로그인 시 입력 비활성화
    }
  });
});

document.querySelector('.search-result-button').addEventListener('click', () => {
  const nameInput = document.querySelector('#name').value.trim();
  const rarityChecked = [...document.querySelectorAll('input[name="rarity"]:checked')].map(cb => cb.value);
  const packChecked = [...document.querySelectorAll('input[name="pack"]:checked')].map(cb => cb.value);
  const countChecked = [...document.querySelectorAll('input[name="count"]:checked')].map(cb => cb.value);

  const cards = document.querySelectorAll('.card-list-wrap .card-item');

  cards.forEach(card => {
    const cardName = card.getAttribute('data-name');
    const cardRarity = card.getAttribute('data-rarity');
    const cardPack = card.getAttribute('data-pack');
    const cardCountInput = card.querySelector('input[name="cardCount"]');
    const cardCount = parseInt(cardCountInput?.value || 0, 10);

    let isVisible = true;

    // 카드 이름 필터링 (AND 조건)
    if (nameInput && !cardName.includes(nameInput)) {
      isVisible = false;
    }

    // 레어도 필터링 (OR 조건)
    if (rarityChecked.length && !rarityChecked.includes(cardRarity)) {
      isVisible = false;
    }

    // 확장팩 필터링 (OR 조건)
    if (packChecked.length && !packChecked.includes(cardPack)) {
      isVisible = false;
    }

    // 카드 장수 필터링 (OR 조건)
    if (countChecked.length) {
      const countMatch = countChecked.some(count => {
        if (count === "0" && cardCount === 0) return true;
        if (count === "1" && cardCount === 1) return true;
        if (count === "2" && cardCount === 2) return true;
        if (count === "3" && cardCount >= 3) return true;
        return false;
      });
      if (!countMatch) isVisible = false;
    }

    // 카드 보이기/숨기기 처리
    card.style.display = isVisible ? 'block' : 'none';
    modalWindowClose()
  });
});

document.querySelector('.reset-button').addEventListener('click', () => {
  // 입력 필드 초기화
  document.querySelector('#name').value = '';

  // 체크박스 초기화
  document.querySelectorAll('.search-wrap input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });
});
