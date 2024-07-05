const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/bd7de62f35507d6b4c2de.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="Kisii,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u6f6jueihklpl6:pc98e5b15cadf6683328e0761a5666a1fea75c0a1bdfb0e9d4fc6057d58f17c74@caij57unh724n3.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d8rivaqa8qgpat"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SilvaTechB/silva-md-bot";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c522f89834cfb510738d.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ" 


global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254743706010";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743706010";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9c522f89834cfb510738d.jpg" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254700143167";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254700143167, 254743706010";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://silvatech.vercel.app";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY3d3Q0NRaU9kb1U3eWZmSXgwWXhxK0xiMklmY3hjdU5KVlNBQVQ3b1dGYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN21mZnM1OGNRZkNrUVVaVVltS3JhUVwiLFxuICBcInBob25lSWRcIjogXCIxYzVhN2Y2Yi1jZjQ5LTQ1NTgtOTk4YS1jOWY3MWU2Y2QyMmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTM4LFxuICAgICAgMjQsXG4gICAgICAxNDgsXG4gICAgICAxNCxcbiAgICAgIDE1LFxuICAgICAgMjI1LFxuICAgICAgMixcbiAgICAgIDQxLFxuICAgICAgMTU0LFxuICAgICAgMjE5LFxuICAgICAgMTMsXG4gICAgICAyMjgsXG4gICAgICAxNTksXG4gICAgICAxNTUsXG4gICAgICAxMzIsXG4gICAgICAxNzIsXG4gICAgICA4NSxcbiAgICAgIDExMSxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDI0MyxcbiAgICAgIDEyNSxcbiAgICAgIDEzMSxcbiAgICAgIDE1MCxcbiAgICAgIDEwLFxuICAgICAgMzYsXG4gICAgICAxNjYsXG4gICAgICAxNTgsXG4gICAgICAxMDcsXG4gICAgICAxODIsXG4gICAgICAyNTEsXG4gICAgICAxMTksXG4gICAgICAxOTksXG4gICAgICAxODUsXG4gICAgICA4NCxcbiAgICAgIDIwNixcbiAgICAgIDE0LFxuICAgICAgMTYyLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVUSjNES1hGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDM3MDYwMTA6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzU1NDE3NDkzOTMyMjoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKelE3Y1VHRUp5cmhiUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImw4TFQrN1BpUWNWUTBOT1JIWFowcXN4MUl4bFRPVHdFS0tZRWNYc0dQR3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieWp5YXh2WGt5VEd2R1R5RDZhK2tDbkgrQVpodXlWK1MzZHNzaGJTUkV4bXJMd0pSdHJSM0J2V1h0SEhUNkZRRExScjMybHpOUzFGalJtV0hHQk1iQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnlwdjhudk9JaDBGZWVQc2QreU1rYjhTRno1VVNjaEJpdWs4bXA1MDd1SXltbndwK1EzQ2pTMEJFeFpIRjRuTnZzaU1XL2Fqb0JJSHNpUW5EMHkwakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQzNzA2MDEwOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NTIwOTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNM1dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU0zVy5qc29uIjogIntcImtleURhdGFcIjpcIjNoNjVQR2VoRjdvdHVIdjZzRk13bi83b3B0OEVoWWV4L1hIWHpyQWdTbzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1NzExMjM0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NTEzNzI4MDIyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "2.3.9",
  caption : global.caption || "『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』" , // ```『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』```", //*『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉』*\n tiktok.com/@silva.edits6"),
 
  author : process.env.PACK_AUTHER|| "silva",
  packname: process.env.PACK_NAME || "tech",
  botname : process.env.BOT_NAME  || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉",


  errorChat : process.env.ERROR_CHAT || "254743706010",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "DJwc34NaWmhXmDxEeh6YUEmm",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SILVA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
