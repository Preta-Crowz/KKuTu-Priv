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

S=require("child_process").spawn,F=require("fs"),s=(c)=>{console.log(c);A=c.split(' '),P=S(A[0],A.slice(1),{shell:!0})P.stdout.on('data',m=>{console.log(m.toString())});P.on('close',d);},r=(c)=>{F.unlink(`./lib/${c}`,()=>F.unlink(f2=`./lib/${c}.c`, d))};(d=()=>{console.log("Please wait... This may take several minutes.");s("npm install");s(`npm install ./lib --prefix "./lib"`);r("acorn");r("cake");r("coffee");r("cleancss");r("dateformat");r("esparse");r("esvalidate");r("gzip-size");r("js-yaml");r("mime");r("nopt");r("pretty-bytes");r("rimraf");r("semver");r("strip-indent");r("uglifyjs");r("which");console.log("Completed.");process.exit()})()