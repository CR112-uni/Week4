import { $locationShim } from '@angular/common/upgrade';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  listUsers = [{username:'coen.ryan@griffith', password:"1"},
               {username:'coen.ryan@griffithuni', password:'2'},
               {username:'c.ryan@griffith', password:'3'}];

  username = '';
  password = '';

  // Define injection
  constructor(private router:Router){};

  itemClicked() {
    console.log(this.username, this.password);
    alert('Username: ${this.username} and Password: ${this.password}');
      let c = {username: this.username, password: this.password};
      let find = this.listUsers.some((e)=> e.username === c.username);
      alert(find);

      if (find) {
        this.router.navigateByUrl("/account");
      }
  }

}
