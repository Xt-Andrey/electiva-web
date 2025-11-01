function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Desactivar todos los tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Activar la sección y tab seleccionados
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}