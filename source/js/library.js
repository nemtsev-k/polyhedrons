const polyhedron_array = [

  //faces - грани
  //edges - рёбра
  //vertices - вершины

  {
    'name_rus': 'Тетраэдр',
    'name_eng': 'Tetrahedron',
    'family_rus': '0',
    'family_eng': 'Platonic solids',
    'image': 'tetrahedron.svg',
    'faces': 4,
    'edges': 6,
    'vertices': 4
  },
  {
    'name_rus': 'Куб (Гексаэдр)',
    'name_eng': 'Cube (Hexahedron)',
    'family_rus': '0',
    'family_eng': 'Platonic solids',
    'image': 'hexahedron.svg',
    'faces': 6,
    'edges': 12,
    'vertices': 8
  },
  {
    'name_rus': 'Октаэдр',
    'name_eng': 'Octahedron',
    'family_rus': '0',
    'family_eng': 'Platonic solids',
    'image': 'octahedron.svg',
    'faces': 8,
    'edges': 12,
    'vertices': 6
  },
  {
    'name_rus': 'Додекаэдр',
    'name_eng': 'Dodecahedron',
    'family_rus': '0',
    'family_eng': 'Platonic solids',
    'image': 'dodecahedron.svg',
    'faces': 12,
    'edges': 30,
    'vertices': 20
  },
  {
    'name_rus': 'Икосаэдр',
    'name_eng': 'Icosahedron',
    'family_rus': '0',
    'family_eng': 'Platonic solids',
    'image': 'icosahedron.svg',
    'faces': 20,
    'edges': 30,
    'vertices': 12
  },

  {
    'name_rus': 'Усечённый тетраэдр',
    'name_eng': 'Truncated Tetrahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'truncated_tetrahedron.svg',
    'faces': 8,
    'edges': 18,
    'vertices': 12
  },
  {
    'name_rus': 'Кубооктаэдр',
    'name_eng': 'Cuboctahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'cuboctahedron.svg',
    'faces': 14,
    'edges': 24,
    'vertices': 12
  },
  {
    'name_rus': 'Усечённый куб',
    'name_eng': 'Truncated Cube',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'truncated_cube.svg',
    'faces': 14,
    'edges': 36,
    'vertices': 24
  },
  {
    'name_rus': 'Усечённый октаэдр',
    'name_eng': 'Truncated Octahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'truncated_octahedron.svg',
    'faces': 14,
    'edges': 36,
    'vertices': 24
  },
  {
    'name_rus': 'Ромбокубооктаэдр',
    'name_eng': 'Rhombicuboctahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'rhombicuboctahedron.svg',
    'faces': 26,
    'edges': 48,
    'vertices': 24
  },
  {
    'name_rus': 'Усечённый кубооктаэдр',
    'name_eng': 'Truncated Cuboctahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'truncated_cuboctahedron.svg',
    'faces': 26,
    'edges': 72,
    'vertices': 48,
    'Грани_список': [
      {'count': 12, 'name': 'квадрат'},
      {'count': 8, 'name': 'шестиугольник'},
      {'count': 6, 'name': 'восьмиугольник'}
    ]
  },
  {
    'name_rus': 'Плосконосый куб',
    'name_eng': 'Snub Cube',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'snub_cube.svg',
    'faces': 38,
    'edges': 60,
    'vertices': 24
  },
  {
    'name_rus': 'Икосододекаэдр',
    'name_eng': 'Icosidodecahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'icosidodecahedron.svg',
    'faces': 32,
    'edges': 60,
    'vertices': 30
  },
  {
    'name_rus': 'Усечённый додекаэдр',
    'name_eng': 'Truncated Dodecahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'truncated_dodecahedron.svg',
    'faces': 32,
    'edges': 90,
    'vertices': 60
  },
  {
    'name_rus': 'Усечённый икосаэдр',
    'name_eng': 'Truncated Icosahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'truncated_icosahedron.svg',
    'faces': 32,
    'edges': 90,
    'vertices': 60
  },
  {
    'name_rus': 'Ромбоикосододекаэдр',
    'name_eng': 'Rhombicosidodecahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'rhombicosidodecahedron.svg',
    'faces': 62,
    'edges': 120,
    'vertices': 60
  },
  {
    'name_rus': 'Ромбоусечённый икосододекаэдр',
    'name_eng': 'Truncated Icosidodecahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'truncated_icosidodecahedron.svg',
    'faces': 62,
    'edges': 180,
    'vertices': 120
  },
  {
    'name_rus': 'Плосконосый додекаэдр',
    'name_eng': 'Snub Dodecahedron',
    'family_rus': '1',
    'family_eng': 'Archimedean Solids',
    'image': 'snub_dodecahedron.svg',
    'faces': 92,
    'edges': 150,
    'vertices': 60
  },

  {
    'name_rus': 'Ромбододекаэдр',
    'name_eng': 'Rhombic Dodecahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'rhombic_dodecahedron.svg',
    'faces': 12,
    'edges': 24,
    'vertices': 14
  },
  {
    'name_rus': 'Ромботриаконтаэдр',
    'name_eng': 'Rhombic Triacontahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'rhombic_triacontahedron.svg',
    'faces': 30,
    'edges': 60,
    'vertices': 32
  },
  {
    'name_rus': 'Триакистетраэдр',
    'name_eng': 'Triakis Tetrahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'triakis_tetrahedron.svg',
    'faces': 12,
    'edges': 18,
    'vertices': 8
  },
  {
    'name_rus': 'Тетракисгексаэдр (преломлённый куб)',
    'name_eng': 'Tetrakishexahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'tetrakishexahedron.svg',
    'faces': 24,
    'edges': 36,
    'vertices': 14
  },

  {
    'name_rus': 'Пентакисдодекаэдр',
    'name_eng': 'Pentakis Dodecahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'pentakis_dodecahedron.svg',
    'faces': 60,
    'edges': 90,
    'vertices': 32
  },


  {
    'name_rus': 'Триакисоктаэдр ',
    'name_eng': 'Triakis Octahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'triakis_octahedron.svg',
    'faces': 24,
    'edges': 36,
    'vertices': 14
  },
  {
    'name_rus': 'Триакисикосаэдр',
    'name_eng': 'Triakis Icosahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'triakis_icosahedron.svg',
    'faces': 60,
    'edges': 90,
    'vertices': 32
  },
  {
    'name_rus': 'Дельтоидальный икоситетраэдр',
    'name_eng': 'Deltoidal Icositetrahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'deltoidal_icositetrahedron.svg',
    'faces': 24,
    'edges': 48,
    'vertices': 26
  },
  {
    'name_rus': 'Дельтоидальный гексеконтаэдр',
    'name_eng': 'Deltoidal Hexecontahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'deltoidal_hexecontahedron.svg',
    'faces': 60,
    'edges': 120,
    'vertices': 62
  },
  {
    'name_rus': 'Гекзакисикосаэдр',
    'name_eng': 'Disdyakis Triacontahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'disdyakis_triacontahedron.svg',
    'faces': 120,
    'edges': 180,
    'vertices': 62
  },
  {
    'name_rus': 'Гекзакисикосаэдр',
    'name_eng': 'Disdyakis Dodecahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'disdyakis_dodecahedron.svg',
    'faces': 48,
    'edges': 72,
    'vertices': 26
  },
  {
    'name_rus': 'Пентагональный икоситетраэдр',
    'name_eng': 'Pentagonal Icositetrahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'pentagonal_icositetrahedron.svg',
    'faces': 24,
    'edges': 60,
    'vertices': 38
  },
  {
    'name_rus': 'Пентагональный гексеконтаэдр',
    'name_eng': 'Pentagonal Hexecontahedron',
    'family_rus': '2',
    'family_eng': 'Catalan Solids',
    'image': 'pentagonal_hexecontahedron.svg',
    'faces': 60,
    'edges': 150,
    'vertices': 92
  },

  {
    'name_rus': 'Малый звёздчатый додекаэдр',
    'name_eng': 'Small Stellated Dodecahedron',
    'family_rus': '3',
    'family_eng': 'Kepler-Poinsot Solids',
    'image': 'small_stellated_dodecahedron.svg',
    'faces': 12,
    'edges': 30,
    'vertices': 12
  },
  {
    'name_rus': 'Большой додекаэдр',
    'name_eng': 'Great Dodecahedron',
    'family_rus': '3',
    'family_eng': 'Kepler-Poinsot Solids',
    'image': 'great_dodecahedron.svg',
    'faces': 12,
    'edges': 30,
    'vertices': 12
  },
  {
    'name_rus': 'Большой звездчатый додекаэдр',
    'name_eng': 'Great Stellated Dodecahedron',
    'family_rus': '3',
    'family_eng': 'Kepler-Poinsot Solids',
    'image': 'great_stellated_dodecahedron.svg',
    'faces': 12,
    'edges': 30,
    'vertices': 20
  },
  {
    'name_rus': 'Большой икосаэдр',
    'name_eng': 'Great Icosahedron',
    'family_rus': '3',
    'family_eng': 'Kepler-Poinsot Solids',
    'image': 'great_icosahedron.svg',
    'faces': 20,
    'edges': 30,
    'vertices': 12
  },


  {
    'name_rus': 'Звёздчатый октаэдр (Соединение двух тетраэдров)',
    'name_eng': 'Stella Octangula (Compound of two tetrahedra)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': 'stella_octangula.svg',
    'faces': 8,
    'edges': 12,
    'vertices': 8
  },
  {
    'name_rus': 'Соединение пяти октаэдров (Первая составная форма звёздчатого икосаэдра)',
    'name_eng': 'Compound of five octahedra (First compound stellation oficosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Соединение пяти тетраэдров (Вторая составная форма звёздчатого икосаэдра)',
    'name_eng': 'Compound of five tetrahedra (Second compound stellation oficosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Соединение десяти тетраэдров (Третья составная формазвёздчатого икосаэдра)',
    'name_eng': 'Compound of ten tetrahedra (Third compound stellation oficosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый триамбический икосаэдр (Первая звёздчатая формаикосаэдра) (Триакисикосаэдр)',
    'name_eng': 'Small triambic icosahedron (First stellation of icosahedron) (Triakis icosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Вторая звёздчатая форма икосаэдра',
    'name_eng': 'Second stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Выемчатый додекаэдр (Третья звёздчатая форма икосаэдра)',
    'name_eng': 'Excavated dodecahedron (Third stellation of icosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Четвёртая звёздчатая форма икосаэдра',
    'name_eng': 'Fourth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Пятая звёздчатая форма икосаэдра',
    'name_eng': 'Fifth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Шестая звёздчатая форма икосаэдра',
    'name_eng': 'Sixth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Седьмая звёздчатая форма икосаэдра',
    'name_eng': 'Seventh stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Восьмая звёздчатая форма икосаэдра',
    'name_eng': 'Eighth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой триамбикикосаэдр (Девятая звёздчатая формаикосаэдра)',
    'name_eng': 'Ninth stellation of icosahedron (Great triambic icosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Десятая звёздчатая форма икосаэдра',
    'name_eng': 'Tenth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Одиннадцатая звёздчатая форма икосаэдра',
    'name_eng': 'Eleventh stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Двенадцатая звёздчатая форма икосаэдра',
    'name_eng': 'Twelfth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Тринадцатая звёздчатая форма икосаэдра',
    'name_eng': 'Thirteenth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Четырнадцатая звёздчатая форма икосаэдра',
    'name_eng': 'Fourteenth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Пятнадцатая звёздчатая форма икосаэдра',
    'name_eng': 'Fifteenth stellation of icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой икосаэдр (правильный) (Шестнадцатая звёздчатая форма икосаэдра)',
    'name_eng': 'Great icosahedron (regular) (Sixteenth stellation of icosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Ехиднаэдр (Завершающая, семнадцатая звёздчатая форма икосаэдра)',
    'name_eng': 'Final stellation of the icosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Соединение куба иоктаэдра (Первая звёздчатая форма кубооктаэдра)',
    'name_eng': 'Compound of cube andoctahedron (First stellation of cuboctahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Вторая звёздчатая форма кубооктаэдра',
    'name_eng': 'Second stellation of cuboctahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Третья звёздчатая форма кубооктаэдра',
    'name_eng': 'Third stellation of cuboctahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Четвёртая звёздчатая форма кубооктаэдра',
    'name_eng': 'Fourth stellation of cuboctahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Первая звёздчатая форма икосододекаэдра (Соединение додекаэдра и икосаэдра',
    'name_eng': 'First stellation oficosidodecahedron (Compound of dodecahedronand icosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Вторая звёздчатая форма икосододекаэдра',
    'name_eng': 'Second stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Третья звёздчатая формаикосододекаэдра',
    'name_eng': 'Third stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Четвёртая звёздчатая форма икосододекаэдра (Соединение малогозвёздчатогододекаэдра и триакисикосаэдра)',
    'name_eng': 'Fourth stellation of icosidodecahedron (Compound of small stellateddodecahedron and triakis icosahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Пятая звёздчатая форма икосододекаэдра (Соединение малого звёздчатого додекаэдра и пяти октаэдров)',
    'name_eng': 'Fifth stellation of icosidodecahedron (Compound of small stellated dodecahedron and five octahedra)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Шестая звёздчатая форма икосододекаэдра',
    'name_eng': 'Sixth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Седьмая звёздчатая форма икосододекаэдра',
    'name_eng': 'Seventh stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Восьмая звёздчатая форма икосододекаэдра (Соединение пятитетраэдров и большого додекаэдра)',
    'name_eng': 'Eighth stellation of icosidodecahedron (Compound of five tetrahedra and great dodecahedron)',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Девятая звёздчатая форма икосододекаэдра',
    'name_eng': 'Ninth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Десятая звёздчатая форма икосододекаэдра',
    'name_eng': 'Tenth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Одиннадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Eleventh stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Двенадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Twelfth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Тринадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Thirteenth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Четырнадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Fourteenth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Соединение большого звёздчатого додекаэдра и большого икосаэдра',
    'name_eng': 'Compound of great stellated dodecahedron and greaticosahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Пятнадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Fifteenth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Шестнадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Sixteenth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Семнадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Seventeenth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Восемнадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Eighteenth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Девятнадцатая звёздчатая форма икосододекаэдра',
    'name_eng': 'Nineteenth stellation of icosidodecahedron',
    'family_rus': '4',
    'family_eng': 'Star Polyhedron',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },


  {
    'name_rus': 'Квадратная пирамида',
    'name_eng': 'Square Pyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'square_pyramid.svg',
    'faces': 5,
    'edges': 8,
    'vertices': 5
  },
  {
    'name_rus': 'Пятиугольная пирамида',
    'name_eng': 'Pentagonal Pyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_pyramid.svg',
    'faces': 6,
    'edges': 10,
    'vertices': 6
  },
  {
    'name_rus': 'Трёхскатный купол',
    'name_eng': 'Triangular Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'triangular_cupola.svg',
    'faces': 8,
    'edges': 15,
    'vertices': 9
  },
  {
    'name_rus': 'Четырёхскатный купол',
    'name_eng': 'Square Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'square_cupola.svg',
    'faces': 10,
    'edges': 20,
    'vertices': 12
  },
  {
    'name_rus': 'Пятискатный купол',
    'name_eng': 'Pentagonal Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_cupola.svg',
    'faces': 12,
    'edges': 25,
    'vertices': 15
  },
  {
    'name_rus': 'Пятискатная ротонда',
    'name_eng': 'Pentagonal Rotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_rotunda.svg',
    'faces': 17,
    'edges': 35,
    'vertices': 20
  },
  {
    'name_rus': 'Удлинённая треугольная пирамида',
    'name_eng': 'Elongated Triangular Pyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_triangular_pyramid.svg',
    'faces': 7,
    'edges': 12,
    'vertices': 7
  },
  {
    'name_rus': 'Удлинённая четырёхугольная пирамида',
    'name_eng': 'Elongated Square Pyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_square_pyramid.svg',
    'faces': 9,
    'edges': 16,
    'vertices': 9
  },
  {
    'name_rus': 'Удлинённая пятиугольная пирамида',
    'name_eng': 'Elongated Pentagonal Pyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_pyramid.svg',
    'faces': 11,
    'edges': 20,
    'vertices': 11
  },
  {
    'name_rus': 'Скрученно удлинённая четырёхугольная пирамида',
    'name_eng': 'Gyroelongated Square Pyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_square_pyramid.svg',
    'faces': 13,
    'edges': 20,
    'vertices': 9
  },
  {
    'name_rus': 'Скрученно удлинённая пятиугольная пирамида',
    'name_eng': 'Gyroelongated Pentagonal Pyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_pentagonal_pyramid.svg',
    'faces': 16,
    'edges': 25,
    'vertices': 11
  },
  {
    'name_rus': 'Треугольная бипирамида',
    'name_eng': 'Triangular Dipyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'triangular_dipyramid.svg',
    'faces': 6,
    'edges': 9,
    'vertices': 5
  },
  {
    'name_rus': 'Пятиугольная бипирамида',
    'name_eng': 'Pentagonal Dipyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_dipyramid.svg',
    'faces': 10,
    'edges': 15,
    'vertices': 7
  },
  {
    'name_rus': 'Удлинённая треугольная бипирамида',
    'name_eng': 'Elongated Triangular Dipyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_triangular_dipyramid.svg',
    'faces': 9,
    'edges': 15,
    'vertices': 8
  },
  {
    'name_rus': 'Удлинённая четырёхугольная бипирамида',
    'name_eng': 'Elongated Square Dipyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_square_dipyramid.svg',
    'faces': 12,
    'edges': 20,
    'vertices': 10
  },
  {
    'name_rus': 'Удлинённая пятиугольная бипирамида',
    'name_eng': 'Elongated Pentagonal Dipyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_dipyramid.svg',
    'faces': 15,
    'edges': 25,
    'vertices': 12
  },
  {
    'name_rus': 'Скрученно удлинённая четырёхугольная бипирамида',
    'name_eng': 'Gyroelongated Square Dipyramid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_square_dipyramid.svg',
    'faces': 16,
    'edges': 24,
    'vertices': 10
  },
  {
    'name_rus': 'Удлинённый трёхскатный купол',
    'name_eng': 'Elongated Triangular Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_triangular_cupola.svg',
    'faces': 14,
    'edges': 27,
    'vertices': 15
  },
  {
    'name_rus': 'Удлинённый четырёхскатный купол',
    'name_eng': 'Elongated Square Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_square_cupola.svg',
    'faces': 18,
    'edges': 36,
    'vertices': 20
  },
  {
    'name_rus': 'Удлинённый пятискатный купол',
    'name_eng': 'Elongated Pentagonal Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_cupola.svg',
    'faces': 22,
    'edges': 45,
    'vertices': 25
  },
  {
    'name_rus': 'Удлинённая пятискатная ротонда',
    'name_eng': 'Elongated Pentagonal Rotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_rotunda.svg',
    'faces': 27,
    'edges': 55,
    'vertices': 30
  },
  {
    'name_rus': 'Скрученно удлинённый трёхскатный купол',
    'name_eng': 'Gyroelongated Triangular Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_triangular_cupola.svg',
    'faces': 20,
    'edges': 33,
    'vertices': 15
  },
  {
    'name_rus': 'Скрученно удлинённый четырёхскатный купол',
    'name_eng': 'Gyroelongated Square Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_square_cupola.svg',
    'faces': 26,
    'edges': 44,
    'vertices': 20
  },
  {
    'name_rus': 'Скрученно удлинённый пятискатный купол',
    'name_eng': 'Gyroelongated Pentagonal Cupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_pentagonal_cupola.svg',
    'faces': 32,
    'edges': 55,
    'vertices': 25
  },
  {
    'name_rus': 'Скрученно удлинённая пятискатная ротонда',
    'name_eng': 'Gyroelongated Pentagonal Rotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_pentagonal_rotunda.svg',
    'faces': 37,
    'edges': 65,
    'vertices': 30
  },
  {
    'name_rus': 'Трёхскатный прямой бикупол',
    'name_eng': 'Triangular Orthobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'triangular_orthobicupola.svg',
    'faces': 14,
    'edges': 24,
    'vertices': 12
  },
  {
    'name_rus': 'Четырёхскатный прямой бикупол',
    'name_eng': 'Square Orthobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'square_orthobicupola.svg',
    'faces': 18,
    'edges': 32,
    'vertices': 16
  },
  {
    'name_rus': 'Пятискатный прямой бикупол',
    'name_eng': 'Pentagonal Orthobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_orthobicupola.svg',
    'faces': 22,
    'edges': 40,
    'vertices': 20
  },
  {
    'name_rus': 'Двускатный повёрнутый бикупол (гиробифастигиум)',
    'name_eng': 'Gyrobifastigium',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyrobifastigium.svg',
    'faces': 8,
    'edges': 14,
    'vertices': 8
  },
  {
    'name_rus': 'Четырёхскатный повёрнутый бикупол',
    'name_eng': 'Square Gyrobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'square_gyrobicupola.svg',
    'faces': 18,
    'edges': 32,
    'vertices': 16
  },
  {
    'name_rus': 'Пятискатный повёрнутый бикупол',
    'name_eng': 'Pentagonal Gyrobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_gyrobicupola.svg',
    'faces': 22,
    'edges': 40,
    'vertices': 20
  },
  {
    'name_rus': 'Пятискатная прямая куполоротонда',
    'name_eng': 'Pentagonal Gyrocupolarotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_gyrocupolarotunda.svg',
    'faces': 32,
    'edges': 60,
    'vertices': 30
  },
  {
    'name_rus': 'Пятискатная повёрнутая куполоротонда',
    'name_eng': 'Pentagonal Orthocupolarotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_orthocupolarotunda.svg',
    'faces': 27,
    'edges': 50,
    'vertices': 25
  },
  {
    'name_rus': 'Пятискатная прямая биротонда',
    'name_eng': 'Pentagonal Orthobirotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'pentagonal_orthobirotunda.svg',
    'faces': 27,
    'edges': 50,
    'vertices': 25
  },
  {
    'name_rus': 'Удлинённый трёхскатный прямой бикупол',
    'name_eng': undefined,
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_triangular_orthobicupola.svg',
    'faces': 20,
    'edges': 36,
    'vertices': 18
  },

  {
    'name_rus': 'Удлинённый пятискатный прямой бикупол',
    'name_eng': 'Elongated Pentagonal Orthobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_orthobicupola.svg',
    'faces': 32,
    'edges': 60,
    'vertices': 30
  },
  {
    'name_rus': 'Удлинённый трёхскатный повёрнутый бикупол',
    'name_eng': 'Elongated Triangular Gyrobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_triangular_gyrobicupola.svg',
    'faces': 20,
    'edges': 36,
    'vertices': 18
  },
  {
    'name_rus': 'Удлинённый четырёхскатный повёрнутый бикупол',
    'name_eng': 'Elongated Square Gyrobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_square_gyrobicupola.svg',
    'faces': 26,
    'edges': 48,
    'vertices': 24
  },
  {
    'name_rus': 'Удлинённый пятискатный повёрнутый бикупол',
    'name_eng': 'Elongated Pentagonal Gyrobicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_gyrobicupola.svg',
    'faces': 32,
    'edges': 60,
    'vertices': 30
  },
  {
    'name_rus': 'Удлинённая пятискатная прямая куполоротонда',
    'name_eng': 'Elongated Pentagonal Orthocupolarotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_orthocupolarotunda.svg',
    'faces': 37,
    'edges': 70,
    'vertices': 35
  },
  {
    'name_rus': 'Удлинённая пятискатная повёрнутая куполоротонда',
    'name_eng': 'Elongated Pentagonal Gyrocupolarotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_gyrocupolarotunda.svg',
    'faces': 37,
    'edges': 70,
    'vertices': 35
  },
  {
    'name_rus': 'Удлинённая пятискатная прямая биротонда',
    'name_eng': 'Elongated Pentagonal Orthobirotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_orthobirotunda.svg',
    'faces': 42,
    'edges': 80,
    'vertices': 40
  },
  {
    'name_rus': 'Удлинённая пятискатная повёрнутая биротонда',
    'name_eng': 'Elongated Pentagonal Gyrobirotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'elongated_pentagonal_gyrobirotunda.svg',
    'faces': 42,
    'edges': 80,
    'vertices': 40
  },
  {
    'name_rus': 'Скрученно удлинённый трёхскатный бикупол',
    'name_eng': 'Gyroelongated Triangular Bicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_triangular_bicupola.svg',
    'faces': 26,
    'edges': 42,
    'vertices': 18
  },
  {
    'name_rus': 'Скрученно удлинённый четырёхскатный бикупол',
    'name_eng': 'Gyroelongated Square Bicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_square_bicupola.svg',
    'faces': 34,
    'edges': 56,
    'vertices': 24
  },
  {
    'name_rus': 'Скрученно удлинённый пятискатный бикупол',
    'name_eng': 'Gyroelongated Pentagonal Bicupola',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_pentagonal_bicupola.svg',
    'faces': 42,
    'edges': 70,
    'vertices': 30
  },
  {
    'name_rus': 'Скрученно удлинённая пятискатная куполоротонда',
    'name_eng': 'Gyroelongated Pentagonal Cupolarotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_pentagonal_cupolarotunda.svg',
    'faces': 47,
    'edges': 80,
    'vertices': 35
  },
  {
    'name_rus': 'Скрученно удлинённая пятискатная биротонда',
    'name_eng': 'Gyroelongated Pentagonal Birotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyroelongated_pentagonal_birotunda.svg',
    'faces': 42,
    'edges': 80,
    'vertices': 40
  },
  {
    'name_rus': 'Наращённая треугольная призма',
    'name_eng': 'Augmented Triangular Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_triangular_prism.svg',
    'faces': 8,
    'edges': 13,
    'vertices': 7
  },
  {
    'name_rus': 'Дважды наращённая треугольная призма',
    'name_eng': 'Biaugmented Triangular Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'biaugmented_triangular_prism.svg',
    'faces': 11,
    'edges': 17,
    'vertices': 8
  },
  {
    'name_rus': 'Трижды наращённая треугольная призма',
    'name_eng': 'Triaugmented Triangular Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'triaugmented_triangular_prism.svg',
    'faces': 14,
    'edges': 21,
    'vertices': 9
  },
  {
    'name_rus': 'Наращённая пятиугольная призма',
    'name_eng': 'Augmented Pentagonal Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_pentagonal_prism.svg',
    'faces': 10,
    'edges': 19,
    'vertices': 11
  },
  {
    'name_rus': 'Дважды наращённая пятиугольная призма',
    'name_eng': 'Biaugmented Pentagonal Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'biaugmented_pentagonal_prism.svg',
    'faces': 13,
    'edges': 23,
    'vertices': 12
  },
  {
    'name_rus': 'Наращённая шестиугольная призма',
    'name_eng': 'Augmented Hexagonal Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_hexagonal_prism.svg',
    'faces': 11,
    'edges': 22,
    'vertices': 13
  },
  {
    'name_rus': 'Дважды противоположно наращённая шестиугольная призма',
    'name_eng': 'Parabiaugmented Hexagonal Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'parabiaugmented_hexagonal_prism.svg',
    'faces': 14,
    'edges': 26,
    'vertices': 14
  },
  {
    'name_rus': 'Дважды косо наращённая шестиугольная призма',
    'name_eng': 'Metabiaugmented Hexagonal Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'metabiaugmented_hexagonal_prism.svg',
    'faces': 14,
    'edges': 26,
    'vertices': 14
  },
  {
    'name_rus': 'Трижды наращённая шестиугольная призма',
    'name_eng': 'Triaugmented Hexagonal Prism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'triaugmented_hexagonal_prism.svg',
    'faces': 17,
    'edges': 30,
    'vertices': 15
  },
  {
    'name_rus': 'Наращённый додекаэдр',
    'name_eng': 'Augmented Dodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_dodecahedron.svg',
    'faces': 16,
    'edges': 35,
    'vertices': 21
  },
  {
    'name_rus': 'Дважды противоположно наращённый додекаэдр',
    'name_eng': 'Parabiaugmented Dodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'parabiaugmented_dodecahedron.svg',
    'faces': 20,
    'edges': 40,
    'vertices': 22
  },
  {
    'name_rus': 'Дважды косо наращённый додекаэдр',
    'name_eng': 'Metabiaugmented Dodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'metabiaugmented_dodecahedron.svg',
    'faces': 20,
    'edges': 40,
    'vertices': 22
  },
  {
    'name_rus': 'Трижды наращённый додекаэдр',
    'name_eng': 'Triaugmented Dodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'triaugmented_dodecahedron.svg',
    'faces': 24,
    'edges': 45,
    'vertices': 23
  },
  {
    'name_rus': 'Дважды косо отсечённый икосаэдр',
    'name_eng': 'Metabidiminished Icosahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'metabidiminished_icosahedron.svg',
    'faces': 12,
    'edges': 20,
    'vertices': 10
  },
  {
    'name_rus': 'Трижды отсечённый икосаэдр',
    'name_eng': 'Tridiminished Icosahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'tridiminished_icosahedron.svg',
    'faces': 8,
    'edges': 15,
    'vertices': 9
  },
  {
    'name_rus': 'Наращённый трижды отсечённый икосаэдр',
    'name_eng': 'Augmented Tridiminished Icosahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_tridiminished_icosahedron.svg',
    'faces': 10,
    'edges': 18,
    'vertices': 10
  },
  {
    'name_rus': 'Наращённый усечённый тетраэдр',
    'name_eng': 'Augmented Truncated Tetrahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_truncated_tetrahedron.svg',
    'faces': 14,
    'edges': 27,
    'vertices': 15
  },
  {
    'name_rus': 'Наращённый усечённый куб',
    'name_eng': 'Augmented Truncated Cube',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_truncated_cube.svg',
    'faces': 22,
    'edges': 48,
    'vertices': 28
  },
  {
    'name_rus': 'Дважды наращённый усечённый куб',
    'name_eng': 'Biaugmented Truncated Cube',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'biaugmented_truncated_cube.svg',
    'faces': 30,
    'edges': 60,
    'vertices': 32
  },
  {
    'name_rus': 'Наращённый усечённый додекаэдр',
    'name_eng': 'Augmented Truncated Dodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_truncated_dodecahedron.svg',
    'faces': 42,
    'edges': 105,
    'vertices': 65
  },
  {
    'name_rus': 'Дважды противоположно наращённый усечённый додекаэдр',
    'name_eng': 'Parabiaugmented Truncated Dodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'parabiaugmented_truncated_dodecahedron.svg',
    'faces': 52,
    'edges': 120,
    'vertices': 70
  },
  {
    'name_rus': 'Дважды косо наращённый усечённый додекаэдр',
    'name_eng': 'Metabiaugmented Truncated Dodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'metabiaugmented_truncated_dodecahedron.svg',
    'faces': 52,
    'edges': 120,
    'vertices': 70
  },
  {
    'name_rus': 'Трижды наращённый усечённый додекаэдр',
    'name_eng': 'Triaugmented Truncated Dodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'triaugmented_truncated_dodecahedron.svg',
    'faces': 62,
    'edges': 135,
    'vertices': 75
  },
  {
    'name_rus': 'Скрученный ромбоикосододекаэдр',
    'name_eng': 'Gyrate Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyrate_rhombicosidodecahedron.svg',
    'faces': 62,
    'edges': 120,
    'vertices': 60
  },
  {
    'name_rus': 'Дважды противоположно скрученный ромбоикосододекаэдр',
    'name_eng': 'Parabigyrate Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'parabigyrate_rhombicosidodecahedron.svg',
    'faces': 62,
    'edges': 120,
    'vertices': 60
  },
  {
    'name_rus': 'Дважды кососкрученный ромбоикосододекаэдр',
    'name_eng': 'Metabigyrate Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'metabigyrate_rhombicosidodecahedron.svg',
    'faces': 62,
    'edges': 120,
    'vertices': 60
  },
  {
    'name_rus': 'Трижды скрученный ромбоикосододекаэдр',
    'name_eng': 'Trigyrate Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'trigyrate_rhombicosidodecahedron.svg',
    'faces': 62,
    'edges': 120,
    'vertices': 60
  },
  {
    'name_rus': 'Отсечённый ромбоикосододекаэдр',
    'name_eng': 'Diminished Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'diminished_rhombicosidodecahedron.svg',
    'faces': 52,
    'edges': 105,
    'vertices': 55
  },
  {
    'name_rus': 'Противоположно скрученный отсечённый ромбоикосододекаэдр',
    'name_eng': 'Paragyrate Diminished Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'paragyrate_diminished_rhombicosidodecahedron.svg',
    'faces': 52,
    'edges': 105,
    'vertices': 55
  },
  {
    'name_rus': 'Косо скрученный отсечённый ромбоикосододекаэдр',
    'name_eng': 'Metagyrate Diminished Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'metagyrate_diminished_rhombicosidodecahedron.svg',
    'faces': 52,
    'edges': 105,
    'vertices': 55
  },
  {
    'name_rus': 'Дважды косо скрученный отсечённый ромбоикосододекаэдр',
    'name_eng': 'Bigyrate Diminished Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'bigyrate_diminished_rhombicosidodecahedron.svg',
    'faces': 52,
    'edges': 105,
    'vertices': 55
  },
  {
    'name_rus': 'Дважды противоположно отсечённый ромбоикосододекаэдр',
    'name_eng': 'Parabidiminished Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'parabidiminished_rhombicosidodecahedron.svg',
    'faces': 42,
    'edges': 90,
    'vertices': 50
  },
  {
    'name_rus': 'Дважды косо отсечённый ромбоикосододекаэдр',
    'name_eng': 'Metabidiminished Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'metabidiminished_rhombicosidodecahedron.svg',
    'faces': 42,
    'edges': 90,
    'vertices': 50
  },
  {
    'name_rus': 'Скрученный дважды отсечённый ромбоикосододекаэдр',
    'name_eng': 'Gyrate Bidiminished Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'gyrate_bidiminished_rhombicosidodecahedron.svg',
    'faces': 42,
    'edges': 90,
    'vertices': 50
  },
  {
    'name_rus': 'Трижды отсечённый ромбоикосододекаэдр',
    'name_eng': 'Tridiminished Rhombicosidodecahedron',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'tridiminished_rhombicosidodecahedron.svg',
    'faces': 32,
    'edges': 75,
    'vertices': 45
  },
  {
    'name_rus': 'Плосконосый двуклиноид',
    'name_eng': 'Snub Disphenoid',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'snub_disphenoid.svg',
    'faces': 12,
    'edges': 18,
    'vertices': 8
  },
  {
    'name_rus': 'Плосконосая квадратная антипризма',
    'name_eng': 'Snub Square Antiprism',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'snub_square_antiprism.svg',
    'faces': 26,
    'edges': 40,
    'vertices': 16
  },
  {
    'name_rus': 'Клинокорона',
    'name_eng': 'Sphenocorona',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'sphenocorona.svg',
    'faces': 14,
    'edges': 22,
    'vertices': 10
  },
  {
    'name_rus': 'Наращённая клинокорона',
    'name_eng': 'Augmented Sphenocorona',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'augmented_sphenocorona.svg',
    'faces': 17,
    'edges': 26,
    'vertices': 11
  },
  {
    'name_rus': 'Большая клинокорона',
    'name_eng': 'Sphenomegacorona',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'sphenomegacorona.svg',
    'faces': 18,
    'edges': 28,
    'vertices': 12
  },
  {
    'name_rus': 'Уплощённая большая клинокорона',
    'name_eng': 'Hebesphenomegacorona',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'hebesphenomegacorona.svg',
    'faces': 21,
    'edges': 33,
    'vertices': 14
  },
  {
    'name_rus': 'Опоясанный двуклинник',
    'name_eng': 'Disphenocingulum',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'disphenocingulum.svg',
    'faces': 24,
    'edges': 38,
    'vertices': 16
  },
  {
    'name_rus': 'Двойная серпоротонда',
    'name_eng': 'Bilunabirotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'bilunabirotunda.svg',
    'faces': 14,
    'edges': 26,
    'vertices': 14
  },
  {
    'name_rus': 'Уплощённая треугольная клиноротонда',
    'name_eng': 'Triangular Hebesphenorotunda',
    'family_rus': '5',
    'family_eng': 'Johnson Solids',
    'image': 'triangular_hebesphenorotunda.svg',
    'faces': 20,
    'edges': 36,
    'vertices': 18
  },


  {
    'name_rus': 'Тетрагемигексаэдр',
    'name_eng': 'Tetrahemihexahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Октагемиоктаэдр',
    'name_eng': 'Octahemioctahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый кубокубооктаэдр',
    'name_eng': 'Small cubicuboctahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый битригональный икосододекаэдр',
    'name_eng': 'Small ditrigonal icosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый икосоикосододекаэдр',
    'name_eng': 'Small icosicosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый додекоикосододекаэдр',
    'name_eng': 'Small dodecicosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Додекододекаэдр',
    'name_eng': 'Dodecadodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый ромбододекаэдр',
    'name_eng': 'Small rhombidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Усечённый большой додекаэдр',
    'name_eng': 'Truncated great dodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Ромбододекододекаэдр',
    'name_eng': 'Rhombidodecadodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой кубокубооктаэдр',
    'name_eng': 'Great cubicuboctahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Кубогемиоктаэдр',
    'name_eng': 'Cubohemioctahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Кубоусечённый кубооктаэдр (Кубооктаусечённый кубооктаэдр)',
    'name_eng': 'Cubitruncated cuboctahedron (Cuboctatruncatedcuboctahedron)',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Битригональный додекаэдр',
    'name_eng': 'Ditrigonal dodecadodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой битригональный додекоикосододекаэдр',
    'name_eng': 'Great ditrigonaldodecicosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый битригональный додекоикосододекаэдр',
    'name_eng': 'Small ditrigonal dodecicosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Икосододекододекаэдр',
    'name_eng': 'Icosidodecadodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Икосоусечённый додекододекаэдр (Икосододекоусечённый икосододекаэдр)',
    'name_eng': 'Icositruncated dodecadodecahedron (Icosidodecatruncatedicosidodecahedron)',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Невыпуклый большой ромбокубооктаэдр (Квазиромбокубооктаэдр)',
    'name_eng': 'Nonconvex great rhombicuboctahedron (Quasirhombicuboctahedron)',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый ромбогексаэдр',
    'name_eng': 'Small rhombihexahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой битригональный икосододекаэдр',
    'name_eng': 'Great ditrigonal icosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой икосоикосододекаэдр',
    'name_eng': 'Great icosicosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый икосогемидодекаэдр',
    'name_eng': 'Small icosihemidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый додекоикосаэдр',
    'name_eng': 'Small dodecicosahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый додекогемидодекаэдр',
    'name_eng': 'Small dodecahemidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Звёздчатый усечённый гексаэдр (Квазиусечённый гексаэдр)',
    'name_eng': 'Stellated truncated hexahedron (Quasitruncated hexahedron)',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой усечённый кубооктаэдр (Квазиусечённыйкубооктаэдр)',
    'name_eng': 'Great truncated cuboctahedron (Quasitruncated cuboctahedron)',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой икосододекаэдр',
    'name_eng': 'Great icosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Усечённый большой икосаэдр',
    'name_eng': 'Truncated great icosahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Ромбоикосаэдр',
    'name_eng': 'Rhombicosahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый звёздчатый усечённый додекаэдр (Квазиусечённый звёздчатый додекаэдр)',
    'name_eng': 'Small stellated truncated dodecahedron (Quasitruncated small stellateddodecahedron)',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Усечённый додекадодекаэдр (Квазиусечённый додекаэдр)',
    'name_eng': 'Truncated dodecadodecahedron (Quasitruncated dodecahedron)',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой додекоикосододекаэдр',
    'name_eng': 'Great dodecicosidodecahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый додекогемиикосаэдр',
    'name_eng': 'Small dodecahemicosahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой додекоикосаэдр',
    'name_eng': 'Great dodecicosahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой додекогемиикосаэдр',
    'name_eng': 'Great dodecahemicosahedron',
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой ромбогексаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой звёздчатый усечённый додекаэдр (Квазиусечённый большой звёздчатый додекаэдр)',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Невыпуклый большой ромбоикосододекаэдр (Квазиромбоикосододекаэдр)',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой икосогемидодекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой додекогемидодекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой усечённый икосододекаэдр (Большой квазиусечённый икосододекаэдр)',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой ромбододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый плосконосый икосоикосододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Плосконосый додекододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Плосконосый икосододекододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой вывернутый плосконосый икосододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Вывернутый плосконосый додекододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой плосконосый додекоикосододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой плосконосый икосододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой вывернутый обратно плосконосый икосододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Малый вывернутый обратно плосконосый икосоикосододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': 'Большой биромбоикосододекаэдр',
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },
  {
    'name_rus': undefined,
    'name_eng': undefined,
    'family_rus': '6',
    'family_eng': 'Uniform nonconvex solids',
    'image': undefined,
    'faces': undefined,
    'edges': undefined,
    'vertices': undefined
  },

];
