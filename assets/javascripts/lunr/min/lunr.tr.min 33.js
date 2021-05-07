/*!
 * Lunr languages, `Turkish` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2014, Mihai Valentin
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

!function(r,i){"function"==typeof define&&define.amd?define(i):"object"==typeof exports?module.exports=i():i()(r.lunr)}(this,function(){return function(r){if(void 0===r)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if(void 0===r.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");r.tr=function(){this.pipeline.reset(),this.pipeline.add(r.tr.trimmer,r.tr.stopWordFilter,r.tr.stemmer),this.searchPipeline&&(this.searchPipeline.reset(),this.searchPipeline.add(r.tr.stemmer))},r.tr.wordCharacters="A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞭꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",r.tr.trimmer=r.trimmerSupport.generateTrimmer(r.tr.wordCharacters),r.Pipeline.registerFunction(r.tr.trimmer,"trimmer-tr"),r.tr.stemmer=function(){var i=r.stemmerSupport.Among,e=r.stemmerSupport.SnowballProgram,n=new function(){function r(r,i,e){for(;;){var n=Dr.limit-Dr.cursor;if(Dr.in_grouping_b(r,i,e)){Dr.cursor=Dr.limit-n;break}if(Dr.cursor=Dr.limit-n,Dr.cursor<=Dr.limit_backward)return!1;Dr.cursor--}return!0}function n(){var i,e;i=Dr.limit-Dr.cursor,r(Wr,97,305);for(var n=0;n<Br.length;n++){e=Dr.limit-Dr.cursor;var t=Br[n];if(Dr.eq_s_b(1,t[0])&&r(t[1],t[2],t[3]))return Dr.cursor=Dr.limit-i,!0;Dr.cursor=Dr.limit-e}return Dr.cursor=Dr.limit-e,!(!Dr.eq_s_b(1,"ü")||!r(Zr,246,252))&&(Dr.cursor=Dr.limit-i,!0)}function t(r,i){var e,n=Dr.limit-Dr.cursor;return r()&&(Dr.cursor=Dr.limit-n,Dr.cursor>Dr.limit_backward&&(Dr.cursor--,e=Dr.limit-Dr.cursor,i()))?(Dr.cursor=Dr.limit-e,!0):(Dr.cursor=Dr.limit-n,r()?(Dr.cursor=Dr.limit-n,!1):(Dr.cursor=Dr.limit-n,!(Dr.cursor<=Dr.limit_backward)&&(Dr.cursor--,!!i()&&(Dr.cursor=Dr.limit-n,!0))))}function u(r){return t(r,function(){return Dr.in_grouping_b(Wr,97,305)})}function o(){return u(function(){return Dr.eq_s_b(1,"n")})}function s(){return u(function(){return Dr.eq_s_b(1,"s")})}function c(){return u(function(){return Dr.eq_s_b(1,"y")})}function l(){return t(function(){return Dr.in_grouping_b(Lr,105,305)},function(){return Dr.out_grouping_b(Wr,97,305)})}function a(){return Dr.find_among_b(ur,10)&&l()}function m(){return n()&&Dr.in_grouping_b(Lr,105,305)&&s()}function d(){return Dr.find_among_b(or,2)}function f(){return n()&&Dr.in_grouping_b(Lr,105,305)&&c()}function b(){return n()&&Dr.find_among_b(sr,4)}function w(){return n()&&Dr.find_among_b(cr,4)&&o()}function _(){return n()&&Dr.find_among_b(lr,2)&&c()}function k(){return n()&&Dr.find_among_b(ar,2)}function p(){return n()&&Dr.find_among_b(mr,4)}function g(){return n()&&Dr.find_among_b(dr,2)}function y(){return n()&&Dr.find_among_b(fr,4)}function z(){return n()&&Dr.find_among_b(br,2)}function v(){return n()&&Dr.find_among_b(wr,2)&&c()}function h(){return Dr.eq_s_b(2,"ki")}function q(){return n()&&Dr.find_among_b(_r,2)&&o()}function C(){return n()&&Dr.find_among_b(kr,4)&&c()}function P(){return n()&&Dr.find_among_b(pr,4)}function F(){return n()&&Dr.find_among_b(gr,4)&&c()}function S(){return Dr.find_among_b(yr,4)}function W(){return n()&&Dr.find_among_b(zr,2)}function L(){return n()&&Dr.find_among_b(vr,4)}function x(){return n()&&Dr.find_among_b(hr,8)}function A(){return Dr.find_among_b(qr,2)}function E(){return n()&&Dr.find_among_b(Cr,32)&&c()}function j(){return Dr.find_among_b(Pr,8)&&c()}function T(){return n()&&Dr.find_among_b(Fr,4)&&c()}function Z(){return Dr.eq_s_b(3,"ken")&&c()}function B(){var r=Dr.limit-Dr.cursor;return!(T()||(Dr.cursor=Dr.limit-r,E()||(Dr.cursor=Dr.limit-r,j()||(Dr.cursor=Dr.limit-r,Z()))))}function D(){if(A()){var r=Dr.limit-Dr.cursor;if(S()||(Dr.cursor=Dr.limit-r,W()||(Dr.cursor=Dr.limit-r,C()||(Dr.cursor=Dr.limit-r,P()||(Dr.cursor=Dr.limit-r,F()||(Dr.cursor=Dr.limit-r))))),T())return!1}return!0}function G(){if(W()){Dr.bra=Dr.cursor,Dr.slice_del();var r=Dr.limit-Dr.cursor;return Dr.ket=Dr.cursor,x()||(Dr.cursor=Dr.limit-r,E()||(Dr.cursor=Dr.limit-r,j()||(Dr.cursor=Dr.limit-r,T()||(Dr.cursor=Dr.limit-r)))),nr=!1,!1}return!0}function H(){if(!L())return!0;var r=Dr.limit-Dr.cursor;return!E()&&(Dr.cursor=Dr.limit-r,!j())}function I(){var r,i=Dr.limit-Dr.cursor;return!(S()||(Dr.cursor=Dr.limit-i,F()||(Dr.cursor=Dr.limit-i,P()||(Dr.cursor=Dr.limit-i,C()))))||(Dr.bra=Dr.cursor,Dr.slice_del(),r=Dr.limit-Dr.cursor,Dr.ket=Dr.cursor,T()||(Dr.cursor=Dr.limit-r),!1)}function J(){var r,i=Dr.limit-Dr.cursor;if(Dr.ket=Dr.cursor,nr=!0,B()&&(Dr.cursor=Dr.limit-i,D()&&(Dr.cursor=Dr.limit-i,G()&&(Dr.cursor=Dr.limit-i,H()&&(Dr.cursor=Dr.limit-i,I()))))){if(Dr.cursor=Dr.limit-i,!x())return;Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,r=Dr.limit-Dr.cursor,S()||(Dr.cursor=Dr.limit-r,W()||(Dr.cursor=Dr.limit-r,C()||(Dr.cursor=Dr.limit-r,P()||(Dr.cursor=Dr.limit-r,F()||(Dr.cursor=Dr.limit-r))))),T()||(Dr.cursor=Dr.limit-r)}Dr.bra=Dr.cursor,Dr.slice_del()}function K(){var r,i,e,n;if(Dr.ket=Dr.cursor,h()){if(r=Dr.limit-Dr.cursor,p())return Dr.bra=Dr.cursor,Dr.slice_del(),i=Dr.limit-Dr.cursor,Dr.ket=Dr.cursor,W()?(Dr.bra=Dr.cursor,Dr.slice_del(),K()):(Dr.cursor=Dr.limit-i,a()&&(Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K()))),!0;if(Dr.cursor=Dr.limit-r,w()){if(Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,e=Dr.limit-Dr.cursor,d())Dr.bra=Dr.cursor,Dr.slice_del();else{if(Dr.cursor=Dr.limit-e,Dr.ket=Dr.cursor,!a()&&(Dr.cursor=Dr.limit-e,!m()&&(Dr.cursor=Dr.limit-e,!K())))return!0;Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K())}return!0}if(Dr.cursor=Dr.limit-r,g()){if(n=Dr.limit-Dr.cursor,d())Dr.bra=Dr.cursor,Dr.slice_del();else if(Dr.cursor=Dr.limit-n,m())Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K());else if(Dr.cursor=Dr.limit-n,!K())return!1;return!0}}return!1}function M(r){if(Dr.ket=Dr.cursor,!g()&&(Dr.cursor=Dr.limit-r,!k()))return!1;var i=Dr.limit-Dr.cursor;if(d())Dr.bra=Dr.cursor,Dr.slice_del();else if(Dr.cursor=Dr.limit-i,m())Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K());else if(Dr.cursor=Dr.limit-i,!K())return!1;return!0}function N(r){if(Dr.ket=Dr.cursor,!z()&&(Dr.cursor=Dr.limit-r,!b()))return!1;var i=Dr.limit-Dr.cursor;return!(!m()&&(Dr.cursor=Dr.limit-i,!d()))&&(Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K()),!0)}function O(){var r,i=Dr.limit-Dr.cursor;return Dr.ket=Dr.cursor,!(!w()&&(Dr.cursor=Dr.limit-i,!v()))&&(Dr.bra=Dr.cursor,Dr.slice_del(),r=Dr.limit-Dr.cursor,Dr.ket=Dr.cursor,!(!W()||(Dr.bra=Dr.cursor,Dr.slice_del(),!K()))||(Dr.cursor=Dr.limit-r,Dr.ket=Dr.cursor,!(a()||(Dr.cursor=Dr.limit-r,m()||(Dr.cursor=Dr.limit-r,K())))||(Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K()),!0)))}function Q(){var r,i,e=Dr.limit-Dr.cursor;if(Dr.ket=Dr.cursor,!p()&&(Dr.cursor=Dr.limit-e,!f()&&(Dr.cursor=Dr.limit-e,!_())))return!1;if(Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,r=Dr.limit-Dr.cursor,a())Dr.bra=Dr.cursor,Dr.slice_del(),i=Dr.limit-Dr.cursor,Dr.ket=Dr.cursor,W()||(Dr.cursor=Dr.limit-i);else if(Dr.cursor=Dr.limit-r,!W())return!0;return Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,K(),!0}function R(){var r,i,e=Dr.limit-Dr.cursor;if(Dr.ket=Dr.cursor,W())return Dr.bra=Dr.cursor,Dr.slice_del(),void K();if(Dr.cursor=Dr.limit-e,Dr.ket=Dr.cursor,q())if(Dr.bra=Dr.cursor,Dr.slice_del(),r=Dr.limit-Dr.cursor,Dr.ket=Dr.cursor,d())Dr.bra=Dr.cursor,Dr.slice_del();else{if(Dr.cursor=Dr.limit-r,Dr.ket=Dr.cursor,!a()&&(Dr.cursor=Dr.limit-r,!m())){if(Dr.cursor=Dr.limit-r,Dr.ket=Dr.cursor,!W())return;if(Dr.bra=Dr.cursor,Dr.slice_del(),!K())return}Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K())}else if(Dr.cursor=Dr.limit-e,!M(e)&&(Dr.cursor=Dr.limit-e,!N(e))){if(Dr.cursor=Dr.limit-e,Dr.ket=Dr.cursor,y())return Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,i=Dr.limit-Dr.cursor,void(a()?(Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K())):(Dr.cursor=Dr.limit-i,W()?(Dr.bra=Dr.cursor,Dr.slice_del(),K()):(Dr.cursor=Dr.limit-i,K())));if(Dr.cursor=Dr.limit-e,!O()){if(Dr.cursor=Dr.limit-e,d())return Dr.bra=Dr.cursor,void Dr.slice_del();Dr.cursor=Dr.limit-e,K()||(Dr.cursor=Dr.limit-e,Q()||(Dr.cursor=Dr.limit-e,Dr.ket=Dr.cursor,(a()||(Dr.cursor=Dr.limit-e,m()))&&(Dr.bra=Dr.cursor,Dr.slice_del(),Dr.ket=Dr.cursor,W()&&(Dr.bra=Dr.cursor,Dr.slice_del(),K()))))}}}function U(){var r;if(Dr.ket=Dr.cursor,r=Dr.find_among_b(Sr,4))switch(Dr.bra=Dr.cursor,r){case 1:Dr.slice_from("p");break;case 2:Dr.slice_from("ç");break;case 3:Dr.slice_from("t");break;case 4:Dr.slice_from("k")}}function V(){for(;;){var r=Dr.limit-Dr.cursor;if(Dr.in_grouping_b(Wr,97,305)){Dr.cursor=Dr.limit-r;break}if(Dr.cursor=Dr.limit-r,Dr.cursor<=Dr.limit_backward)return!1;Dr.cursor--}return!0}function X(r,i,e){if(Dr.cursor=Dr.limit-r,V()){var n=Dr.limit-Dr.cursor;if(!Dr.eq_s_b(1,i)&&(Dr.cursor=Dr.limit-n,!Dr.eq_s_b(1,e)))return!0;Dr.cursor=Dr.limit-r;var t=Dr.cursor;return Dr.insert(Dr.cursor,Dr.cursor,e),Dr.cursor=t,!1}return!0}function Y(){var r=Dr.limit-Dr.cursor;(Dr.eq_s_b(1,"d")||(Dr.cursor=Dr.limit-r,Dr.eq_s_b(1,"g")))&&X(r,"a","ı")&&X(r,"e","i")&&X(r,"o","u")&&X(r,"ö","ü")}function $(){for(var r,i=Dr.cursor,e=2;;){for(r=Dr.cursor;!Dr.in_grouping(Wr,97,305);){if(Dr.cursor>=Dr.limit)return Dr.cursor=r,!(e>0)&&(Dr.cursor=i,!0);Dr.cursor++}e--}}function rr(r,i,e){for(;!Dr.eq_s(i,e);){if(Dr.cursor>=Dr.limit)return!0;Dr.cursor++}return(tr=i)!=Dr.limit||(Dr.cursor=r,!1)}function ir(){var r=Dr.cursor;return!rr(r,2,"ad")||(Dr.cursor=r,!rr(r,5,"soyad"))}function er(){var r=Dr.cursor;return!ir()&&(Dr.limit_backward=r,Dr.cursor=Dr.limit,Y(),Dr.cursor=Dr.limit,U(),!0)}var nr,tr,ur=[new i("m",-1,-1),new i("n",-1,-1),new i("miz",-1,-1),new i("niz",-1,-1),new i("muz",-1,-1),new i("nuz",-1,-1),new i("müz",-1,-1),new i("nüz",-1,-1),new i("mız",-1,-1),new i("nız",-1,-1)],or=[new i("leri",-1,-1),new i("ları",-1,-1)],sr=[new i("ni",-1,-1),new i("nu",-1,-1),new i("nü",-1,-1),new i("nı",-1,-1)],cr=[new i("in",-1,-1),new i("un",-1,-1),new i("ün",-1,-1),new i("ın",-1,-1)],lr=[new i("a",-1,-1),new i("e",-1,-1)],ar=[new i("na",-1,-1),new i("ne",-1,-1)],mr=[new i("da",-1,-1),new i("ta",-1,-1),new i("de",-1,-1),new i("te",-1,-1)],dr=[new i("nda",-1,-1),new i("nde",-1,-1)],fr=[new i("dan",-1,-1),new i("tan",-1,-1),new i("den",-1,-1),new i("ten",-1,-1)],br=[new i("ndan",-1,-1),new i("nden",-1,-1)],wr=[new i("la",-1,-1),new i("le",-1,-1)],_r=[new i("ca",-1,-1),new i("ce",-1,-1)],kr=[new i("im",-1,-1),new i("um",-1,-1),new i("üm",-1,-1),new i("ım",-1,-1)],pr=[new i("sin",-1,-1),new i("sun",-1,-1),new i("sün",-1,-1),new i("sın",-1,-1)],gr=[new i("iz",-1,-1),new i("uz",-1,-1),new i("üz",-1,-1),new i("ız",-1,-1)],yr=[new i("siniz",-1,-1),new i("sunuz",-1,-1),new i("sünüz",-1,-1),new i("sınız",-1,-1)],zr=[new i("lar",-1,-1),new i("ler",-1,-1)],vr=[new i("niz",-1,-1),new i("nuz",-1,-1),new i("nüz",-1,-1),new i("nız",-1,-1)],hr=[new i("dir",-1,-1),new i("tir",-1,-1),new i("dur",-1,-1),new i("tur",-1,-1),new i("dür",-1,-1),new i("tür",-1,-1),new i("dır",-1,-1),new i("tır",-1,-1)],qr=[new i("casına",-1,-1),new i("cesine",-1,-1)],Cr=[new i("di",-1,-1),new i("ti",-1,-1),new i("dik",-1,-1),new i("tik",-1,-1),new i("duk",-1,-1),new i("tuk",-1,-1),new i("dük",-1,-1),new i("tük",-1,-1),new i("dık",-1,-1),new i("tık",-1,-1),new i("dim",-1,-1),new i("tim",-1,-1),new i("dum",-1,-1),new i("tum",-1,-1),new i("düm",-1,-1),new i("tüm",-1,-1),new i("dım",-1,-1),new i("tım",-1,-1),new i("din",-1,-1),new i("tin",-1,-1),new i("dun",-1,-1),new i("tun",-1,-1),new i("dün",-1,-1),new i("tün",-1,-1),new i("dın",-1,-1),new i("tın",-1,-1),new i("du",-1,-1),new i("tu",-1,-1),new i("dü",-1,-1),new i("tü",-1,-1),new i("dı",-1,-1),new i("tı",-1,-1)],Pr=[new i("sa",-1,-1),new i("se",-1,-1),new i("sak",-1,-1),new i("sek",-1,-1),new i("sam",-1,-1),new i("sem",-1,-1),new i("san",-1,-1),new i("sen",-1,-1)],Fr=[new i("miş",-1,-1),new i("muş",-1,-1),new i("müş",-1,-1),new i("mış",-1,-1)],Sr=[new i("b",-1,1),new i("c",-1,2),new i("d",-1,3),new i("ğ",-1,4)],Wr=[17,65,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,8,0,0,0,0,0,0,1],Lr=[1,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,1],xr=[1,64,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],Ar=[17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130],Er=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],jr=[17],Tr=[65],Zr=[65],Br=[["a",xr,97,305],["e",Ar,101,252],["ı",Er,97,305],["i",jr,101,105],["o",Tr,111,117],["ö",Zr,246,252],["u",Tr,111,117]],Dr=new e;this.setCurrent=function(r){Dr.setCurrent(r)},this.getCurrent=function(){return Dr.getCurrent()},this.stem=function(){return!!($()&&(Dr.limit_backward=Dr.cursor,Dr.cursor=Dr.limit,J(),Dr.cursor=Dr.limit,nr&&(R(),Dr.cursor=Dr.limit_backward,er())))}};return function(r){return"function"==typeof r.update?r.update(function(r){return n.setCurrent(r),n.stem(),n.getCurrent()}):(n.setCurrent(r),n.stem(),n.getCurrent())}}(),r.Pipeline.registerFunction(r.tr.stemmer,"stemmer-tr"),r.tr.stopWordFilter=r.generateStopWordFilter("acaba altmış altı ama ancak arada aslında ayrıca bana bazı belki ben benden beni benim beri beş bile bin bir biri birkaç birkez birçok birşey birşeyi biz bizden bize bizi bizim bu buna bunda bundan bunlar bunları bunların bunu bunun burada böyle böylece da daha dahi de defa değil diye diğer doksan dokuz dolayı dolayısıyla dört edecek eden ederek edilecek ediliyor edilmesi ediyor elli en etmesi etti ettiği ettiğini eğer gibi göre halen hangi hatta hem henüz hep hepsi her herhangi herkesin hiç hiçbir iki ile ilgili ise itibaren itibariyle için işte kadar karşın katrilyon kendi kendilerine kendini kendisi kendisine kendisini kez ki kim kimden kime kimi kimse kırk milyar milyon mu mü mı nasıl ne neden nedenle nerde nerede nereye niye niçin o olan olarak oldu olduklarını olduğu olduğunu olmadı olmadığı olmak olması olmayan olmaz olsa olsun olup olur olursa oluyor on ona ondan onlar onlardan onları onların onu onun otuz oysa pek rağmen sadece sanki sekiz seksen sen senden seni senin siz sizden sizi sizin tarafından trilyon tüm var vardı ve veya ya yani yapacak yapmak yaptı yaptıkları yaptığı yaptığını yapılan yapılması yapıyor yedi yerine yetmiş yine yirmi yoksa yüz zaten çok çünkü öyle üzere üç şey şeyden şeyi şeyler şu şuna şunda şundan şunları şunu şöyle".split(" ")),r.Pipeline.registerFunction(r.tr.stopWordFilter,"stopWordFilter-tr")}});