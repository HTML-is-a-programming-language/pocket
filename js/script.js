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

// 페이지 로드 시 이전에 입력한 파라미터를 불러오기
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.toString();
    if (param) document.getElementById('params').value = param;
};

// 이미지 정보 배열
const imageData = [
    { src: "image/bulbasaur.webp", alt: "이상해씨" },
    { src: "image/ivysaur.webp", alt: "이상해풀" },
    { src: "image/venusaur.webp", alt: "이상해꽃" },
    { src: "image/venusaur_ex.webp", alt: "이상해꽃ex" },
    { src: "image/caterpie.webp", alt: "캐터피" },
    { src: "image/metapod.webp", alt: "단데기" },
    { src: "image/butterfree.webp", alt: "버터플" },
    { src: "image/weedle.webp", alt: "뿔충이" },
    { src: "image/kakuna.webp", alt: "딱충이" },
    { src: "image/beedrill.webp", alt: "독침붕" },
    { src: "image/oddish.webp", alt: "뚜벅쵸" },
    { src: "image/gloom.webp", alt: "냄새꼬" },
    { src: "image/vileplume.webp", alt: "라플레시아" },
    { src: "image/paras.webp", alt: "파라스" },
    { src: "image/parasect.webp", alt: "파라섹트" },
    { src: "image/venonat.webp", alt: "콘팡" },
    { src: "image/venomoth.webp", alt: "도나리" },
    { src: "image/bellsprout.webp", alt: "모다피" },
    { src: "image/weepinbell.webp", alt: "우츠동" },
    { src: "image/victreebel.webp", alt: "우츠보트" },
    { src: "image/exeggcute.webp", alt: "아라리" },
    { src: "image/exeggutor.webp", alt: "나시" },
    { src: "image/exeggutor_ex.webp", alt: "나시ex" },
    { src: "image/tangela.webp", alt: "덩쿠리" },
    { src: "image/scyther.webp", alt: "스라크" },
    { src: "image/pinsir.webp", alt: "쁘사이저" },
    { src: "image/cottonee.webp", alt: "소미안" },
    { src: "image/whimsicott.webp", alt: "엘풍" },
    { src: "image/petilil.webp", alt: "치릴리" },
    { src: "image/lilligant.webp", alt: "드레디어" },
    { src: "image/skiddo.webp", alt: "메이클" },
    { src: "image/gogoat.webp", alt: "고고트" },
    { src: "image/charmander.webp", alt: "파이리" },
    { src: "image/charmeleon.webp", alt: "리자드" },
    { src: "image/charizard.webp", alt: "리자몽" },
    { src: "image/charizard_ex.webp", alt: "리자몽ex" },
    { src: "image/vulpix.webp", alt: "식스테일" },
    { src: "image/ninetales.webp", alt: "나인테일" },
    { src: "image/growlithe.webp", alt: "가디" },
    { src: "image/arcanine.webp", alt: "윈디" },
    { src: "image/arcanine_ex.webp", alt: "윈디ex" },
    { src: "image/ponyta.webp", alt: "포니타" },
    { src: "image/rapidash.webp", alt: "날쌩마" },
    { src: "image/magmar.webp", alt: "마그마" },
    { src: "image/flareon.webp", alt: "부스터" },
    { src: "image/moltres.webp", alt: "파이어" },
    { src: "image/moltres_ex.webp", alt: "파이어ex" },
    { src: "image/heatmor.webp", alt: "앤티골" },
    { src: "image/salandit.webp", alt: "야도뇽" },
    { src: "image/salazzle.webp", alt: "염뉴트" },
    { src: "image/sizzlipede.webp", alt: "태우지네" },
    { src: "image/centiskorch.webp", alt: "다태우지네" },
    { src: "image/squirtle.webp", alt: "꼬부기" },
    { src: "image/wartortle.webp", alt: "어니부기" },
    { src: "image/blastoise.webp", alt: "거북왕" },
    { src: "image/blastoise_ex.webp", alt: "거북왕ex" },
    { src: "image/psyduck.webp", alt: "고라파덕" },
    { src: "image/golduck.webp", alt: "골덕" },
    { src: "image/poliwag.webp", alt: "발챙이" },
    { src: "image/poliwhirl.webp", alt: "슈륙챙이" },
    { src: "image/poliwrath.webp", alt: "강챙이" },
    { src: "image/tentacool.webp", alt: "왕눈해" },
    { src: "image/tentacruel.webp", alt: "독파리" },
    { src: "image/seel.webp", alt: "쥬쥬" },
    { src: "image/dewgong.webp", alt: "쥬레곤" },
    { src: "image/shellder.webp", alt: "셀러" },
    { src: "image/cloyster.webp", alt: "파르셀" },
    { src: "image/krabby.webp", alt: "크랩" },
    { src: "image/kingler.webp", alt: "킹크랩" },
    { src: "image/horsea.webp", alt: "쏘드라" },
    { src: "image/seadra.webp", alt: "시드라" },
    { src: "image/goldeen.webp", alt: "콘치" },
    { src: "image/seaking.webp", alt: "왕콘치" },
    { src: "image/staryu.webp", alt: "별가사리" },
    { src: "image/starmie.webp", alt: "아쿠스타" },
    { src: "image/starmie_ex.webp", alt: "아쿠스타ex" },
    { src: "image/magikarp.webp", alt: "잉어킹" },
    { src: "image/gyarados.webp", alt: "갸라도스" },
    { src: "image/lapras.webp", alt: "라프라스" },
    { src: "image/vaporeon.webp", alt: "샤미드" },
    { src: "image/omanyte.webp", alt: "암나이트" },
    { src: "image/omastar.webp", alt: "암스타" },
    { src: "image/articuno.webp", alt: "프리져" },
    { src: "image/articuno_ex.webp", alt: "프리져ex" },
    { src: "image/ducklett.webp", alt: "꼬지보리" },
    { src: "image/swanna.webp", alt: "스완나" },
    { src: "image/froakie.webp", alt: "개구마르" },
    { src: "image/frogadier.webp", alt: "개굴반장" },
    { src: "image/greninja.webp", alt: "개굴닌자" },
    { src: "image/pyukumuku.webp", alt: "해무기" },
    { src: "image/bruxish.webp", alt: "치갈기" },
    { src: "image/snom.webp", alt: "누니머기" },
    { src: "image/frosmoth.webp", alt: "모스노우" },
    { src: "image/pikachu.webp", alt: "피카츄" },
    { src: "image/raichu.webp", alt: "라이츄" },
    { src: "image/pikachu_ex.webp", alt: "피카츄ex" },
    { src: "image/magnemite.webp", alt: "코일" },
    { src: "image/magneton.webp", alt: "레어코일" },
    { src: "image/voltorb.webp", alt: "찌리리공" },
    { src: "image/electrode.webp", alt: "붐볼" },
    { src: "image/electabuzz.webp", alt: "에레브" },
    { src: "image/jolteon.webp", alt: "쥬피썬더" },
    { src: "image/zapdos.webp", alt: "썬더" },
    { src: "image/zapdos_ex.webp", alt: "썬더ex" },
    { src: "image/blitzle.webp", alt: "줄뮤마" },
    { src: "image/zebstrika.webp", alt: "제브라이카" },
    { src: "image/tynamo.webp", alt: "저리어" },
    { src: "image/eelektrik.webp", alt: "저리릴" },
    { src: "image/eelektross.webp", alt: "저리더프" },
    { src: "image/helioptile.webp", alt: "목도리키텔" },
    { src: "image/heliolisk.webp", alt: "일렉도리자드" },
    { src: "image/pincurchin.webp", alt: "찌르성게" },
    { src: "image/clefairy.webp", alt: "삐삐" },
    { src: "image/clefable.webp", alt: "픽시" },
    { src: "image/abra.webp", alt: "캐이시" },
    { src: "image/kadabra.webp", alt: "윤겔라" },
    { src: "image/alakazam.webp", alt: "후딘" },
    { src: "image/slowpoke.webp", alt: "야돈" },
    { src: "image/slowbro.webp", alt: "야도란" },
    { src: "image/gastly.webp", alt: "고오스" },
    { src: "image/haunter.webp", alt: "고우스트" },
    { src: "image/gengar.webp", alt: "팬텀" },
    { src: "image/gengar_ex.webp", alt: "팬텀ex" },
    { src: "image/drowzee.webp", alt: "슬리프" },
    { src: "image/hypno.webp", alt: "슬리퍼" },
    { src: "image/mr._mime.webp", alt: "마임맨" },
    { src: "image/jynx.webp", alt: "루주라" },
    { src: "image/mewtwo.webp", alt: "뮤츠" },
    { src: "image/mewtwo_ex.webp", alt: "뮤츠ex" },
    { src: "image/ralts.webp", alt: "랄토스" },
    { src: "image/kirlia.webp", alt: "킬리아" },
    { src: "image/gardevoir.webp", alt: "가디안" },
    { src: "image/woobat.webp", alt: "또르박쥐" },
    { src: "image/swoobat.webp", alt: "맘박쥐" },
    { src: "image/golett.webp", alt: "골비람" },
    { src: "image/golurk.webp", alt: "골루그" },
    { src: "image/sandshrew.webp", alt: "모래두지" },
    { src: "image/sandslash.webp", alt: "고지" },
    { src: "image/diglett.webp", alt: "디그다" },
    { src: "image/dugtrio.webp", alt: "닥트리오" },
    { src: "image/mankey.webp", alt: "망키" },
    { src: "image/primeape.webp", alt: "성원숭" },
    { src: "image/machop.webp", alt: "알통몬" },
    { src: "image/machoke.webp", alt: "근육몬" },
    { src: "image/machamp.webp", alt: "괴력몬" },
    { src: "image/machamp_ex.webp", alt: "괴력몬ex" },
    { src: "image/geodude.webp", alt: "꼬마돌" },
    { src: "image/graveler.webp", alt: "데구리" },
    { src: "image/golem.webp", alt: "딱구리" },
    { src: "image/onix.webp", alt: "롱스톤" },
    { src: "image/cubone.webp", alt: "탕구리" },
    { src: "image/marowak.webp", alt: "텅구리" },
    { src: "image/marowak_ex.webp", alt: "텅구리ex" },
    { src: "image/hitmonlee.webp", alt: "시라소몬" },
    { src: "image/hitmonchan.webp", alt: "홍수몬" },
    { src: "image/rhyhorn.webp", alt: "뿔카노" },
    { src: "image/rhydon.webp", alt: "코뿌리" },
    { src: "image/kabuto.webp", alt: "투구" },
    { src: "image/kabutops.webp", alt: "투구푸스" },
    { src: "image/mienfoo.webp", alt: "비조푸" },
    { src: "image/mienshao.webp", alt: "비조도" },
    { src: "image/clobbopus.webp", alt: "때때무노" },
    { src: "image/grapploct.webp", alt: "케오퍼스" },
    { src: "image/ekans.webp", alt: "아보" },
    { src: "image/arbok.webp", alt: "아보크" },
    { src: "image/nidoran_f.webp", alt: "니드런♀" },
    { src: "image/nidorina.webp", alt: "니드리나" },
    { src: "image/nidoqueen.webp", alt: "니드퀸" },
    { src: "image/nidoran_m.webp", alt: "니드런♂" },
    { src: "image/nidorino.webp", alt: "니드리노" },
    { src: "image/nidoking.webp", alt: "니드킹" },
    { src: "image/zubat.webp", alt: "주뱃" },
    { src: "image/golbat.webp", alt: "골뱃" },
    { src: "image/grimer.webp", alt: "질퍽이" },
    { src: "image/muk.webp", alt: "질뻐기" },
    { src: "image/koffing.webp", alt: "또가스" },
    { src: "image/weezing.webp", alt: "또도가스" },
    { src: "image/mawile.webp", alt: "입치트" },
    { src: "image/pawniard.webp", alt: "자망칼" },
    { src: "image/bisharp.webp", alt: "절각참" },
    { src: "image/meltan.webp", alt: "멜탄" },
    { src: "image/melmetal.webp", alt: "멜메탈" },
    { src: "image/dratini.webp", alt: "미뇽" },
    { src: "image/dragonair.webp", alt: "신뇽" },
    { src: "image/dragonite.webp", alt: "망나뇽" },
    { src: "image/pidgey.webp", alt: "구구" },
    { src: "image/pidgeotto.webp", alt: "피죤" },
    { src: "image/pidgeot.webp", alt: "피죤투" },
    { src: "image/rattata.webp", alt: "꼬렛" },
    { src: "image/raticate.webp", alt: "레트라" },
    { src: "image/spearow.webp", alt: "깨비참" },
    { src: "image/fearow.webp", alt: "깨비드릴조" },
    { src: "image/jigglypuff.webp", alt: "푸린" },
    { src: "image/wigglytuff.webp", alt: "푸크린" },
    { src: "image/wigglytuff_ex.webp", alt: "푸크린ex" },
    { src: "image/meowth.webp", alt: "나옹" },
    { src: "image/persian.webp", alt: "페르시온" },
    { src: "image/farfetch'd.webp", alt: "파오리" },
    { src: "image/doduo.webp", alt: "두두" },
    { src: "image/dodrio.webp", alt: "두트리오" },
    { src: "image/lickitung.webp", alt: "내루미" },
    { src: "image/chansey.webp", alt: "럭키" },
    { src: "image/kangaskhan.webp", alt: "캥카" },
    { src: "image/tauros.webp", alt: "켄타로스" },
    { src: "image/ditto.webp", alt: "메타몽" },
    { src: "image/eevee_1.webp", alt: "이브이" },
    { src: "image/eevee_2.webp", alt: "이브이" },
    { src: "image/eevee_3.webp", alt: "이브이" },
    { src: "image/porygon.webp", alt: "폴리곤" },
    { src: "image/aerodactyl.webp", alt: "프테라" },
    { src: "image/snorlax.webp", alt: "잠만보" },
    { src: "image/minccino.webp", alt: "치라미" },
    { src: "image/cinccino.webp", alt: "치라치노" },
    { src: "image/wooloo.webp", alt: "우르" },
    { src: "image/dubwool.webp", alt: "배우르" },
    { src: "image/helix_fossil.webp", alt: "조개화석" },
    { src: "image/dome_fossil.webp", alt: "껍질화석" },
    { src: "image/old_amber.webp", alt: "비밀의호박" },
    { src: "image/erika.webp", alt: "민화" },
    { src: "image/misty.webp", alt: "이슬" },
    { src: "image/blaine.webp", alt: "강연" },
    { src: "image/koga.webp", alt: "독수" },
    { src: "image/giovanni.webp", alt: "비주기" },
    { src: "image/brock.webp", alt: "웅" },
    { src: "image/sabrina.webp", alt: "초련" },
    { src: "image/lt._surge.webp", alt: "마티스" },
    { src: "image/bulbasaur_gold_1.webp", alt: "이상해씨" },
    { src: "image/gloom_gold_1.webp", alt: "냄새꼬" },
    { src: "image/pinsir_gold_1.webp", alt: "쁘사이저" },
    { src: "image/charmander_gold_1.webp", alt: "파이리" },
    { src: "image/rapidash_gold_1.webp", alt: "날쌩마" },
    { src: "image/squirtle_gold_1.webp", alt: "꼬부기" },
    { src: "image/gyarados_gold_1.webp", alt: "갸라도스" },
    { src: "image/lapras_gold_1.webp", alt: "라프라스" },
    { src: "image/electrode_gold_1.webp", alt: "붐볼" },
    { src: "image/alakazam_gold_1.webp", alt: "후딘" },
    { src: "image/slowpoke_gold_1.webp", alt: "야돈" },
    { src: "image/diglett_gold_1.webp", alt: "디그다" },
    { src: "image/cubone_gold_1.webp", alt: "탕구리" },
    { src: "image/nidoqueen_gold_1.webp", alt: "니드퀸" },
    { src: "image/nidoking_gold_1.webp", alt: "니드킹" },
    { src: "image/golbat_gold_1.webp", alt: "골뱃" },
    { src: "image/weezing_gold_1.webp", alt: "또도가스" },
    { src: "image/dragonite_gold_1.webp", alt: "망나뇽" },
    { src: "image/pidgeot_gold_1.webp", alt: "피죤투" },
    { src: "image/meowth_gold_1.webp", alt: "나옹" },
    { src: "image/ditto_gold_1.webp", alt: "메타몽" },
    { src: "image/eevee_gold_1.webp", alt: "이브이" },
    { src: "image/porygon_gold_1.webp", alt: "폴리곤" },
    { src: "image/snorlax_gold_1.webp", alt: "잠만보" },
    { src: "image/venusaur_ex_gold_2.webp", alt: "이상해꽃ex" },
    { src: "image/exeggutor_ex_gold_2.webp", alt: "나시ex" },
    { src: "image/charizard_ex_gold_2.webp", alt: "리자몽ex" },
    { src: "image/arcanine_ex_gold_2.webp", alt: "윈디ex" },
    { src: "image/moltres_ex_gold_2.webp", alt: "파이어ex" },
    { src: "image/blastoise_ex_gold_2.webp", alt: "거북왕ex" },
    { src: "image/starmie_ex_gold_2.webp", alt: "아쿠스타ex" },
    { src: "image/articuno_ex_gold_2.webp", alt: "프리져ex" },
    { src: "image/pikachu_ex_gold_2.webp", alt: "피카츄ex" },
    { src: "image/zapdos_ex_gold_2.webp", alt: "썬더ex" },
    { src: "image/gengar_ex_gold_2.webp", alt: "팬텀ex" },
    { src: "image/mewtwo_ex_gold_2.webp", alt: "뮤츠ex" },
    { src: "image/machamp_ex_gold_2.webp", alt: "괴력몬ex" },
    { src: "image/marowak_ex_gold_2.webp", alt: "텅구리ex" },
    { src: "image/wigglytuff_ex_gold_2.webp", alt: "푸크린ex" },
    { src: "image/erika_gold_2.webp", alt: "민화" },
    { src: "image/misty_gold_2.webp", alt: "이슬" },
    { src: "image/blaine_gold_2.webp", alt: "강연" },
    { src: "image/koga_gold_2.webp", alt: "독수" },
    { src: "image/giovanni_gold_2.webp", alt: "비주기" },
    { src: "image/brock_gold_2.webp", alt: "웅" },
    { src: "image/sabrina_gold_2.webp", alt: "초련" },
    { src: "image/lt._surge_gold_2.webp", alt: "마티스" },
    { src: "image/moltres_ex_gold_2_1.webp", alt: "파이어ex" },
    { src: "image/articuno_ex_gold_2_1.webp", alt: "프리져ex" },
    { src: "image/zapdos_ex_gold_2_1.webp", alt: "썬더ex" },
    { src: "image/gengar_ex_gold_2_1.webp", alt: "팬텀ex" },
    { src: "image/machamp_ex_gold_2_1.webp", alt: "괴력몬ex" },
    { src: "image/wigglytuff_ex_gold_2_1.webp", alt: "푸크린ex" },
    { src: "image/charizard_ex_gold_3.webp", alt: "리자몽ex" },
    { src: "image/pikachu_ex_gold_3.webp", alt: "피카츄ex" },
    { src: "image/mewtwo_ex_gold_3.webp", alt: "뮤츠ex" },
    { src: "image/mew_gold_3.webp", alt: "뮤" },
    { src: "image/charizard_ex_crown.webp", alt: "리자몽ex" },
    { src: "image/pikachu_ex_crown.webp", alt: "피카츄ex" },
    { src: "image/mewtwo_ex_crown.webp", alt: "뮤츠ex" },
    { src: "image/potion.webp", alt: "상처약" },
    { src: "image/x_speed.webp", alt: "스피드업" },
    { src: "image/hand_scope.webp", alt: "랜드스코프" },
    { src: "image/pokedex.webp", alt: "포켓몬 도감" },
    { src: "image/poke_ball.webp", alt: "몬스터볼" },
    { src: "image/red_card.webp", alt: "레드카드" },
    { src: "image/professor's_research.webp", alt: "박사의 연구" },
    { src: "image/pikachu_promo_A.webp", alt: "피카츄" },
];

