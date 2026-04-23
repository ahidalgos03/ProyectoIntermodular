// db.js - Simulated LocalStorage Database for Tickets

// =====================================================
// CENTRALIZED KNOWLEDGE BASE DATA
// =====================================================
window.kbData = {
    keywords: {
        // Redes y VPN
        'wifi': 'Redes y Comunicaciones',
        'internet': 'Redes y Comunicaciones',
        'vpn': 'Redes y Comunicaciones',
        'red': 'Redes y Comunicaciones',
        'ip': 'Redes y Comunicaciones',
        'conexion': 'Redes y Comunicaciones',
        'conectar': 'Redes y Comunicaciones',
        'dns': 'Redes y Comunicaciones',
        'lento': 'Redes y Comunicaciones',
        'fibra': 'Redes y Comunicaciones',
        
        // Impresoras
        'impresora': 'Impresoras e IPs',
        'imprimir': 'Impresoras e IPs',
        'driver': 'Impresoras e IPs',
        'toner': 'Impresoras e IPs',
        'escaner': 'Impresoras e IPs',
        'atasco': 'Impresoras e IPs',
        'mancha': 'Impresoras e IPs',

        // Hardware y Periféricos
        'raton': 'Hardware (Equipos, Periféricos)',
        'ratón': 'Hardware (Equipos, Periféricos)',
        'teclado': 'Hardware (Equipos, Periféricos)',
        'monitor': 'Hardware (Equipos, Periféricos)',
        'pantalla': 'Hardware (Equipos, Periféricos)',
        'usb': 'Hardware (Equipos, Periféricos)',
        'webcam': 'Hardware (Equipos, Periféricos)',
        'camara': 'Hardware (Equipos, Periféricos)',
        'auriculares': 'Hardware (Equipos, Periféricos)',
        'cascos': 'Hardware (Equipos, Periféricos)',
        'microfono': 'Hardware (Equipos, Periféricos)',
        'altavoces': 'Hardware (Equipos, Periféricos)',
        'dock': 'Hardware (Equipos, Periféricos)',
        'estacion': 'Hardware (Equipos, Periféricos)',
        'hdmi': 'Hardware (Equipos, Periféricos)',
        'cargador': 'Hardware (Equipos, Periféricos)',
        'bateria': 'Hardware (Equipos, Periféricos)',
        'portatil': 'Hardware (Equipos, Periféricos)',

        // Software y Aplicaciones
        'windows': 'Software (SO, Aplicaciones)',
        'office': 'Software (SO, Aplicaciones)',
        'word': 'Software (SO, Aplicaciones)',
        'excel': 'Software (SO, Aplicaciones)',
        'outlook': 'Software (SO, Aplicaciones)',
        'teams': 'Software (SO, Aplicaciones)',
        'zoom': 'Software (SO, Aplicaciones)',
        'chrome': 'Software (SO, Aplicaciones)',
        'browser': 'Software (SO, Aplicaciones)',
        'navegador': 'Software (SO, Aplicaciones)',
        'licencia': 'Software (SO, Aplicaciones)',
        'activar': 'Software (SO, Aplicaciones)',
        'actualizacion': 'Software (SO, Aplicaciones)',
        'error': 'Software (SO, Aplicaciones)',
        'pdf': 'Software (SO, Aplicaciones)',
        'adobe': 'Software (SO, Aplicaciones)',

        // Cuentas y Accesos
        'contraseña': 'Cuentas y Accesos',
        'password': 'Cuentas y Accesos',
        'usuario': 'Cuentas y Accesos',
        'acceso': 'Cuentas y Accesos',
        'bloqueado': 'Cuentas y Accesos',
        'permiso': 'Cuentas y Accesos',
        'active directory': 'Cuentas y Accesos',
        'ad': 'Cuentas y Accesos',
        'mfa': 'Cuentas y Accesos',
        'token': 'Cuentas y Accesos',
        'correo': 'Cuentas y Accesos',
        'email': 'Cuentas y Accesos',

        // Servidores e Infraestructura
        'servidor': 'Servidores e Infraestructura',
        'nas': 'Servidores e Infraestructura',
        'backup': 'Servidores e Infraestructura',
        'raid': 'Servidores e Infraestructura',
        'disco': 'Servidores e Infraestructura',
        'nube': 'Servidores e Infraestructura',
        'cloud': 'Servidores e Infraestructura',
        'azure': 'Servidores e Infraestructura',
    },
    solutions: {
        'Redes y Comunicaciones': [
            { icon: 'fa-wifi', title: 'WiFi limitado / Sin Internet', desc: 'Ejecuta en CMD como admin: netsh int ip reset y luego ipconfig /flushdns. Reinicia el equipo.', tags: ['wifi', 'internet', 'conexion', 'lento'] },
            { icon: 'fa-key', title: 'Error en túnel VPN', desc: 'Limpia las contraseñas guardadas de la VPN en el Gestor de Credenciales de Windows y reintroduce el Token MFA.', tags: ['vpn', 'conectar', 'remoto', 'conexion'] },
            { icon: 'fa-network-wired', title: 'Conflicto de IP, DNS o Fibra', desc: 'Configura el adaptador de red para obtener IP automáticamente o usa los DNS de Google (8.8.8.8). Si el ONT no tiene luz, revisa la fibra.', tags: ['ip', 'dns', 'red', 'fibra', 'conexion'] },
        ],
        'Impresoras e IPs': [
            { icon: 'fa-print', title: 'Impresora colgada (Cola atascada)', desc: 'Abre Servicios de Windows, busca "Cola de Impresión" (Spooler), haz clic derecho → Reiniciar.', tags: ['impresora', 'imprimir', 'cola', 'spooler', 'atasco'] },
            { icon: 'fa-droplet', title: 'Tóner, Driver o Manchas', desc: 'Si el tóner es nuevo, quita la protección. Si hay manchas, limpia el rodillo de transferencia. Reinstala drivers PCL6.', tags: ['toner', 'driver', 'tinta', 'escaner', 'mancha'] },
        ],
        'Hardware (Equipos, Periféricos)': [
            { icon: 'fa-mouse', title: 'Ratón, Teclado o USB no responde', desc: 'Intercambia el puerto USB. Si es inalámbrico, verifica el receptor dongle y cambia las pilas por unas de 1.5V.', tags: ['raton', 'ratón', 'teclado', 'usb', 'periferico'] },
            { icon: 'fa-video', title: 'Webcam, Micrófono o Auriculares', desc: 'Revisa la privacidad en SO y asegúrate de que el acceso esté permitido. Cambia el jack o puerto USB.', tags: ['webcam', 'camara', 'microfono', 'audio', 'video', 'auriculares', 'cascos', 'altavoces'] },
            { icon: 'fa-circle-nodes', title: 'Docking Station, HDMI y Monitores', desc: 'Desconecta el USB-C del Dock, espera 10 segundos y vuelve a conectar. Revisa el canal del monitor (HDMI/DP).', tags: ['dock', 'hdmi', 'monitor', 'pantalla', 'cable', 'estacion'] },
            { icon: 'fa-battery-three-quarters', title: 'Batería, Cargador o Portátil', desc: 'Realiza un reinicio de hardware: mantén pulsado el botón de encendido 30 segundos sin el cargador conectado.', tags: ['bateria', 'cargador', 'alimentacion', 'portatil', 'portátil'] },
        ],
        'Software (SO, Aplicaciones)': [
            { icon: 'fa-microsoft', title: 'Reparar Office (Word, Excel, Outlook...)', desc: 'Ve a Panel de Control → Programas → Microsoft 365 → Cambiar → Reparación en Línea.', tags: ['office', 'word', 'excel', 'outlook', 'error', 'licencia', 'activar'] },
            { icon: 'fa-video', title: 'Videollamadas (Teams, Zoom)', desc: 'Si no carga el video, cierra procesos desde el Administrador de Tareas. Revisa que no haya otra app usando la cámara.', tags: ['teams', 'zoom', 'error', 'actualizacion'] },
            { icon: 'fa-chrome', title: 'Navegadores (Chrome, Edge, Browser)', desc: 'Limpia la caché y cookies (Ctrl+Shift+Del) y deshabilita extensiones sospechosas en el modo incógnito.', tags: ['chrome', 'browser', 'navegador', 'web', 'lento'] },
            { icon: 'fa-file-pdf', title: 'Visor de PDF (Adobe)', desc: 'Si el PDF no abre, repara la instalación de Adobe Reader o establece el navegador como visor por defecto.', tags: ['pdf', 'adobe', 'actualizacion', 'error'] },
            { icon: 'fa-arrows-rotate', title: 'Actualización de Windows', desc: 'Elimina el contenido de la carpeta SoftwareDistribution\\Download y vuelve a buscar actualizaciones.', tags: ['windows', 'actualizacion', 'update', 'error'] },
        ],
        'Cuentas y Accesos': [
            { icon: 'fa-user-lock', title: 'Usuario Bloqueado o AD', desc: 'Solicita al admin que desbloquee la cuenta en Active Directory (AD) tras verificar tu identidad.', tags: ['contraseña', 'password', 'usuario', 'bloqueado', 'active directory', 'ad', 'permiso'] },
            { icon: 'fa-shield-halved', title: 'Problemas con MFA / Token', desc: 'Si has cambiado de móvil, necesitamos resetear tu método de autenticación en la consola de Microsoft cloud.', tags: ['mfa', 'token', 'acceso', 'seguridad'] },
            { icon: 'fa-envelope-open-text', title: 'Correo Corporativo y Email', desc: 'Cierra Outlook, ve al Gestor de Credenciales y elimina todas las entradas que digan "MicrosoftOffice16".', tags: ['correo', 'email', 'outlook', 'contraseña'] },
        ],
        'Servidores e Infraestructura': [
            { icon: 'fa-hard-drive', title: 'Almacenamiento (NAS, Servidor, RAID)', desc: 'Verifica conexión VPN. Si un disco en RAID falla, no apagues el servidor; avisa al técnico para el hot-swap.', tags: ['nas', 'servidor', 'disco', 'red', 'raid'] },
            { icon: 'fa-cloud-arrow-up', title: 'Backups y Nube (Azure, Cloud)', desc: 'Comprueba el espacio en disco del destino y los permisos de escritura en la carpeta de red.', tags: ['backup', 'cloud', 'nube', 'azure', 'disco'] },
        ],
    }
};

