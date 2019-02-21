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

a=require("./package.json"),b=require("../settings.json"),c=require("./runner.js"),d=()=>{Menu.setApplicationMenu(Menu.buildFromTemplate(c.MAIN_MENU));mainWindow=new BrowserWindow({title:`${a['name']} ${a['version']} - Now loading`,width:800,height:600,icon:__dirname+"/../logo.ico"});mainWindow.loadURL(__dirname+"/views/index.pug")};const {app:App,BrowserWindow,Menu}=require('electron');Pug=require('electron-pug')({pretty:!0},{version:a.version,serverName:b['server-name']||process.env['KKT_SV_NAME']});let mainWindow;App.on('ready',d);App.on('window-all-closed',()=>{(process.platform!='darwin')?App.quit():0});App.on('activate',()=>{(mainWindow===null)?d():0});c.send=(...argv)=>{mainWindow.webContents.send.apply(mainWindow.webContents,argv)};