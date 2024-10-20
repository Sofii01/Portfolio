import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent {
  projects = [
    {
      img: "../../assets/img/CapturaLoginDes.PNG",
      github: "https://github.com/Sofii01/Login",
      deploy: "https://login-flame-nu.vercel.app/login",
      title: "LoginProyect",
      description: "Este proyecto es una aplicación de Login y SignUp que utiliza un backend desarrollado con Node.js y Express, con Sequelize como ORM para interactuar con la base de datos. Para la autenticación de usuarios, se utiliza JSON Web Tokens (JWT) para la generación y verificación de tokens. Además, se implementa el cifrado de contraseñas mediante la biblioteca bcrypt para garantizar la seguridad de las credenciales de los usuarios.",
      skills: ["NodeJs", "Angular", "Express", "MySql"],
      expanded: false
    },
    {
      img: "../../assets/img/CapturaSemilleroDes.PNG",
      github: "https://github.com/Sofii01/Semillero",
      deploy: "",
      title: "EcoSistema",
      description: "Fue realizado en equipo y propuesto por Semillero Latan. Se trata de una pagina que ayuda a emprendedores a conectar con personas interesadas en sus productos/servicios por su localizacion. Se muestra informacion del proveedor mas cercano como su facebook, instagram, etc. Un administrador puede gestionar sus publicacion y a los proveedores. El login se realiza mediante autenticacion de la cuenta de Google. Utilizamos: OAuth 2.0, JWT, Java Mail Sender, Geocoding, Cloudinary.",
      skills: ["Java", "React", "Spring Boot",],
      expanded: false
    },
    {
      img: "../../assets/img/image.png",
      github: "https://github.com/No-Country-simulation/c20-23-m-java-react.DeliMovil",
      deploy: "",
      title: "DeliMovil",
      description: "DeliMóvil es una plataforma integral y altamente segura diseñada para transformar la experiencia de disfrutar comida local. Nuestro innovador sistema está orientado a conectar a los amantes de la comida, restaurantes y repartidores de manera eficiente y conveniente.",
      skills: ["Java", "Spring Boot", "Spring Data Jpa", "React", "Material UI", "Swagger"]
    }
    
  ];

  constructor() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
      this.projects.forEach(project => project.expanded = true);
    } else {
      this.projects.forEach(project => project.expanded = false);
    }
  }

  toggleExpand(project: any) {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1024) {
      project.expanded = !project.expanded;
    }
  }
}
