import { account, messages } from "../_data";
import { DashHeader, Panel, Avatar } from "../_components/ui";

/** Conversation démo (fil ouvert avec la coordinatrice). */
const thread = [
  { id: "t1", mine: false, author: account.coordinator.name, when: "Lun. 09:12", text: "Bonjour Marie, j'espère que votre maman va bien. Je reviens vers vous concernant le nouveau planning." },
  { id: "t2", mine: true, author: "Vous", when: "Lun. 09:40", text: "Bonjour Sandrine, merci ! Oui elle va bien. Le créneau du samedi après-midi lui conviendrait très bien." },
  { id: "t3", mine: false, author: account.coordinator.name, when: "Lun. 10:05", text: "Parfait. Je confirme donc la mise en place à partir du 6 mai. Christine, l'auxiliaire de remplacement, sera présentée samedi lors de la sortie au marché." },
  { id: "t4", mine: true, author: "Vous", when: "Lun. 10:18", text: "Très bien, c'est noté. Merci pour votre réactivité." },
];

export default function MessageriePage() {
  return (
    <div className="space-y-6">
      <DashHeader
        eyebrow="Messagerie"
        title="Vos échanges"
        subtitle="Discutez avec votre coordinatrice et votre auxiliaire de vie."
      />

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* Liste des conversations */}
        <Panel title="Conversations" className="lg:col-span-1">
          <ul className="space-y-2">
            {messages.map((m, idx) => (
              <li key={m.id}>
                <div
                  className={`flex gap-3 p-3 rounded-xl border transition-colors cursor-default ${
                    idx === 0 ? "border-primary bg-primary-50" : "border-border hover:border-primary"
                  }`}
                >
                  <Avatar initials={m.initials} tone={m.role.includes("Auxiliaire") ? "accent" : "primary"} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-primary-dark truncate">{m.from}</span>
                      <span className="text-xs text-text-muted shrink-0">{m.when}</span>
                    </div>
                    <div className="text-xs text-text-muted mb-0.5">{m.role}</div>
                    <p className="text-xs text-text-light line-clamp-2">{m.preview}</p>
                  </div>
                  {m.unread ? <span className="w-2 h-2 rounded-full bg-danger shrink-0 mt-1.5" /> : null}
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        {/* Fil de conversation */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-border shadow-card flex flex-col overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <Avatar initials={account.coordinator.initials} />
            <div className="leading-tight">
              <div className="text-sm font-bold text-primary-dark">{account.coordinator.name}</div>
              <div className="text-xs text-text-muted">{account.coordinator.role} · {account.coordinator.availability}</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 space-y-4 bg-warm/40">
            {thread.map((t) => (
              <div key={t.id} className={`flex ${t.mine ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] ${t.mine ? "items-end" : "items-start"} flex flex-col`}>
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      t.mine
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-white border border-border text-text rounded-bl-sm"
                    }`}
                  >
                    {t.text}
                  </div>
                  <span className="text-[11px] text-text-muted mt-1 px-1">{t.when}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Composer (démo) */}
          <div className="p-3 border-t border-border">
            <div className="flex items-end gap-2">
              <textarea
                rows={1}
                placeholder="Écrire un message…"
                aria-label="Écrire un message"
                className="flex-1 resize-none px-4 py-2.5 rounded-xl border-2 border-border focus:border-primary outline-none text-sm"
              />
              <button
                type="button"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-light transition-colors"
              >
                Envoyer
              </button>
            </div>
            <p className="text-[11px] text-text-muted mt-2 px-1">
              🔒 Messagerie sécurisée. Réponse sous 2 h ouvrées en moyenne.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
