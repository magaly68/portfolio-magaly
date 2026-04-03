import fs from 'node:fs';
import path from 'node:path';

import PDFDocument from 'pdfkit';

const outputPath = path.resolve('public', 'documents', 'Magaly-Wintzer-CV.pdf');

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const doc = new PDFDocument({
  size: 'A4',
  margin: 52,
  info: {
    Title: 'Magaly Wintzer - CV',
    Author: 'Codex',
    Subject: 'CV de synthèse de Magaly Wintzer'
  }
});

doc.pipe(fs.createWriteStream(outputPath));

const colors = {
  ink: '#171411',
  muted: '#5f5a54',
  accent: '#124433',
  line: '#d8d0c6'
};

function heading(text) {
  doc.moveDown(1.1);
  doc
    .fillColor(colors.accent)
    .font('Helvetica-Bold')
    .fontSize(11)
    .text(text.toUpperCase(), { characterSpacing: 1.1 });

  const y = doc.y + 5;
  doc
    .moveTo(doc.page.margins.left, y)
    .lineTo(doc.page.width - doc.page.margins.right, y)
    .strokeColor(colors.line)
    .lineWidth(1)
    .stroke();

  doc.moveDown(0.7);
}

function body(text, options = {}) {
  doc
    .fillColor(colors.muted)
    .font('Helvetica')
    .fontSize(10.5)
    .text(text, { lineGap: 3, ...options });
}

function bullet(text) {
  const indent = doc.page.margins.left + 12;
  doc
    .fillColor(colors.accent)
    .font('Helvetica-Bold')
    .fontSize(10)
    .text('-', doc.page.margins.left, doc.y + 1);

  doc
    .fillColor(colors.muted)
    .font('Helvetica')
    .fontSize(10.5)
    .text(text, indent, doc.y - 11, {
      width: doc.page.width - doc.page.margins.left - doc.page.margins.right - 12,
      lineGap: 3
    });
}

doc
  .rect(0, 0, doc.page.width, 118)
  .fill('#f3ede5');

doc
  .fillColor(colors.ink)
  .font('Helvetica-Bold')
  .fontSize(24)
  .text('Magaly Wintzer', 52, 42);

doc
  .fillColor(colors.accent)
  .font('Helvetica-Bold')
  .fontSize(11)
  .text('Front-end / Angular / JavaScript', 52, 76, { characterSpacing: 0.3 });

doc
  .fillColor(colors.muted)
  .font('Helvetica')
  .fontSize(10)
  .text(
    'wintzer.magaly@gmail.com   |   github.com/magaly68   |   portfolio-magaly.vercel.app',
    52,
    94
  );

doc.moveDown(5.2);

heading('Profil');
body(
  "Développeuse front-end en progression, j'aime concevoir des interfaces lisibles, utiles et rassurantes. Mon travail part souvent d'un besoin concret : clarifier une action, rendre un écran plus naturel à parcourir et transformer une idée en prototype cohérent."
);

heading('Compétences');
bullet('HTML, CSS, responsive design et structuration de pages web.');
bullet("JavaScript pour rendre une interface dynamique et exploiter des données.");
bullet('Angular pour construire un site moderne, composant par composant.');
bullet("Prototypage UI, parcours utilisateur, hiérarchie visuelle et états d'interface.");
bullet('Bases Linux, réseau et premiers programmes en C.');

heading('Projets sélectionnés');
doc
  .fillColor(colors.ink)
  .font('Helvetica-Bold')
  .fontSize(11)
  .text('EpiGuard');
body(
  "Prototype mobile centré sur la surveillance active, le journal des crises, l'urgence et la connexion montre. Le projet montre une logique produit complète et une attention forte à la lisibilité."
);
doc.moveDown(0.5);

doc
  .fillColor(colors.ink)
  .font('Helvetica-Bold')
  .fontSize(11)
  .text('Front-End.1');
body(
  "Projet de front-end dynamique avec HTML, CSS, JavaScript et données JSON. Une étape importante pour passer d'une page statique à une interface plus vivante."
);
doc.moveDown(0.5);

doc
  .fillColor(colors.ink)
  .font('Helvetica-Bold')
  .fontSize(11)
  .text('Histoire interactive');
body(
  "Expérience réalisée avec Twine autour d'une narration à embranchements. Ce projet développe le sens du rythme, du choix utilisateur et de la structure interactive."
);
doc.moveDown(0.5);

doc
  .fillColor(colors.ink)
  .font('Helvetica-Bold')
  .fontSize(11)
  .text('Projet Linux');
body(
  "Dépôt plus technique avec Linux, modèle OSI et premiers pas en C. Il montre une curiosité qui dépasse l'interface pure et une envie de comprendre le socle technique."
);

heading('Approche');
bullet('Chercher la clarté avant la décoration.');
bullet('Faire respirer une page avec une bonne hiérarchie et peu de bruit.');
bullet('Utiliser le mouvement comme retour visuel, pas comme effet gratuit.');
bullet('Apprendre par projets réels et itérer vite.');

heading('Liens');
bullet('Portfolio en ligne : https://portfolio-magaly.vercel.app');
bullet('GitHub : https://github.com/magaly68');
bullet('Email : wintzer.magaly@gmail.com');

doc.end();

console.log(`CV generated: ${outputPath}`);
