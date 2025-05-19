import { Result } from '../result';

describe('Result', () => {
    const value = 'OK';
    const err = new Error('test');

    describe('成功したResult', () => {
        it('Resultクラスをインスタンス化する', () => {
            expect(() => {
                Result.ok(value);
            }).not.toThrow();
            expect(() => {
                new Result(value, null);
            }).not.toThrow();
        });
        it('成功と失敗を判定する', () => {
            const result = Result.ok(value);

            expect(result.isOk()).toBeTruthy();
            expect(result.isErr()).toBeFalsy();
        });
        it('中身の値を取得する', () => {
            const result = Result.ok(value);

            expect(result.unwrap()).toBe(value);
        });
    });

    describe('失敗したResult', () => {
        it('Resultクラスをインスタンス化する', () => {
            expect(() => {
                Result.err(err);
            }).not.toThrow();
            expect(() => {
                new Result(null, err);
            }).not.toThrow();
        });
        it('成功と失敗を判定する', () => {
            const result = Result.err(err);

            expect(result.isOk()).toBeFalsy();
            expect(result.isErr()).toBeTruthy();
        });
        it('中身の値を取得する', () => {
            const result = Result.err(err);

            expect(() => result.unwrap()).toThrow(err);
        });
    });

    describe('成功と失敗の値が渡されたResult', () => {
        it('Resultクラスをインスタンス化する', () => {
            expect(() => {
                new Result(value, err);
            }).toThrow();
        });
    });

    describe('成功の値も失敗の値も渡されなかったResult', () => {
        it('Resultクラスをインスタンス化する', () => {
            expect(() => {
                Result.ok(null);
            }).toThrow();
            // expect(() => { Result.err(null) }).toThrow();
            expect(() => {
                new Result(null, null);
            }).toThrow();
        });
    });
});
