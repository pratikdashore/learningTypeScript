////////////////////creating external modules ////////////////

export module myModule {

    export interface IEmployee {
        name: string;
        code: string;
    }

    export class Employee implements IEmployee {
        name: string;
        code: string;
    }
}


export module mySecondModule {

    export interface IEmployee {
        name: string;
        code: string;
    }

    export class Employee implements IEmployee {
        name: string;
        code: string;
    }
}