// Predictive KB - Advanced Granular Search function (v2)
window.searchKB = function(query) {
    const normalize = (text) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const q = normalize(query);
    if (q.length < 3) return null;

    // Split query into words for better matching (allowing 2-char technical terms like 'ip')
    const queryWords = q.split(/\s+/).filter(w => w.length >= 2);
    
    let matchedCategory = null;
    let relevantSolutions = [];

    // 1. Find the primary category first
    for (const [keyword, category] of Object.entries(window.kbData.keywords)) {
        if (q.includes(normalize(keyword))) {
            matchedCategory = category;
            break;
        }
    }

    if (!matchedCategory) return null;

    // 2. Filter solutions in that category based on query words
    const allCategorySolutions = window.kbData.solutions[matchedCategory] || [];
    
    relevantSolutions = allCategorySolutions.filter(sol => {
        const solText = normalize(sol.title + " " + sol.desc + " " + (sol.tags ? sol.tags.join(" ") : ""));
        // Check if any significant word of the query is in the solution, title or tags
        return queryWords.some(word => solText.includes(word));
    });

    // 3. Fallback: If no specific solutions match perfectly, but we have a category, 
    // we could show the most generic one or nothing to avoid "noise".
    // For "intelligence", if we filtered and got nothing, let's look for partial matches.
    if (relevantSolutions.length === 0) {
        // Only return something if the user typed EXACTLY a registered keyword
        return null; 
    }

    return { 
        category: matchedCategory, 
        solutions: relevantSolutions.slice(0, 3) // Return top 3 most relevant
    };
};

