async function teachersdata() {
    try {
      const response = await fetch('../api/teacher.json');
      if (!response.ok) {
        throw new Error(`Erreur lors du chargement : ${response.status}`);
      }
  
      const fichiers = await response.json();
  
      const container = document.getElementById("teacherContainer");
    //   container.className = "row g-4"; 
  
      fichiers.forEach(fichier => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
  
        col.innerHTML = `
          <div class="card h-100">
            <img src="${fichier.image}" class="card-img-top" alt="${fichier.name}">
            <div class="card-body" style="text-align: start;">
              <h5 class="card-title">${fichier.name}</h5>
              <p class="card-text">${fichier.description}</p>
            </div>
            <div class="card-footer d-flex gap-4 p-4" style="text-align: start; border-top: 1px solid #f7f3f3;">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        `;
  
        container.appendChild(col);
      });
    } catch (error) {
      console.error('Erreur :', error);
    }
  }
  
  teachersdata();
  