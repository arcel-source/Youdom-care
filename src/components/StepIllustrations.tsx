/* Illustrations SVG pour les étapes "Comment ça marche" */

export function IllustrationContact() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Fond */}
      <circle cx="200" cy="200" r="180" fill="#F0F4F8" />
      {/* Bureau */}
      <rect x="100" y="240" width="200" height="12" rx="6" fill="#1B4D7A" opacity="0.2" />
      <rect x="120" y="180" width="160" height="60" rx="8" fill="#1B4D7A" opacity="0.1" />
      {/* Écran */}
      <rect x="155" y="140" width="90" height="60" rx="6" fill="#1B4D7A" />
      <rect x="160" y="145" width="80" height="45" rx="3" fill="#E8F4FD" />
      <rect x="190" y="200" width="20" height="15" fill="#1B4D7A" opacity="0.3" />
      {/* Personne */}
      <circle cx="200" cy="95" r="28" fill="#E8B931" />
      <circle cx="200" cy="88" r="18" fill="#FFDAB9" />
      <path d="M185 82 Q200 75 215 82" stroke="#1B4D7A" strokeWidth="2" fill="none" />
      <circle cx="193" cy="86" r="2" fill="#1B4D7A" />
      <circle cx="207" cy="86" r="2" fill="#1B4D7A" />
      <path d="M195 93 Q200 97 205 93" stroke="#1B4D7A" strokeWidth="1.5" fill="none" />
      {/* Corps */}
      <path d="M175 110 Q200 125 225 110 L230 170 H170 Z" fill="#1B4D7A" />
      {/* Casque */}
      <path d="M175 82 Q175 68 200 68 Q225 68 225 82" stroke="#4A4A6A" strokeWidth="3" fill="none" />
      <circle cx="175" cy="86" r="5" fill="#4A4A6A" />
      <path d="M170 86 L160 100" stroke="#4A4A6A" strokeWidth="3" />
      <circle cx="158" cy="103" r="6" fill="#4A4A6A" />
      {/* Téléphone flottant */}
      <rect x="280" y="100" width="45" height="75" rx="8" fill="#E8B931" />
      <rect x="285" y="108" width="35" height="55" rx="3" fill="white" />
      <path d="M295 135 L310 125 L310 145 Z" fill="#1B4D7A" opacity="0.3" />
      {/* Ondes */}
      <path d="M330 120 Q340 137 330 155" stroke="#E8B931" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M340 115 Q355 137 340 160" stroke="#E8B931" strokeWidth="2" fill="none" opacity="0.3" />
      {/* Notes */}
      <rect x="60" y="150" width="50" height="65" rx="5" fill="white" stroke="#1B4D7A" strokeWidth="1.5" />
      <line x1="68" y1="165" x2="102" y2="165" stroke="#1B4D7A" opacity="0.3" strokeWidth="2" />
      <line x1="68" y1="175" x2="95" y2="175" stroke="#1B4D7A" opacity="0.3" strokeWidth="2" />
      <line x1="68" y1="185" x2="98" y2="185" stroke="#1B4D7A" opacity="0.3" strokeWidth="2" />
      <line x1="68" y1="195" x2="88" y2="195" stroke="#E8B931" opacity="0.5" strokeWidth="2" />
      <path d="M72 200 L76 205 L85 196" stroke="#2EC4B6" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function IllustrationEvaluation() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="200" cy="200" r="180" fill="#FFF8E7" />
      {/* Maison */}
      <path d="M120 200 L200 140 L280 200" stroke="#1B4D7A" strokeWidth="4" fill="none" />
      <rect x="140" y="200" width="120" height="100" rx="4" fill="#1B4D7A" opacity="0.1" />
      <rect x="140" y="200" width="120" height="100" rx="4" stroke="#1B4D7A" strokeWidth="2" fill="none" />
      {/* Porte */}
      <rect x="180" y="250" width="40" height="50" rx="3" fill="#E8B931" />
      <circle cx="212" cy="275" r="3" fill="#1B4D7A" />
      {/* Fenêtres */}
      <rect x="150" y="215" width="25" height="25" rx="2" fill="#E8F4FD" stroke="#1B4D7A" strokeWidth="1.5" />
      <rect x="225" y="215" width="25" height="25" rx="2" fill="#E8F4FD" stroke="#1B4D7A" strokeWidth="1.5" />
      {/* Personne avec clipboard */}
      <circle cx="320" cy="180" r="20" fill="#FFDAB9" />
      <circle cx="314" cy="177" r="2" fill="#1B4D7A" />
      <circle cx="326" cy="177" r="2" fill="#1B4D7A" />
      <path d="M316 185 Q320 189 324 185" stroke="#1B4D7A" strokeWidth="1.5" fill="none" />
      <path d="M305 198 Q320 210 335 198 L338 270 H302 Z" fill="#2EC4B6" />
      {/* Clipboard */}
      <rect x="290" y="230" width="35" height="45" rx="4" fill="white" stroke="#1B4D7A" strokeWidth="1.5" />
      <rect x="300" y="226" width="15" height="8" rx="2" fill="#1B4D7A" />
      <line x1="297" y1="242" x2="318" y2="242" stroke="#1B4D7A" opacity="0.3" strokeWidth="1.5" />
      <line x1="297" y1="250" x2="315" y2="250" stroke="#1B4D7A" opacity="0.3" strokeWidth="1.5" />
      <line x1="297" y1="258" x2="310" y2="258" stroke="#E8B931" opacity="0.5" strokeWidth="1.5" />
      <path d="M298 262 L302 266 L310 258" stroke="#2EC4B6" strokeWidth="2" fill="none" />
      {/* Coeur maison */}
      <path d="M195 175 Q200 168 205 175 Q200 185 195 175 Z" fill="#E8B931" />
      {/* Arbres */}
      <circle cx="100" cy="260" r="20" fill="#2EC4B6" opacity="0.3" />
      <rect x="97" y="275" width="6" height="25" fill="#1B4D7A" opacity="0.2" />
    </svg>
  );
}

