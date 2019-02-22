/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * Minified by Preta(preta@crowz.r-e.kr)
 * 
 * This program is free software:you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation,either version 3 of the License,or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not,see <http://www.gnu.org/licenses/>.
 */

t=__dirname,u=this,y=require,a=y("child_process").spawn,b=y("./lib/sub/jjlog"),c=y("./package.json"),d=y("../language.json"),e=y("../lib/sub/global.json");let f,g;h=()=>{(f?f.kill():0);(g?g.forEach(v=>v.kill()):0)}k=()=>{return (!f||!g)?0:(f.process&&g.every(v=>v.process))?2:1},i=()=>{h();(e['SERVER_NAME']?process.env['KKT_SV_NAME']=e['SERVER_NAME']:0);f=new z('W',"node",`${t}/lib/Web/cluster.js`,e['WEB_CPU']),g=[];for(j=0;j<e['MAIN_PORTS'].length;j++){g.push(new z('G',"node",`${t}/lib/Game/cluster.js`,j,e['GAME_CPU']))};exports.send('server-status',k())},l=y("../settings.json"),m={'server-on':i,'server-off':h,'program-info':()=>{exports.send('alert',[`=== ${c.name} ===`,`${c.description}`,"",`Version:${c.version}`,`Author:${c.author}`,`License:${c.license}`,`Repository:${c.repository}`].join('\n'))},'program-blog':()=>exports.send('external',"http://blog.jjo.kr/"),'program-repo':()=>exports.send('external',"https://github.com/JJoriping/KKuTu"),'exit':()=>{process.exit(0)}},exports.MAIN_MENU=[{label:d['menu-server'],submenu:[{label:d['menu-server-on'],accelerator:"CmdOrCtrl+O",click:()=>exports.run("server-on")},{label:d['menu-server-off'],accelerator:"CmdOrCtrl+P",click:()=>exports.run("server-off")}]},{label:d['menu-program'],submenu:[{label:d['menu-program-info'],click:()=>exports.run("program-info")},{label:d['menu-program-blog'],click:()=>exports.run("program-blog")},{label:d['menu-program-repo'],click:()=>exports.run("program-repo")},{label:d['menu-program-dev'],role:"toggledevtools"},{type:"separator"},{label:d['menu-program-exit'],accelerator:"Alt+F4",click:()=>exports.run("exit")}]}],exports.run=(u)=>{m[u]()},exports.send=(...argv)=>{};class z{constructor(v,u,...argv){u.process=a(u,argv);u.process.stdout.on('data',x=>{exports.send('log','n',x)});u.process.stderr.on('data',x=>{console.error(`${v}:${x}`);exports.send('log','e',x)});u.process.on('close',code=>{let x;u.process.removeAllListeners();b.error(x=`${v}:CLOSED WITH CODE ${code}`);u.process=null;exports.send('log','e',x);exports.send('server-status',k())})}kill(w){u.process?u.process.kill(w||'SIGINT'):0}}