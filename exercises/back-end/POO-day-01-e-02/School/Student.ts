export class Estudent {
    private _enrollment: string;
    private _name: string;
    private _examsGrade: number[];
    private _assigmentsGrades: number[];

    constructor(_enrollment: string, _name: string ) {
        this._enrollment = _enrollment;
        this._name = _name;
        this._examsGrade = [];
        this._assigmentsGrades = []
    }

    get enrollment():string {
        return this._enrollment
    }

    set enrollment(value: string) {
        this._enrollment
    }
}