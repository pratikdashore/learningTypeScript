////////////////Extending Interfaces////////////////

////////////////////modules////////////////

namespace m_4 {

    export interface IStudent {
        name: string;
        rollNumber: number;
    }

    export interface IEngineer extends IStudent {
        branch: string;
    }
    export class Engineer implements IEngineer {
        constructor(public name: string, public rollNumber: number, public branch: string) {

        }
    }
}


//////////////////Extending namespace /////////////////

namespace m_4 {
    export class Doctor implements IStudent {
        constructor(public name: string, public rollNumber: number, public branch: string) {
        }
    }
}







