abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

// const du = new TakePhoto("Test", "Test");
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Get Sepia");
  }
}

const dt = new Instagram("test", "test", 3);
const time = dt.getReelTime();
dt.getSepia();
