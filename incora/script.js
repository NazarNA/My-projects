

class User {

    selectedGameMachine = null;

    constructor(name,money){
        this.name = name;
        this.money = money;
    }

    play(money){
        if(this.selectGameMachine && this.money >= money){
            this.money -= money;
            let won = this.selectedGameMachine.play(money);
            this.money += won;
            console.log(`Ставка - ${money}`);
            console.log(`Отримано - ${won}`);
            console.log(`Залишилось - ${this.money}`);
        } 
    }

    selectGameMachine(machine){
        if(machine instanceof GameMachine){
            this.selectedGameMachine = machine
        }
    }
}

class SuperAdmin extends User {

    casinoList = [];

    createCasino(name){
        const casino = new Casino(name);
        this.casinoList.push(casino);
        return casino;
    }
    
    createGameMachine(num){
        if(!isPositiveNumber(num)) throw new Error('You provided an invalid data');

        if(this.money >= num){
            this.money -= num;
            const machine = new GameMachine(num);
            return machine;
        }
    }

    withdrawFromAllCasino(amount){
        let withdraw = 0;
        
        this.casinoList.forEach(casino => {
            casino.machineList.sort((currMachine, nextMachine)=>{
                return nextMachine.money - currMachine.money
            }).forEach(machine => {
                if(withdraw === amount) return 
                let requiredMoney = amount - withdraw;
                let logMoney = machine.takeMoney(requiredMoney)
                withdraw += logMoney
                console.log('returned money', logMoney, machine); 
                console.log(casino.machineList); 
            })
        })

        return withdraw
    }

    putMoneyInCasino(casino, num){
        if(!isPositiveNumber(num)) return 0;

        if(this.money >= num){
            this.money -= num;
            casino.money += num;
            console.log('додав', num, 'в суму казино',casino.money);
        }
    }

    putMoneyInMachine(machine, num){
        if(!isPositiveNumber(num)) return 0;

        if(this.money >= num){
            this.money -= num;
            machine.money += num;
            console.log('додав', num, 'в суму машинки',machine.money);
        }
    }

    removeMachineFromCasino(casino,machine){
        let newMachineList = casino.machineList.filter(mach => mach !== machine)

        let newMoney = machine.getMoney / newMachineList.length;
       
        casino.machineList.forEach(mach => mach.putMoney(newMoney));
        return casino.machineList = newMachineList;
    }
}

class Casino {

    machineList = [];
    name = '';
    money = 0;
    
    get getMoney(){
        return this.money + this.allMachinesMoney()
    }
    
    
    get getMachineCount(){
        return this.machineList.length;
    }
    
    constructor(name){
        if(name && typeof name === 'string'){
            this.name = name;
        }
    }
    
    addGameMachine(machine){
        if(machine && machine instanceof GameMachine)
        this.machineList.push(machine)
    }
    
    allMachinesMoney(){
        return this.machineList.reduce((acc, curr) => {
            return acc + curr.getMoney;
        }, 0)
    }

}


class GameMachine {
    
    money = 0;

    get getMoney(){
        return this.money;
    }

    constructor(value){
        this.money = value;
    }


    putMoney(num){
        if(!isPositiveNumber(num)) return 0;

        this.money += num;
    }

    takeMoney(num){
        if(!isPositiveNumber(num)) return 0;

        if(num > this.money){
            let value = this.money
            this.money = 0;
            return value;
        }

        this.money -= num;

        return num;
    }

    play(num){
        this.money += num;

        let a = Math.ceil(Math.random() * (9 - 1) + 1);
        let b = Math.ceil(Math.random() * (9 - 1) + 1);
        let c = Math.ceil(Math.random() * (9 - 1) + 1);
      
        if(a === b && b === c){
            console.log(`Джекпот!!! - ${a}:${b}:${c}`)
            this.money -= num;
            return num *= 3
        } else if(a === b || b === c){
            console.log(`Непогано - ${a}:${b}:${c}`)
            this.money -= num;
            return num *= 2;
        } else {
            console.log(`Крути ще раз! - ${a}:${b}:${c}`)
            return 0
        }
        
    }
}

function getRandomInt(min = 100, max = 999) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function isValidNumber(num) {
    return num != null && typeof num === 'number';
}

function isPositiveNumber(num){
   return isValidNumber(num) && num >= 0;
}


//======================= Casino =======================

const admin = new SuperAdmin('Ivan',1000);

console.log(`Адміністратор ${admin.name} з бюджетом ${admin.money} хоче відкрити казино!`);

const user = new User('Vasya', 100);

console.log(`Азартний гравець ${user.name} з бюджетом ${user.money} хоче зірвати куш.`);

let casinoBlaBla = admin.createCasino('BLABLA');

let gameMachine1 = admin.createGameMachine(100);

casinoBlaBla.addGameMachine(gameMachine1)

console.log(`${admin.name} створює нове казино - ${casinoBlaBla.name}, створює ігровий автомат та додає його в казино.`);

console.log(`Гравець ${user.name} завітав в казино ${casinoBlaBla.name} та вирішив випробувати свою удачу.`);

user.selectGameMachine(gameMachine1)

console.log(`${user.name} обрав ігровий автомат, і почав грати маючи на руках ${user.money}!`);

user.play(50);

console.log('Тепер Ваша черга спробувати себе')
console.log('Станьте адміністратором або гравце')