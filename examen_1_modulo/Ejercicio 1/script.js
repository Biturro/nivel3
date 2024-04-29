let libros = [
    { titulo: "El nombre de la rosa", autor: "Umberto Eco", leido: true },
    { titulo: "El señor de los anillos", autor: "J.R.R Tolkien", leido: true },
    {
      titulo: "El ingenioso hidalgo Don Quijiote de la Mancha",
      autor: "Miguel de Cervantes",
      leido: true,
    },
    { titulo: "El camino", autor: "Miguel Delibes", leido: "false" },
  ];
  
  libros.forEach((libro) => {
    if (libro.leido === true) {
      console.log(`"Ya has leido "${libro.titulo}" de ${libro.autor}"`);
    } else {
      console.log(`"Aun no has leido "${libro.titulo}" de ${libro.autor}"`);
    }
  });