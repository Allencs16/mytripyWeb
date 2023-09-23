import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/modules/public/pages/login/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  userName: String;

  showFiller = false;

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.getUserData();
  }

  async getUserData(){
    var userEmail = await sessionStorage.getItem('userEmail');

    this.userService.getUserByEmail(String(userEmail)).subscribe((response) => {
      this.userName = response.name;
    })
  }

}