// =====================================================
// CRISIS MODE FUNCTIONS
// =====================================================
window.isCrisisActive = function() {
    return localStorage.getItem('sh_crisis_mode') === 'true';
};

window.getCrisisInfo = function() {
    try {
        return JSON.parse(localStorage.getItem('sh_crisis_info') || 'null');
    } catch(e) { return null; }
};

window.toggleCrisisMode = function(description = 'Incidencia crítica detectada. Técnicos trabajando en ello.') {
    const current = window.isCrisisActive();
    if (current) {
        // Deactivate
        localStorage.removeItem('sh_crisis_mode');
        localStorage.removeItem('sh_crisis_info');
        document.body.classList.remove('crisis-active');
        document.getElementById('global-crisis-banner')?.remove();
        const btn = document.getElementById('crisis-panic-btn');
        if (btn) {
            btn.classList.remove('active-crisis');
            btn.querySelector('.crisis-btn-label').textContent = '🚨 Activar Modo Crisis Global';
            btn.querySelector('.crisis-btn-sub').textContent = 'Alerta a todos los usuarios de una incidencia crítica';
        }
    } else {
        // Activate
        localStorage.setItem('sh_crisis_mode', 'true');
        const crisisInfo = { description, activatedBy: sessionStorage.getItem('sh_username') || 'Admin', activatedAt: new Date().toLocaleString() };
        localStorage.setItem('sh_crisis_info', JSON.stringify(crisisInfo));
        document.body.classList.add('crisis-active');
        window.renderCrisisBanner();
        const btn = document.getElementById('crisis-panic-btn');
        if (btn) {
            btn.classList.add('active-crisis');
            btn.querySelector('.crisis-btn-label').textContent = '✅ Desactivar Modo Crisis';
            btn.querySelector('.crisis-btn-sub').textContent = 'Clic aquí para cancelar la alerta global';
        }
    }
};

