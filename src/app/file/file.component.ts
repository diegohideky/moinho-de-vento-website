import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  public projects: Array<object>;
  public calendars: Array<object>;
  public menus: Array<object>;
  public folders: Array<object>;

  constructor() { }

  file(title: string, link:string): object {
    return { title: title, link: link };
  };

  folder(title: string, files: Array<object>): object {
    return { title: title, files: files };
  };

  ngOnInit() {

    this.projects = [
      this.file("Culinária com família", "https://drive.google.com/file/d/11qL9x8urpwmiW3TjtyOeBCTiJ2xRfdY7/view?usp=sharing"),
      this.file("Horta Divertida", "https://drive.google.com/file/d/1U3fKT0QzX6m1kUYWqNwEkLsthq06JP0F/view?usp=sharing"),
      this.file("Maternal e Infantil I", "https://drive.google.com/file/d/15CxPFXweSgUVwsifCpXyrZvWATfBseaR/view?usp=sharing"),
      this.file("Berçário II e III", "https://drive.google.com/file/d/1QQBHDKAX1TezKmVSZ3LT01x0RatopAEW/view?usp=sharing")
    ];

    this.calendars = [
      this.file("Calendário de 2018", "https://drive.google.com/file/d/1hDIfebbH0MxHm0gCE_Bt4khGY-RuJ4bx/view?usp=sharing")
    ];

    this.menus = [
      this.file("Janeiro e Fevereiro de 2018", "https://drive.google.com/file/d/1wZu1hN0Jl8ejwQu_29_l2CKnc51BA3e-/view?usp=sharing"),
      this.file("Março e Abril de 2018", "https://drive.google.com/file/d/1I0-y2_PpAnY1VZqRRWwwVVhV_Z2KNsF-/view?usp=sharing")
    ];

    this.folders = [
      this.folder("Projetos", this.projects),
      this.folder("Calendários", this.calendars),
      this.folder("Cardápios", this.menus)
    ];
  }
}
