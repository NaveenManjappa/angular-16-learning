import { AbstractControl, FormControl } from "@angular/forms"

// export const noSpaceAllowed = (control:FormControl) => {
//     if(control.value!=null && control.value.indexOf(' ')!=-1)
//         return { noSpaceAllowed:true};
    
//     return  null;
// }

export class CustomValidators {
    static noSpaceAllowed (control:FormControl){
        if(control.value!=null && control.value.indexOf(' ')!=-1)
            return { noSpaceAllowed:true};
        
        return  null;
    }

    static checkUserName(control:AbstractControl):Promise<any>{
        return userNameAllowed(control.value);
    }
}

function userNameAllowed(userName:string){
    const takenUsers=['john','sara','smith'];

    return new Promise((resolve,error) =>{
        setTimeout(()=>{
            if(takenUsers.includes(userName))
                resolve({checkUserName:true});
            else
                resolve(null);
        },5000)
    });
}