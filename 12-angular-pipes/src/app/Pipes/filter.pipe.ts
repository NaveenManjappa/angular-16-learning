import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/Student";

@Pipe({
    name:'filter',
    pure:false
})
export class FilterPipe implements PipeTransform{
    
    transform(studentList:Student[],filterBy:string) {
        
        if(filterBy.toLowerCase() === 'all' || filterBy === '' || studentList.length === 0){
            return studentList;
        }
        else {
             return studentList.filter(std => {
                return std.gender.toLowerCase() === filterBy.toLowerCase();
            })
        }

    }

}