import { Pipe } from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(rawNum:string) {

    
    const areaCodeStr = rawNum.slice(0,2);
    const midSectionStr = rawNum.slice(3,7);
    const lastSectionStr = rawNum.slice(7);

    return `(${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
  }
}