DROP TABLE IF EXISTS "review";
DROP TABLE IF EXISTS "jewel";

CREATE TABLE IF NOT EXISTS "jewel" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "image" TEXT,
  "description" TEXT,
  "dimension" REAL, 
  "price" REAL NOT NULL,
  "category" TEXT
);

INSERT INTO "jewel"("id","name", "image", "description", "dimension", "price", "category") VALUES
(1,'Collier Ligie', 'collierligie','Le collier Ligie est un collier ras-de-cou composé de perles keshi baroque ainsi que de petites perles de culture d''eau douce. Ce collier est parfait pour cet été et peut se porter sous l''eau.',31,155,'Collier'),
(2,'Collier Pontos', 'collierpontos','Le collier Pontos est un collier ras-de-cou composé de perles de culture d''eau douce blanches de différentes tailles. Ce collier est parfait pour cet été et peut se porter sous l''eau.',33,100,'Collier'),
(3,'Boucles Pisinoe', 'bouclespisinoe', 'Les boucles d’oreilles Pisinoe sont serties de perles baroques ainsi que de perles de culture d''eau douce blanches. Légères et ostentatoires, ces boucles d''oreilles peuvent se porter sous l''eau.',49,130,'Boucles'),
(4,'Boucles Teles', 'bouclesteles', 'Les boucles d’oreilles Teles sont composées de perles baroque et de perles de culture d''eau douce blanches. Ces dernières sont parfaites pour cet été caniculaire et peuvent se porter sous l''eau.',4,75,'Boucles'),
(5,'Bracelet Aglaope', 'braceletaglaope', 'Le bracelet Aglaopé est composé de trois rangs sertis de perles de culture d''eau douce blanches. Ce bracelet peut se porter pour des looks casual comme habillé et peut se garder sous l''eau.',19,165,'Bracelet'),
(6,'Bracelet Mirissa', 'braceletmirissa', 'Le bracelet Mirissa est arboré de coquillages fossiles. En laiton doré à l’or fin 24Kt, cette création possède un fermoir mousqueton.',20,135,'Bracelet');


-- Review

CREATE TABLE IF NOT EXISTS "review" (
  "id" SERIAL PRIMARY KEY,
  "author" TEXT NOT NULL,
  "note" REAL NOT NULL,
  "title" TEXT,
  "message" TEXT,
  "jewel_id" INT,
  FOREIGN KEY("jewel_id") REFERENCES "jewel"("id")
);

INSERT INTO "review" ("id", "author", "note", "title", "message", "jewel_id") VALUES
(1,'Jean Claude Dus',4, 'Une belle figurine', 'La finition est bien, le rose est vraiment rose. Seul bémol, le livreur a abimé la main droite.' ,1),
(2,'Thérèse de Monsou',2, 'Bof Bof...', 'La figurine ne tient pas debout seule. Certains détails sont mal finis, comme les bracelets.' ,1),
(3,'Monsieur Preskovitch',5, 'Juste parfait', 'C''est tellement parfait, on dirait que c''est roulé à la main sous les aisselles.' ,1),

(4,'Barbapapix',5, 'Parfait', 'Un niveau de détail bluffant. A se procurer absolument si vous êtes collectionneurs.' ,2),
(5,'Fabrice',4, 'Très bien', 'Le rapport qualité prix est plus que bien, le prix est vraiment bas pour cette figurine de qualité.' ,2),
(6,'Thomas',1, 'Déçu', 'Trop de défaut de peintures... A éviter' ,2),

(7,'Lydie',5, 'Parfaite', 'Magnifique statuette de qualité du plus bel effet dans ma vitrine. Le rendu des couleurs est vraiment magnifique.' ,3),
(8,'Aurore',3, 'Belle mais...', 'La figurine n''est pas stable, la faute à un socle trop cheap.' ,3),
(9,'Maman Gato',4, 'Contente de mon achat', 'Belles finitions, beau mouvement. La figurine est stable. Mon fils est ravi.' ,3),

(10,'Victor',4, 'Satisfait', 'Bien protégé par du papier bulle et arrivé dans son carton d''origine. Figurine superbe et bien grande.' ,4),
(11,'Jean-André',5,'Superbe','Bonne figurine je recommande' ,4),

(12,'Céline',5, 'Magnifique', 'Je trouve cette figurine magnifique. Le sens du détail est là, j''ai beau cherché des endroits ou la finition aurai été bâclés, je n''en trouve pas.' ,5),
(13,'Florian',2, 'A revoir...', 'Problème de livraison, la figurine est arrivée abimée !' ,5),
(14,'Marie-Pierre',5, 'Très belle figurine', 'Très contente de mon achat. Bonne qualité et taille convenable.' ,5),

(15,'Magalie',1, 'Un ratâge !', 'Les proportions ne correspondent pas à la photo. Très déçue.' ,6),
(16,'Antoinette',0, 'A éviter !', 'La figurine est arrivée cassée ! Malgré les réparations, elle reste moche.' ,6),
(17,'Vincent',2, 'Assez décu', 'Malheureusement, la figurine ne représente pas fidèlement le personnage.' ,6);