window.renderCrisisBanner = function() {
    if (!window.isCrisisActive()) return;
    if (document.getElementById('global-crisis-banner')) return;
    const info = window.getCrisisInfo();
    const banner = document.createElement('div');
    banner.className = 'crisis-banner';
    banner.id = 'global-crisis-banner';
    const role = sessionStorage.getItem('sh_role');
    banner.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation crisis-icon"></i>
        <div class="crisis-text">
            <strong>⚡ ALERTA GLOBAL ACTIVA — MODO CRISIS</strong>
            <span>${info ? info.description : 'Incidencia crítica en curso.'} ${info ? '— Activado por: ' + info.activatedBy : ''}</span>
        </div>
        ${role === 'admin' ? '<button class="crisis-dismiss" onclick="toggleCrisisMode()">Desactivar Crisis</button>' : ''}
    `;
    // Insert after topbar
    const topbar = document.querySelector('.topbar');
    if (topbar && topbar.parentNode) {
        topbar.parentNode.insertBefore(banner, topbar.nextSibling);
    }
};

// Apply crisis mode on every page load
window.applyCrisisMode = function() {
    if (window.isCrisisActive()) {
        document.body.classList.add('crisis-active');
        // Wait for DOM
        setTimeout(() => window.renderCrisisBanner(), 0);
    }
};


// Legacy migration to restore tickets from old branding
function migrateData() {
    const oldTickets = localStorage.getItem('smr_tickets');
    if (oldTickets && !localStorage.getItem('sh_tickets')) {
        localStorage.setItem('sh_tickets', oldTickets);
    }
    
    // Also session data if needed
    if (sessionStorage.getItem('smr_username') && !sessionStorage.getItem('sh_username')) {
        sessionStorage.setItem('sh_username', sessionStorage.getItem('smr_username'));
    }
    if (sessionStorage.getItem('smr_role') && !sessionStorage.getItem('sh_role')) {
        sessionStorage.setItem('sh_role', sessionStorage.getItem('smr_role'));
    }
}

migrateData();

// Initialize default tickets if none exist
function initDB() {
    let raw = localStorage.getItem('sh_tickets');
    if (!raw) {
        localStorage.setItem('sh_tickets', JSON.stringify([]));
    } else {
        // Force cleanup of legacy mock tickets that were persisted before
        let tickets = JSON.parse(raw);
        const mockIds = ['#TK-1045', '#TK-1042', '#TK-1038', '#TK-1035'];
        const originLength = tickets.length;
        tickets = tickets.filter(t => !mockIds.includes(t.id));
        if (tickets.length !== originLength) {
            localStorage.setItem('sh_tickets', JSON.stringify(tickets));
        }
    }
}

window.addCommentToTicket = function(id, text) {
    let tickets = getTickets();
    const index = tickets.findIndex(t => t.id === id);
    if (index > -1) {
        if (!tickets[index].comments) tickets[index].comments = [];
        const author = sessionStorage.getItem('sh_username') || 'Usuario';
        
        let dateObj = new Date();
        let formattedDate = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        
        tickets[index].comments.push({
            author: author,
            text: text,
            date: formattedDate
        });
        localStorage.setItem('sh_tickets', JSON.stringify(tickets));

        // NOTIFICATION LOGIC
        const ticket = tickets[index];
        const currentRole = sessionStorage.getItem('sh_role');
        
        // If admin comments, notify the original creator
        if (currentRole === 'admin' && ticket.creator !== author) {
            addNotification(ticket.creator, ticket.id, `Un administrador ha respondido a tu ticket.`);
        } else if (currentRole === 'user') {
            addNotification('admin', ticket.id, `El usuario ${author} ha comentado en el ticket ${ticket.id}.`);
        }
    }
};

// --- Notifications System ---

function getNotifications() {
    return JSON.parse(localStorage.getItem('sh_notifications') || '[]');
}

function saveNotifications(notifs) {
    localStorage.setItem('sh_notifications', JSON.stringify(notifs));
    updateNotificationUI();
}

function addNotification(user, ticketId, message) {
    const notifs = getNotifications();
    notifs.unshift({
        id: 'notif-' + Date.now(),
        user: user,
        ticketId: ticketId,
        message: message,
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: false
    });
    saveNotifications(notifs);
}

window.markNotificationRead = function(id) {
    const notifs = getNotifications();
    const index = notifs.findIndex(n => n.id === id);
    if (index > -1) {
        notifs[index].read = true;
        saveNotifications(notifs);
    }
};

window.updateNotificationUI = function() {
    const currentUser = sessionStorage.getItem('sh_username');
    const notifs = getNotifications().filter(n => n.user === currentUser);
    const unreadCount = notifs.filter(n => !n.read).length;
    
    const badges = document.querySelectorAll('.notif-btn .badge');
    badges.forEach(badge => {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'flex' : 'none';
    });
};

window.toggleNotifications = function(event) {
    if (event) event.stopPropagation();
    
    let menu = document.getElementById('notif-dropdown');
    if (menu) {
        menu.remove();
        return;
    }
    
    const currentUser = sessionStorage.getItem('sh_username');
    const notifs = getNotifications().filter(n => n.user === currentUser).slice(0, 5); // show last 5
    
    menu = document.createElement('div');
    menu.id = 'notif-dropdown';
    menu.className = 'glass-panel notif-dropdown';
    
    let content = '<div class="notif-header">Notificaciones</div><div class="notif-list">';
    
    if (notifs.length === 0) {
        content += '<div class="notif-empty">No tienes notificaciones</div>';
    } else {
        notifs.forEach(n => {
            content += `
                <div class="notif-item ${n.read ? '' : 'unread'}" onclick="handleNotifClick('${n.id}', '${n.ticketId}')">
                    <div class="notif-icon"><i class="fa-solid fa-comment-dots"></i></div>
                    <div class="notif-body">
                        <p>${n.message}</p>
                        <span class="notif-date">${n.date} • ${n.ticketId}</span>
                    </div>
                </div>
            `;
        });
    }
    
    content += '</div>';
    menu.innerHTML = content;
    
    document.body.appendChild(menu);
    
    // Position menu under the button
    const btn = event.currentTarget.getBoundingClientRect();
    menu.style.top = (btn.bottom + 10) + 'px';
    menu.style.left = (btn.right - 300) + 'px';
    
    // Close on click outside
    document.addEventListener('click', function closeMenu(e) {
        if (!menu.contains(e.target) && e.target !== event.currentTarget) {
            menu.remove();
            document.removeEventListener('click', closeMenu);
        }
    }, { capture: true });
};

window.handleNotifClick = function(notifId, ticketId) {
    markNotificationRead(notifId);
    showTicketDetails(ticketId);
    document.getElementById('notif-dropdown')?.remove();
};

window.changeTicketState = function(id, newState) {
    let tickets = getTickets();
    const index = tickets.findIndex(t => t.id === id);
    if (index > -1) {
        tickets[index].state = newState;
        localStorage.setItem('sh_tickets', JSON.stringify(tickets));
        
        // NOTIFICACIÓN: Avisar al usuario cuando su ticket cambia de estado
        addNotification(tickets[index].creator, tickets[index].id, `El estado de tu ticket ha cambiado a: ${newState}`);
    }
};

window.deleteTicket = function(id) {
    let tickets = getTickets();
    tickets = tickets.filter(t => t.id !== id);
    localStorage.setItem('sh_tickets', JSON.stringify(tickets));
};

window.updateTicketWindow = function(id) {
    const sel = document.getElementById('newStateSelect');
    if (sel) {
        changeTicketState(id, sel.value);
        document.querySelector('.ticket-modal-overlay').remove();
        showNotification('Estado actualizado exitosamente.', () => location.reload());
    }
};

window.removeTicketWindow = function(id) {
    const confirmOverlay = document.createElement('div');
    confirmOverlay.className = 'ticket-modal-overlay';
    confirmOverlay.style.zIndex = '10000'; 
    
    confirmOverlay.innerHTML = `
        <div class="ticket-modal glass-panel" style="text-align: center; max-width: 420px; padding: 40px 30px;">
            <i class="fa-solid fa-triangle-exclamation" style="color: var(--danger-color); font-size: 3.5rem; margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px; font-size: 1.5rem;">¿Borrar Ticket Permanente?</h3>
            <p style="color: var(--text-secondary); margin-bottom: 30px; font-size: 1.05rem;">Esta acción eliminará el ticket de la base de datos y no se podrá revertir. ¿Deseas borrarlo?</p>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button class="btn-filter" id="cancel-delete-btn" style="padding: 10px 20px; font-weight:600; color:white;">Cancelar</button>
                <button id="confirm-delete-btn" style="background: var(--danger-color); color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-weight: 600; font-family: inherit; transition: opacity 0.2s;">Borrar Definitivamente</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(confirmOverlay);
    
    const existingModal = document.querySelector('.ticket-modal-overlay');

    document.getElementById('cancel-delete-btn').addEventListener('click', () => {
        confirmOverlay.remove();
    });
    
    document.getElementById('confirm-delete-btn').addEventListener('click', () => {
        deleteTicket(id);
        confirmOverlay.remove();
        if (existingModal) existingModal.remove();
        showNotification('Ticket eliminado permanentemente.', () => location.reload());
    });
};

