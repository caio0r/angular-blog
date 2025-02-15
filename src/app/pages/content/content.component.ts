import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafake } from '../../data/datafake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = "https://www.adrenaline.com.br/wp-content/uploads/2023/09/Spider-Man-2-se-beneficiou-de-uma-boa-relacao-entre-a-Insomniac-e-a-Marvel-912x569.jpg"
  contentTitle: string= "bla bla bla"
  contentDescription:string=" bla bla bla"
  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) {
    
  }

  ngOnit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = datafake.filter( 
                      article => article.id == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
  }
  
}
