/**
 * Resultクラス
 *
 * @see https://medium.com/@cole.carley/implementing-the-rust-result-type-in-typescript-2c2a93c0c165
 */
export class Result<T, E extends Error> {
    private readonly _ok: T | null;
    private readonly _err: E | null;

    /**
     * Resultクラスのコンストラクタ
     *
     * @throws {Error} ok, errの両方に値がない。と判定された場合
     * @throws {Error} ok, errの両方に値がある。と判定された場合
     */
    constructor(ok: T | null, err: E | null) {
        // 両方に値がない場合
        if (!ok && !err) {
            throw new Error('Result must have a value or an error');
        }
        // 両方に値がある場合
        if (ok && err) {
            throw new Error('Result cannot have both a value and and error');
        }

        // okに値がある場合
        if (ok !== null) {
            this._ok = ok;
            this._err = null;

            // errに値がある場合
        } else {
            this._ok = null;
            this._err = err;
        }
    }

    /**
     * 成功と判定されるResultクラスを返す
     */
    static ok<T>(value: T) {
        return new Result(value, null);
    }

    /**
     * 失敗と判定されるResultクラスを返す
     */
    static err<E extends Error>(error: E) {
        return new Result(null, error);
    }

    /**
     * 成功した場合は結果を返し、エラーの場合は例外をスローする
     *
     * @throws {E} 結果がエラーの場合
     * @throws {Error} 何らかの理由で成功もエラーもしていないと判定された場合
     */
    unwrap(): T {
        if (this.isOk()) {
            return this._ok as T;
        }

        if (this.isErr()) {
            throw this._err as E;
        }

        throw new Error('Unknown error');
    }

    /**
     * 成功したResultか判定する
     * @returns 成功したと判定された場合は true を返す
     */
    isOk(): this is Result<T, never> {
        return this._ok !== null;
    }

    /**
     * 失敗したResultか判定する
     * @returns 失敗したと判定された場合は true を返す
     */
    isErr(): this is Result<never, E> {
        return this._err !== null;
    }
}
