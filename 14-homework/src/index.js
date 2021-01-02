import {maxPrice} from './01hw';
import {sumNumbers} from './02hw';
import {powerOfNumber} from './03hw';
import {getRandomArray} from './04hw';
import {getAverage} from './05hw';
import {students, getSubjects} from './06hw';
import {ukraine, latvia, litva, getMyTaxes} from './07hw';
import {Student, BudgetStudent} from './08hw';
import {getRandomColor} from './09hw/09hw';
import './09hw/09hw.css';
import * as hw10Module from './10hw/js/main';
import './10hw/css/style.css';
import './10hw/images/bg.jpg';
import './10hw/sounds/SoundB.mp3';
import './10hw/sounds/SoundC.mp3';
import './10hw/sounds/SoundM.mp3';
import './10hw/sounds/SoundN.mp3';
import './10hw/sounds/SoundV.mp3';
import './10hw/sounds/SoundX.mp3';
import './10hw/sounds/SoundZ.mp3';
import {getChineseChar} from './11hw';
import * as hw12Module from './12hw/js/main';
import './12hw/css/style.css';
import './12hw/images/bg-sw.jpg';
import './12hw/fonts/Starjhol.ttf';
import {createIdGenerator} from './13hw';

const student1 = new Student('University of Alderaan', 5, 'Boba Fett');
const student2 = new BudgetStudent('Arca Jeth University', 1, 'Jar Jar Binks', 1400 );

console.log(`HW_1 :  ${maxPrice()} грн`)
sumNumbers(5, 15);
console.log(`HW_3 :
Число пднесене до степеня: ${powerOfNumber(-2, 3)}`)
console.log(`HW_4: ${getRandomArray(15,1,100)}`);
console.log(`HW_5: Фкнкція 3 : середнє арифметичне всіх аргументів >> ${getAverage(1, 2, 3, 2.2)}`)
console.log(`HW_6:  ${getSubjects(students[0])}`);
console.log(`HW_7: Податок в Україні: ${getMyTaxes.call(ukraine, 10000)}`);
console.log(`HW_8: ${student2.getAverageMark()}`);
console.log(`HW_9: ${getRandomColor()}`);
console.log(`HW_11: ${getChineseChar()}`);
console.log(`HW_13: ${createIdGenerator().next().value}`);
