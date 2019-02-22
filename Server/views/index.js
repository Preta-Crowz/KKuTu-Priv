/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * Minified by Preta(preta@crowz.r-e.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

{ipcRenderer,shell}=require("electron"),I=ipcRenderer,W=require("../../language.json")["welcome"],L=0;let t,l;$(()=>{t=$("#t");(l=$("#log-board")).html(W);});I.on('server-status',(E,C)=>{t.removeClass("server-off server-warn server-on");t.addClass(["server-off","server-warn","server-on"][C])});I.on('alert',(E,M)=>{alert(M)});I.on('external',(E,h)=>{shell.openExternal(h)});I.on('log',(E,L,M)=>{if(++L>100){L--;$(".log-item:first").remove()};M=M.toString().replace(/</g,"&lt;").replace(/&/g,"&amp;").replace(/(error)/gi,`<label class="lt-error">$1</label>`);l.append($(`<div class="log-item log-${L}">${M}</div>`));l.scrollTop(99999999)})