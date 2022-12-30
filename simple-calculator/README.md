## Steps
   first install TS globally then run commandsnpm i 
   npm init -y
   
   tsc --init
   
   npm i inquirer (for command line input)
   
   npm i @types/inquirer -D (types of inquirer for development dependency)
   
   update tsconfig file with
   "target": "ES2022", "module": "NodeNext", "moduleResolution": "NodeNext",
   
   update packagejson file with
   "type": "module", (add in packagejson file)

   npm install chalk


   after completion run command 
   tsc
   node filename.js
