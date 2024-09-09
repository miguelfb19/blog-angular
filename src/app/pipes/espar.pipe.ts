import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'esPar'
})
export class esParPipe implements PipeTransform{
    transform(value: any) {
        return value
    }
}