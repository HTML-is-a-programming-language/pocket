// 모달창 열기
function modalWindowOpen(button) {
    const modalWindowOverlay = document.querySelector('.modal-window-overlay');
    const buttonData = button.dataset.modal;

    document.querySelectorAll('.modal-window-wrap').forEach(modal => {
      const modalWindowData = modal.dataset.modal;
      if (buttonData === modalWindowData) {
        modalWindowOverlay.classList.add('active')
        modal.classList.add('active');
      }
    });

    if (buttonData == 'view') {
        const cardImageItem = button.closest('li');
        const cardImageSrc = cardImageItem.querySelector('img').getAttribute('src');
        const getText = cardImageItem.querySelector('img').getAttribute('data-get');
        document.querySelector('.card-image-box img').src = cardImageSrc;
        document.querySelector('.get-text').textContent = getText;
    }
}

// 모달창 닫기
function modalWindowClose() {
    const modalWindowOverlay = document.querySelector('.modal-window-overlay');

    document.querySelectorAll('.modal-window-wrap').forEach(modal => {
        modalWindowOverlay.classList.remove('active')
        modal.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".modal-window-overlay");
    const allModalWindowWrap = document.querySelectorAll(".modal-window-wrap");

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
        overlay.classList.remove("active");
        allModalWindowWrap.forEach(modal => {
            modal.classList.remove('active');
        });
        }
    });
});

// 탭 바 버튼
function tabBarButton(tab) {
    if (tab === 'card') {
        document.querySelector('.deck-list-wrap').classList.remove('active');
        document.querySelector('.card-list-wrap').classList.add('active');
    } else if (tab === 'deck') {
        document.querySelector('.card-list-wrap').classList.remove('active');
        document.querySelector('.deck-list-wrap').classList.add('active');
    }
}