export function IllustrationSelection() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="200" cy="200" r="180" fill="#E8F4FD" />
      {/* Personne 1 - Auxiliaire sélectionnée (centre, plus grande) */}
      <circle cx="200" cy="130" r="30" fill="#FFDAB9" />
      <circle cx="192" cy="126" r="2.5" fill="#1B4D7A" />
      <circle cx="208" cy="126" r="2.5" fill="#1B4D7A" />
      <path d="M194 136 Q200 141 206 136" stroke="#1B4D7A" strokeWidth="2" fill="none" />
      <path d="M175 158 Q200 175 225 158 L230 240 H170 Z" fill="#1B4D7A" />
      {/* Badge étoile */}
      <circle cx="235" cy="155" r="15" fill="#E8B931" />
      <text x="235" y="160" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">★</text>
      {/* Cercle check */}
      <circle cx="200" cy="130" r="45" stroke="#2EC4B6" strokeWidth="3" fill="none" strokeDasharray="6 4" />
      {/* Profils à gauche (faded) */}
      <circle cx="90" cy="170" r="18" fill="#FFDAB9" opacity="0.4" />
      <path d="M78 188 Q90 198 102 188 L105 230 H75 Z" fill="#8BA4BC" opacity="0.3" />
      {/* Profils à droite (faded) */}
      <circle cx="310" cy="170" r="18" fill="#FFDAB9" opacity="0.4" />
      <path d="M298 188 Q310 198 322 188 L325 230 H295 Z" fill="#8BA4BC" opacity="0.3" />
      {/* Flèches de sélection */}
      <path d="M125 180 L165 160" stroke="#E8B931" strokeWidth="2" markerEnd="url(#arrow)" opacity="0.5" />
      <path d="M275 180 L235 160" stroke="#E8B931" strokeWidth="2" markerEnd="url(#arrow)" opacity="0.5" />
      {/* Poignée de main */}
      <path d="M170 275 Q185 260 200 270 Q215 260 230 275" stroke="#1B4D7A" strokeWidth="3" fill="none" />
      <path d="M165 280 Q200 300 235 280" stroke="#E8B931" strokeWidth="3" fill="none" />
      {/* Badge confiance */}
      <rect x="150" y="310" width="100" height="30" rx="15" fill="#2EC4B6" opacity="0.15" />
      <circle cx="170" cy="325" r="8" fill="#2EC4B6" opacity="0.5" />
      <path d="M166 325 L169 328 L175 322" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function IllustrationPlan() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="200" cy="200" r="180" fill="#F0FFF4" />
      {/* Document principal */}
      <rect x="110" y="80" width="180" height="240" rx="10" fill="white" stroke="#1B4D7A" strokeWidth="2" />
      {/* Entête document */}
      <rect x="110" y="80" width="180" height="45" rx="10" fill="#1B4D7A" />
      <rect x="130" y="94" width="80" height="6" rx="3" fill="white" opacity="0.8" />
      <rect x="130" y="106" width="50" height="4" rx="2" fill="white" opacity="0.4" />
      {/* Lignes de contenu */}
      <rect x="130" y="145" width="140" height="5" rx="2.5" fill="#1B4D7A" opacity="0.15" />
      <rect x="130" y="160" width="120" height="5" rx="2.5" fill="#1B4D7A" opacity="0.15" />
      <rect x="130" y="175" width="140" height="5" rx="2.5" fill="#1B4D7A" opacity="0.15" />
      {/* Checkboxes */}
      <rect x="130" y="200" width="14" height="14" rx="3" fill="#2EC4B6" />
      <path d="M133 207 L136 210 L141 204" stroke="white" strokeWidth="2" fill="none" />
      <rect x="150" y="202" width="80" height="5" rx="2.5" fill="#1B4D7A" opacity="0.2" />
      <rect x="130" y="222" width="14" height="14" rx="3" fill="#2EC4B6" />
      <path d="M133 229 L136 232 L141 226" stroke="white" strokeWidth="2" fill="none" />
      <rect x="150" y="224" width="90" height="5" rx="2.5" fill="#1B4D7A" opacity="0.2" />
      <rect x="130" y="244" width="14" height="14" rx="3" fill="#E8B931" />
      <path d="M133 251 L136 254 L141 248" stroke="white" strokeWidth="2" fill="none" />
      <rect x="150" y="246" width="70" height="5" rx="2.5" fill="#1B4D7A" opacity="0.2" />
      <rect x="130" y="266" width="14" height="14" rx="3" stroke="#1B4D7A" strokeWidth="1.5" fill="none" opacity="0.3" />
      <rect x="150" y="268" width="100" height="5" rx="2.5" fill="#1B4D7A" opacity="0.1" />
      {/* Stylo */}
      <rect x="300" y="120" width="8" height="80" rx="3" fill="#E8B931" transform="rotate(25 304 160)" />
      <path d="M280 195 L285 210 L290 195" fill="#1B4D7A" transform="rotate(25 285 200)" />
      {/* Calendrier mini */}
      <rect x="40" y="120" width="55" height="55" rx="6" fill="white" stroke="#E8B931" strokeWidth="2" />
      <rect x="40" y="120" width="55" height="18" rx="6" fill="#E8B931" />
      <text x="67" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">LUN</text>
      <text x="67" y="162" textAnchor="middle" fill="#1B4D7A" fontSize="20" fontWeight="bold">15</text>
      {/* Euro */}
      <circle cx="330" cy="280" r="25" fill="#E8B931" opacity="0.2" />
      <text x="330" y="288" textAnchor="middle" fill="#E8B931" fontSize="24" fontWeight="bold">€</text>
    </svg>
  );
}

