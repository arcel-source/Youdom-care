# YOUDOM CARE — SPÉCIFICATION COMPLÈTE DU SITE
**Expert UX/UI, SEO & Rédaction Web pour l'aide à domicile**

---

## 1️⃣ ARBORESCENCE DU SITE

### Structure optimisée SEO & UX

```
youdom-care.com/
│
├── / (Accueil)
│
├── AIDE À DOMICILE (Services)
│   ├── /aide-a-domicile-personnes-agees
│   ├── /aide-autonomie-gestes-quotidiens
│   ├── /garde-de-nuit-domicile
│   ├── /aide-handicap-accompagnement
│   ├── /aide-menagere-domicile
│   ├── /transport-pmr-accompagnement
│   ├── /garde-enfants-handicapes-malades
│   ├── /aide-apres-hospitalisation
│   ├── /teleassistance-personnes-agees
│   └── /services (page mère - tous les services)
│
├── POURQUOI NOUS
│   ├── /qui-sommes-nous
│   ├── /nos-engagements-qualite
│   ├── /temoignages-clients
│   └── /nos-intervenants-selection
│
├── AIDE FINANCIÈRE & DÉMARCHES
│   ├── /aide-financiere-domicile (page mère)
│   ├── /apa-allocation-autonomie
│   ├── /pch-prestation-handicap
│   ├── /credit-impot-aide-domicile
│   └── /autres-aides-sociales
│
├── INFORMATION & CONSEIL
│   ├── /comment-ca-marche (processus d'accompagnement)
│   ├── /blog (liste articles)
│   │   ├── /blog/maintien-domicile-personnes-agees
│   │   ├── /blog/guide-aidants-familiaux
│   │   ├── /blog/handicap-domicile-ressources
│   │   └── ... (autres articles)
│   ├── /faq (questions fréquentes)
│   └── /ressources-telecharger (guides PDF, etc.)
│
├── NOUS CONTACTER & DEMANDER UN DEVIS
│   ├── /contact (formulaire simple)
│   ├── /demander-devis (formulaire détaillé multi-étapes)
│   └── /urgence (contact direct pour cas urgent)
│
├── RECRUTEMENT & PARTENARIATS
│   ├── /rejoignez-nous (postes ouverts)
│   ├── /formation-intervenants
│   └── /partenaires-prescripteurs (médecins, MDPH, CLIC, etc.)
│
├── ESPACE PROFESSIONNEL (future)
│   └── /espace-prescripteurs (en construction)
│
└── LÉGAL & CONFORMITÉ
    ├── /mentions-legales
    ├── /confidentialite-donnees
    ├── /cgv-conditions-generales
    └── /conformite-rgpd
```

---

## 2️⃣ STRUCTURE PAR PAGE (WIREFRAME TEXTE)

### PAGE 1 : ACCUEIL

**Objectif global** : Rassurer, présenter la valeur unique, capturer un lead qualifié dès l'entrée.

#### Section Hero
- **Titre H1** : "L'aide à domicile sur mesure qui donne confiance aux familles"
- **Sous-titre** : "Accompagnement personnalisé pour personnes âgées, en situation de handicap ou en perte d'autonomie. Paris & Île-de-France, 24h/24."
- **CTA principal** : Bouton "Demander un devis gratuit" + appel téléphone en évidence
- **Preuves sociales immédiates** : "500+ familles accompagnées • 98% satisfaction • Agréé & assuré"
- **Éléments visuels** : Photo authentique (famille intergénérationnelle, moment de tendresse, pas de stock photo) + animation douce

#### Section 2 : Situation du visiteur (engagement rapide)
- **Titre H2** : "Quelle est votre situation ?"
- **3-4 parcours cliquables** :
  - 👵 "Mon parent âgé a besoin d'aide"
  - ♿ "Mon proche est en situation de handicap"
  - 👨‍⚕️ "Retour d'hospitalisation, besoin urgent"
  - 👶 "Mon enfant handicapé ou malade"
- **Chaque parcours** : redirection vers la bonne page (ex: `/aide-a-domicile-personnes-agees`)

#### Section 3 : Nos services en court
- **Titre H2** : "Nos services adaptés à chaque besoin"
- **Grille 6-8 services** (avec icône + titre + phrase accroche) :
  - Aide à l'autonomie
  - Garde de nuit
  - Aide ménagère
  - Aide au handicap
  - Transport adaptée (PMR)
  - Garde enfants handicapés
  - Accompagnement courses / rendez-vous médicaux
  - Téléassistance
- **CTA par service** : "En savoir plus" (vers page service) ou "Demander un devis"

#### Section 4 : Processus & tranquillité (rassurer)
- **Titre H2** : "Pourquoi confier votre proche à Youdom Care ?"
- **4 colonnes** :
  1. 🎯 **Évaluation gratuite** → "On comprend vraiment votre situation"
  2. 🤝 **Intervenante unique** → "Même personne, continuité, lien de confiance"
  3. 📊 **Suivi qualité** → "Enquêtes régulières, ajustements permanents"
  4. 💰 **Aides financières** → "Crédit d'impôt 50%, APA, PCH → on vous guide"
- **Chaque colonne** : texte court + petit picto + petit lien "En savoir plus"

#### Section 5 : Témoignages courts (preuve sociale)
- **Titre H2** : "Ce que disent les familles que nous accompagnons"
- **3-4 témoignages courts** (1-2 phrases + nom + relation) :
  - ⭐⭐⭐⭐⭐ "Grâce à Youdom Care, ma mère vit sereinement chez elle. Son auxiliaire est comme une amie." — Marie D., fille
  - ⭐⭐⭐⭐⭐ "On nous a guidés dans toutes les démarches d'APA. Merci pour ce soutien." — Famille Dupont
- **CTA** : "Lire tous les témoignages" → `/temoignages-clients`

#### Section 6 : Formulaire de devis rapide (conversion)
- **Titre H2** : "Commençons → Devis gratuit en 2 minutes"
- **Formulaire court** (4 champs max) :
  1. Prénom + Nom
  2. Téléphone
  3. "Quelle est votre besoin principal ?" (dropdown)
  4. "Quand avez-vous besoin ?" (dropdown)
- **Bouton** : "Recevoir mon devis" (avec trust signal : "Réponse sous 2h garantie")
- **Alternative** : Lien "Formulaire détaillé" (pour plus de champs)

#### Section 7 : Appels à l'action multiples
- **Trois chemins de conversion** :
  1. "📞 Nous appeler maintenant" (téléphone cliquable)
  2. "💬 Discuter via chat" (si dispo)
  3. "📧 Envoyer un email" (formulaire complet)
- **Tous visibles** sans scroller

#### Section 8 : Footer simplifié
- **Colonnes** : Services rapides | Qui sommes-nous | Aide financière | Contact | Légal
- **À nouveau** : CTA principal (devis) + téléphone en évidence

---

### PAGE 2 : AIDE À DOMICILE — PERSONNES ÂGÉES
(`/aide-a-domicile-personnes-agees`)

**Objectif** : Convaincre les familles de personnes âgées qu'on est la bonne solution.

#### Hero
- **H1** : "Aide à domicile pour personnes âgées — Vivre sereinement chez soi"
- **Sous-titre** : "Accompagnement personnalisé pour perte d'autonomie, maintien à domicile. Auxiliaires formées, agréées, de confiance."
- **CTA** : "Devis gratuit" + "Appeler"

#### Section 2 : Problème → Solution
- **Titre H2** : "Vivre chez soi le plus longtemps possible, c'est la solution privilégiée des personnes âgées"
- **Texte empathique** :
  > "Quitter son domicile, c'est perdre son autonomie, ses souvenirs, son environnement. Chez Youdom Care, nous croyons que votre parent peut rester chez lui, avec aide professionnelle, en sécurité et avec dignité."