// card-list 요소 선택
const cardList = document.querySelector('.card-list');

// 카드 생성 함수
function createCardItems(imageData) {
    imageData.forEach((data, index) => {
        // 카드 아이템 생성
        const cardItem = document.createElement('li');
        cardItem.classList.add('card-item');

        // button-box 요소 생성
        const buttonBox = document.createElement('div');
        buttonBox.classList.add('button-box');

        // label 요소 생성
        const label = document.createElement('label');
        label.classList.add('label-style');
        label.setAttribute('for', `card${index + 1}`);

        // input 요소 생성
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'card';
        input.id = `card${index + 1}`;

        // span 요소 생성
        const span = document.createElement('span');
        span.classList.add('label-icon');

        // 버튼 요소 생성 (전체화면, 가져오기)
        const fullscreenButton = document.createElement('button');
        fullscreenButton.type = 'button';
        fullscreenButton.classList.add('fullscreen-button');
        fullscreenButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
            <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/>
        </svg>`;

        const getButton = document.createElement('button');
        getButton.type = 'button';
        getButton.classList.add('get-button');
        getButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
            <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>`;

        // 이미지 박스 생성
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-box');

        // 이미지 요소 생성
        const img = document.createElement('img');
        img.src = data.src;
        img.alt = data.alt;

        // 요소 조합
        label.appendChild(input);
        label.appendChild(span);
        buttonBox.appendChild(label);
        buttonBox.appendChild(fullscreenButton);
        buttonBox.appendChild(getButton);
        imageBox.appendChild(img);

        // card-item에 추가
        cardItem.appendChild(buttonBox);
        cardItem.appendChild(imageBox);

        // card-list에 card-item 추가
        cardList.appendChild(cardItem);
    });
}

// 카드 생성 호출
createCardItems(imageData);