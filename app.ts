
///<reference path= "./app/4.ts" />

import ns4 = m_4;
import { myModule, mySecondModule } from "./app/5";


var eng = new ns4.Engineer('da', 222, 'as');
alert(eng.name);

var emp = new myModule.Employee();
emp.name = 'das';
console.log(emp);

alert(emp.name);
