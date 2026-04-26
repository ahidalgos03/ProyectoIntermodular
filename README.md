# 🛠️ SupportHub

> Sistema web de gestión de incidencias (tickets)

SupportHub es una aplicación web sencilla pensada para gestionar incidencias dentro de una organización de forma clara y centralizada.  
Permite a los usuarios crear tickets y a los administradores gestionarlos desde un único punto.

---

## 🚀 ¿Qué hace?

- Registro e inicio de sesión de usuarios  
- Creación de tickets de incidencias  
- Visualización de tickets  
- Gestión de incidencias por parte de administradores  
- Cambio de estado de los tickets  

La idea es evitar el típico caos de correos, mensajes y avisos sueltos.

---

## 🧱 Tecnologías utilizadas

- HTML  
- CSS  
- JavaScript  

No se ha utilizado backend ni base de datos externa, lo que hace que el proyecto sea ligero y fácil de ejecutar.

---

## 🌐 Despliegue

El proyecto está pensado para ejecutarse en un entorno real mediante:

- Servidor con **Proxmox**
- Máquina virtual con **Ubuntu Server**
- Servidor web **Apache**
- Dominio: `supporthub.es`

---
## 🕒 Desarrollo del proyecto

El desarrollo del proyecto se ha llevado a cabo de forma progresiva desde mediados de marzo hasta su finalización a finales de abril, siguiendo las siguientes fases:

### 🔹 15 – 20 de marzo | Idea y planificación
Se definió el objetivo del proyecto: desarrollar una aplicación web para la gestión de incidencias mediante tickets.  
Se planteó el funcionamiento general del sistema y la diferenciación entre usuarios y administradores.

---

### 🔹 21 – 27 de marzo | Diseño de la aplicación
Se organizó la estructura del proyecto y se definieron las páginas principales:
- Página de inicio  
- Creación de tickets  
- Visualización de incidencias  
- Panel de administración  

También se decidió trabajar con HTML, CSS y JavaScript.

---

### 🔹 28 de marzo – 5 de abril | Desarrollo inicial
Se comenzó el desarrollo de la aplicación implementando:
- Estructura básica de la web  
- Estilos visuales  
- Primeras funcionalidades en JavaScript  

---

### 🔹 6 – 15 de abril | Desarrollo avanzado
Se añadieron funcionalidades clave:
- Sistema de login básico  
- Creación y gestión de tickets  
- Diferenciación entre usuarios y administradores  

---

### 🔹 16 – 22 de abril | Configuración del servidor
Se preparó el entorno de despliegue:
- Creación de máquina virtual con Ubuntu Server  
- Configuración de apache
- Subida de la aplicación al servidor

---

### 🔹 23 – 24 de abril | Pruebas
Se realizaron pruebas para comprobar:
- Funcionamiento del login  
- Creación y gestión de tickets  
- Acceso al sistema desde el navegador  

---

### 🔹 25 - 26 de abril – actualidad | Documentación y preparación final
Se elaboró la documentación técnica del proyecto y se realizaron los últimos ajustes de cara a la presentación, incluyendo la preparación del dominio `supporthub.es`.

---

## ⚙️ Cómo usarlo

1. Clonar el repositorio:

```bash
git clone https://github.com/ahidalgos03/supporthub.git
