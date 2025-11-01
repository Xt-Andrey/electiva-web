document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Validar que el formulario esté completo
    if (!this.checkValidity()) {
        event.preventDefault();
        alert("Por favor, complete correctamente todos los campos obligatorios.");
        return;
    }
    
    // Validar contraseña
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        event.preventDefault();
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }
    
    // Validar que se acepten los términos
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        event.preventDefault();
        alert("Debe aceptar los Términos y Condiciones para continuar.");
        return;
    }
    
    // Si todo está bien, mostrar mensaje de éxito
    event.preventDefault(); // En producción, esto se quitaría para enviar al servidor
    
    // Recopilar datos del formulario
    const formData = {
        nombre: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        fechaNacimiento: document.getElementById("dob").value,
        pais: document.getElementById("country").value,
        genero: document.querySelector('input[name="gender"]:checked').value,
        intereses: Array.from(document.querySelectorAll('input[name="interests"]:checked'))
                       .map(cb => cb.value)
    };
    
    console.log("Datos del formulario:", formData);
    alert("✅ ¡Registro exitoso! Revisa la consola para ver los datos.");
});

// Validación en tiempo real de la contraseña
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    const helpText = this.nextElementSibling;
    
    if (password.length >= 8) {
        this.style.borderColor = "#2ecc71";
        helpText.style.color = "#2ecc71";
        helpText.textContent = "✓ Contraseña válida";
    } else {
        this.style.borderColor = "#ff4757";
        helpText.style.color = "#ff4757";
        helpText.textContent = `Faltan ${8 - password.length} caracteres`;
    }
});

// Validación en tiempo real del email
document.getElementById("email").addEventListener("blur", function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email) && email !== "") {
        this.style.borderColor = "#ff4757";
    }
});