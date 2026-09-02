'use strict';

(function() {
  const SPADE = '♠';
  const CLUB = '♣';
  const HEART = '♥';
  const DIA = '♦';
  const JOKER = 'JOKER';
  const CARD_LIST = [
    {symbol:SPADE, num:'A', msg:'クリスマス'},
    {symbol:SPADE, num:'2', msg:'子供のころの夢'},
    {symbol:SPADE, num:'3', msg:'来年こそ…！'},
    {symbol:SPADE, num:'4', msg:'ゾッとした話'},
    {symbol:SPADE, num:'5', msg:'もう一度みたい作品'},
    {symbol:SPADE, num:'6', msg:'嘘みたいな本当の話'},
    {symbol:SPADE, num:'7', msg:'お正月'},
    {symbol:SPADE, num:'8', msg:'休日の過ごし方'},
    {symbol:SPADE, num:'9', msg:'僕の夏休み'},
    {symbol:SPADE, num:'10', msg:'私の推しを紹介します'},
    {symbol:SPADE, num:'J', msg:'五感でどれが優位？'},
    {symbol:SPADE, num:'Q', msg:'最近ハマった○○！'},
    {symbol:SPADE, num:'K', msg:'武勇伝'},
    {symbol:CLUB, num:'A', msg:'コロナ後にやりたい事'},
    {symbol:CLUB, num:'2', msg:'恋バナ❤'},
    {symbol:CLUB, num:'3', msg:'最近見た夢は？'},
    {symbol:CLUB, num:'4', msg:'年取ったなぁ'},
    {symbol:CLUB, num:'5', msg:'どうしても欲しいもの'},
    {symbol:CLUB, num:'6', msg:'実は私、○○なんです'},
    {symbol:CLUB, num:'7', msg:'生い立ち'},
    {symbol:CLUB, num:'8', msg:'自炊？買い食い？'},
    {symbol:CLUB, num:'9', msg:'今だから言える○○'},
    {symbol:CLUB, num:'10', msg:'五感派？六感派？'},
    {symbol:CLUB, num:'J', msg:'将来設計'},
    {symbol:CLUB, num:'Q', msg:'あなたは何色？'},
    {symbol:CLUB, num:'K', msg:'ﾃﾚﾜｰｸ派? or ｵﾝｻｲﾄ派?'},
    {symbol:HEART, num:'A', msg:'研修の話'},
    {symbol:HEART, num:'2', msg:'ありえない話'},
    {symbol:HEART, num:'3', msg:'どうでもいい話'},
    {symbol:HEART, num:'4', msg:'情けない話'},
    {symbol:HEART, num:'5', msg:'へこんだ話'},
    {symbol:HEART, num:'6', msg:'初めて○○した話'},
    {symbol:HEART, num:'7', msg:'得意なこと'},
    {symbol:HEART, num:'8', msg:'ほめてあげたい話'},
    {symbol:HEART, num:'9', msg:'私の周りの変な人'},
    {symbol:HEART, num:'10', msg:'私だけのルール'},
    {symbol:HEART, num:'J', msg:'幸せだと思う話'},
    {symbol:HEART, num:'Q', msg:'のろけ話'},
    {symbol:HEART, num:'K', msg:'最近食べたもの'},
    {symbol:DIA, num:'A', msg:'自慢話 '},
    {symbol:DIA, num:'2', msg:'怖い話'},
    {symbol:DIA, num:'3', msg:'忘れられないこと'},
    {symbol:DIA, num:'4', msg:'ここだけの話'},
    {symbol:DIA, num:'5', msg:'小さな悩み'},
    {symbol:DIA, num:'6', msg:'勉強になった話'},
    {symbol:DIA, num:'7', msg:'気になっている事'},
    {symbol:DIA, num:'8', msg:'変な夢の話'},
    {symbol:DIA, num:'9', msg:'好きな曲'},
    {symbol:DIA, num:'10', msg:'昨日の出来事'},
    {symbol:DIA, num:'J', msg:'ペットの話'},
    {symbol:DIA, num:'Q', msg:'学生時代の思い出'},
    {symbol:DIA, num:'K', msg:'あきれた話'},
    {symbol:JOKER, num:'', msg:'せつない話'},
    {symbol:JOKER, num:'', msg:'好きな番組'},
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
      openClose.style.color = '#6495ed';
    } else {
      openClose.textContent = 'open';
      openClose.style.color = '#003f8e';
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