window.submitCommentWindow = function(id) {
    const text = document.getElementById('newCommentText').value;
    if (text.trim()) {
        addCommentToTicket(id, text.trim());
        const overlay = document.querySelector('.ticket-modal-overlay');
        if(overlay) overlay.remove();
        showTicketDetails(id); // Reload the modal
    }
};

window.showTicketDetails = function(id) {
    const ticket = getTickets().find(t => t.id === id);
    if (!ticket) return;

    if (!ticket.comments) ticket.comments = [];
    
    const role = sessionStorage.getItem('sh_role');
    const isAdmin = role === 'admin';
    const isOwner = ticket.creator === sessionStorage.getItem('sh_username');

    let stateOptions = '';
    if (isAdmin) {
        stateOptions = `
            <select id="newStateSelect" style="padding: 6px; border-radius: 4px; background: #1e293b; color: white; border: 1px solid var(--border-color);">
                <option value="Abierto" ${ticket.state === 'Abierto' ? 'selected' : ''}>Abierto</option>
                <option value="En Curso" ${ticket.state === 'En Curso' ? 'selected' : ''}>En Curso</option>
                <option value="Resuelto" ${ticket.state === 'Resuelto' ? 'selected' : ''}>Resuelto</option>
            </select>
            <button class="btn-primary" onclick="updateTicketWindow('${ticket.id}')" style="padding: 6px 12px; margin-left: 8px;">Cambiar Estado</button>
        `;
    }

    let deleteButton = isAdmin || isOwner ? `<button onclick="removeTicketWindow('${ticket.id}')" style="background:var(--danger-color); color:white; border:none; padding:8px 12px; border-radius:4px; cursor:pointer;" title="Borrar Ticket Permanente"><i class="fa-solid fa-trash"></i></button>` : '';

    let commentsHtml = ticket.comments.map(c => `
        <div class="comment-bubble ${c.author === sessionStorage.getItem('sh_username') ? 'mine' : 'theirs'}">
            <strong>${c.author}</strong> <span style="font-size:0.75rem; opacity:0.7; margin-left:8px;">${c.date}</span>
            <p style="margin-top:4px;">${c.text}</p>
        </div>
    `).join('');

    const overlay = document.createElement('div');
    overlay.className = 'ticket-modal-overlay';
    
    overlay.innerHTML = `
        <div class="ticket-modal glass-panel" style="display:flex; flex-direction:column; height: 90vh;">
            <div class="panel-header" style="justify-content: space-between; flex-shrink: 0; padding-bottom: 20px;">
                <h2><i class="fa-solid fa-ticket"></i> Detalle de Incidencia ${ticket.id}</h2>
                <div style="display:flex; gap:10px; align-items:center;">
                    ${stateOptions}
                    <button class="btn-icon" onclick="this.closest('.ticket-modal-overlay').remove()"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>
            
            <div style="padding: 24px; flex-shrink: 0; border-bottom: 1px solid var(--border-color);">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <div><span style="color:var(--text-secondary); font-size:0.85rem;">Creado por</span> <br><strong style="font-size:1.05rem;">${ticket.creator}</strong></div>
                    <div><span style="color:var(--text-secondary); font-size:0.85rem;">Usuario / Equipo</span> <br><strong style="font-size:1.05rem;">${ticket.user}</strong></div>
                    <div><span style="color:var(--text-secondary); font-size:0.85rem;">Estado</span> <br><div style="margin-top:5px;">${getStateBadge(ticket.state)}</div></div>
                    <div><span style="color:var(--text-secondary); font-size:0.85rem;">Prioridad</span> <br><div style="margin-top:5px;">${getPriorityBadge(ticket.priority)}</div></div>
                    <div><span style="color:var(--text-secondary); font-size:0.85rem;">Departamento</span> <br><strong style="font-size:1.0rem;">${ticket.department || 'General'}</strong></div>

                    <div><span style="color:var(--text-secondary); font-size:0.85rem;">Contacto / Mesa</span> <br><strong style="font-size:1.0rem;">${ticket.contact || 'No especificado'}</strong></div>
                </div>
                <div style="margin-bottom: 20px;">
                    <span style="color:var(--text-secondary); font-size:0.85rem;">Asunto Breve</span><br>
                    <strong>${ticket.title}</strong>
                </div>
                <div style="margin-bottom: 24px;">
                    <span style="color:var(--text-secondary); font-size:0.85rem;">Categoría</span><br>
                    <strong style="text-transform: capitalize;">${ticket.category || 'General'}</strong>
                </div>
                <div style="background: rgba(15, 23, 42, 0.5); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color); max-height: 450px; overflow-y: auto;">
                    <span style="color:var(--text-secondary); font-size:0.9rem; font-weight:600; display:block; margin-bottom:10px;">Descripción Detallada</span>
                    <span>${(ticket.description || 'No se proporcionó descripción extra.').replace(/\n/g, '<br>')}</span>
                    ${ticket.attachment ? `<div style="margin-top:20px; border-top:1px solid var(--border-color); padding-top:15px;"><span style="color:var(--text-secondary); font-size:0.9rem; font-weight:600; display:block; margin-bottom:10px;"><i class="fa-solid fa-paperclip"></i> Archivo Adjunto (Captura)</span><img src="${ticket.attachment}" style="max-width:100%; max-height:350px; object-fit:contain; border-radius:4px; border:1px solid var(--border-color); display:block; margin:0 auto;" alt="Archivo adjunto"></div>` : ''}
                </div>
            </div>

            <!-- Comments Thread -->
            <div style="flex-grow: 1; overflow-y: auto; padding: 24px; display:flex; flex-direction:column; gap:16px; min-height: 200px;">
                ${commentsHtml.length > 0 ? commentsHtml : '<p style="color:var(--text-muted); text-align:center; margin-top:20px;">No hay comentarios todavía.</p>'}
            </div>

            <!-- Thread Input -->
            <div style="padding: 24px; border-top: 1px solid var(--border-color); flex-shrink: 0; display:flex; gap:10px; flex-direction:column;">
                <div style="display:flex; gap:10px;">
                    <textarea id="newCommentText" placeholder="Escribe tu comentario aquí..." style="flex-grow:1; padding:10px; border-radius:6px; background:#1e293b; color:white; border:1px solid var(--border-color); resize:none; font-family: inherit;" rows="3"></textarea>
                    <div style="display:flex; flex-direction:column; gap:10px; justify-content:flex-start;">
                        <button class="btn-primary" onclick="submitCommentWindow('${ticket.id}')" style="height:40px;"><i class="fa-solid fa-paper-plane"></i> Responder</button>
                        ${deleteButton}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
    
    document.body.appendChild(overlay);
    
    // Auto-scroll to bottom of comments
    const thread = overlay.querySelector('div[style*="overflow-y: auto"]');
    if (thread) thread.scrollTop = thread.scrollHeight;
};

window.showNotification = function(message, callback = null) {
    const overlay = document.createElement('div');
    overlay.className = 'ticket-modal-overlay';
    
    overlay.innerHTML = `
        <div class="ticket-modal glass-panel" style="text-align: center; max-width: 400px; padding: 40px 30px;">
            <i class="fa-solid fa-circle-check" style="color: #10B981; font-size: 3.5rem; margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px; font-size: 1.5rem;">¡Acción Exitosa!</h3>
            <p style="color: var(--text-secondary); margin-bottom: 30px; font-size: 1.05rem;">${message}</p>
            <button class="btn-primary" id="notif-close-btn" style="width: 100%; justify-content: center; padding: 12px;">Aceptar</button>
        </div>
    `;
    
    const close = () => {
        overlay.remove();
        if (callback) callback();
    };
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });
    
    document.body.appendChild(overlay);
    document.getElementById('notif-close-btn').addEventListener('click', close);
};

// Get tickets based on user role
function getTickets() {
    return JSON.parse(localStorage.getItem('sh_tickets') || '[]');
}

// Save a new ticket
window.saveTicket = function(title, category, priority, description, affectedUser = null, departamento = 'General', contacto = '', base64Img = null) {
    let tickets = getTickets();
    
    // Generate new ID (e.g. #TK-1046)
    const lastIdNum = tickets.length > 0 
        ? Math.max(...tickets.map(t => parseInt(t.id.split('-')[1]))) 
        : 1045;
    const newId = `#TK-${lastIdNum + 1}`;
    
    const username = sessionStorage.getItem('sh_username') || 'Usuario';
    
    // Create new ticket object
    const newTicket = {
        id: newId,
        title: title,
        category: category,
        priority: priority,
        state: 'Abierto',
        date: 'Justo ahora',
        user: affectedUser || username,
        creator: username,
        department: departamento,
        contact: contacto,

        attachment: base64Img,
        description: description,
        comments: []
    };
    
    // Add to top of list
    tickets.unshift(newTicket);
    localStorage.setItem('sh_tickets', JSON.stringify(tickets));
    
    // NOTIFICACIÓN: Avisar al admin que hay un nuevo ticket
    addNotification('admin', newId, `Nuevo ticket abierto: ${title}`);
    
    return newTicket;
}

