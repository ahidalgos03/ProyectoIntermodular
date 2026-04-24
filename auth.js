document.addEventListener('DOMContentLoaded', () => {
    const role = sessionStorage.getItem('sh_role');
    const username = sessionStorage.getItem('sh_username') || 'Usuario';
    
    // Si no está logueado y no está en la página de inicio de sesión
    if (!role && !window.location.pathname.endsWith('index.html')) {
        window.location.href = 'index.html';
        return;
    }

    // Actualizar nombre de usuario y rol en el barra-superior
    document.querySelectorAll('.user-name').forEach(el => el.textContent = role === 'admin' ? 'Admin' : username);
    document.querySelectorAll('.user-role').forEach(el => el.textContent = role === 'admin' ? 'Administrador' : 'Usuario Estándar');
    document.querySelectorAll('.avatar').forEach(el => {
        el.src = role === 'admin' 
            ? 'https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff&rounded=true&bold=true'
            : `https://ui-avatars.com/api/?name=${username}&background=10B981&color=fff&rounded=true&bold=true`;
    });

    // Validar accesos según rol
    const isUser = role === 'user';
    const isAdmin = role === 'admin';

    // Ocultar opciones de admin para usuarios normales
    if (isUser) {
        const adminLinks = document.querySelectorAll('a[href="estadisticas.html"], a[href="configuracion.html"]');
        adminLinks.forEach(link => {
            if (link.parentElement && link.parentElement.tagName === 'LI') {
                link.parentElement.style.display = 'none';
            }
        });
    } else if (isAdmin) {
        // Renombrar "Mis Tickets" a "Todos los Tickets" en el menu-lateral
        document.querySelectorAll('a[href="tickets.html"]').forEach(link => {
            if (link.innerHTML.includes('Mis Tickets')) {
                link.innerHTML = '<i class="fa-solid fa-ticket"></i> Todos los Tickets';
            }
        });
        
        // Actualizar títulos de encabezado en tickets.html para el admin
        const pageTitle = document.querySelector('h1');
        if (pageTitle && pageTitle.textContent === 'Tus Tickets de Incidencia') {
            pageTitle.textContent = 'Gestión Global de Tickets';
            const pageDesc = document.querySelector('.page-heading p');
            if (pageDesc) pageDesc.textContent = 'Vista general y gestión de todas las incidencias creadas por los usuarios.';
        }

        // OCULTAR creación de tickets para el admin
        document.querySelectorAll('a[href="nuevo_ticket.html"]').forEach(link => {
            if (link.parentElement && link.parentElement.tagName === 'LI') {
                link.parentElement.style.display = 'none';
            }
        });

        // Ocultar botones de "Crear Nuevo", "Abrir Incidencia", etc.
        const creationButtons = document.querySelectorAll('.btn-principal, .btn-secundario, a.btn-principal');
        creationButtons.forEach(btn => {
            const text = btn.textContent.toLowerCase();
            if (text.includes('crear nuevo') || text.includes('abrir incidencia') || text.includes('enviar ticket')) {
                btn.style.display = 'none';
            }
        });

        // Redirigir si se intenta acceder a nuevo_ticket.html manualmente
        if (window.location.pathname.endsWith('nuevo_ticket.html')) {
            window.location.href = 'admin.html';
        }
    }

    // Actualizar enlaces de Dashboard según rol sin cambiar el texto original
    const dashboardLink = document.querySelector('a[href="index.html"]');
    if (dashboardLink) {
        if (isAdmin) {
            dashboardLink.setAttribute('href', 'admin.html');
        } else {
            dashboardLink.setAttribute('href', 'user.html');
        }
    }

    // Lógica de Cerrar Sesión
    const logoutLinks = document.querySelectorAll('a.logout');
    logoutLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.clear();
            window.location.href = 'index.html';
        });
    });

    // --- Notificaciones ---
    if (typeof updateNotificationUI === 'function') {
        updateNotificationUI();
    }

    const notifBtns = document.querySelectorAll('.btn-notifications');
    notifBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (typeof toggleNotifications === 'function') {
                toggleNotifications(e);
            }
        });
    });
});
