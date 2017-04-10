class student {

  public lName?: string;
  public fName: string;
  public id: number;
  private _height: number;

  set height(value: number) {
    this._height = value;
  }

  get height(): number {
    return this._height;
  }

  constructor(lName: string, fName: string, height?: number) {
    this.lName = lName;
    this.fName = fName;
    this.height = height;
  }
}


var student1 = new student('Dashore', 'Pratik', 10);
console.log(student1.height);