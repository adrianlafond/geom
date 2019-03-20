import { normalize } from "path";

export default class Angle {
  /**
   * @param value {number} degrees
   */
  public static toRadians(value: number) {
    return value * Math.PI / 180;
  }

  /**
  * @param value {number} radians
  */
  public static toDegrees(value: number): number {
    return value * 180 / Math.PI;
  }

  /**
  * @param r1 in radians
  * @param r2 in radians
  * @param progress percent expressed as a value between 0 and 1
  */
  public static interpolate(r1: number, r2: number, progress: number): number {
    const a1 = Angle.normalize(r1);
    const a2 = Angle.normalize(r2);
    let delta = a2 - a1;
    if (Math.abs(delta) > Math.PI) {
      delta = a2 - Math.PI * 2 - a1;
    }
    return Angle.normalize(a1 + delta * progress);
  }

  public static normalize(value: number): number {
    let result = value % (Math.PI * 2);
    if (result < 0) {
      result += Math.PI * 2;
    }
    return result;
  }
}