class TV {
    // atributos:
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
   private _connectedTo?: string;

    constructor(b: string, s: number, r: string, c: string[] ) {
        this._brand = b;
        this._size =  s;
        this._resolution = r;
        this._connections = c;
    }

    turnOn() {
        console.log(`${this._brand}, ${this._size}, ${this._resolution}, ${this._connections}`);
    }

    get connectedTo(): string | undefined {
        return this._connectedTo;
      }
    
      set connectedTo(value: string | undefined) {
        // permite setar undefined ou uma conexão que esteja no `connections`
        if (!value || this._connections.includes(value)) {
          this._connectedTo = value;
          console.log(this._connectedTo);
        } else {
          console.log('Sorry, connection unavailable!');
        }
      }
};
const TV1 = new TV('TCL', 25, 'FullHD', ['HDMI', 'USB', 'Wi-Fi']);

TV1.turnOn();

TV1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', TV1.connectedTo);
// rodar app : npx ts-node nome-do-arquivo