// 카드 정보 배열
const imageData = [
    { src: "image/bulbasaur.webp", alt: "이상해씨", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/ivysaur.webp", alt: "이상해풀", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/venusaur.webp", alt: "이상해꽃", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/venusaur_ex.webp", alt: "이상해꽃ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/caterpie.webp", alt: "캐터피", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/metapod.webp", alt: "단데기", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/butterfree.webp", alt: "버터플", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/weedle.webp", alt: "뿔충이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/kakuna.webp", alt: "딱충이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/beedrill.webp", alt: "독침붕", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/oddish.webp", alt: "뚜벅쵸", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/gloom.webp", alt: "냄새꼬", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/vileplume.webp", alt: "라플레시아", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/paras.webp", alt: "파라스", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/parasect.webp", alt: "파라섹트", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/venonat.webp", alt: "콘팡", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/venomoth.webp", alt: "도나리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/bellsprout.webp", alt: "모다피", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/weepinbell.webp", alt: "우츠동", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/victreebel.webp", alt: "우츠보트", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/exeggcute.webp", alt: "아라리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/exeggutor.webp", alt: "나시", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/exeggutor_ex.webp", alt: "나시ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/tangela.webp", alt: "덩쿠리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/scyther.webp", alt: "스라크", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/pinsir.webp", alt: "쁘사이저", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/cottonee.webp", alt: "소미안", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/whimsicott.webp", alt: "엘풍", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/petilil.webp", alt: "치릴리", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/lilligant.webp", alt: "드레디어", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/skiddo.webp", alt: "메이클", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/gogoat.webp", alt: "고고트", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/charmander.webp", alt: "파이리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/charmeleon.webp", alt: "리자드", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/charizard.webp", alt: "리자몽", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/charizard_ex.webp", alt: "리자몽ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/vulpix.webp", alt: "식스테일", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/ninetales.webp", alt: "나인테일", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/growlithe.webp", alt: "가디", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/arcanine.webp", alt: "윈디", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/arcanine_ex.webp", alt: "윈디ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/ponyta.webp", alt: "포니타", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/rapidash.webp", alt: "날쌩마", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/magmar.webp", alt: "마그마", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/flareon.webp", alt: "부스터", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/moltres.webp", alt: "파이어", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/moltres_ex.webp", alt: "파이어ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/heatmor.webp", alt: "앤티골", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/salandit.webp", alt: "야도뇽", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/salazzle.webp", alt: "염뉴트", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/sizzlipede.webp", alt: "태우지네", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/centiskorch.webp", alt: "다태우지네", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/squirtle.webp", alt: "꼬부기", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/wartortle.webp", alt: "어니부기", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/blastoise.webp", alt: "거북왕", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/blastoise_ex.webp", alt: "거북왕ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/psyduck.webp", alt: "고라파덕", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/golduck.webp", alt: "골덕", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/poliwag.webp", alt: "발챙이", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/poliwhirl.webp", alt: "슈륙챙이", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/poliwrath.webp", alt: "강챙이", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/tentacool.webp", alt: "왕눈해", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/tentacruel.webp", alt: "독파리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/seel.webp", alt: "쥬쥬", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/dewgong.webp", alt: "쥬레곤", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/shellder.webp", alt: "셀러", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/cloyster.webp", alt: "파르셀", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/krabby.webp", alt: "크랩", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/kingler.webp", alt: "킹크랩", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/horsea.webp", alt: "쏘드라", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/seadra.webp", alt: "시드라", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/goldeen.webp", alt: "콘치", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/seaking.webp", alt: "왕콘치", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/staryu.webp", alt: "별가사리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/starmie.webp", alt: "아쿠스타", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/starmie_ex.webp", alt: "아쿠스타ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/magikarp.webp", alt: "잉어킹", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/gyarados.webp", alt: "갸라도스", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/lapras.webp", alt: "라프라스", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/vaporeon.webp", alt: "샤미드", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/omanyte.webp", alt: "암나이트", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/omastar.webp", alt: "암스타", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/articuno.webp", alt: "프리져", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/articuno_ex.webp", alt: "프리져ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/ducklett.webp", alt: "꼬지보리", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/swanna.webp", alt: "스완나", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/froakie.webp", alt: "개구마르", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/frogadier.webp", alt: "개굴반장", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/greninja.webp", alt: "개굴닌자", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/pyukumuku.webp", alt: "해무기", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/bruxish.webp", alt: "치갈기", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/snom.webp", alt: "누니머기", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/frosmoth.webp", alt: "모스노우", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/pikachu.webp", alt: "피카츄", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/raichu.webp", alt: "라이츄", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/pikachu_ex.webp", alt: "피카츄ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/magnemite.webp", alt: "코일", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/magneton.webp", alt: "레어코일", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/voltorb.webp", alt: "찌리리공", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/electrode.webp", alt: "붐볼", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/electabuzz.webp", alt: "에레브", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/jolteon.webp", alt: "쥬피썬더", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/zapdos.webp", alt: "썬더", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/zapdos_ex.webp", alt: "썬더ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/blitzle.webp", alt: "줄뮤마", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/zebstrika.webp", alt: "제브라이카", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/tynamo.webp", alt: "저리어", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/eelektrik.webp", alt: "저리릴", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/eelektross.webp", alt: "저리더프", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/helioptile.webp", alt: "목도리키텔", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/heliolisk.webp", alt: "일렉도리자드", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/pincurchin.webp", alt: "찌르성게", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/clefairy.webp", alt: "삐삐", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/clefable.webp", alt: "픽시", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/abra.webp", alt: "캐이시", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/kadabra.webp", alt: "윤겔라", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/alakazam.webp", alt: "후딘", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/slowpoke.webp", alt: "야돈", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/slowbro.webp", alt: "야도란", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/gastly.webp", alt: "고오스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/haunter.webp", alt: "고우스트", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/gengar.webp", alt: "팬텀", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/gengar_ex.webp", alt: "팬텀ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/drowzee.webp", alt: "슬리프", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/hypno.webp", alt: "슬리퍼", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/mr._mime.webp", alt: "마임맨", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/jynx.webp", alt: "루주라", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/mewtwo.webp", alt: "뮤츠", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/mewtwo_ex.webp", alt: "뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/ralts.webp", alt: "랄토스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/kirlia.webp", alt: "킬리아", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/gardevoir.webp", alt: "가디안", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/woobat.webp", alt: "또르박쥐", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/swoobat.webp", alt: "맘박쥐", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/golett.webp", alt: "골비람", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/golurk.webp", alt: "골루그", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/sandshrew.webp", alt: "모래두지", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/sandslash.webp", alt: "고지", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/diglett.webp", alt: "디그다", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/dugtrio.webp", alt: "닥트리오", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/mankey.webp", alt: "망키", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/primeape.webp", alt: "성원숭", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/machop.webp", alt: "알통몬", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/machoke.webp", alt: "근육몬", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/machamp.webp", alt: "괴력몬", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/machamp_ex.webp", alt: "괴력몬ex", get: "최강의 유전자 리자몽", rarity: 4, pack: 1 },
    { src: "image/geodude.webp", alt: "꼬마돌", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/graveler.webp", alt: "데구리", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/golem.webp", alt: "딱구리", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/onix.webp", alt: "롱스톤", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/cubone.webp", alt: "탕구리", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/marowak.webp", alt: "텅구리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/marowak_ex.webp", alt: "텅구리ex", get: "최강의 유전자 뮤츠", rarity: 4, pack: 2 },
    { src: "image/hitmonlee.webp", alt: "시라소몬", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/hitmonchan.webp", alt: "홍수몬", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/rhyhorn.webp", alt: "뿔카노", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/rhydon.webp", alt: "코뿌리", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/kabuto.webp", alt: "투구", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/kabutops.webp", alt: "투구푸스", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/mienfoo.webp", alt: "비조푸", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/mienshao.webp", alt: "비조도", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/clobbopus.webp", alt: "때때무노", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/grapploct.webp", alt: "케오퍼스", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/ekans.webp", alt: "아보", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/arbok.webp", alt: "아보크", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/nidoran_f.webp", alt: "니드런♀", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/nidorina.webp", alt: "니드리나", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/nidoqueen.webp", alt: "니드퀸", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/nidoran_m.webp", alt: "니드런♂", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/nidorino.webp", alt: "니드리노", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/nidoking.webp", alt: "니드킹", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/zubat.webp", alt: "주뱃", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/golbat.webp", alt: "골뱃", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/grimer.webp", alt: "질퍽이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/muk.webp", alt: "질뻐기", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/koffing.webp", alt: "또가스", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/weezing.webp", alt: "또도가스", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/mawile.webp", alt: "입치트", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/pawniard.webp", alt: "자망칼", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/bisharp.webp", alt: "절각참", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/meltan.webp", alt: "멜탄", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/melmetal.webp", alt: "멜메탈", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/dratini.webp", alt: "미뇽", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/dragonair.webp", alt: "신뇽", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/dragonite.webp", alt: "망나뇽", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/pidgey.webp", alt: "구구", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/pidgeotto.webp", alt: "피죤", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/pidgeot.webp", alt: "피죤투", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/rattata.webp", alt: "꼬렛", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/raticate.webp", alt: "레트라", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/spearow.webp", alt: "깨비참", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/fearow.webp", alt: "깨비드릴조", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/jigglypuff.webp", alt: "푸린", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/wigglytuff.webp", alt: "푸크린", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/wigglytuff_ex.webp", alt: "푸크린ex", get: "최강의 유전자 피카츄", rarity: 4, pack: 3 },
    { src: "image/meowth.webp", alt: "나옹", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/persian.webp", alt: "페르시온", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/farfetch'd.webp", alt: "파오리", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/doduo.webp", alt: "두두", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/dodrio.webp", alt: "두트리오", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/lickitung.webp", alt: "내루미", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/chansey.webp", alt: "럭키", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/kangaskhan.webp", alt: "캥카", get: "최강의 유전자 리자몽", rarity: 3, pack: 1 },
    { src: "image/tauros.webp", alt: "켄타로스", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/ditto.webp", alt: "메타몽", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/eevee_1.webp", alt: "이브이", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/eevee_2.webp", alt: "이브이", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/eevee_3.webp", alt: "이브이", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/porygon.webp", alt: "폴리곤", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/aerodactyl.webp", alt: "프테라", get: "최강의 유전자 뮤츠", rarity: 3, pack: 2 },
    { src: "image/snorlax.webp", alt: "잠만보", get: "최강의 유전자 피카츄", rarity: 3, pack: 3 },
    { src: "image/minccino.webp", alt: "치라미", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/cinccino.webp", alt: "치라치노", get: "최강의 유전자", rarity: 2, pack: 0 },
    { src: "image/wooloo.webp", alt: "우르", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/dubwool.webp", alt: "배우르", get: "최강의 유전자", rarity: 1, pack: 0 },
    { src: "image/helix_fossil.webp", alt: "조개화석", get: "최강의 유전자 피카츄", rarity: 1, pack: 3 },
    { src: "image/dome_fossil.webp", alt: "껍질화석", get: "최강의 유전자 리자몽", rarity: 1, pack: 1 },
    { src: "image/old_amber.webp", alt: "비밀의호박", get: "최강의 유전자 뮤츠", rarity: 1, pack: 2 },
    { src: "image/erika.webp", alt: "민화", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/misty.webp", alt: "이슬", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/blaine.webp", alt: "강연", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/koga.webp", alt: "독수", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/giovanni.webp", alt: "비주기", get: "최강의 유전자 뮤츠", rarity: 2, pack: 2 },
    { src: "image/brock.webp", alt: "웅", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/sabrina.webp", alt: "초련", get: "최강의 유전자 리자몽", rarity: 2, pack: 1 },
    { src: "image/lt._surge.webp", alt: "마티스", get: "최강의 유전자 피카츄", rarity: 2, pack: 3 },
    { src: "image/bulbasaur_gold_1.webp", alt: "이상해씨", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/gloom_gold_1.webp", alt: "냄새꼬", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/pinsir_gold_1.webp", alt: "쁘사이저", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/charmander_gold_1.webp", alt: "파이리", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/rapidash_gold_1.webp", alt: "날쌩마", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/squirtle_gold_1.webp", alt: "꼬부기", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/gyarados_gold_1.webp", alt: "갸라도스", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/lapras_gold_1.webp", alt: "라프라스", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/electrode_gold_1.webp", alt: "붐볼", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/alakazam_gold_1.webp", alt: "후딘", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/slowpoke_gold_1.webp", alt: "야돈", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/diglett_gold_1.webp", alt: "디그다", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/cubone_gold_1.webp", alt: "탕구리", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/nidoqueen_gold_1.webp", alt: "니드퀸", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/nidoking_gold_1.webp", alt: "니드킹", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/golbat_gold_1.webp", alt: "골뱃", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/weezing_gold_1.webp", alt: "또도가스", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/dragonite_gold_1.webp", alt: "망나뇽", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/pidgeot_gold_1.webp", alt: "피죤투", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/meowth_gold_1.webp", alt: "나옹", get: "최강의 유전자 리자몽", rarity: 5, pack: 1 },
    { src: "image/ditto_gold_1.webp", alt: "메타몽", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/eevee_gold_1.webp", alt: "이브이", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/porygon_gold_1.webp", alt: "폴리곤", get: "최강의 유전자 뮤츠", rarity: 5, pack: 2 },
    { src: "image/snorlax_gold_1.webp", alt: "잠만보", get: "최강의 유전자 피카츄", rarity: 5, pack: 3 },
    { src: "image/venusaur_ex_gold_2.webp", alt: "이상해꽃ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/exeggutor_ex_gold_2.webp", alt: "나시ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/charizard_ex_gold_2.webp", alt: "리자몽ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/arcanine_ex_gold_2.webp", alt: "윈디ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/moltres_ex_gold_2.webp", alt: "파이어ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/blastoise_ex_gold_2.webp", alt: "거북왕ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/starmie_ex_gold_2.webp", alt: "아쿠스타ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/articuno_ex_gold_2.webp", alt: "프리져ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/pikachu_ex_gold_2.webp", alt: "피카츄ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/zapdos_ex_gold_2.webp", alt: "썬더ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/gengar_ex_gold_2.webp", alt: "팬텀ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/mewtwo_ex_gold_2.webp", alt: "뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/machamp_ex_gold_2.webp", alt: "괴력몬ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/marowak_ex_gold_2.webp", alt: "텅구리ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/wigglytuff_ex_gold_2.webp", alt: "푸크린ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/erika_gold_2.webp", alt: "민화", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/misty_gold_2.webp", alt: "이슬", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/blaine_gold_2.webp", alt: "강연", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/koga_gold_2.webp", alt: "독수", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/giovanni_gold_2.webp", alt: "비주기", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/brock_gold_2.webp", alt: "웅", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/sabrina_gold_2.webp", alt: "초련", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/lt._surge_gold_2.webp", alt: "마티스", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/moltres_ex_gold_2_1.webp", alt: "파이어ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/articuno_ex_gold_2_1.webp", alt: "프리져ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/zapdos_ex_gold_2_1.webp", alt: "썬더ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/gengar_ex_gold_2_1.webp", alt: "팬텀ex", get: "최강의 유전자 뮤츠", rarity: 6, pack: 2 },
    { src: "image/machamp_ex_gold_2_1.webp", alt: "괴력몬ex", get: "최강의 유전자 리자몽", rarity: 6, pack: 1 },
    { src: "image/wigglytuff_ex_gold_2_1.webp", alt: "푸크린ex", get: "최강의 유전자 피카츄", rarity: 6, pack: 3 },
    { src: "image/charizard_ex_gold_3.webp", alt: "리자몽ex", get: "최강의 유전자 리자몽", rarity: 7, pack: 1 },
    { src: "image/pikachu_ex_gold_3.webp", alt: "피카츄ex", get: "최강의 유전자 피카츄", rarity: 7, pack: 3 },
    { src: "image/mewtwo_ex_gold_3.webp", alt: "뮤츠ex", get: "최강의 유전자 뮤츠", rarity: 7, pack: 2 },
    { src: "image/mew_gold_3.webp", alt: "뮤", get: "도감완성", rarity: 7, pack: 4 },
    { src: "image/charizard_ex_crown.webp", alt: "리자몽ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/pikachu_ex_crown.webp", alt: "피카츄ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/mewtwo_ex_crown.webp", alt: "뮤츠ex", get: "최강의 유전자", rarity: 8, pack: 0 },
    { src: "image/potion.webp", alt: "상처약", get: "상점", rarity: 9, pack: 4 },
    { src: "image/x_speed.webp", alt: "스피드업", get: "상점", rarity: 9, pack: 4 },
    { src: "image/hand_scope.webp", alt: "랜드스코프", get: "상점", rarity: 9, pack: 4 },
    { src: "image/pokedex.webp", alt: "포켓몬 도감", get: "상점", rarity: 9, pack: 4 },
    { src: "image/poke_ball.webp", alt: "몬스터볼", get: "상점", rarity: 9, pack: 4 },
    { src: "image/red_card.webp", alt: "레드카드", get: "상점", rarity: 9, pack: 4 },
    { src: "image/professor's_research.webp", alt: "박사의 연구", get: "상점", rarity: 9, pack: 4 },
    { src: "image/pikachu_promo_A.webp", alt: "프로모 카드 피카츄", get: "상점", rarity: 9, pack: 4 },
    { src: "image/mewtwo_promo_A.webp", alt: "프로모 카드 뮤츠", get: "12월 프리미엄패스 보상", rarity: 9, pack: 4 },
    { src: "image/chansey_promo_A.webp", alt: "프로모 카드 럭키", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/meowth_promo_A.webp", alt: "프로모 카드 나옹", get: "겟 챌린지 이벤트 전반 개최", rarity: 9, pack: 4 },
    { src: "image/butterfree_promo_A.webp", alt: "프로모 카드 버터플", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/lapras_ex_promo_A.webp", alt: "프로모 카드 라프라스ex", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/pikachu_promo_A_2.webp", alt: "프로모 카드 피카츄", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/clefairy_promo_A.webp", alt: "프로모 카드 삐삐", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/mankey_promo_A.webp", alt: "프로모 카드 망키", get: "라프라스 ex 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/venusaur_promo_A.webp", alt: "프로모 카드 이상해꽃", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/greninja_promo_A.webp", alt: "프로모 카드 개굴닌자", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/haunter_promo_A.webp", alt: "프로모 카드 고우스트", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/onix_promo_A.webp", alt: "프로모 카드 롱스톤", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
    { src: "image/jigglypuff_promo_A.webp", alt: "프로모 카드 푸린", get: "이상해꽃 드롭 이벤트", rarity: 9, pack: 4 },
];

// 카드 리스트 생성 함수
function createCardItems(imageData) {
    const cardList = document.querySelector('.card-list');

    imageData.forEach((data, index) => {
        const cardItem = document.createElement('li');
        cardItem.classList.add('card-item');
        cardItem.setAttribute('data-name', data.alt);
        cardItem.setAttribute('data-rarity', data.rarity);
        cardItem.setAttribute('data-pack', data.pack);

        const img = document.createElement('img');
        img.src = data.src;
        img.alt = data.alt;
        img.setAttribute('data-get', data.get);

        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('view-button');
        button.setAttribute('data-modal', 'view');

        button.addEventListener('click', function() {
            modalWindowOpen(this);
        });

        const input = document.createElement('input');
        input.type = 'number';
        input.name = 'cardCount';
        input.id = `cardCount${index}`;
        input.value = 0;
        input.setAttribute('data-id', index);
        input.min = 0;

        cardItem.appendChild(img);
        cardItem.appendChild(button);
        cardItem.appendChild(input);

        cardList.appendChild(cardItem);
    });
}

// 카드 리스트 호출
createCardItems(imageData);