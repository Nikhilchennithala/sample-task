import { Component, OnInit } from '@angular/core';
export interface memberElement {
  name: string;
  position: number;
  address: string;
  post: string;
}

const Members: memberElement[] = [
  { position: 1, name: 'user1', address: 'Mavelikara', post: 'member' },
  { position: 2, name: 'user2', address: 'Chennithala', post: 'vice president' },
  { position: 3, name: 'user3', address: 'Mavelikara', post: 'member' },
  { position: 4, name: 'user4', address: 'Chennithala', post: 'member' },
  { position: 5, name: 'user5', address: 'Mavelikara', post: 'member' },
];
@Component({
  selector: 'app-all-user',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.scss'],
})
export class AllMembersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'address', 'post'];
  membertable = Members;
  constructor() {}

  ngOnInit(): void {}
}
