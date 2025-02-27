import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthRequest } from '../../../../core/services/auth/interfaces/request/AuthRequest';

interface Form {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export class LoginForm {
  private form: FormGroup<Form>;

  constructor() {
    this.form = new FormGroup<Form>({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public get Form(): FormGroup<Form> {
    return this.form;
  }

  public get ValidPassword ():string |null{
    const password = this.form.get("password")

    if(password){
        if(password.invalid){
            return "Password is required"
        }
    }

    return null

  }

    public get ValidUsername ():string |null{
        const username = this.form.get("username")
    
        if(username){
            if(username.invalid){
                return "Username is required"
            }
        }
    
        return null
    
    }

  public get LoginRequest (): AuthRequest {
    return {
        username : this.form.value.username!,
        password : this.form.value.password!
    }
  }
}