// HTML rendering utilities
function getPriorityBadge(priority) {
    if (priority === 'baja') return '<span class="priority-dot low"></span> Baja';
    if (priority === 'media') return '<span class="priority-dot medium"></span> Media';
    if (priority === 'alta') return '<span class="priority-dot high"></span> Alta';
    if (priority === 'critica' || priority === 'crítica') return '<span class="priority-dot critical"></span> Crítica';
    return '<span class="priority-dot low"></span> ' + priority;
}

function getStateBadge(state) {
    if (state === 'Abierto') return '<span class="status-badge open">Abierto</span>';
    if (state === 'En Curso') return '<span class="status-badge progress">En Curso</span>';
    if (state === 'Resuelto') return '<span class="status-badge solved">Resuelto</span>';
    return '<span class="status-badge">' + state + '</span>';
}

function renderTickets(containerId, isGlobal = false, limit = 0, stateFilter = 'todos', priorityFilter = 'todos') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const tbody = container.tagName === 'TBODY' ? container : container.querySelector('tbody') || container;

    let tickets = getTickets();
    
    // Filter if not admin and not asking for global view
    if (!isGlobal) {
        const username = sessionStorage.getItem('sh_username') || 'Usuario';
        tickets = tickets.filter(t => t.user === username || t.creator === username);
    }
    
    // Normalize and Apply State Filter
    const sFilter = stateFilter.toLowerCase();
    if (sFilter !== 'todos' && sFilter !== 'all') {
        if (sFilter === 'abiertos' || sFilter === 'abierto') {
            tickets = tickets.filter(t => t.state === 'Abierto' || t.state === 'En Curso');
        } else if (sFilter === 'progreso') {
            tickets = tickets.filter(t => t.state === 'En Curso');
        } else if (sFilter === 'resuelto' || sFilter === 'resueltos') {
            tickets = tickets.filter(t => t.state === 'Resuelto');
        } else {
            tickets = tickets.filter(t => t.state.toLowerCase() === sFilter);
        }
    }
    
    // Normalize and Apply Priority Filter
    const pFilter = priorityFilter.toLowerCase();
    if (pFilter !== 'todos' && pFilter !== 'all') {
        tickets = tickets.filter(t => t.priority.toLowerCase() === pFilter);
    }
    
    if (limit > 0) {
        tickets = tickets.slice(0, limit);
    }

    tbody.innerHTML = ''; // Clear current

    tickets.forEach(ticket => {
        const tr = document.createElement('tr');
        
        let html = '';
        if (isGlobal && !containerId.includes('userOnly')) {
            html += `<td>${ticket.user}</td>`;
        } else {
            html += `<td>${ticket.id}</td>`;
        }
        
        html += `<td class="ticket-title">${ticket.title}</td>`;
        html += `<td>${getStateBadge(ticket.state)}</td>`;
        html += `<td>${getPriorityBadge(ticket.priority)}</td>`;
        html += `<td>${ticket.date}</td>`;
        
        // If it's specifically tickets.html view, we want Category and Action
        if (container.dataset.fullView === 'true') {
            html = `<td>${isGlobal ? ticket.user : ticket.id}</td>
                    <td class="ticket-title">${ticket.title}</td>
                    <td style="text-transform: capitalize;">${ticket.category || 'General'}</td>
                    <td>${getStateBadge(ticket.state)}</td>
                    <td>${getPriorityBadge(ticket.priority)}</td>
                    <td>${ticket.date}</td>
                    <td><button class="btn-icon" onclick="showTicketDetails('${ticket.id}')"><i class="fa-solid fa-eye"></i></button></td>`;
        }

        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
    
    updateStats(isGlobal);
}

function updateStats(isGlobal) {
    let tickets = getTickets();
    if (!isGlobal) {
        const username = sessionStorage.getItem('sh_username') || 'Usuario';
        tickets = tickets.filter(t => t.user === username || t.creator === username);
    }
    
    const openCount = document.getElementById('stat-open');
    const progressCount = document.getElementById('stat-progress');
    const solvedCount = document.getElementById('stat-solved');
    
    if (openCount) openCount.textContent = tickets.filter(t => t.state === 'Abierto').length;
    if (progressCount) progressCount.textContent = tickets.filter(t => t.state === 'En Curso').length;
    if (solvedCount) solvedCount.textContent = tickets.filter(t => t.state === 'Resuelto').length;
}

window.filterTicketsBy = function(mode, element) {
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');
    
    // Update the dropdowns to match if possible, or just use the buttons as quick presets
    const statusSelect = document.getElementById('filterStatus');
    if (statusSelect) {
        if (mode === 'Todos') statusSelect.value = 'todos';
        if (mode === 'Abiertos') statusSelect.value = 'abierto';
        if (mode === 'Resueltos') statusSelect.value = 'resuelto';
    }

    applyFilters();
};

window.applyFilters = function() {
    const status = document.getElementById('filterStatus')?.value || 'todos';
    const priority = document.getElementById('filterPriority')?.value || 'todos';
    const role = sessionStorage.getItem('sh_role');
    
    // In full tickets view, we always want global if admin, otherwise user scoped
    const isGlobal = role === 'admin';
    renderTickets('fullTicketsBody', isGlobal, 0, status, priority);
};

// Init when file loaded
initDB();

// Init Search System
function initGlobalSearch() {
    document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.querySelector('.search-bar input');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                
                // Search in Table Rows
                const tableRows = document.querySelectorAll('.tickets-table tbody tr');
                tableRows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(query) ? '' : 'none';
                });
                
                // Search in Knowledge Base Cards
                const kbCards = document.querySelectorAll('.kb-card');
                kbCards.forEach(card => {
                    const text = card.textContent.toLowerCase();
                    card.style.display = text.includes(query) ? '' : 'none';
                });
            });
        }
    });
}

initGlobalSearch();
