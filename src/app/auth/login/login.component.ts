import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .bg-login-image {
        background: url( https://img.freepik.com/vector-gratis/ilustracion-concepto-linea-seguridad-datos-ciberneticos-seguridad-internet-o-privacidad-proteccion-informacion_1150-37328.jpg?w=2000 );
        background-position: center center;
        background-size: cover;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
