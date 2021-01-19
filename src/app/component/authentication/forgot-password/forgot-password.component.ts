import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LinkSentComponent } from '../_dialogues/link-sent/link-sent.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private readonly router: Router, private readonly dialog: MatDialog) {}

  ngOnInit(): void {}

  public onSentLinkButtonClicked(): void {
    const dialogRef = this.dialog.open(LinkSentComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['']);
    });
  }
}
