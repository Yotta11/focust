# Focust Agency — Landing Page

Stack: React 18 + TypeScript + Vite + Tailwind CSS (responsive, mobile-first).

## Démarrage

```bash
npm install
npm run dev       # serveur de dev sur http://localhost:5173
npm run build      # build de production dans dist/
```

## Structure

```
src/
  components/
    Navbar.tsx     menu responsive (burger sur mobile)
    Hero.tsx        section d'accueil + mockup navigateur
    Services.tsx    4 cartes de services
    Cases.tsx       réalisations / études de cas
    Process.tsx     méthode en 4 étapes
    Contact.tsx      formulaire (à brancher sur votre API/email)
    Footer.tsx
  App.tsx
  main.tsx
  index.css
tailwind.config.js  palette et polices du design
```

Le formulaire de contact (`Contact.tsx`) simule l'envoi côté client —
branchez `handleSubmit` sur votre API, un service comme Resend/Formspree,
ou votre CRM.