export function IllustrationDemarrage() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="200" cy="200" r="180" fill="#FFF5F5" />
      {/* Personne âgée (assise) */}
      <circle cx="160" cy="160" r="25" fill="#E0E0E0" />
      <circle cx="160" cy="155" r="18" fill="#FFDAB9" />
      <circle cx="154" cy="152" r="2" fill="#1B4D7A" />
      <circle cx="166" cy="152" r="2" fill="#1B4D7A" />
      <path d="M155 160 Q160 164 165 160" stroke="#1B4D7A" strokeWidth="1.5" fill="none" />
      <path d="M145 180 Q160 195 175 180 L178 250 H142 Z" fill="#8BA4BC" />
      {/* Auxiliaire (debout, à côté) */}
      <circle cx="250" cy="140" r="22" fill="#FFDAB9" />
      <circle cx="244" cy="137" r="2" fill="#1B4D7A" />
      <circle cx="256" cy="137" r="2" fill="#1B4D7A" />
      <path d="M246 146 Q250 150 254 146" stroke="#1B4D7A" strokeWidth="1.5" fill="none" />
      <path d="M233 160 Q250 175 267 160 L270 260 H230 Z" fill="#1B4D7A" />
      {/* Main tendue */}
      <path d="M230 210 Q200 220 178 210" stroke="#FFDAB9" strokeWidth="5" fill="none" />
      {/* Coeurs */}
      <path d="M195 110 Q200 103 205 110 Q200 120 195 110 Z" fill="#E8B931" opacity="0.6" />
      <path d="M215 95 Q218 90 221 95 Q218 102 215 95 Z" fill="#E8B931" opacity="0.4" />
      <path d="M180 98 Q184 92 188 98 Q184 106 180 98 Z" fill="#E8B931" opacity="0.3" />
      {/* Étoiles de satisfaction */}
      <circle cx="80" cy="130" r="20" fill="#E8B931" opacity="0.15" />
      <text x="80" y="136" textAnchor="middle" fill="#E8B931" fontSize="18">★</text>
      <circle cx="320" cy="110" r="20" fill="#E8B931" opacity="0.15" />
      <text x="320" y="116" textAnchor="middle" fill="#E8B931" fontSize="18">★</text>
      {/* Check cercle */}
      <circle cx="200" cy="310" r="30" fill="#2EC4B6" opacity="0.15" />
      <circle cx="200" cy="310" r="20" fill="#2EC4B6" />
      <path d="M190 310 L197 317 L212 302" stroke="white" strokeWidth="3" fill="none" />
      {/* Graphique suivi */}
      <rect x="80" y="260" width="60" height="40" rx="5" fill="white" stroke="#1B4D7A" strokeWidth="1" opacity="0.5" />
      <polyline points="88,290 98,280 108,285 118,272 128,275 132,270" stroke="#2EC4B6" strokeWidth="2" fill="none" />
    </svg>
  );
}
