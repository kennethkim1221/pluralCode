import { Pipe, PipeTransform } from "@angular/core";

// Pipe component decorator. Import it^
@Pipe({
    name: 'convertToSpaces'
})

export class ConverToSpacesPipe implements PipeTransform{

    // must implement from PipeTransform
    //  transform(value: string <- auto pass ung value ng string na gumamit ng pipe na to
    // 2nd param is  ungcharacter na gusto mo i modify 
    // refferece:  <td>{{ product.productCode | lowercase | convertToSpaces: '-' }}</td>
    transform(value: string, character: string) : string {
        return value.replace(character, ' ');
    }

}