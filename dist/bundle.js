(()=>{"use strict";var e=[["","",""],["","",""],["","",""]];function t(){for(var t=Math.round(10*Math.random());10==t||0==t;)t=Math.round(10*Math.random());for(var n=1,o=0;o<3;o++)for(var r=0;r<3;r++)n==t&&(e[o][r]="X"),n++;c(),l("set")}function n(t){var n=0;if(r(t))for(var i=0;i<3;i++)for(var m=0;m<3;m++)n==t&&(e[i][m]="O",o(),c(),"O"==a()&&(d("You"),l("You")),"X"==a()&&(l("Pc"),d("Computer")),"Tie"==a()&&d("Tie")),n++}function o(){for(var t=Math.round(10*Math.random()),n=!1,o=0;t>8||!r(t);)t=Math.round(10*Math.random());for(;0==n;){if(r(t))for(var c=0;c<3;c++)for(var i=0;i<3;i++)o==t&&(e[c][i]="X",n=!0),o++;n=!0}}function r(t){for(var n=0,o=0;o<3;o++)for(var r=0;r<3;r++){if(n==t&&""!==e[o][r])return!1;n++}return!0}function c(){for(var t=0,n=0;n<3;n++)for(var o=0;o<3;o++)"X"==e[n][o]&&(document.getElementById(""+t).classList.add("x"),t++),"O"==e[n][o]&&(document.getElementById(""+t).classList.add("o"),t++),""==e[n][o]&&t++}function i(){var t=0;e=[["","",""],["","",""],["","",""]];for(var n=0;n<3;n++)for(var o=0;o<3;o++)document.getElementById(""+t).classList.remove("x"),document.getElementById(""+t).classList.remove("o"),t++;c()}function a(){for(var t=e.map((function(e){return e.slice()})),n=0;n<3;n++)for(var o=0;o<3;o++)"X"==t[n][o]&&(t[n][o]="");if("O"==t[0][0]&&"O"==t[0][1]&&"O"==t[0][2])return"O";if("O"==t[1][0]&&"O"==t[1][1]&&"O"==t[1][2])return"O";if("O"==t[2][0]&&"O"==t[2][1]&&"O"==t[2][2])return"O";if("O"==t[0][0]&&"O"==t[1][0]&&"O"==t[2][0])return"O";if("O"==t[0][1]&&"O"==t[1][1]&&"O"==t[2][1])return"O";if("O"==t[0][2]&&"O"==t[1][2]&&"O"==t[2][2])return"O";if("O"==t[0][0]&&"O"==t[1][1]&&"O"==t[2][2])return"O";if("O"==t[2][0]&&"O"==t[1][1]&&"O"==t[0][2])return"O";var r=e.map((function(e){return e.slice()}));for(n=0;n<3;n++)for(o=0;o<3;o++)"O"==r[n][o]&&(r[n][o]="");if("X"==r[0][0]&&"X"==r[0][1]&&"X"==r[0][2])return"X";if("X"==r[1][0]&&"X"==r[1][1]&&"X"==r[1][2])return"X";if("X"==r[2][0]&&"X"==r[2][1]&&"X"==r[2][2])return"X";if("X"==r[0][0]&&"X"==r[1][0]&&"X"==r[2][0])return"X";if("X"==r[0][1]&&"X"==r[1][1]&&"X"==r[2][1])return"X";if("X"==r[0][2]&&"X"==r[1][2]&&"X"==r[2][2])return"X";if("X"==r[0][0]&&"X"==r[1][1]&&"X"==r[2][2])return"X";if("X"==r[2][0]&&"X"==r[1][1]&&"X"==r[0][2])return"X";var c=0;for(n=0;n<3;n++)for(o=0;o<3;o++)"X"!=e[n][o]&&"O"!=e[n][o]||c++;return 9==c?"Tie":void 0}function d(e){document.getElementById("modal-container").classList.add("modal-container"),document.getElementById("modal").classList.add("modal"),document.getElementById("winner-title").classList.add("winner-title"),document.getElementById("winner-title").innerHTML+="Tie"==e?"Its a Tie":e+" Won!",document.getElementById("newgame").classList.add("newgame"),document.getElementById("newgame").innerHTML+="New Game"}function l(e){if("set"==e&&null==localStorage.getItem("You")&&null==localStorage.getItem("Pc")&&(localStorage.setItem("Pc","0"),localStorage.setItem("You","0"),document.getElementById("winningYou").innerHTML="You:"+localStorage.getItem("You"),document.getElementById("winningPc").innerHTML="Pc:"+localStorage.getItem("Pc"),console.log("reset")),"set"==e&&(localStorage.setItem("Pc","0"),localStorage.setItem("You","0"),document.getElementById("winningYou").innerHTML="You:"+localStorage.getItem("You"),document.getElementById("winningPc").innerHTML="Pc:"+localStorage.getItem("Pc")),"Pc"==e){var t=parseInt(localStorage.getItem("Pc"))+1;localStorage.setItem("Pc",""+t),document.getElementById("winningYou").innerHTML="You:"+localStorage.getItem("You"),document.getElementById("winningPc").innerHTML="Pc:"+localStorage.getItem("Pc")}"You"==e&&(t=parseInt(localStorage.getItem("You"))+1,console.log(t),localStorage.setItem("You",""+t),document.getElementById("winningYou").innerHTML="You:"+localStorage.getItem("You"),document.getElementById("winningPc").innerHTML="Pc:"+localStorage.getItem("Pc"))}document.getElementById("0").addEventListener("click",(function(){n(0)})),document.getElementById("1").addEventListener("click",(function(){n(1)})),document.getElementById("2").addEventListener("click",(function(){n(2)})),document.getElementById("3").addEventListener("click",(function(){n(3)})),document.getElementById("4").addEventListener("click",(function(){n(4)})),document.getElementById("5").addEventListener("click",(function(){n(5)})),document.getElementById("6").addEventListener("click",(function(){n(6)})),document.getElementById("7").addEventListener("click",(function(){n(7)})),document.getElementById("8").addEventListener("click",(function(){n(8)})),document.getElementById("reset").addEventListener("click",(function(){i(),t()})),document.getElementById("newgame").addEventListener("click",(function(){document.getElementById("modal-container").classList.remove("modal-container"),document.getElementById("modal").classList.remove("modal"),document.getElementById("winner-title").classList.remove("winner-title"),document.getElementById("winner-title").innerHTML+="",document.getElementById("newgame").classList.remove("newgame"),document.getElementById("newgame").innerHTML+="",i(),t()})),t()})();