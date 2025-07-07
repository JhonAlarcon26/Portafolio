# 🚀 Portafolio Web - Carlos Rodríguez

Un portafolio web moderno y responsive desarrollado con React y Tailwind CSS, diseñado para mostrar las habilidades y proyectos de un desarrollador web full stack especializado en PHP, HTML5, CSS3, JavaScript, MySQL y API testing.

## ✨ Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos visuales con Framer Motion
- **Formulario de Contacto**: Funcional con validación
- **Filtros de Proyectos**: Organización por categorías
- **Habilidades Interactivas**: Barras de progreso animadas
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animaciones
- **React Icons** - Iconos vectoriales

### Herramientas

- **Vite** - Build tool y dev server
- **PostCSS** - Procesador de CSS
- **ESLint** - Linting de código

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Navbar.js       # Navegación principal
│   ├── Hero.js         # Sección de inicio
│   ├── About.js        # Sección sobre mí
│   ├── Skills.js       # Habilidades técnicas
│   ├── Projects.js     # Proyectos portfolio
│   ├── Contact.js      # Formulario de contacto
│   └── Footer.js       # Pie de página
├── data/
│   └── portfolioData.js # Datos del portafolio
├── App.js              # Componente principal
├── App.css             # Estilos globales
└── index.css           # Configuración Tailwind
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/portafolioj.git
   cd portafolioj
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Construcción para Producción

```bash
npm run build
```

## 📝 Personalización

### Datos del Portafolio

Edita el archivo `src/data/portfolioData.js` para personalizar:

- **Información Personal**: Nombre, título, descripción, contacto
- **Habilidades**: Tecnologías y niveles de experiencia
- **Proyectos**: Lista de proyectos con imágenes y enlaces
- **Experiencia**: Historial laboral y educación
- **Enlaces Sociales**: GitHub, LinkedIn, etc.

### Estilos

- **Colores**: Modifica la paleta en `tailwind.config.js`
- **Fuentes**: Cambia la tipografía en `src/index.css`
- **Animaciones**: Ajusta las transiciones en los componentes

## 🎨 Secciones del Portafolio

### 1. 🏠 Página de Inicio (Hero)

- Nombre y título profesional
- Foto de perfil
- Botones de acción (Contacto, CV)
- Enlaces a redes sociales

### 2. 👨‍💻 Sobre Mí (About)

- Descripción personal
- Información de contacto
- Experiencia laboral
- Formación académica

### 3. 🧠 Habilidades Técnicas (Skills)

- Categorías: Frontend, Backend, Herramientas, Otros
- Barras de progreso animadas
- Iconos representativos

### 4. 📂 Proyectos (Projects)

- Filtros por categoría
- Imágenes de proyectos
- Enlaces a código y demo
- Tecnologías utilizadas

### 5. ✉️ Contacto (Contact)

- Formulario funcional
- Información de contacto
- Enlaces a redes sociales

## 🔧 Configuración Avanzada

### Variables de Entorno

Crea un archivo `.env` para configuraciones:

```env
REACT_APP_EMAIL_SERVICE=your-email-service
REACT_APP_EMAIL_TEMPLATE=your-template-id
REACT_APP_EMAIL_USER=your-user-id
```

### Integración con Servicios

- **EmailJS**: Para el formulario de contacto
- **Google Analytics**: Para seguimiento de visitas
- **Netlify/Vercel**: Para despliegue

## 📱 Responsive Design

El portafolio está optimizado para:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Despliegue

### Netlify

1. Conecta tu repositorio de GitHub
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `build`

### Vercel

1. Importa tu proyecto desde GitHub
2. Framework preset: Create React App
3. Deploy automático

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: carlos.rodriguez@email.com
- **LinkedIn**: [Carlos Rodríguez](https://linkedin.com/in/carlosrodriguez)
- **GitHub**: [@carlosrodriguez](https://github.com/carlosrodriguez)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
