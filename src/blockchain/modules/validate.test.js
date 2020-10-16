import Blockchain from '../blockchain';
import validate from './validate';



describe('validate()', () => {
    let blockchain;

    beforeEach( () => {
        blockchain = new Blockchain();
    });

    it('Se creó una cadena válida', () => {
        blockchain.addBlock('transact0');
        blockchain.addBlock('transact1');

        expect(validate(blockchain.blocks)).toBe(true);
    });


});