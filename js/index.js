'use strict';

(function() {
  const SPADE = '♠';
  const CLUB = '♣';
  const HEART = '♥';
  const DIA = '♦';
  const JOKER = 'JOKER';
  const CARD_LIST = [
    {symbol:SPADE, num:'A', msg:'いつもは'},
    {symbol:SPADE, num:'2', msg:'ときどき'},
    {symbol:SPADE, num:'3', msg:'幸運にも'},
    {symbol:SPADE, num:'4', msg:'ちなみに'},
    {symbol:SPADE, num:'5', msg:'なぜか'},
    {symbol:SPADE, num:'6', msg:'今のところ'},
    {symbol:SPADE, num:'7', msg:'もちろん'},
    {symbol:SPADE, num:'8', msg:'でも'},
    {symbol:SPADE, num:'9', msg:'もしかすると'},
    {symbol:SPADE, num:'10', msg:'できれば'},
    {symbol:SPADE, num:'J', msg:'たとえば'},
    {symbol:SPADE, num:'Q', msg:'それから'},
    {symbol:SPADE, num:'K', msg:'もし'},
    {symbol:CLUB, num:'A', msg:'そもそも'},
    {symbol:CLUB, num:'2', msg:'とにかく'},
    {symbol:CLUB, num:'3', msg:'しかし'},
    {symbol:CLUB, num:'4', msg:'いいかえると'},
    {symbol:CLUB, num:'5', msg:'だから'},
    {symbol:CLUB, num:'6', msg:'じつは'},
    {symbol:CLUB, num:'7', msg:'たぶん'},
    {symbol:CLUB, num:'8', msg:'そろそろ'},
    {symbol:CLUB, num:'9', msg:'どうせ'},
    {symbol:CLUB, num:'10', msg:'やっぱり'},
    {symbol:CLUB, num:'J', msg:'いっそ'},
    {symbol:CLUB, num:'Q', msg:'そういえば'},
    {symbol:CLUB, num:'K', msg:'きっと'},
    {symbol:HEART, num:'A', msg:'いつのまにか'},
    {symbol:HEART, num:'2', msg:'思えば'},
    {symbol:HEART, num:'3', msg:'せめて'},
    {symbol:HEART, num:'4', msg:'さすがに'},
    {symbol:HEART, num:'5', msg:'結局'},
    {symbol:HEART, num:'6', msg:'そのくせ'},
    {symbol:HEART, num:'7', msg:'特に'},
    {symbol:HEART, num:'8', msg:'つまり'},
    {symbol:HEART, num:'9', msg:'だからこそ'},
    {symbol:HEART, num:'10', msg:'いつか'},
    {symbol:HEART, num:'J', msg:'せっかくだから'},
    {symbol:HEART, num:'Q', msg:'そして'},
    {symbol:HEART, num:'K', msg:'なぜなら'},
    {symbol:DIA, num:'A', msg:'偶然にも'},
    {symbol:DIA, num:'2', msg:'つい'},
    {symbol:DIA, num:'3', msg:'いってみれば'},
    {symbol:DIA, num:'4', msg:'とはいえ'},
    {symbol:DIA, num:'5', msg:'個人的には'},
    {symbol:DIA, num:'6', msg:'というのも'},
    {symbol:DIA, num:'7', msg:'一方で'},
    {symbol:DIA, num:'8', msg:'本当は'},
    {symbol:DIA, num:'9', msg:'具体的には'},
    {symbol:DIA, num:'10', msg:'あるいは'},
    {symbol:DIA, num:'J', msg:'ようするに'},
    {symbol:DIA, num:'Q', msg:'少なくとも'},
    {symbol:DIA, num:'K', msg:'そういうわけで'},
    {symbol:JOKER, num:'', msg:'それはさておき'},
    {symbol:JOKER, num:'', msg:'残念ながら'},
  ];

  // シャッフル
  let cardList = shuffle(CARD_LIST);

  // 配置
  for (let card of cardList) {
    appendCard(card.symbol, card.num, card.msg);
  }

  // ボタン update
  document.querySelector('.update').onclick = () => location.reload();
  // ボタン open・close
  document.querySelector('.openClose').onclick = () => {
    const openClose = document.querySelector('.openClose');
    const fronts = document.querySelectorAll('.front');
    const backs = document.querySelectorAll('.back');
    if (openClose.textContent === 'open') {
      openClose.textContent = 'close';
    } else {
      openClose.textContent = 'open';
    }
    for (const i in fronts) {
      if (openClose.textContent === 'open') {
        fronts[i].style.transform = 'perspective(400px) rotateY(-180deg)';
        backs[i].style.transform = 'perspective(400px) rotateY(0deg)';
      } else {
        fronts[i].style.transform = 'perspective(400px) rotateY(0deg)';
        backs[i].style.transform = 'perspective(400px) rotateY(180deg)';
      }
    }
  }

  /**
   * カード配置
   * @param {String} symbol シンボル
   * @param {String} num 数字・記号
   * @param {String} msg メッセージ
   */
  function appendCard(symbol, num, msg) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
  
    card.setAttribute('class', 'card');
    front.setAttribute('class', 'front');
    if (symbol === HEART || symbol === DIA) {
      front.classList.add('red');
    } 
    back.setAttribute('class', 'back');
  
    container.appendChild(card);
    card.appendChild(front);
    front.appendChild(span1);
    span1.append(num + symbol);
    front.appendChild(span2);
    span2.append(msg);
    front.appendChild(span3);
    span3.append(num + symbol);
    card.appendChild(back);

    card.onclick = () => {
      front.style.transform = 'perspective(400px) rotateY(0deg)';
      back.style.transform = 'perspective(400px) rotateY(180deg)';
    }

    card.ondblclick = () => {
      front.style.transform = 'perspective(400px) rotateY(-180deg)';
      back.style.transform = 'perspective(400px) rotateY(0deg)';
    }
  }

  /**
   * シャッフル
   * @param {Array} arry 配列
   */
  function shuffle(arry) {
    for (let i = arry.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      [arry[i], arry[rand]] = [arry[rand], arry[i]]
    }
    return arry;
  }
}());