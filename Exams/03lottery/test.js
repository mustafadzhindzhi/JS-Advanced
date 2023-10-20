let expect = require('chai').expect;
let lottery = require('./Lottery');

describe('lottery test', () => {
    it ('check for invalid parameters', () => {
        expect(() => lottery.buyLotteryTicket(5,5,5).to.throw("Invalid input!"));
        expect(() => lottery.buyLotteryTicket(true, true, true).to.throw("Invalid input!"));
        expect(() => lottery.buyLotteryTicket(5, true, true).to.throw("Invalid input!"));
        expect(() => lottery.buyLotteryTicket(5, true, true).to.throw("Invalid input!"));
        expect(() => lottery.buyLotteryTicket(5, true, 5).to.throw("Invalid input!"));
        expect(() => lottery.buyLotteryTicket(5, 5, false).to.throw("Unable to buy lottery ticket!"));
    });
    it('check for valid parameters', () => {
        expect(lottery.buyLotteryTicket(1,1,true)).to.equal("You bought 1 tickets for 1$.");
        expect(lottery.buyLotteryTicket(1,2,true)).to.equal("You bought 2 tickets for 2$.");
        expect(lottery.buyLotteryTicket(10,10,true)).to.equal("You bought 10 tickets for 100$.");
    })
})
describe('test 2', () => {
    it('check invalid params', ()=> {
        expect(() => lottery.checkTicket([1,2,3], 2).to.throw("Invalid input!"));
        expect(() => lottery.checkTicket(2, [1,2,3]).to.throw("Invalid input!"));
        expect(() => lottery.checkTicket(2, 2).to.throw("Invalid input!"));
    });
    it('check for valid params', () => {
        expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6])).to.equal("You win the JACKPOT!!!");
        expect(lottery.checkTicket([1,2,3,7,8,9],[1,2,3,4,5,6])).to.equal("Congratulations you win, check your reward!");
    })
})
describe('test 3', () => {
    it('check for invalid params', ()=> {
        expect(()=> lottery.secondChance([1,2,3], 6).to.throw("Invalid input!"));
        expect(()=> lottery.secondChance(6, 6).to.throw("Invalid input!"));
        expect(()=> lottery.secondChance([1,2,3], [1,2,3]).to.throw("Invalid input!"));
    });
    it ('check for valid params', () => {
        expect(lottery.secondChance(5, [1,2,3,4,5])).to.equal("You win our second chance prize!");
        expect(lottery.secondChance(7, [1,2,3,4,5])).to.equal("Sorry, your ticket didn't win!");
    })
})