# Configuración con Google Apps Script (Alternativa a PHP)

## 🚀 ¿Por qué Google Apps Script?

Google Apps Script es una excelente alternativa que:

- ✅ No requiere servidor propio
- ✅ Funciona directamente con Gmail
- ✅ Es completamente gratuito
- ✅ Fácil de configurar
- ✅ No requiere instalación de software

## 📋 Pasos para Configurar

### 1. Crear el Script de Google Apps Script

1. Ve a [script.google.com](https://script.google.com/)
2. Haz clic en "Nuevo proyecto"
3. Reemplaza el código por defecto con este:

```javascript
function doPost(e) {
  try {
    // Obtener los datos del formulario
    const data = JSON.parse(e.postData.contents);
    const { name, email, subject, message } = data;

    // Validar datos
    if (!name || !email || !subject || !message) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: "Faltan datos requeridos" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Crear el contenido del email
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1>📧 Nuevo Mensaje de Contacto</h1>
          <p>Has recibido un nuevo mensaje desde tu portafolio web</p>
        </div>
        
        <div style="padding: 20px; background: #f9fafb;">
          <div style="margin-bottom: 15px;">
            <div style="font-weight: bold; color: #374151;">👤 Nombre:</div>
            <div style="color: #6b7280;">${name}</div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="font-weight: bold; color: #374151;">📧 Email:</div>
            <div style="color: #6b7280;">${email}</div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="font-weight: bold; color: #374151;">📝 Asunto:</div>
            <div style="color: #6b7280;">${subject}</div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <div style="font-weight: bold; color: #374151;">💬 Mensaje:</div>
            <div style="background: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
          <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio web.</p>
          <p>Fecha: ${new Date().toLocaleString("es-ES")}</p>
        </div>
      </div>
    `;

    // Enviar el email
    GmailApp.sendEmail(
      "jhongaloes@gmail.com", // Tu email
      `Nuevo mensaje de contacto: ${subject}`,
      "", // Texto plano (vacío porque usamos HTML)
      {
        htmlBody: emailBody,
        replyTo: email,
        name: name,
      }
    );

    // Respuesta exitosa
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado con éxito",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Respuesta de error
    return ContentService.createTextOutput(
      JSON.stringify({
        error: "Error al procesar la solicitud: " + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Función para probar el script
function doGet() {
  return ContentService.createTextOutput(
    "Script funcionando correctamente"
  ).setMimeType(ContentService.MimeType.TEXT);
}
```

### 2. Desplegar el Script

1. Haz clic en "Implementar" → "Nueva implementación"
2. Selecciona "Aplicación web"
3. Configura:
   - **Descripción**: "Formulario de contacto"
   - **Ejecutar como**: "Yo mismo"
   - **Quién tiene acceso**: "Cualquier persona"
4. Haz clic en "Implementar"
5. **Copia la URL** que te genera (algo como `https://script.google.com/macros/s/...`)

### 3. Actualizar el Componente Contact

Reemplaza la URL en `src/components/Contact.js`:

```javascript
const response = await fetch("TU_URL_DE_GOOGLE_APPS_SCRIPT", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
```

## 🧪 Probar el Formulario

1. Ejecuta tu aplicación: `npm start`
2. Ve a la sección de contacto
3. Llena el formulario y envíalo
4. Revisa tu Gmail

## ⚠️ Notas Importantes

- **Primera vez**: Google puede pedirte autorización
- **Cuota**: Google Apps Script tiene límites, pero son generosos para uso personal
- **Seguridad**: Solo tu script puede enviar emails a tu cuenta
- **Logs**: Puedes ver los logs en Google Apps Script

## 🆘 Solución de Problemas

### Error de CORS

- Google Apps Script maneja CORS automáticamente
- Si hay problemas, verifica que la URL sea correcta

### Error de autorización

- Acepta los permisos cuando Google los solicite
- Verifica que el script esté desplegado correctamente

### Emails no llegan

- Revisa la carpeta de spam
- Verifica que el email en el script sea correcto
- Revisa los logs en Google Apps Script

## 🔄 Migración desde PHP

Si ya tenías PHP configurado:

1. Usa este método de Google Apps Script
2. Actualiza la URL en el componente Contact
3. No necesitas servidor local

¡Esta es la solución más fácil y confiable!
