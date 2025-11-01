document.getElementById("choice").addEventListener("change", function() {
    const value = this.value;
    const additionalFields = document.getElementById("additionalFields");
    const submitBtn = document.getElementById("submitBtn");
    
    // Limpiar campos existentes
    additionalFields.innerHTML = "";
    
    // Si no hay selección, mostrar placeholder
    if (value === "") {
        additionalFields.classList.remove("active");
        additionalFields.innerHTML = '<div class="placeholder"><p>👆 Selecciona una categoría para ver más campos</p></div>';
        submitBtn.style.display = "none";
        return;
    }
    
    // Activar el contenedor
    additionalFields.classList.add("active");
    submitBtn.style.display = "block";
    
    // Generar campos según la selección
    if (value === "books") {
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="bookTitle">Título del Libro: *</label>
                <input type="text" id="bookTitle" name="bookTitle" required placeholder="Ej: Cien años de soledad">
            </div>
            <div class="form-group">
                <label for="author">Autor: *</label>
                <input type="text" id="author" name="author" required placeholder="Ej: Gabriel García Márquez">
            </div>
            <div class="form-group">
                <label for="year">Año de Publicación:</label>
                <input type="number" id="year" name="year" placeholder="Ej: 1967" min="1000" max="2024">
            </div>
            <div class="form-group">
                <label for="genre">Género Literario:</label>
                <input type="text" id="genre" name="genre" placeholder="Ej: Realismo mágico">
            </div>
        `;
    } 
    else if (value === "movies") {
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="movieTitle">Título de la Película: *</label>
                <input type="text" id="movieTitle" name="movieTitle" required placeholder="Ej: El Padrino">
            </div>
            <div class="form-group">
                <label for="director">Director: *</label>
                <input type="text" id="director" name="director" required placeholder="Ej: Francis Ford Coppola">
            </div>
            <div class="form-group">
                <label for="releaseYear">Año de Estreno:</label>
                <input type="number" id="releaseYear" name="releaseYear" placeholder="Ej: 1972" min="1888" max="2024">
            </div>
            <div class="form-group">
                <label for="duration">Duración (minutos):</label>
                <input type="number" id="duration" name="duration" placeholder="Ej: 175" min="1">
            </div>
        `;
    }
    else if (value === "music") {
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="songTitle">Título de la Canción: *</label>
                <input type="text" id="songTitle" name="songTitle" required placeholder="Ej: Bohemian Rhapsody">
            </div>
            <div class="form-group">
                <label for="artist">Artista/Banda: *</label>
                <input type="text" id="artist" name="artist" required placeholder="Ej: Queen">
            </div>
            <div class="form-group">
                <label for="album">Álbum:</label>
                <input type="text" id="album" name="album" placeholder="Ej: A Night at the Opera">
            </div>
            <div class="form-group">
                <label for="musicGenre">Género Musical:</label>
                <input type="text" id="musicGenre" name="musicGenre" placeholder="Ej: Rock">
            </div>
        `;
    }
    else if (value === "games") {
        additionalFields.innerHTML = `
            <div class="form-group">
                <label for="gameTitle">Título del Videojuego: *</label>
                <input type="text" id="gameTitle" name="gameTitle" required placeholder="Ej: The Legend of Zelda">
            </div>
            <div class="form-group">
                <label for="developer">Desarrollador: *</label>
                <input type="text" id="developer" name="developer" required placeholder="Ej: Nintendo">
            </div>
            <div class="form-group">
                <label for="platform">Plataforma:</label>
                <input type="text" id="platform" name="platform" placeholder="Ej: Nintendo Switch">
            </div>
            <div class="form-group">
                <label for="gameGenre">Género:</label>
                <input type="text" id="gameGenre" name="gameGenre" placeholder="Ej: Aventura, RPG">
            </div>
        `;
    }
});

// Event listener para el envío del formulario
document.getElementById("dynamicForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const choice = document.getElementById("choice").value;
    const resultsContainer = document.getElementById("results");
    const resultsContent = document.getElementById("resultsContent");
    
    // Recopilar datos según la categoría seleccionada
    let formData = {
        categoria: choice
    };
    
    if (choice === "books") {
        formData.titulo = document.getElementById("bookTitle").value;
        formData.autor = document.getElementById("author").value;
        formData.año = document.getElementById("year").value || "No especificado";
        formData.genero = document.getElementById("genre").value || "No especificado";
    }
    else if (choice === "movies") {
        formData.titulo = document.getElementById("movieTitle").value;
        formData.director = document.getElementById("director").value;
        formData.año = document.getElementById("releaseYear").value || "No especificado";
        formData.duracion = document.getElementById("duration").value || "No especificado";
    }
    else if (choice === "music") {
        formData.titulo = document.getElementById("songTitle").value;
        formData.artista = document.getElementById("artist").value;
        formData.album = document.getElementById("album").value || "No especificado";
        formData.genero = document.getElementById("musicGenre").value || "No especificado";
    }
    else if (choice === "games") {
        formData.titulo = document.getElementById("gameTitle").value;
        formData.desarrollador = document.getElementById("developer").value;
        formData.plataforma = document.getElementById("platform").value || "No especificado";
        formData.genero = document.getElementById("gameGenre").value || "No especificado";
    }
    
    // Mostrar resultados
    resultsContent.innerHTML = "";
    for (let key in formData) {
        resultsContent.innerHTML += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${formData[key]}</p>`;
    }
    
    resultsContainer.style.display = "block";
    
    console.log("Datos del formulario:", formData);
    
    // Scroll suave hacia los resultados
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});