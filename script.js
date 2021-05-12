'use strict';

'use strict';

// instanceOf


class Robot {
    constructor(modelName, color) {
        this._modelName = modelName;
        this.color = color;
        this.isDisabled = false;
    }

    get modelName() {
        return this._modelName;
    }

    set modelName(value) {
        this._modelName = value;
    }

    static checkColorIsRed(bot) {
        if (bot.color === 'red') return true
        return false;
    }
    makeSomeNoise() {
        if (this.isDisabled) {
            console.log('Wee Weee');
        } else {
            console.log('....');
        }
    }
}
class VacuumCleanerBot extends Robot {
    makeSomeNoise() {
        if (this.isDisabled) {
            console.log('Phtagn');
        } else {
            super.makeSomeNoise();
        }
    }

    makeRoomClear(room) {
        room.isCleaned = true;
        return room;
    }
};

class UberStaubsauger extends VacuumCleanerBot {
    constructor(modelName, color, power) {
        super()
        this._modelName = modelName;
        this.color = color;
        this.power = power
        this.dateOfCreation = new Date();
    }

    makeFlatsClear(arrayOfRooms) {
        arrayOfRooms.forEach(room => room.isCleaned = true);

        return arrayOfRooms;
    }
};

const verter = new Robot('Verter', 'grey');
// console.log(verter);
const kirby = new VacuumCleanerBot('Kirby', 'orange');
// console.log(kirby);
const hans = new UberStaubsauger('Hans', 'red', 10000);
// console.log(hans);

class BattleRobot {
    constructor(modelName, index, leftGunPower, rightGunPower, frontArmor, backArmor) {
        this.modelName = modelName;
        this.index = index;
        this.leftGunPower = leftGunPower;
        this.rightGunPower = rightGunPower;
        this.frontArmor = frontArmor;
        this.backArmor = backArmor;
    }
};

class BattleRobotBuilder {
    setmodelName(value) {
        this.modelName = value;
        return this;
    }

    setIndex(value) {
        this.index = value;
        return this;
    }
    setLeftGunPower(value) {
        this.leftGunPower = value;
        return this;
    }
    setRightGunPower(value) {
        this.rightGunPower = value;
        return this;
    }
    setFrontArmor(value) {
        this.frontArmor = value;
        return this;
    }
    setBackArmor(value) {
        this.backArmor = value;
        return this;
    }
    build() {
        return new BattleRobot(this.modelName, this.index, this.leftGunPower, this.rightGunPower, this.frontArmor, this.backArmor)
    }
};

const ironCaput = new BattleRobotBuilder()
    .setmodelName('Iron Caput')
    .setIndex(33)
    .setLeftGunPower(111)
    .setRightGunPower(56)
    .setFrontArmor(99)
    .setBackArmor(132)
    .build()
console.log(ironCaput);