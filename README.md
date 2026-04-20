# Abel Life OS (PWA)

Deine lokale Life-Organizer App als installierbare PWA fuer iPhone und Desktop.

## Projektdateien

- `index.html`: App UI + gesamte Logik
- `manifest.json`: PWA Manifest
- `sw.js`: Service Worker fuer Offline-Cache
- `icons/`: App Icons (PNG + SVG)

## 1) In dein GitHub-Repo pushen

Erstelle auf GitHub zuerst ein leeres Repository (ohne README), z. B. `abel-life-os`.

Dann in diesem Ordner ausfuehren:

```bash
git add .
git commit -m "Prepare Abel Life OS for GitHub Pages and iPhone PWA"
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
git push -u origin main
```

Falls `origin` schon gesetzt ist:

```bash
git remote set-url origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
git push -u origin main
```

## 2) GitHub Pages aktivieren

1. In deinem Repo auf GitHub: `Settings` -> `Pages`
2. `Source`: `Deploy from a branch`
3. `Branch`: `main` und Ordner `/ (root)`
4. Speichern

Deine URL ist dann:

```text
https://DEIN-USERNAME.github.io/DEIN-REPO/
```

## 3) Auf iPhone installieren

1. URL in Safari oeffnen
2. Teilen-Symbol antippen
3. `Zum Home-Bildschirm`
4. `Hinzufuegen`

Danach startet die App im Standalone-Modus wie eine native App.

## Hinweis zu Daten

Die Daten liegen lokal im Browser (IndexedDB). Bei neuem Geraet oder geloeschtem Browser-Speicher sind sie weg.