- **Bénéfices clés** (liste avec pictos) :
  - ✓ Reste chez soi, dans son confort
  - ✓ Garde ses repères et son indépendance
  - ✓ Évite une maison de retraite
  - ✓ Connexion avec sa famille, ses amis
  - ✓ Aide fiscale (crédit d'impôt 50%)

#### Section 3 : Services pour personnes âgées (détail)
- **Titre H2** : "Nos services pour l'autonomie de votre parent"
- **Grille 3 colonnes** (ou plus) :
  1. **Aide à l'autonomie** (toilette, repas, lever/coucher, habillage)
  2. **Aide ménagère** (ménage, lessive, cuisine)
  3. **Garde de nuit** (présence rassurante)
  4. **Accompagnement** (courses, rendez-vous, sorties)
  5. **Téléassistance** (détecteur de chute, appel d'urgence)
  6. **Retour d'hospitalisation** (suivi post-opératoire)
- **Chaque service** : titre + 2-3 lignes description + "Demander un devis"

#### Section 4 : Processus personnalisé
- **Titre H2** : "Comment nous trouvons la bonne solution pour votre parent"
- **Timeline 5 étapes** :
  1. 📞 Vous nous contactez (gratuit)
  2. 🏠 Visite à domicile (évaluation personnalisée)
  3. 👤 Sélection de l'auxiliaire idéale
  4. 📋 Plan d'aide sur mesure (heures, services, horaires)
  5. ✨ Démarrage & suivi continu
- **CTA** : "Commencer" → `/demander-devis`

#### Section 5 : Aides financières (crucial pour les seniors)
- **Titre H2** : "Financer l'aide à domicile — Moins cher qu'on ne croit"
- **Encadré clé** :
  > "✨ Crédit d'impôt de 50% — Vous payez 100€, l'État en rembourse 50. On gère les déclarations."
- **Autres aides listées** :
  - APA (Allocation Personnalisée d'Autonomie) — jusqu'à 1800€/mois
  - Aide sociale de votre mairie (CCAS)
  - Mutuelle (parfois couvre l'aide à domicile)
  - Chèque service universel
- **Lien** : "/aide-financiere-domicile" (page dédiée)

#### Section 6 : Témoignages spécifiques personnes âgées
- **Titre H2** : "Ce disent les familles de personnes âgées"
- **2-3 témoignages** :
  - ⭐⭐⭐⭐⭐ "Maman a repris goût à la vie. Elle reçoit son auxiliaire comme une amie, puis elle va voir ses enfants l'après-midi." — Jean M.
  - ⭐⭐⭐⭐⭐ "Papa atteint d'Alzheimer a besoin d'une présence quotidienne. Youdom Care a trouvé quelqu'un avec qui il a une belle complicité." — Sophie V.

#### Section 7 : FAQ courte pour cette page
- **Titre H2** : "Vos questions, nos réponses"
- **3-4 questions les plus posées** :
  - "Combien coûte une auxiliaire de vie ?"
  - "Qu'est-ce que l'APA exactement ?"
  - "Comment assure-t-on la continuité si l'auxiliaire est malade ?"
  - "Pouvez-vous intervenir en urgence ?"

#### Section 8 : CTA final
- **Titre H2** : "Prêt à donner à votre parent une meilleure qualité de vie ?"
- **Trois boutons** :
  1. "Devis gratuit" (prime)
  2. "Appeler directement"
  3. "Plus d'informations"

---

### PAGE 3 : AIDE À DOMICILE — HANDICAP
(`/aide-handicap-accompagnement`)

**Objectif** : Montrer qu'on comprend les spécificités du handicap (physique, mental, sensoriel, psychique).

#### Hero
- **H1** : "Aide à domicile pour personnes en situation de handicap — Accompagnement adapté & bienveillant"
- **Sous-titre** : "Services spécialisés pour adultes et enfants handicapés. Auxiliaires formées au handicap, agréées, discrètes."

#### Section 2 : Comprendre le besoin
- **Titre H2** : "Vivre dignement avec un handicap, c'est notre engagement"
- **Texte** :
  > "Qu'il s'agisse de handicap physique, moteur, sensoriel, psychique ou mental, chaque situation est unique. Nos intervenantes sont formées et sélectionnées pour respecter votre autonomie, votre dignité et vos envies. Pas de jugement, juste du professionnalisme et de l'humanité."
- **Bénéfices** :
  - ✓ Autonomie préservée au maximum
  - ✓ Accompagnement discret et respectueux
  - ✓ Coordination avec les professionnels de santé (MDPH, médecins, kinés)
  - ✓ Adaptation du plan d'aide à l'évolution de la situation

#### Section 3 : Services adaptés handicap
- **Titre H2** : "Services d'aide spécialisée pour le handicap"
- **Grille 5+ services** :
  1. **Aide aux gestes du quotidien** (toilette, repas, mobilité adaptée)
  2. **Aide à la mobilité & transferts** (personnes à mobilité réduite)
  3. **Aide psychologique & stimulation** (personnes atteintes de pathologies mentales)
  4. **Transport spécialisé (PMR)** (véhicules adaptés, accompagnement)
  5. **Garde de jour/nuit pour enfants handicapés**
  6. **Coordination médicale** (liaison avec MDPH, médecins, rééducateurs)
- **Chaque service** : description claire + "Devis"

#### Section 4 : Intervenants formés & sensibilisés
- **Titre H2** : "Nos auxiliaires sont sélectionnées pour leur expertise ET leur humanité"
- **Points clés** :
  - Formation spécifique au handicap (selon les types)
  - Sensibilisation à l'inclusion & l'égalité
  - Références vérifiées
  - Supervision régulière
- **Lien** : "/nos-intervenants-selection"

#### Section 5 : Aides financières PCH/AEEH
- **Titre H2** : "Financer l'aide au handicap"
- **Encadrés** :
  - **PCH** (Prestation de Compensation du Handicap) — jusqu'à 3000€/mois
  - **AEEH** (pour les enfants) — de 150€ à 1200€/mois
  - **Crédit d'impôt** 50%
  - **Aides MDPH** (en fonction du dossier)
- **CTA** : "/aide-financiere-domicile"

#### Section 6 : Témoignages handicap
- ⭐⭐⭐⭐⭐ "Mon fils est en fauteuil roulant. L'auxiliaire le lave, l'habille avec tendresse et patience. Elle l'accompagne au cinéma, aux courses. Elle lui redonne une vie sociale." — Mère
- ⭐⭐⭐⭐⭐ "Je suis atteint de sclérose en plaques. Youdom Care a trouvé quelqu'un qui comprend mon handicap, qui ne me culpabilise pas, et qui m'aide à rester indépendant." — Jean P.

#### Section 7 : FAQ handicap
- "Vous intervenez pour tous les types de handicap ?"
- "L'auxiliaire connaît ma situation de handicap ?"
- "Vous pouvez m'accompagner dans mes démarches MDPH ?"

#### Section 8 : CTA
- "Trouver mon auxiliaire spécialisée"

---

### PAGE 4 : QUI SOMMES-NOUS
(`/qui-sommes-nous`)

**Objectif** : Bâtir la confiance par l'authenticité, les valeurs et l'expertise.

#### Hero
- **H1** : "Qui sommes-nous ?"
- **Sous-titre** : "Youdom Care — 10+ ans d'expertise en aide et maintien à domicile. 500+ familles accompagnées. 150+ intervenants formés."

#### Section 2 : Notre histoire
- **Titre H2** : "Comment tout a commencé"
- **Texte authentique** (à adapter à la vraie histoire de l'entreprise) :
  > "En 20XX, [fondateur] a vu son grand-mère vieillir et chercher désespérément une aide de confiance pour rester chez elle. L'offre existante était soit impersonnelle, soit chère, soit peu fiable. Youdom Care est née de ce constat : créer un service d'aide à domicile vraiment humain, professionnel et accessible."

#### Section 3 : Nos valeurs
- **Titre H2** : "Ce qui nous guide"
- **5-6 valeurs clés** (avec icone + titre + phrase) :
  1. ❤️ **Bienveillance** — Traiter chaque personne comme un membre de sa propre famille
  2. 🎯 **Sur mesure** — Chaque plan d'aide est unique, adapté à la situation
  3. 🤝 **Confiance** — Transparence totale, intervenants vérifiés, suivi régulier
  4. 🏆 **Excellence** — Personnel diplômé, formé, sélectionné pour ses qualités humaines
  5. 👂 **Écoute** — On prend le temps de comprendre avant d'agir
  6. 🔄 **Adaptabilité** — Nos services évoluent avec vos besoins

#### Section 4 : Nos chiffres clés (crédibilité)
- **Titre H2** : "Youdom Care en chiffres"
- **Visuel avec chiffres** :
  - 500+ familles accompagnées
  - 150+ auxiliaires de vie & aides ménagères
  - 98% taux de satisfaction
  - 10+ ans d'expérience
  - 24h/24, 7j/7 disponibilité
  - 50% crédit d'impôt garanti

#### Section 5 : Notre processus de sélection
- **Titre H2** : "Pourquoi nos intervenants sont exceptionnels"
- **Processus transparent** :
  1. ✅ Sélection rigoureuse (CV, références vérifiées)
  2. ✅ Formation initiale & continue
  3. ✅ Vérification Casier Judiciaire
  4. ✅ Tests (empathie, discrétion, professionnalisme)
  5. ✅ Suivi régulier & feedback clients
  6. ✅ Mises à jour formations (RGPD, sécurité, pathologies)
- **Lien** : "/nos-intervenants-selection"

#### Section 6 : Certifications & conformité
- **Titre H2** : "Nous sommes agréés et conformes"
- **Liste** :
  - ✓ Agréé par [l'organisme régional]
  - ✓ Assuré RC Pro (responsabilité civile)
  - ✓ Conforme RGPD (protection données)
  - ✓ Membre [réseau professionnel]
- **Lien** : "/conformite-rgpd"

#### Section 7 : Nos engagements
- **Titre H2** : "Ce à quoi vous pouvez vous attendre"
- **5-6 engagements** (à détailler) :
  1. ✓ Même intervenant à chaque visite (continuité)
  2. ✓ Évaluation gratuite à domicile
  3. ✓ Plan d'aide personnalisé & écrit
  4. ✓ Réponse téléphonique sous 2h
  5. ✓ Suivi qualité & enquête de satisfaction
  6. ✓ Adaptation permanente (augmenter/diminuer heures, services)

#### Section 8 : L'équipe (photos de vraies personnes)
- **Titre H2** : "L'équipe Youdom Care"
- **Photos + mini-bios** (si possible) des responsables :
  - Directrice
  - Coordinatrice pédagogique
  - Responsable qualité
- **Phrase clé** : "Une équipe humaine qui croit au service de qualité."

#### Section 9 : CTA
- "Nous confier votre proche" → `/demander-devis`

---

### PAGE 5 : AIDE FINANCIÈRE & DÉMARCHES
(`/aide-financiere-domicile`)

**Objectif** : Clarifier, rassurer, montrer qu'on aide dans les démarches administratives.

#### Hero
- **H1** : "Financer l'aide à domicile — Aides, réductions, crédits d'impôt"
- **Sous-titre** : "Vous ne payez pas seul(e). Découvrez les aides auxquelles vous avez droit et comment les obtenir."

#### Section 2 : Les aides disponibles (vue d'ensemble)
- **Titre H2** : "Les grandes familles d'aides"
- **Encadrés résumé** (avec lien vers page dédiée) :
  1. 💰 **Crédit d'impôt 50%** — La plus simple à mettre en place
  2. 🏥 **APA** (Allocation Personnalisée d'Autonomie) — Pour personnes âgées en perte d'autonomie
  3. ♿ **PCH** (Prestation Compensation Handicap) — Pour personnes handicapées
  4. 👶 **AEEH** (Allocation Éducation Enfant Handicapé) — Pour enfants handicapés
  5. 🏘️ **Aide sociale mairie (CCAS)** — Complément local
  6. 🤝 **Aides mutuelle/assurance** — Selon votre contrat

#### Section 3 : Le crédit d'impôt détaillé
- **Titre H2** : "Crédit d'impôt 50% — Comment ça marche ?"
- **Étapes simples** :
  1. Payez 100€ d'aide à domicile
  2. Récupérez 50€ sur votre déclaration d'impôts (ou directement)
  3. Vous investissez vraiment 50€ seulement
- **Conditions** :
  - Services à domicile (ménage, aide, accompagnement)
  - Entreprise agréée (✓ Youdom Care l'est)
  - Jusqu'à 12 000€/an (6000€ de crédit max)
- **Ce qu'on fait pour vous** : On vous fournit l'attestation fiscale, on vous guide

#### Section 4 : APA (Allocation Personnalisée d'Autonomie)
- **Titre H2** : "APA — Jusqu'à 1800€/mois pour les personnes âgées"
- **Conditions** :
  - 60+ ans
  - En perte d'autonomie (GIR 1 à 4)
  - Ressources [montants actuels]
- **Montant** : De 400€ à 1800€/mois (selon GIR)
- **Demande** : MDPH ou mairie de votre commune
- **Youdom Care vous aide** : On rempli avec vous, on coordonne
- **Lien** : "/apa-allocation-autonomie" (page dédiée)

#### Section 5 : PCH (Handicap)
- **Titre H2** : "PCH — L'aide majeure pour personnes handicapées"
- **Conditions** :
  - Moins de 60 ans (ou reconnu avant 60)
  - Incapacité significative
- **Montant** : Jusqu'à 3000€/mois
- **Youdom Care** : Coordonnée avec MDPH, aide au dossier
- **Lien** : "/pch-prestation-handicap"

#### Section 6 : Processus d'aide (simplifié)
- **Titre H2** : "Comment on vous aide dans les démarches ?"
- **5 étapes** :
  1. 📞 Vous appelez → on comprend votre besoin + ressources
  2. 📋 On identifie les aides possibles pour vous
  3. 📝 On rempli les dossiers AVEC vous
  4. 🎯 On suit le dossier auprès des organismes
  5. ✨ On met en place le financement
- **CTA** : "Commençons — Devis gratuit"

#### Section 7 : FAQ aides financières
- "Je n'ai pas de ressources — puis-je avoir de l'aide ?"
- "Le crédit d'impôt, c'est automatique ?"
- "Combien de temps pour obtenir l'APA ?"
- "Ma mutuelle paie-t-elle l'aide à domicile ?"

#### Section 8 : CTA
- "Je veux savoir mes aides possibles" → Formulaire de contact pré-rempli

---

### PAGE 6 : BLOG (index)
(`/blog`)

**Objectif** : Capturer du trafic organique (SEO), se positionner comme expert, créer du contenu que les aidants recherchent.

#### Hero
- **H1** : "Blog — Conseils, guides, infos pour les aidants"
- **Sous-titre** : "Articles pratiques sur l'aide à domicile, le maintien à domicile, les aides financières, la gestion du handicap."

#### Section 2 : Catégories (filtres)
- **Catégories principales** :
  - 📚 Guides & conseils aidants
  - 💰 Aides financières
  - 🏥 Santé & pathologies (Alzheimer, Parkinson, AVC, etc.)
  - ♿ Handicap & inclusion
  - 👵 Bien-être personnes âgées
  - 📋 Démarches administratives

#### Section 3 : Articles mis en avant (derniers + populaires)
- **Grille 6-9 articles** avec :
  - Image de couverture (ou illustration)
  - Titre (H3)
  - Extrait (50-100 mots)
  - Auteur + date
  - Temps de lecture
  - Catégorie (badge)
  - Lien "Lire l'article"

#### Section 4 : CTA publication newsletter
- **Encadré** :
  > "Recevez nos conseils directement par email — 1 email/semaine, pratique et clair."
- **Formulaire** : Email + "S'inscrire"

#### Section 5 : Suggestions articles (internes links)
- **Titre H2** : "Articles susceptibles de vous intéresser aussi"
- **3 suggestions** (algo basé sur ce que l'utilisateur consulte)

---

### PAGE 7 : CONTACT / DEMANDE DE DEVIS (version détaillée)
(`/demander-devis`)

**Objectif** : Capturer tous les infos nécessaires pour le CRM, tout en restant user-friendly.

#### Hero
- **H1** : "Demander un devis — 2 minutes, gratuit, sans engagement"
- **Sous-titre** : "Nous répondons sous 2 heures. Remplissez simplement ce formulaire."

#### Section 2 : Formulaire multi-étapes (4-5 étapes)

**ÉTAPE 1 : Situation du bénéficiaire**
- "De qui s'agit-il ?" (radio) :
  - Pour moi-même
  - Pour un proche (parent, enfant, conjoint, autre)
- Type de situation (multi-select) :
  - ☑ Personne âgée
  - ☑ Situation de handicap
  - ☑ Perte d'autonomie
  - ☑ Retour d'hospitalisation
  - ☑ Enfant handicapé/malade
  - ☑ Autre
- Âge approximatif du bénéficiaire (optionnel)
- Code postal du bénéficiaire ⭐ (localisation)

**ÉTAPE 2 : Services souhaités**
- "Quel(s) service(s) vous intéresse(nt) ?" (multi-select) :
  - ☑ Aide à l'autonomie (toilette, repas, lever/coucher)
  - ☑ Aide ménagère
  - ☑ Garde de nuit
  - ☑ Accompagnement (courses, rendez-vous)
  - ☑ Transport PMR (personnes mobilité réduite)
  - ☑ Garde enfants handicapés
  - ☑ Téléassistance
  - ☑ Autre (texte libre)

**ÉTAPE 3 : Planning & urgence**
- "Quand avez-vous besoin ?" (radio) :
  - Immédiatement (urgent)
  - Dans 1-2 semaines
  - Dans 1 mois
  - Pas précisé
- "Quelle fréquence ?" (radio) :
  - Tous les jours
  - Plusieurs fois par semaine
  - 1-2 fois par semaine
  - Ponctuellement
- "Quels jours/horaires ?" (multi-select) :
  - Jours : Lun/Mar/Mer/Jeu/Ven/Sam/Dim
  - Horaires : Matin / Midi / Après-midi / Soir / Nuit

**ÉTAPE 4 : Infos demandeur**
- Civilité (M/Mme)
- Prénom + Nom du demandeur ⭐
- Téléphone ⭐ (formaté +33)
- Email ⭐
- Lien avec bénéficiaire (enfant, conjoint, ami, aidant, etc.)

**ÉTAPE 5 : Message & consentement**
- "Message supplémentaire" (texte libre) :
  > "Parlez-nous de votre situation, de vos attentes, de vos préoccupations. Rien n'est trop petit."
- Checkbox RGPD ⭐ :
  > "☑ J'accepte que Youdom Care utilise mes données pour me contacter et m'envoyer un devis. [Lire la politique de confidentialité]"
- Checkbox newsletter (optionnel) :
  > "☑ M'envoyer les actualités & conseils Youdom Care"
- Bouton final : **"Envoyer ma demande de devis"**

#### Section 3 : Confiance & assurance
- **Encadré** :
  > "🔒 Vos données sont sécurisées (RGPD) • ⚡ Réponse sous 2h • 💯 Sans engagement • 🤝 Besoin d'aide ? Appelez-nous : [TEL]"

#### Section 4 : Alternative rapide (chat / appel)
- **Trois boutons** :
  1. 📞 "Appeler directement" → lien tel:
  2. 💬 "Chat en direct" (si Intercom ou similaire)
  3. 📧 "Formulaire simplifié" (version courte)

---

### PAGE 8 : RECRUTEMENT
(`/rejoignez-nous`)

**Objectif** : Attirer les auxiliaires de vie, aides ménagères, gardes de nuit pour renforcer l'équipe.

#### Hero
- **H1** : "Rejoignez l'équipe Youdom Care — Postes ouverts"
- **Sous-titre** : "Vous aimez aider les autres ? Rejoignez une équipe qui valorise l'humain et la qualité."

#### Section 2 : Pourquoi rejoindre Youdom Care
- **Titre H2** : "Ce que nos intervenants aiment"
- **Avantages clés** (avec icone) :
  - 🤝 Sens du service valorisé
  - 📚 Formation continue & développement
  - 💰 Rémunération attractive & avantages
  - 📅 Horaires flexibles
  - 👥 Ambiance familiale & supportive
  - 🚀 Évolution de carrière
  - 🏠 Missions près de chez vous

#### Section 3 : Postes ouverts
- **Titre H2** : "Nos opportunités"
- **Grille de postes** :
  1. **Auxiliaire de vie** (CDI/CDD)
     - Description courte
     - Compétences requises
     - Bouton "Postuler"
  2. **Aide ménagère** (CDI/CDD)
  3. **Garde de nuit** (CDI/CDD)
  4. **Aide médico-psychologique** (CDI)
  5. **Coordinatrice de secteur** (CDI) — Rôle de management
  6. **Directrice d'agence** (CDI)

#### Section 4 : Processus de recrutement
- **Titre H2** : "Comment on vous recrute"
- **5 étapes transparentes** :
  1. Envoi CV + lettre
  2. Entretien téléphonique
  3. Entretien en personne + visite centres
  4. Tests (capacités, empathie, communication)
  5. Intégration & formation

#### Section 5 : Formation & développement
- **Titre H2** : "On investit dans votre développement"
- **Programme de formation** :
  - Formation initiale à l'accompagnement
  - Formations spécialisées (Alzheimer, handicap, RGPD)
  - Suivi pédagogique régulier
  - Certification possible

#### Section 6 : Témoignages collaborateurs
- ⭐⭐⭐⭐⭐ "Je fais ce métier depuis 5 ans chez Youdom Care. Le sentiment d'aider vraiment, d'être valorisée, et de pouvoir progresser — c'est rare." — Nathalie, AV
- ⭐⭐⭐⭐⭐ "La directrice nous écoute, on peut évoluer. On est pas juste de l'exécution, on est des pro." — Marie, AEG

#### Section 7 : CTA
- **Deux boutons** :
  1. 📧 "Envoyer mon CV" → Formulaire candidature
  2. 📞 "Discuter avec nous" → Téléphone / Chat

---

### PAGE 9 : FAQ (COMPLÈTE)
(`/faq`)

**Objectif** : Répondre aux 20-30 questions les plus posées, capturer du trafic "question + Google".

#### Hero
- **H1** : "Questions fréquentes — Youdom Care"
- **Sous-titre** : "Tout ce que vous devez savoir sur nos services."

#### Section 2 : Catégorisation FAQ
**Cliquez sur une catégorie pour afficher les questions** :

1. **À propos de Youdom Care** (3-4 Q)
   - Depuis combien de temps Youdom Care existe-t-il ?
   - Êtes-vous agréés ?
   - Couvrez-vous mon secteur géographique ?

2. **Services & tarifs** (5-6 Q)
   - Combien coûte une auxiliaire de vie ?
   - Quels services proposez-vous ?
   - Pouvez-vous intervenir en urgence ?
   - Pouvez-vous augmenter/diminuer les heures selon les besoins ?

3. **Aides financières** (5-6 Q)
   - Comment fonctionne le crédit d'impôt 50% ?
   - Qu'est-ce que l'APA et comment y accéder ?
   - Qu'est-ce que la PCH ?
   - Ma mutuelle peut-elle payer l'aide à domicile ?

4. **Intervenants & confiance** (4-5 Q)
   - Comment sélectionnez-vous vos auxiliaires de vie ?
   - C'est toujours la même personne ?
   - Vérifiez-vous les antécédents ?
   - Que faire si la relation n'est pas bonne ?

5. **Démarches & suivi** (3-4 Q)
   - Comment se déroule la première visite ?
   - Comment vous contactez rapidement ?
   - Suivi de qualité ?
   - RGPD — Mes données sont-elles sécurisées ?

#### Section 3 : Chaque Q&R (accordéon)
- **Structure** :
  - Q (titre cliquable, H3)
  - R (texte réponse, 3-10 lignes)
  - Lien interne pertinent (ex: si parle de crédit d'impôt → `/credit-impot-aide-domicile`)

#### Section 4 : CTA final
- **Encadré** :
  > "Vous n'avez pas trouvé votre réponse ?"
  > "📞 Appelez-nous : [TEL] • 📧 Email : [EMAIL] • 💬 Chat"

---

## 3️⃣ CONTENUS RÉDACTIONNELS (VERSION BÊTA)

### Page : ACCUEIL

#### H1 Hero
```
L'aide à domicile sur mesure qui donne confiance aux familles
```

#### Sous-titre Hero
```
Accompagnement personnalisé pour personnes âgées, en situation de handicap 
ou en perte d'autonomie. Paris & Île-de-France, 24h/24.
500+ familles accompagnées • 98% satisfaction • Agréé & assuré
```

#### Titre Section 2
```
Quelle est votre situation ?
```

#### Texte Section 2
```
Trouvez la solution adaptée à votre besoin en 30 secondes.
```

#### Titre Section 3
```
Nos services adaptés à chaque besoin
```

#### Texte Section 3
```
De l'aide à l'autonomie à la téléassistance,
nous avons la solution pour vivre sereinement à domicile.
```

#### Titre Section 4
```
Pourquoi confier votre proche à Youdom Care ?
```

#### Bloc 1
```
Titre : Évaluation gratuite à domicile
Texte : On comprend vraiment votre situation, pas de jugement, 
        juste de l'écoute et du professionnalisme.
```

#### Bloc 2
```
Titre : Même intervenant, lien de confiance
Texte : La même auxiliaire de vie vient à chaque visite. 
        Elle connaît vos habitudes, vos besoins, votre vie. 
        Une vraie relation se crée.
```

#### Bloc 3
```
Titre : Suivi qualité permanent
Texte : Enquêtes régulières auprès des bénéficiaires, 
        visites de supervision, ajustements permanents. 
        Votre satisfaction est notre priorité absolue.
```

#### Bloc 4
```
Titre : Aides financières — On vous guide
Texte : Crédit d'impôt 50%, APA, PCH. 
        On remplit les dossiers, on suit avec l'administration. 
        Vous n'êtes pas seul.
```

#### Titre Section Témoignages
```
Ce que disent les familles que nous accompagnons
```

#### Témoignage 1
```
"Grâce à Youdom Care, ma mère peut rester chez elle en toute sécurité. 
Son auxiliaire, Sophie, est devenue comme une amie. Je travaille l'esprit tranquille."
— Marie D., fille d'une bénéficiaire
⭐⭐⭐⭐⭐
```

#### Témoignage 2
```
"Papa a Alzheimer et besoin d'une présence quotidienne. 
L'auxiliaire a trouvé avec lui une belle complicité. 
Elle est patiente, tendre, et vraiment pro."
— Famille Dupont
⭐⭐⭐⭐⭐
```

#### Titre Formulaire
```
Commençons → Devis gratuit en 2 minutes
```

#### Sous-titre Formulaire
```
Pas de prise de tête. Juste 4 infos et on peut vous appeler.
Réponse garantie sous 2h.
```

#### Placeholder bouton
```
Recevoir mon devis gratuit
```

---

### Page : AIDE À DOMICILE PERSONNES ÂGÉES

#### H1
```
Aide à domicile pour personnes âgées — 
Vivre sereinement chez soi
```

#### Sous-titre
```
Accompagnement personnalisé pour perte d'autonomie, 
maintien à domicile. Auxiliaires formées, agréées, de confiance.
```

#### Titre Section 2
```
Vivre chez soi le plus longtemps possible, 
c'est la solution privilégiée des personnes âgées
```

#### Texte Section 2
```
Quitter son domicile, c'est perdre son autonomie, ses souvenirs, 
ses repères, sa liberté. Chez Youdom Care, nous croyons fermement 
que votre parent peut rester chez lui, avec aide professionnelle, 
en toute sécurité et avec dignité.

Avec une bonne aide à domicile :
• Votre parent reste dans son environnement (maison, jardin, amis)
• Il conserve son indépendance et son identité
• Il évite une entrée précoce en maison de retraite
• Il vit plus longtemps et mieux
• L'administratif ? On s'en occupe.
```

#### Titre Section Services
```
Nos services pour l'autonomie de votre parent
```

#### Service 1 : Aide à l'autonomie
```
Titre : Aide à l'autonomie — Gestes du quotidien
Description : Levée et coucher • Toilette et hygiène • Habillage 
              • Préparation et aide aux repas • Prise des médicaments 
              • Rappels et stimulation mémoire
Accroche : "Accompagnement bienveillant pour les gestes qui deviennent difficiles."
```

#### Service 2 : Aide ménagère
```
Titre : Aide ménagère — Domicile impeccable
Description : Ménage complet • Lessive et repassage • Cuisine 
              • Rangement • Entretien du jardin (mineurs)
Accroche : "Un domicile propre et organisé, c'est du bien-être."
```

#### Service 3 : Garde de nuit
```
Titre : Garde de nuit — Présence rassurante
Description : Présence nocturne à domicile • Aide aux levers nocturnes 
              • Surveillance et sécurité • Disponibilité 24h/24
Accroche : "Votre parent ne se réveille jamais seul. Vous dormez tranquille."
```

#### Service 4 : Accompagnement
```
Titre : Accompagnement — Courses, rendez-vous, sorties
Description : Accompagnement aux courses • Rendez-vous médicaux 
              • Sorties culturelles et loisirs • Compagnie
Accroche : "On accompagne, on n'abandonne jamais seul."
```

#### Service 5 : Téléassistance
```
Titre : Téléassistance — Sécurité 24h/24
Description : Détecteur de chute automatique • Géolocalisation GPS 
              • Médaillon avec haut-parleur • Assistance immédiate
Accroche : "Une chute ? Un malaise ? On intervient en 5 minutes."
```

#### Service 6 : Retour d'hospitalisation
```
Titre : Retour d'hospitalisation — Accompagnement post-op
Description : Suivi post-opératoire • Aide aux soins • Prise de médicaments 
              • Coordination avec les équipes médicales
Accroche : "Sortie d'hôpital ? On prend soin de vous jusqu'au rétablissement complet."
```

#### Titre Section Processus
```
Comment nous trouvons la bonne solution pour votre parent
```

#### Étape 1
```
Titre : Vous nous contactez
Texte : Par téléphone ou en ligne. C'est gratuit et sans engagement. 
        On vous écoute, on pose des questions intelligentes.
```

#### Étape 2
```
Titre : Visite à domicile gratuite
Texte : On vient voir le logement, on rencontre votre parent, 
        on échange vraiment. On identifie les besoins réels, 
        pas ceux qu'on croit.
```

#### Étape 3
```
Titre : Sélection de l'auxiliaire idéale
Texte : On ne propose pas une auxiliaire au hasard. 
        On choisit quelqu'un qui correspond à votre parent, 
        à son caractère, ses envies, ses horaires.
```

#### Étape 4
```
Titre : Plan d'aide personnalisé
Texte : Jours, horaires, services, fréquence. 
        Tout est écrit, clair, adapté à votre situation. 
        Pas de surprise.
```

#### Étape 5
```
Titre : Démarrage et suivi continu
Texte : Première visite de l'auxiliaire. Premiers retours. 
        Puis suivi régulier : enquêtes, ajustements, 
        coordination avec le médecin si besoin.
```

#### Titre Aides Financières
```
Financer l'aide à domicile — Moins cher qu'on ne croit
```

#### Encadré Crédit d'impôt
```
✨ Crédit d'impôt de 50% — La meilleure nouvelle

Vous payez 100€ d'aide à domicile → l'État rembourse 50€.
Vous investissez vraiment 50€ seulement.

Jusqu'à 12 000€/an → jusqu'à 6000€ de crédit d'impôt.

On gère la paperasse, on vous fournit l'attestation fiscale.
```

#### Titre Autres aides
```
Autres aides pour compléter
```

#### Aide 1 : APA
```
Titre : APA (Allocation Personnalisée d'Autonomie)
Texte : Jusqu'à 1800€/mois pour personnes 60+ en perte d'autonomie.
        On vous accompagne dans la demande.
Lien : /apa-allocation-autonomie
```

#### Aide 2 : Aide sociale
```
Titre : Aide sociale de votre mairie (CCAS)
Texte : Complément local selon votre situation et vos ressources.
```

#### Aide 3 : Mutuelle
```
Titre : Aide de votre mutuelle
Texte : Certaines mutuelles remboursent partiellement l'aide à domicile.
        Consultez votre contrat.
```

#### Titre Témoignages
```
Ce disent les familles de personnes âgées
```

#### Tém 1
```
⭐⭐⭐⭐⭐
"Maman a repris goût à la vie. Son auxiliaire vient 3h par jour, 
elle la toilette, l'aide à manger, puis elles bavardent en écoutant 
la radio. Maman est bien, on est tranquille."
— Jean M., fils
```

#### Tém 2
```
⭐⭐⭐⭐⭐
"Papa atteint d'Alzheimer. On a demandé une auxiliaire bienveillante 
qui ne paniquerait pas face à ses oublis. Youdom Care a trouvé 
exactement la bonne personne. Papa l'aime bien."
— Sophie V., fille
```

#### Titre CTA final
```
Prêt à offrir à votre parent une meilleure qualité de vie ?
```

#### Texte CTA
```
La première étape est gratuite. On vous écoute, 
on vous propose la meilleure solution. 
Puis vous décidez, sans pression.
```

---

### Page : AIDE AU HANDICAP

#### H1
```
Aide à domicile pour personnes en situation de handicap — 
Accompagnement adapté & bienveillant
```

#### Sous-titre
```
Services spécialisés pour adultes et enfants. 
Auxiliaires formées, agréées, discrètes.
```

#### Titre Section 2
```
Vivre dignement avec un handicap, c'est notre engagement
```

#### Texte Section 2
```
Qu'il s'agisse de handicap physique, moteur, sensoriel, psychique ou mental, 
chaque situation est unique. Il n'existe pas deux besoins identiques.

Chez Youdom Care, nos intervenantes sont formées et sélectionnées pour :
• Respecter votre autonomie au maximum
• Soutenir votre dignité et votre envie d'indépendance
• Travailler sans jugement, juste avec professionnalisme
• Adapter quotidiennement leur accompagnement à vos réalités

Parce que le handicap n'enlève rien à votre valeur.
C'est juste une différence qu'on accompagne avec respect.
```

#### Bénéfices clés
```
✓ Autonomie préservée au maximum
✓ Accompagnement discret et respectueux
✓ Coordination avec médecins, MDPH, rééducateurs
✓ Adaptation permanente à vos évolutions
✓ Aides financières importantes (PCH jusqu'à 3000€/mois)
```

#### Titre Services
```
Services d'aide spécialisée pour le handicap
```

#### Service 1 : Gestes quotidiens
```
Titre : Aide aux gestes du quotidien
Description : Toilette avec respect • Repas et hydratation • Lever/coucher 
              • Habillage adapté • Rappels et stimulation
Accroche : "On vous aide là où c'est difficile, on vous laisse faire quand vous pouvez."
```

#### Service 2 : Mobilité
```
Titre : Aide à la mobilité & transferts
Description : Aide aux transferts (lit, chaise) • Ambulation • 
              Aménagement de l'espace • Aides techniques
Accroche : "Pour personnes à mobilité réduite ou paraplégiques."
```

#### Service 3 : Soutien psychologique
```
Titre : Aide & stimulation psychologique
Description : Soutien émotionnel • Activités adaptées • Lien social 
              • Gestion du stress et de l'anxiété
Accroche : "Pour personnes atteintes de troubles psychiques ou mentaux."
```

#### Service 4 : Transport
```
Titre : Transport spécialisé (PMR)
Description : Véhicules adaptés • Chauffeur formé • 
              Accompagnement aux rendez-vous médicaux • Sorties loisir
Accroche : "Pour personnes à mobilité réduite, en fauteuil roulant."
```

#### Service 5 : Enfants
```
Titre : Garde d'enfants handicapés ou malades
Description : Aide quotidienne • Soutien scolaire adapté • 
              Lien social • Répit pour les parents
Accroche : "On prend soin de votre enfant, on libère aussi les parents."
```

#### Service 6 : Coordination médicale
```
Titre : Coordination avec les professionnels de santé
Description : Liaison avec MDPH, médecins, kinés, psys • 
              Suivi des recommandations médicales • Documentation
Accroche : "Votre auxiliaire et votre médecin travaillent ensemble."
```

#### Titre Intervenants
```
Nos auxiliaires sont sélectionnées pour leur expertise ET leur humanité
```

#### Texte Intervenants
```
Formation spécifique au handicap (selon les types)
Sensibilité à l'inclusion et aux droits
Références vérifiées rigoureusement
Supervision et feedback réguliers
Évolution des compétences (formations continues)

Parce que bien aider au handicap, ça s'apprend.
```

#### Titre Aides financières
```
Financer l'aide au handicap
```

#### Aide 1 : PCH
```
Titre : PCH (Prestation Compensation Handicap)
Montant : Jusqu'à 3000€/mois
Description : Pour personnes < 60 ans atteintes d'incapacité significant.
              On vous aide dans le dossier MDPH.
Lien : /pch-prestation-handicap
```

#### Aide 2 : AEEH
```
Titre : AEEH (pour enfants)
Montant : 150€ à 1200€/mois selon le grade
Description : Pour enfants < 20 ans en situation de handicap.
              Complément possible avec PCH.
```

#### Aide 3 : Crédit d'impôt
```
Titre : Crédit d'impôt 50%
Montant : 50% des dépenses (jusqu'à 12000€/an)
Description : La plus simple à mettre en place, on vous guide.
```

#### Aide 4 : Aides MDPH
```
Titre : Autres aides MDPH
Description : Selon votre dossier et votre département.
              On vous aide à les identifier.
```

#### Titre Témoignages handicap
```
Ce que disent les familles de personnes handicapées
```

#### Tém 1
```
⭐⭐⭐⭐⭐
"Mon fils est en fauteuil roulant. L'auxiliaire le lave, l'habille 
avec une douceur incroyable. Elle l'accompagne au cinéma, aux courses, 
lui redonne une vie sociale. Merci infiniment."
— Mère de Tom
```

#### Tém 2
```
⭐⭐⭐⭐⭐
"Je suis atteint de sclérose en plaques. Youdom Care a trouvé quelqu'un 
qui comprend ma maladie, qui ne me culpabilise pas, et qui m'aide 
à rester indépendant malgré tout."
— Jean P.
```

---

## 4️⃣ FORMULAIRE DE CONTACT / DEVIS (UX + CHAMPS)

### Formulaire Principal (Détaillé)

#### Structure multi-étapes
```
Étape 1/4 : De qui s'agit-il ?
Étape 2/4 : Quel(s) service(s) ?
Étape 3/4 : Quand et comment ?
Étape 4/4 : Vos coordonnées
```

#### Étape 1 : Situation
```
Champs :
- Radio : "De qui s'agit-il ?" 
  ○ Pour moi-même
  ○ Pour un proche
  
- Multi-select : "Situation (sélectionnez une ou plusieurs)" ⭐
  ☑ Personne âgée (60+)
  ☑ Perte d'autonomie (toute situation)
  ☑ Situation de handicap
  ☑ Retour d'hospitalisation
  ☑ Enfant handicapé ou malade
  ☑ Autre

- Text input : "Âge approximatif du bénéficiaire" (optionnel)
  Placeholder : "70 ans par exemple"

- Text input : "Code postal de résidence" ⭐ (localization)
  Placeholder : "75012"
```

#### Étape 2 : Services
```
Champs :
- Multi-select : "Quel(s) service(s) vous intéresse(nt) ?" ⭐
  ☑ Aide à l'autonomie (toilette, repas, lever/coucher)
  ☑ Aide ménagère (nettoyage, lessive, cuisine)
  ☑ Garde de nuit
  ☑ Accompagnement (courses, rendez-vous, sorties)
  ☑ Transport PMR (personnes mobilité réduite)
  ☑ Aide au handicap (spécialisée)
  ☑ Garde enfants handicapés
  ☑ Téléassistance
  ☑ Retour d'hospitalisation
  ☑ Je ne sais pas, conseillez-moi

- Text area : "Détails supplémentaires sur le service" (optionnel)
  Placeholder : "Ex: mon parent a Alzheimer et a besoin d'aide pour les repas"
```

#### Étape 3 : Planning
```
Champs :
- Radio : "Quand avez-vous besoin ?" ⭐
  ○ Immédiatement (urgent)
  ○ Dans 1-2 semaines
  ○ Dans 1 mois
  ○ Dans 2-3 mois
  ○ Pas précisé encore

- Radio : "Quelle fréquence ?" ⭐
  ○ Tous les jours (7j/7)
  ○ Plusieurs fois par semaine (4-6j)
  ○ 2-3 fois par semaine
  ○ 1 fois par semaine
  ○ Ponctuellement (pas régulier)

- Multi-select : "Quels jours ?" (optionnel)
  ☑ Lundi
  ☑ Mardi
  ☑ Mercredi
  ☑ Jeudi
  ☑ Vendredi
  ☑ Samedi
  ☑ Dimanche

- Multi-select : "Quels horaires ?" (optionnel)
  ☑ Matin (avant 12h)
  ☑ Midi (12h-14h)
  ☑ Après-midi (14h-18h)
  ☑ Soir (18h-21h)
  ☑ Nuit (21h-8h)
  ☑ 24h/24
```

#### Étape 4 : Coordonnées
```
Champs :
- Select : "Civilité" ⭐
  ○ Monsieur
  ○ Madame
  ○ Autre

- Text input : "Prénom" ⭐
  Placeholder : "Jean"

- Text input : "Nom" ⭐
  Placeholder : "Dupont"

- Text input : "Téléphone" ⭐ (formaté +33...)
  Placeholder : "06 12 34 56 78"

- Text input : "Email" ⭐
  Placeholder : "vous@email.com"

- Select : "Lien avec le bénéficiaire" (optionnel)
  - Enfant
  - Conjoint
  - Ami/Aidant
  - Professionnel (médecin, assistant social)
  - Autre

- Text area : "Message supplémentaire" (optionnel)
  Placeholder : "Parlez-nous de votre situation, vos attentes, 
               vos préoccupations — on lira vraiment."

- Checkbox : "J'accepte la politique de confidentialité" ⭐
  "☑ J'accepte que Youdom Care traite mes données pour 
   me contacter et me proposer un devis. 
   Lire la politique de confidentialité"

- Checkbox : "Newsletter" (optionnel)
  "☑ M'envoyer les actualités et conseils Youdom Care 
   (1 email/semaine max)"

- Button : "Envoyer ma demande de devis" (CTA principal, vert/bleu)
```

### Formulaire court (Hero)

```
Étape 1 (inline) :
- Prénom ⭐
- Téléphone ⭐
- Besoin principal (dropdown) ⭐
- Bouton "Recevoir mon devis" ⭐

Sous-texte : "Réponse garantie sous 2h • Sans engagement"
```

---

## 5️⃣ INTÉGRATION AVEC LE CRM (CONCEPTUEL)

### Champs à envoyer au CRM

```
IDENTITÉ DEMANDEUR
├─ Prénom
├─ Nom
├─ Téléphone
├─ Email
├─ Civilité

IDENTITÉ BÉNÉFICIAIRE
├─ Type (parent, enfant, conjoint, ami, autre)
├─ Âge approximatif
├─ Code postal (localisation)

SITUATION & BESOINS
├─ Type de situation (personne âgée / handicap / perte autonomie, etc.)
├─ Services demandés (multi-select → tableau)
├─ Détails supplémentaires (texte libre)

PLANNING
├─ Urgence (immédiat / 1-2 sem / 1 mois / 2-3 mois / non spécifié)
├─ Fréquence (tous les jours / plusieurs fois / 2-3x / 1x / ponctuel)
├─ Jours souhaités (lun/mar/mer/jeu/ven/sam/dim → array)
├─ Horaires souhaités (matin/midi/aprem/soir/nuit/24h → array)

CONSENTEMENTS & PRÉFÉRENCES
├─ Accepte RGPD (booléen)
├─ Accepte newsletter (booléen)
├─ Message libre (texte)

MÉTADONNÉES
├─ Date/heure soumission
├─ Source (blog / homepage / services page / etc.)
├─ Formulaire utilisé (court vs détaillé)
├─ Tags/catégories auto (pour segmentation)
```

### Catégorisation des leads

```
PAR TYPE DE BESOIN :
├─ Personne âgée
├─ Handicap (adulte)
├─ Enfant handicapé
├─ Retour hospitalisation
├─ Urgence
└─ Autre

PAR URGENCE :
├─ 🔴 Immédiat
├─ 🟠 1-2 semaines
├─ 🟡 1 mois
├─ 🟢 2-3 mois
└─ ⚪ Pas spécifié

PAR LOCALISATION :
├─ Paris 12e (siège)
├─ Paris (autres arr.)
├─ IDF proche
├─ Hors IDF (hors scope ?)
└─ À déterminer

PAR QUALITÉ DU LEAD :
├─ Très qualifié (urgence + services clairs + infos complètes)
├─ Bien qualifié (services clairs, timing ok)
├─ Moyen (informations partielles)
└─ À qualifier (peu de détails)
```

### Automatisations email

```
1️⃣ EMAIL DE CONFIRMATION (immédiat, envoyé automatiquement)
   Destinataire : Demandeur
   Objet : "Devis Youdom Care — Confirmation de votre demande"
   Contenu :
   - Confirmation réception demande
   - Récapitulatif situation (services demandés, localisation, urgence)
   - "Nous vous appelons sous 2h" (promesse)
   - Contact direct si urgent (téléphone)
   - Lien FAQ (pour patienter)

2️⃣ NOTIFICATION INTERNE (immédiat, équipe Youdom Care)
   Destinataire : Équipe contact/commercial
   Objet : "🔔 Nouveau lead — [Prénom] [Nom] — [URGENCE]"
   Contenu :
   - Fiche lead complète
   - Tous les champs du formulaire
   - Catégorisation auto (urgence, type besoin, localisation)
   - Bouton "Prendre en charge" (assigner à un conseiller)

3️⃣ RAPPEL INTERNE (4h après, si pas traité)
   Destinataire : Manager
   Objet : "⏰ Lead non traité — [Prénom] — 4h"
   Contenu : Rappel + urgence
   Lien : Tableau de bord CRM

4️⃣ EMAIL DE RELANCE (24h après, si pas de contact verbal)
   Destinataire : Demandeur
   Objet : "Youdom Care — Votre demande de devis"
   Contenu :
   - Relance gentille
   - Lien pour télécharger dossier APA / PCH (ressource utile)
   - Numéro direct si questions
   - Lien pour modifier sa demande

5️⃣ EMAIL DE SUIVI (après contact verbal)
   Destinataire : Demandeur
   Objet : "Suite à notre échange — Youdom Care"
   Contenu :
   - Récap de ce qui a été discuté
   - Prochaines étapes
   - Si visite à domicile : date/heure + dossier à prévoir
   - Ressources jointes (guide aide financière, etc.)
```

### Tâches CRM pour l'équipe

```
FLUX STANDARD :
1. Lead arrive → Notification interne → Assigner à un conseiller
2. Conseiller appelle 24h après réception (max)
3. Qualifier le lead (urgence, faisabilité, besoin réel)
4. Fixer visite à domicile (si pertinent)
5. Suivi post-visite (proposition plan aide, tarif)
6. Closing (signature de contrat ou fin de procédure)

URGENCES CRITIQUES :
- Lead marqué "immédiat" → Appel < 2h
- Lead hospitalisé → Contact direct
- Signalements sociaux (CLIC, MDPH) → Priorité 1

TÂCHES RÉCURRENTES :
- Vérifier leads non traités (daily briefing)
- Segmenter leads par zone (pour dispatch équipes régionales)
- Analy & rapport mensuel (sources, conversion rate, etc.)
```

---

## 6️⃣ RECOMMANDATIONS DESIGN & TON

### Palette de couleurs

```
Couleur primaire : BLEU CONFIANCE
  → #1B4D7A (bleu marine doux)
  → Utiliser pour : Headers, CTA principaux, liens, titres H1
  → Effet : Professionnel, rassurant, médical sans être froid

Couleur secondaire : AMBRE CHALEUR
  → #E8B931 (or/ambre doux)
  → Utiliser pour : CTA secondaires, highlights, accents, badges
  → Effet : Chaleur humaine, positif, espoir

Couleur accent : TURQUOISE
  → #2EC4B6 (couleur apaisante)
  → Utiliser pour : Icones, chiffres clés, petits éléments
  → Effet : Sérénité, confiance

Neutre : CRÈME / BEIGE
  → #F7F3EE (arrière-plan doux, pas blanc pur)
  → Utiliser pour : Sections fond, espaces respirants
  → Effet : Doux pour les yeux (important pour seniors)

Texte : GRIS FONCÉ
  → #1A1A2E (presque noir, mais plus doux)
  → #4A4A6A (gris texte secondaire)
  → Contraste fort → Lisibilité maximale

Signaux :
  ✅ Succès : #10B981 (vert doux)
  ❌ Alerte : #EF4444 (rouge doux)
  ⏱️ Info : Bleu primaire
```

### Style des photos

```
✅ À FAIRE :
- Photos authentiques (vraies personnes, vraies situations)
- Scènes de la vie quotidienne (toilette, repas, sorties, sourire)
- Intergénérationnel (senior + aidante + famille)
- Moments tendres, de confiance
- Intérieurs réalistes (pas maisons modèles)
- Diversité (femmes et hommes intervenants, diverses origines)
- Expressions naturelles (rire, détente, complicité)

❌ À ÉVITER :
- Stock photos trop lisses/artificiels
- Poses trop "marketing"
- Maquillage/vêtements trop parfaits
- Ambiance "clinique" ou "asile"
- Photos dégradantes (personnes âgées faibles, etc.)
- Clichés sur le handicap
- Surcharger (moins de photos, mais vraies)
```

### Ton & langage

```
PRINCIPES :
1. Vouvoiement : "Vous" au lieu de "Tu"
   (Plus respectueux, adapté au public)

2. Empathie authentique, pas condescendance
   ✅ "C'est une transition difficile. On vous comprend."
   ❌ "Pauvre petite mère, on va s'occuper de vous."

3. Clarté avant tout
   ✅ "Crédit d'impôt de 50%" (simple)
   ❌ "Déduction fiscale imputable à titre personnel" (lourd)

4. Pas de jargon médico-social inutile
   ✅ "Perte d'autonomie"
   ❌ "Limitation fonctionnelle du coefficient GIR"

5. Proactivité & rassurance
   ✅ "On gère les démarches pour vous"
   ❌ "Vous devez remplir le dossier APA"

6. Spécificité > généralités
   ✅ "Toilette, habillage, aide aux repas"
   ❌ "Aide quotidienne"

7. Honnêteté (pas de promesses exagérées)
   ✅ "On fait notre maximum pour trouver l'auxiliaire idéale"
   ❌ "Nous garantissons le bonheur absolu"

EXEMPLES DE PHRASES TYPES :

→ Accueil :
"Vivre chez soi le plus longtemps possible, c'est la solution 
privilégiée par les personnes âgées. Youdom Care rend ça possible."

→ Rassurance :
"On prend le temps de vraiment vous écouter. 
Pas de prise de tête, juste du professionnalisme et de l'humanité."

→ Engagement :
"Même intervenant à chaque visite. 
Elle apprendra à connaître votre parent, sa routine, ses envies."

→ Aides financières :
"Vous pensez que c'est trop cher ? Ce n'est pas si simple. 
Découvrez les aides —certaines parce surprendre."

→ CTA doux :
"Prêt à explorer la solution idéale pour vous ? 
La première étape est gratuite et sans engagement."
```

### Accessibilité & lisibilité (personnes âgées)

```
POLICE :
- Taille minimum : 16px (jamais < 14px)
- Police sans-serif : Inter, Roboto (facile à lire)
- Line-height : 1.6 minimum (aération)
- Line-length : max 60-70 caractères (sinon fatigue)

CONTRASTE :
- Ratio contraste : Minimum 4.5:1 (WCAG AA)
- Tester avec: WebAIM Contrast Checker
- Jamais gris clair sur fond clair

ESPACEMENTS :
- Marges généreuses (respiration)
- Pas de blocs trop denses
- Listes à puces plutôt que paragraphes long

INTERACTIVITÉ :
- Boutons cliquables : min 44x44px (doigts arthritiques)
- Hover states clairs
- Focus states visibles (pour clavier)
- Pas de contenu en survol (hover-only)

NAVIGATION :
- Menu simple et logique
- Pas de déroulants imbriqués
- Fil d'ariane visible
- Moteur de recherche (pour ceux perdus)

FORMULAIRES :
- Petits formulaires (étapes courtes)
- Labels visibles et associés aux champs
- Messages d'erreur clairs
- Auto-complete si possible
```

---

## RÉSUMÉ LIVRABLE

Ce document fournit :
✅ Arborescence SEO-friendly complète (10+ pages)
✅ Wireframes détaillés (8 pages principales)
✅ Contenus rédactionnels bêta (authentiques, empathiques)
✅ Formulaires avec tous les champs CRM
✅ Automatisations email et workflows
✅ Recommandations design, couleurs, ton, accessibilité

Le site est **prêt à être développé** avec ces spécifications.
