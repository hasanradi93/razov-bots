/* Everything the page says about the bots, in one place.
 *
 * Change a price, a name or a reply here and the page follows. The conversations are the bots'
 * real replies, copied from their own transcripts (`npm run transcript` in each app, 2026-10-16,
 * with the AI switched off so every line is the code's own wording). The booking bots' replies and
 * buttons were copied again on 2026-10-21 (clinic-assistant e54063d: menus, cards, buttons under
 * every question), with the clock set back to 2026-10-16 (tools/fixed-clock.mjs). Only the
 * customers' phone numbers were replaced with obviously empty ones. The businesses are made up.
 *
 * Step shapes are described at the top of js/chat.js.
 */

window.SITE = {
  // The company's own site, the parent of this page (bots.razov.tech). It did not resolve yet on
  // 2026-10-17.
  rootUrl: "https://razov.tech",
  // The live bots (live/server.ts). On this machine the page finds them by itself; a published page
  // needs an https address that reaches the server, set here. Empty: replays and Telegram only.
  liveApi: "",
  // How a business reaches us (the owner, 2026-10-17). A Telegram link by number opens a chat only
  // while the account lets everybody find it by its number: Settings → Privacy → Phone number.
  contact: {
    telegram: { number: "+96171634760", shown: "+961 71 634 760" },
    email: "hassan93radi@gmail.com",
    // The Upwork listing's public link, if a button for it is wanted. Linking from here to Upwork
    // is fine; never the other way round.
    upwork: "",
  },
};

/* Every bot lays its buttons out row by row, each row as wide as its own buttons allow: three short
   ones across (up to 6 characters), two of middling length (up to 16), a long one on its own
   (src/channels/telegram.ts, `replyMarkup`, in clinic-assistant and wholesale-assistant alike since
   2026-10-21). The Live tab lays the real bots' buttons out with it too (js/chat.js). */
function keyRows(labels) {
  const across = (label) => {
    const length = [...label].length;
    return length <= 6 ? 3 : length <= 16 ? 2 : 1;
  };
  const rows = [];
  let room = 0;
  for (const label of labels) {
    const row = rows[rows.length - 1];
    const fits = Math.min(room, across(label));
    if (row && row.length < fits) {
      row.push(label);
      room = fits;
    } else {
      rows.push([label]);
      room = across(label);
    }
  }
  return rows;
}
// The wholesale conversations' name for it, from when the booking bots laid theirs out otherwise.
const shopRows = keyRows;

const GREETING = {
  dental: `أهلا وسهلا! أنا مساعِدة عيادة فلان لطب الأسنان. فيك تسألني عن أوقات الدوام والأسعار، أو تحجز موعد.

Welcome! I am the assistant at Doe Dental Clinic. Ask me about opening hours and prices, or book an appointment.

Bienvenue ! Je suis l'assistante de Doe Dental Clinic. Demandez-moi les horaires et les tarifs, ou prenez rendez-vous.`,
  salon: `أهلا وسهلا! أنا مساعِدة صالون فلان للتجميل. فيك تسألني عن أوقات الدوام والأسعار، أو تحجز موعد.

Welcome! I am the assistant at Doe Beauty Salon. Ask me about opening hours and prices, or book an appointment.

Bienvenue ! Je suis l'assistante de Salon de beauté Doe. Demandez-moi les horaires et les tarifs, ou prenez rendez-vous.`,
  medical: `أهلا وسهلا! أنا مساعِدة عيادة فلان الطبية. كيف فيني ساعدك؟

Welcome! I am the assistant at Doe Medical Centre. How can I help you?

Bienvenue ! Je suis l'assistante de Centre médical Doe. Comment puis-je vous aider ?`,
  wholesale: `أهلا وسهلا بـدو للجملة 👋
فيك تتصفّح الكتالوج مع الصور والأسعار، تعمل طلبيتك هون وتبعتها — والفريق بيتصل فيك ليأكّدها.
اكتب اسم منتج (مثلاً «زيت زيتون»)، أو دوس على /catalog.

Welcome to Doe Wholesale 👋
Browse the catalogue with photos and prices, build your order here and send it — the team calls you to confirm.
Write a product's name (say, "olive oil"), or tap /catalog.`,
};

/* The menu under the booking bots' greeting. /start says nothing about the customer's language,
   so it comes in the business's first one, Arabic. */
const START_KEYS = keyRows(["📅 احجز موعد", "🕘 الدوام والأسعار", "👤 احكي مع حدا"]);

window.BOTS = [
  /* ── Dental ─────────────────────────────────────────────────────────── */
  {
    id: "dental",
    short: "Dental",
    name: "Dental Practice",
    hue: "#5ee1e6",
    icon: "tooth",
    username: "razovtech_clinic_bot",
    display: "Mawaeed · Dental Practice demo",
    status: "live",
    statusText: "Live on Telegram",
    pitch: "The front desk of a dental clinic, on Telegram. It books patients with the right dentist, answers what they ask before they come, and leaves medical questions to the dentist.",
    does: [
      "Books, moves and cancels appointments with the right dentist, only at times that are really free.",
      "Answers prices, opening hours, insurance, parking and payment.",
      "Keeps a note for the dentist — pain, medication, an allergy — word for word on the appointment.",
      "Never gives medical advice or suggests medication. It offers an appointment instead.",
      "Tells the clinic on Telegram about every booking, change, cancellation and note.",
    ],
    business: {
      name: "Doe Dental Clinic",
      about: "Hamra Street, Beirut",
      people: [
        { name: "Dr. Nour Khalil", role: "general dentist" },
        { name: "Dr. Samer Aziz", role: "orthodontist" },
      ],
      facts: [
        { label: "Open", value: "Mon–Fri 9:00–17:00, closed 13:00–14:00. Sat 9:00–13:00" },
        { label: "Appointments", value: "Every 30 minutes. Cancel 24 hours ahead" },
        { label: "Speaks", value: "Lebanese and Saudi Arabic, Arabizi, English, French" },
      ],
      menu: [
        { name: "Check-up", detail: "30 min", price: "$30" },
        { name: "Cleaning and polishing", detail: "60 min", price: "$60" },
        { name: "Filling, per tooth", detail: "60 min", price: "$80" },
        { name: "Tooth extraction", detail: "60 min", price: "$100" },
        { name: "Teeth whitening", detail: "90 min", price: "$200" },
        { name: "Braces consultation", detail: "30 min", price: "$40" },
      ],
    },
    alertLabel: "The clinic receives, on its own Telegram",
    chats: {
      en: {
        label: "English",
        intro: "A patient books a cleaning, leaves a note for the dentist, then asks for advice.",
        steps: [
          { me: "/start" },
          { bot: GREETING.dental, keys: START_KEYS },
          { me: "I would like a cleaning appointment" },
          {
            bot: `Here are the free times for Cleaning and polishing:
1. today 16:00
2. tomorrow 11:00
3. tomorrow 11:30
4. tomorrow 12:00
5. Monday 09:00
6. Monday 11:00

Choose the time that suits you.`,
            keys: keyRows(["today 16:00", "tomorrow 11:00", "tomorrow 11:30", "tomorrow 12:00", "Monday 09:00", "Monday 11:00", "🗓️ Other days"]),
          },
          { tap: "today 16:00" },
          { bot: "Good, today 16:00. Who is the appointment for? Please tell me the name." },
          { me: "Rima Khoury" },
          {
            bot: `Done ✅
📋 Cleaning and polishing
👤 Rima Khoury
🗓️ today 16:00 (Beirut time)
👥 With Dr. Nour Khalil
🔖 Your reference: 95A44Q

To move or cancel it, tap below or send me that reference.

Would you like to leave a note for the doctor?`,
            keys: keyRows(["📝 Note for the doctor", "Move it · 95A44Q", "Cancel it · 95A44Q"]),
          },
          { alert: `🆕 حجز جديد
تنظيف وتلميع لـRima Khoury
اليوم 16:00
مع د. نور خليل
رقم: 95A44Q` },
          { tap: "📝 Note for the doctor" },
          { bot: "Tell me what the doctor should know before the visit — pain, medication you take, an allergy." },
          { me: "I am allergic to the anaesthetic" },
          { bot: "Noted. It is on your appointment, and the doctor sees it before you arrive. 📝" },
          { alert: `📝 ملاحظة من المريض
موعد 95A44Q
I am allergic to the anaesthetic` },
          { me: "My tooth hurts a lot, what should I take?" },
          { bot: "I am sorry to hear that. I cannot give medical advice or suggest medication — only the doctor can. Shall I book you an appointment?", keys: keyRows(["✅ Yes, please", "No, thanks"]) },
        ],
      },
      ar: {
        label: "عربي",
        intro: "A patient books in Lebanese Arabic, moves the appointment to tomorrow, then asks for advice.",
        steps: [
          { me: "/start" },
          { bot: GREETING.dental, keys: START_KEYS },
          { me: "بدي موعد تنظيف اسنان" },
          {
            bot: `هيدي المواعيد الفاضية لـتنظيف وتلميع:
1. اليوم 16:00
2. بكرا 11:00
3. بكرا 11:30
4. بكرا 12:00
5. الاثنين 09:00
6. الاثنين 11:00

اختار الوقت يلي بيناسبك.`,
            keys: keyRows(["اليوم 16:00", "بكرا 11:00", "بكرا 11:30", "بكرا 12:00", "الاثنين 09:00", "الاثنين 11:00", "🗓️ أيام تانية"]),
          },
          { tap: "اليوم 16:00" },
          { bot: "تمام، اليوم 16:00. الموعد لمين؟ اكتبلي الاسم." },
          { me: "ريما خوري" },
          {
            bot: `تم ✅
📋 تنظيف وتلميع
👤 ريما خوري
🗓️ اليوم 16:00 (بتوقيت بيروت)
👥 مع د. نور خليل
🔖 رقم موعدك: 2887N4

إذا بدك تأجّل أو تلغي، دوس تحت أو ابعتلي الرقم.

بتحب تكتب شي للدكتور؟`,
            keys: keyRows(["📝 ملاحظة للدكتور", "أجّل الموعد · 2887N4", "ألغي الموعد · 2887N4"]),
          },
          { alert: `🆕 حجز جديد
تنظيف وتلميع لـريما خوري
اليوم 16:00
مع د. نور خليل
رقم: 2887N4` },
          { me: "بدي أجّل موعدي" },
          {
            bot: `تمام، منأجّل موعد اليوم 16:00. هيدي الأوقات الفاضية:
1. بكرا 11:00
2. بكرا 11:30
3. بكرا 12:00
4. الاثنين 09:00
5. الاثنين 11:00
6. الاثنين 11:30

اختار الوقت يلي بيناسبك.`,
            keys: keyRows(["بكرا 11:00", "بكرا 11:30", "بكرا 12:00", "الاثنين 09:00", "الاثنين 11:00", "الاثنين 11:30", "🗓️ أيام تانية"]),
          },
          { tap: "بكرا 11:00" },
          { bot: `تم التأجيل ✅
📋 تنظيف وتلميع
👤 ريما خوري
🗓️ صار بكرا 11:00 (بتوقيت بيروت)
👥 مع د. نور خليل
🔖 رقم موعدك نفسه: 2887N4` },
          { alert: `🔁 تأجيل
تنظيف وتلميع لـريما خوري
صار بكرا 11:00
مع د. نور خليل
رقم: 2887N4` },
          { me: "سني بيوجعني كتير شو بتنصحوني آخد؟" },
          { bot: "سلامتك! ما فيني أعطي نصيحة طبية أو دوا — الدكتور وحده بيقدر يجاوبك. بتحب أحجزلك موعد؟", keys: keyRows(["✅ إيه، لو سمحت", "لأ، شكراً"]) },
        ],
      },
      fr: {
        label: "Français",
        intro: "A patient books a scaling in French, moves it to tomorrow, then cancels it.",
        steps: [
          { me: "/start" },
          { bot: GREETING.dental, keys: START_KEYS },
          { me: "Je voudrais un rendez-vous pour un détartrage" },
          {
            bot: `Voici les créneaux libres pour Détartrage :
1. aujourd'hui 16:00
2. demain 11:00
3. demain 11:30
4. demain 12:00
5. lundi 09:00
6. lundi 11:00

Choisissez celui qui vous convient.`,
            keys: keyRows(["aujourd'hui 16:00", "demain 11:00", "demain 11:30", "demain 12:00", "lundi 09:00", "lundi 11:00", "🗓️ Autres jours"]),
          },
          { tap: "aujourd'hui 16:00" },
          { bot: "Très bien, aujourd'hui 16:00. À quel nom ? Indiquez-moi le nom." },
          { me: "Rima Khoury" },
          {
            bot: `C'est fait ✅
📋 Détartrage
👤 Rima Khoury
🗓️ aujourd'hui 16:00 (heure de Beyrouth)
👥 Avec Dr. Nour Khalil
🔖 Votre référence : 4WCASW

Pour le déplacer ou l'annuler, touchez ci-dessous ou envoyez-moi cette référence.

Voulez-vous laisser un mot pour le dentiste ?`,
            keys: keyRows(["📝 Un mot pour le dentiste", "Déplacer · 4WCASW", "Annuler · 4WCASW"]),
          },
          { alert: `🆕 حجز جديد
تنظيف وتلميع لـRima Khoury
اليوم 16:00
مع د. نور خليل
رقم: 4WCASW` },
          { me: "Je voudrais déplacer mon rendez-vous" },
          {
            bot: `Très bien, je déplace votre rendez-vous de aujourd'hui 16:00. Voici les créneaux libres :
1. demain 11:00
2. demain 11:30
3. demain 12:00
4. lundi 09:00
5. lundi 11:00
6. lundi 11:30

Choisissez celui qui vous convient.`,
            keys: keyRows(["demain 11:00", "demain 11:30", "demain 12:00", "lundi 09:00", "lundi 11:00", "lundi 11:30", "🗓️ Autres jours"]),
          },
          { tap: "demain 11:00" },
          { bot: `Déplacé ✅
📋 Détartrage
👤 Rima Khoury
🗓️ Maintenant demain 11:00 (heure de Beyrouth)
👥 Avec Dr. Nour Khalil
🔖 Même référence : 4WCASW` },
          { alert: `🔁 تأجيل
تنظيف وتلميع لـRima Khoury
صار بكرا 11:00
مع د. نور خليل
رقم: 4WCASW` },
          { me: "Je veux annuler mon rendez-vous" },
          { bot: "Vous avez un rendez-vous : demain 11:00 (4WCASW). L'annuler ? Répondez « oui », ou envoyez-moi la référence.", keys: keyRows(["✅ Oui, l'annuler", "↩️ Non, le garder"]) },
          { me: "oui" },
          { bot: `❌ Le rendez-vous 4WCASW est annulé
📋 Détartrage
🗓️ demain 11:00

Je peux en réserver un autre quand vous voulez.`, keys: keyRows(["📅 Prendre rendez-vous"]) },
          { alert: `❌ إلغاء
تنظيف وتلميع
كان بكرا 11:00
رقم: 4WCASW
الوقت رجع عالروزنامة.` },
        ],
      },
    },
  },

  /* ── Salon ──────────────────────────────────────────────────────────── */
  {
    id: "salon",
    short: "Salon",
    name: "Beauty Salon",
    hue: "#ff8fb3",
    icon: "scissors",
    username: "razovtech_salon_bot",
    display: "Mawaeed · Beauty Salon demo",
    status: "live",
    statusText: "Live on Telegram",
    pitch: "The booking desk of a salon with five people — hair, barber, nails, face and make-up. Each client is booked with the person who actually does that service.",
    does: [
      "Books with the right person: a facial goes to the beautician, even if the client names the hairdresser.",
      "Asks instead of guessing when one word could mean two services — a haircut, nails, a cleaning.",
      "Never books the same client into two chairs at the same time.",
      "Answers prices, opening hours, walk-ins and payment.",
      "Sends a rash or an itchy scalp to a pharmacist or a doctor, not to a cream.",
      "Tells the salon about every booking, change, cancellation and note.",
    ],
    business: {
      name: "Doe Beauty Salon",
      about: "Hamra Street, Beirut",
      people: [
        { name: "Rana", role: "hair" },
        { name: "Sami", role: "barber" },
        { name: "Maya", role: "nails" },
        { name: "Lara", role: "face and waxing" },
        { name: "Hiba", role: "make-up and lashes" },
      ],
      facts: [
        { label: "Open", value: "Mon–Sat 10:00–20:00" },
        { label: "Appointments", value: "Every 15 minutes. Cancel 4 hours ahead" },
        { label: "Speaks", value: "Lebanese and Saudi Arabic, Arabizi, English, French" },
      ],
      menu: [
        { name: "Women's haircut", detail: "45 min", price: "$25" },
        { name: "Men's haircut", detail: "30 min", price: "$12" },
        { name: "Blow-dry", detail: "45 min", price: "$15" },
        { name: "Hair colour", detail: "2 h", price: "$55" },
        { name: "Highlights", detail: "2 h 30", price: "$85" },
        { name: "Keratin treatment", detail: "3 h", price: "$120" },
        { name: "Beard trim", detail: "15 min", price: "$7" },
        { name: "Manicure", detail: "45 min", price: "$15" },
        { name: "Pedicure", detail: "60 min", price: "$20" },
        { name: "Gel nails", detail: "75 min", price: "$30" },
        { name: "Facial", detail: "60 min", price: "$40" },
        { name: "Make-up", detail: "60 min", price: "$45" },
        { name: "Eyebrow shaping", detail: "15 min", price: "$6" },
        { name: "Eyelash extensions", detail: "90 min", price: "$50" },
        { name: "Waxing, full legs", detail: "45 min", price: "$25" },
      ],
    },
    alertLabel: "The salon receives, on its own Telegram",
    chats: {
      en: {
        label: "English",
        intro: "A client books a men's haircut, asks the hours, then asks about a rash.",
        steps: [
          { me: "/start" },
          { bot: GREETING.salon, keys: START_KEYS },
          { me: "I'd like a men's haircut tomorrow" },
          {
            bot: `Here are the free times for Men's haircut tomorrow:
• 10:00
• 10:15
• 10:30
• 10:45
• 11:00
• 11:15
• 11:30
• 12:30
• 12:45
• 13:00
• 13:15
• 13:30

Choose the time that suits you.

There are 36 times free that day. If none of these suit, tell me the hour you want.`,
            keys: keyRows(["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "12:30", "12:45", "13:00", "13:15", "13:30", "🗓️ Other days"]),
          },
          { tap: "10:00" },
          { bot: "Good, tomorrow 10:00. Who is the appointment for? Please tell me the name." },
          { me: "Karim Haddad" },
          {
            bot: `Done ✅
📋 Men's haircut
👤 Karim Haddad
🗓️ tomorrow 10:00 (Beirut time)
👥 With Sami
🔖 Your reference: PS3RWQ

To move or cancel it, tap below or send me that reference.

Would you like to leave a note for the salon before your appointment?`,
            keys: keyRows(["📝 Note for the salon", "Move it · PS3RWQ", "Cancel it · PS3RWQ"]),
          },
          { alert: `🆕 حجز جديد
قص شعر رجالي لـKarim Haddad
بكرا 10:00
مع سامي
رقم: PS3RWQ` },
          { me: "what are your opening hours?" },
          { bot: `Opening hours:
• Monday: 10:00–20:00
• Tuesday: 10:00–20:00
• Wednesday: 10:00–20:00
• Thursday: 10:00–20:00
• Friday: 10:00–20:00
• Saturday: 10:00–20:00
• Sunday: closed

Prices:
• Women's haircut — $25
• Men's haircut — $12
• Blow-dry — $15
• Hair colour — $55
• Highlights — $85
• Keratin treatment — $120
• Beard trim — $7
• Manicure — $15
• Pedicure — $20
• Gel nails — $30
• Facial (skin cleaning) — $40
• Make-up — $45
• Eyebrow shaping — $6
• Eyelash extensions — $50
• Waxing (full legs) — $25` },
          { me: "I got a rash after waxing, what cream should I use?" },
          { bot: "I am sorry to hear that. I cannot give medical advice — for a skin reaction or a scalp problem, please ask a pharmacist or a doctor. Would you like me to book you an appointment at the salon?", keys: keyRows(["✅ Yes, please", "No, thanks"]) },
        ],
      },
      ar: {
        label: "عربي",
        intro: "A client asks for eyebrows with Hiba by name, leaves a note, then asks about an itchy scalp.",
        steps: [
          { me: "/start" },
          { bot: GREETING.salon, keys: START_KEYS },
          { me: "بدي حواجب بكرا مع هبة" },
          {
            bot: `هيدي المواعيد الفاضية لـترتيب حواجب بكرا:
• 10:00
• 10:15
• 10:30
• 10:45
• 11:00
• 11:15
• 11:30
• 11:45
• 12:00
• 12:15
• 12:30
• 12:45

اختار الوقت يلي بيناسبك.

في 40 موعد بهالنهار. إذا ما ناسبك شي من هودي، قلّي الساعة يلي بتناسبك.`,
            keys: keyRows(["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "🗓️ أيام تانية"]),
          },
          { tap: "10:00" },
          { bot: "تمام، بكرا 10:00. الموعد لمين؟ اكتبلي الاسم." },
          { me: "ريما خوري" },
          {
            bot: `تم ✅
📋 ترتيب حواجب
👤 ريما خوري
🗓️ بكرا 10:00 (بتوقيت بيروت)
👥 مع هبة
🔖 رقم موعدك: JRS5Q3

إذا بدك تأجّل أو تلغي، دوس تحت أو ابعتلي الرقم.

بتحب تكتب شي للصالون قبل الموعد؟`,
            keys: keyRows(["📝 ملاحظة للصالون", "أجّل الموعد · JRS5Q3", "ألغي الموعد · JRS5Q3"]),
          },
          { alert: `🆕 حجز جديد
ترتيب حواجب لـريما خوري
بكرا 10:00
مع هبة
رقم: JRS5Q3` },
          { tap: "📝 ملاحظة للصالون" },
          { bot: "اكتبلي شو بدك الصالون يعرف قبل الموعد — حساسية من صبغة أو شمع، بشرة حساسة، أو الستايل يلي ببالك." },
          { me: "عندي حساسية من بعض أنواع الصبغة" },
          { bot: "وصلت. كتبتها على موعدك، والصالون بيشوفها قبل ما تجي. 📝" },
          { alert: `📝 ملاحظة من الزبون
موعد JRS5Q3
عندي حساسية من بعض أنواع الصبغة` },
          { me: "طلعتلي حكّة بفروة الراس بعد الصبغة، شو بحط عليها؟" },
          { bot: "سلامتك! ما فيني أعطي نصيحة طبية — لأي تحسّس أو مشكلة بالبشرة أو بفروة الراس، إسأل صيدلي أو دكتور. بتحب أحجزلك موعد بالصالون؟", keys: keyRows(["✅ إيه، لو سمحت", "لأ، شكراً"]) },
        ],
      },
      fr: {
        label: "Français",
        intro: "A client books a manicure with Maya, then eyebrows with Lara — the bot remembers her name.",
        steps: [
          { me: "Bonjour, je voudrais une manucure demain" },
          {
            bot: `Voici les créneaux libres pour Manucure demain :
• 10:00
• 10:15
• 11:45
• 12:00
• 12:15
• 12:30
• 12:45
• 13:00
• 13:15
• 13:30
• 13:45
• 14:00

Choisissez celui qui vous convient.

Il y a 33 créneaux ce jour-là. Si aucun ne convient, dites-moi l'heure que vous voulez.`,
            keys: keyRows(["10:00", "10:15", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "🗓️ Autres jours"]),
          },
          { tap: "11:45" },
          { bot: "Très bien, demain 11:45. À quel nom ? Indiquez-moi le nom." },
          { me: "Claire Haddad" },
          {
            bot: `C'est fait ✅
📋 Manucure
👤 Claire Haddad
🗓️ demain 11:45 (heure de Beyrouth)
👥 Avec Maya
🔖 Votre référence : PECS9U

Pour le déplacer ou l'annuler, touchez ci-dessous ou envoyez-moi cette référence.

Voulez-vous laisser un mot au salon avant votre rendez-vous ?`,
            keys: keyRows(["📝 Un mot pour le salon", "Déplacer · PECS9U", "Annuler · PECS9U"]),
          },
          { alert: `🆕 حجز جديد
مانيكير لـClaire Haddad
بكرا 11:45
مع مايا
رقم: PECS9U` },
          { me: "et une épilation des sourcils demain aussi" },
          {
            bot: `Voici les créneaux libres pour Épilation des sourcils demain :
• 10:00
• 10:15
• 10:30
• 10:45
• 11:00
• 11:15
• 11:30
• 11:45
• 12:00
• 12:15
• 12:30
• 12:45

Choisissez celui qui vous convient.

Il y a 40 créneaux ce jour-là. Si aucun ne convient, dites-moi l'heure que vous voulez.`,
            keys: keyRows(["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "🗓️ Autres jours"]),
          },
          { tap: "10:15" },
          { bot: "Très bien, demain 10:15. Le rendez-vous est pour Claire Haddad ? Si c'est pour quelqu'un d'autre, dites-moi le nom.", keys: keyRows(["Claire Haddad", "Un autre nom"]) },
          { tap: "Claire Haddad" },
          {
            bot: `C'est fait ✅
📋 Épilation des sourcils
👤 Claire Haddad
🗓️ demain 10:15 (heure de Beyrouth)
👥 Avec Lara
🔖 Votre référence : WWSN5P

Pour le déplacer ou l'annuler, touchez ci-dessous ou envoyez-moi cette référence.

Voulez-vous laisser un mot au salon avant votre rendez-vous ?`,
            keys: keyRows(["📝 Un mot pour le salon", "Déplacer · WWSN5P", "Annuler · WWSN5P"]),
          },
          { alert: `🆕 حجز جديد
ترتيب حواجب لـClaire Haddad
بكرا 10:15
مع لارا
رقم: WWSN5P` },
        ],
      },
    },
  },

  /* ── Medical ────────────────────────────────────────────────────────── */
  {
    id: "medical",
    short: "Medical",
    name: "Medical Practice",
    hue: "#a3b6ff",
    icon: "stethoscope",
    username: "razovtech_medical_bot",
    display: "Mawaeed · Medical Practice demo",
    status: "live",
    statusText: "Live on Telegram",
    pitch: "The front desk of a medical practice. A patient with a symptom is booked, a patient asking for advice is offered a consultation, and a patient with chest pain is told to call 140 before anything else.",
    does: [
      "Books consultations, follow-ups, vaccinations, blood tests and ECGs with the right doctor or nurse.",
      "Refuses medical advice in its own code — the AI is never asked — and offers a consultation instead.",
      "Puts emergencies first: chest pain, trouble breathing, heavy bleeding, a stroke or a seizure get “call 140 now”.",
      "Answers fasting, results, insurance and children's questions from the practice's own answers.",
      "Keeps a note for the doctor word for word, and never books across the lunch break.",
      "Tells the practice about every booking, change, cancellation and note.",
    ],
    business: {
      name: "Doe Medical Centre",
      about: "Verdun Street, Beirut",
      people: [
        { name: "Dr. Karim", role: "general practitioner" },
        { name: "Dr. Hala", role: "family doctor" },
        { name: "Nour", role: "nurse" },
      ],
      facts: [
        { label: "Open", value: "Mon–Sat 8:00–18:00, closed 13:00–14:00" },
        { label: "Emergencies", value: "Sent to 140, the Lebanese Red Cross" },
        { label: "Speaks", value: "Lebanese and Saudi Arabic, Arabizi, English, French" },
      ],
      menu: [
        { name: "Consultation", detail: "30 min", price: "$40" },
        { name: "Follow-up visit", detail: "15 min", price: "$20" },
        { name: "Vaccination", detail: "15 min", price: "$25" },
        { name: "Blood test", detail: "15 min", price: "$30" },
        { name: "ECG", detail: "30 min", price: "$45" },
      ],
    },
    alertLabel: "The practice receives, on its own Telegram",
    chats: {
      en: {
        label: "English",
        intro: "A patient with a fever books Dr. Hala, leaves a note, then asks for advice and mentions chest pain.",
        steps: [
          { me: "/start" },
          { bot: GREETING.medical, keys: START_KEYS },
          { me: "I have a fever, I want an appointment with Dr. Hala" },
          { bot: `I am sorry to hear that. I cannot give medical advice, but the doctor can see you — let's book you in.

Of course! What do you need?
1. Consultation — $40
2. Follow-up visit — $20
3. Vaccination — $25
4. Blood test — $30
5. ECG — $45

Tap a button below, or send the number or the name.`, keys: keyRows(["Consultation", "Follow-up visit", "Vaccination", "Blood test", "ECG"]) },
          { me: "1" },
          {
            bot: `Here are the free times for Consultation:
1. today 14:00
2. today 14:45
3. today 15:00
4. today 15:15
5. today 15:30
6. today 15:45

Choose the time that suits you.`,
            keys: keyRows(["14:00", "14:45", "15:00", "15:15", "15:30", "15:45", "🗓️ Other days"]),
          },
          { tap: "14:00" },
          { bot: "Good, today 14:00. Who is the appointment for? Please tell me the name." },
          { me: "Rima Khoury" },
          {
            bot: `Done ✅
📋 Consultation
👤 Rima Khoury
🗓️ today 14:00 (Beirut time)
👥 With Dr. Hala
🔖 Your reference: 4V2VSF

To move or cancel it, tap below or send me that reference.

Would you like to leave a note for the doctor before the visit?`,
            keys: keyRows(["📝 Note for the doctor", "Move it · 4V2VSF", "Cancel it · 4V2VSF"]),
          },
          { alert: `🆕 حجز جديد
كشف عام لـRima Khoury
اليوم 14:00
مع د. هالة
رقم: 4V2VSF` },
          { tap: "📝 Note for the doctor" },
          { bot: "Tell me what the doctor should know before the visit — how you feel and since when, medication you take, an allergy." },
          { me: "I have had a cough for two weeks" },
          { bot: "Noted. It is on your appointment, and the doctor sees it before you arrive. 📝" },
          { alert: `📝 ملاحظة من المريض
موعد 4V2VSF
I have had a cough for two weeks` },
          { me: "My son has a fever, what should I give him?" },
          { bot: "I am sorry to hear that. I cannot give medical advice — only the doctor can. If you would like the doctor to know before your visit, tap below and write it as a note. If it is an emergency, call 140 or go to the nearest emergency room.", keys: [["📝 Note for the doctor"]] },
          { me: "I have chest pain" },
          { bot: "If this is an emergency, call 140 now or go to the nearest emergency room. Do not wait for an appointment, or for a reply here.", keys: keyRows(["📝 Note for the doctor"]) },
        ],
      },
      ar: {
        label: "عربي",
        intro: "A patient books in Lebanese Arabic, asks about fasting, then mentions chest pain.",
        steps: [
          { me: "/start" },
          { bot: GREETING.medical, keys: START_KEYS },
          { me: "عندي حرارة من مبارح، بدي موعد" },
          { bot: `سلامتك! ما فيني أعطي نصيحة طبية، بس الدكتور بيشوفك — خلّينا نحجزلك.

أكيد! شو بتحتاج؟
1. كشف عام — $40
2. مراجعة — $20
3. لقاح — $25
4. تحليل دم — $30
5. تخطيط قلب — $45

دوس عالزر تحت، أو اكتبلي الرقم أو الاسم.`, keys: keyRows(["كشف عام", "مراجعة", "لقاح", "تحليل دم", "تخطيط قلب"]) },
          { me: "1" },
          {
            bot: `هيدي المواعيد الفاضية لـكشف عام:
1. اليوم 14:00
2. اليوم 14:30
3. اليوم 14:45
4. اليوم 15:00
5. اليوم 15:15
6. اليوم 15:30

اختار الوقت يلي بيناسبك.`,
            keys: keyRows(["14:00", "14:30", "14:45", "15:00", "15:15", "15:30", "🗓️ أيام تانية"]),
          },
          { tap: "14:00" },
          { bot: "تمام، اليوم 14:00. الموعد لمين؟ اكتبلي الاسم." },
          { me: "ريما خوري" },
          {
            bot: `تم ✅
📋 كشف عام
👤 ريما خوري
🗓️ اليوم 14:00 (بتوقيت بيروت)
👥 مع د. هالة
🔖 رقم موعدك: 7PM2MA

إذا بدك تأجّل أو تلغي، دوس تحت أو ابعتلي الرقم.

بتحب تكتب شي للدكتور قبل الموعد؟`,
            keys: keyRows(["📝 ملاحظة للدكتور", "أجّل الموعد · 7PM2MA", "ألغي الموعد · 7PM2MA"]),
          },
          { alert: `🆕 حجز جديد
كشف عام لـريما خوري
اليوم 14:00
مع د. هالة
رقم: 7PM2MA` },
          { me: "لازم كون صايم لتحليل الدم؟" },
          { bot: "لأغلب التحاليل، ٨ ساعات صيام. الممرضة بتأكدلك وقت الحجز." },
          { me: "عندي وجع راس، شو اخد؟" },
          { bot: "سلامتك! ما فيني أعطي نصيحة طبية — الدكتور وحده بيقدر. إذا بدك الدكتور يعرف قبل موعدك، دوس تحت واكتبها كملاحظة. وإذا الحالة طارئة، اتصل على 140 أو روح عأقرب طوارئ.", keys: [["📝 ملاحظة للدكتور"]] },
          { me: "عندي وجع بصدري وضيق نفس" },
          { bot: "إذا الحالة طارئة، اتصل هلق على 140 أو روح عأقرب طوارئ. ما تستنى موعد، وما تستنى جواب من هون.", keys: [["📝 ملاحظة للدكتور"]] },
        ],
      },
      fr: {
        label: "Français",
        intro: "A patient books Dr. Karim in French, asks what to take, then mentions chest pain.",
        steps: [
          { me: "/start" },
          { bot: GREETING.medical, keys: START_KEYS },
          { me: "j'ai de la fièvre, je voudrais un rendez-vous" },
          { bot: `Je suis désolée de l'apprendre. Je ne peux pas donner de conseil médical, mais le médecin peut vous recevoir — prenons rendez-vous.

Bien sûr ! De quoi avez-vous besoin ?
1. Consultation — $40
2. Visite de suivi — $20
3. Vaccination — $25
4. Analyse de sang — $30
5. Électrocardiogramme — $45

Touchez un bouton ci-dessous, ou envoyez le numéro ou le nom.`, keys: keyRows(["Consultation", "Visite de suivi", "Vaccination", "Analyse de sang", "Électrocardiogramme"]) },
          { me: "1" },
          {
            bot: `Voici les créneaux libres pour Consultation :
1. aujourd'hui 14:00
2. aujourd'hui 14:30
3. aujourd'hui 14:45
4. aujourd'hui 15:00
5. aujourd'hui 15:15
6. aujourd'hui 15:30

Choisissez celui qui vous convient.`,
            keys: keyRows(["14:00", "14:30", "14:45", "15:00", "15:15", "15:30", "🗓️ Autres jours"]),
          },
          { tap: "14:30" },
          { bot: "Très bien, aujourd'hui 14:30. À quel nom ? Indiquez-moi le nom." },
          { me: "Rima Khoury" },
          {
            bot: `C'est fait ✅
📋 Consultation
👤 Rima Khoury
🗓️ aujourd'hui 14:30 (heure de Beyrouth)
👥 Avec Dr Karim
🔖 Votre référence : 92E6KA

Pour le déplacer ou l'annuler, touchez ci-dessous ou envoyez-moi cette référence.

Voulez-vous laisser un mot pour le médecin avant la visite ?`,
            keys: keyRows(["📝 Un mot pour le médecin", "Déplacer · 92E6KA", "Annuler · 92E6KA"]),
          },
          { alert: `🆕 حجز جديد
كشف عام لـRima Khoury
اليوم 14:30
مع د. كريم
رقم: 92E6KA` },
          { me: "j'ai mal à la tête, que dois-je prendre ?" },
          { bot: "Je suis désolée de l'apprendre. Je ne peux pas donner de conseil médical — seul le médecin le peut. Pour que le médecin le sache avant votre visite, touchez ci-dessous et écrivez-le en note. En cas d'urgence, appelez le 140 ou allez aux urgences les plus proches.", keys: [["📝 Un mot pour le médecin"]] },
          { me: "j'ai mal à la poitrine" },
          { bot: "S'il s'agit d'une urgence, appelez le 140 maintenant ou allez aux urgences les plus proches. N'attendez pas un rendez-vous, ni une réponse ici.", keys: [["📝 Un mot pour le médecin"]] },
        ],
      },
    },
  },

  /* ── Wholesale ──────────────────────────────────────────────────────── */
  {
    id: "wholesale",
    short: "Wholesale",
    name: "Wholesale Catalogue",
    hue: "#ffc857",
    icon: "crate",
    username: "razovtech_wholesale_bot",
    display: "Wholesale Catalogue demo",
    status: "live",
    statusText: "Live on Telegram",
    pitch: "A catalogue and order desk for a wholesaler. Shops, restaurants and homes browse products with photos and prices, build an order in the chat, and send it to your team.",
    does: [
      "Shows each product as a photo with its price, and more photos as an album when asked.",
      "Lowers the price with quantity, keeps to minimums and pack sizes, and offers alternatives when something is out of stock.",
      "Asks where the order is going — a shop, a restaurant, a home or an office — then the name, phone, area and delivery day, and adds the delivery charge.",
      "Lets every detail be changed at the summary: a line of the order, the address, the phone, the day.",
      "Sends the finished order to your team's Telegram. Nothing is paid in the chat.",
      "Keeps past orders, so a regular customer orders the same again in one tap.",
    ],
    business: {
      name: "Doe Wholesale",
      about: "Food, drinks and cleaning supplies for shops, restaurants and homes",
      facts: [
        { label: "Catalogue", value: "44 products in 13 sections, from oils and rice to dairy, bakery and cleaning" },
        { label: "Minimum order", value: "$150 of goods" },
        { label: "Payment", value: "Cash on delivery, or 30 days for shops with an account" },
        { label: "Delivery", value: "Beirut free. Metn and Keserwan $5. Tripoli and Saida $10" },
        { label: "Speaks", value: "Lebanese and Saudi Arabic, Arabizi, English, French" },
      ],
      menuTitle: "Part of the catalogue",
      menuNote: "Prices per carton or pack, and they drop with quantity.",
      menu: [
        { name: "Extra virgin olive oil 1 L", detail: "12 bottles", price: "from $90" },
        { name: "Basmati rice 5 kg", detail: "4 bags", price: "from $30.50" },
        { name: "Frozen whole chicken 1.2 kg", detail: "carton", price: "from $30" },
        { name: "Labneh 1 kg", detail: "carton", price: "from $19.80" },
        { name: "Arabic bread, large", detail: "pack", price: "from $0.80" },
        { name: "Coffee with cardamom 500 g", detail: "carton", price: "from $104" },
        { name: "Mineral water 0.5 L", detail: "pack of 24", price: "from $3.30" },
        { name: "Dishwashing liquid 1 L", detail: "carton", price: "from $12.60" },
      ],
    },
    alertLabel: "Your team receives, on its own Telegram",
    chatNote: "The real bot's replies. The product pictures here are illustrations; your bot sends your own photos.",
    chats: {
      en: {
        label: "English",
        intro: "A mini-market browses the oils, looks at photos, orders 10 cartons, says where the order is going, and sends it.",
        steps: [
          { me: "/start" },
          {
            bot: GREETING.wholesale,
            keys: shopRows(["🌐 اللغة · Language · Langue", "🫒 زيوت", "🌾 رز وحبوب", "🍗 دجاج ولحومات", "🧀 ألبان وأجبان", "🥫 معلبات", "🥬 خضار وفواكه", "🍞 خبز ومعجنات", "☕ بن وشاي وسكر", "🍫 سكاكر وسناكس", "🌶 بهارات", "🥤 مشروبات", "🧽 تنظيف", "📦 أشياء أخرى", "📜 طلبياتي السابقة", "💬 احكي مع الفريق"]),
          },
          { me: "Hello, can I see the catalogue?" },
          {
            bot: `Which section would you like? Or write the product's name.
1. 🫒 Oils
2. 🌾 Rice & grains
3. 🍗 Chicken & meat
4. 🧀 Dairy & cheese
5. 🥫 Canned food
6. 🥬 Vegetables & fruit
7. 🍞 Bread & bakery
8. ☕ Coffee, tea & sugar
9. 🍫 Sweets & snacks
10. 🌶 Spices
11. 🥤 Drinks
12. 🧽 Cleaning
13. 📦 Other`,
            keys: shopRows(["🫒 Oils", "🌾 Rice & grains", "🍗 Chicken & meat", "🧀 Dairy & cheese", "🥫 Canned food", "🥬 Vegetables & fruit", "🍞 Bread & bakery", "☕ Coffee, tea & sugar", "🍫 Sweets & snacks", "🌶 Spices", "🥤 Drinks", "🧽 Cleaning", "📦 Other", "🧾 My order", "🏠 Menu"]),
          },
          { tap: "🫒 Oils" },
          {
            bot: `🫒 Oils:
1. Extra virgin olive oil 1 L — from $90.00 / carton
2. Extra virgin olive oil 4 L — from $110.00 / carton
3. Sunflower oil 1.8 L — from $18.75 / carton
4. Corn oil 1.5 L — from $28.00 / carton ⛔

Tap a product to see its photo and price.`,
            keys: shopRows(["1. Extra virgin olive oil 1 L", "2. Extra virgin olive oil 4 L", "3. Sunflower oil 1.8 L", "4. Corn oil 1.5 L", "⬅️ Catalogue", "🧾 My order"]),
          },
          { tap: "1. Extra virgin olive oil 1 L" },
          {
            photo: "assets/ol-01.svg",
            alt: "A bottle of Doe Select extra virgin olive oil, 1 litre",
            caption: `Extra virgin olive oil 1 L
Doe Select, first cold press, glass bottles.

Sold by the carton (12 × 1 L)
Price per carton:
• 1 or more: $96.00
• 10 or more: $90.00

✅ In stock
How many? Tap a button or type the quantity.`,
            keys: shopRows(["➕ 1 carton", "➕ 5", "➕ 10", "🔢 Other quantity", "📷 More photos", "⬅️ 🫒 Oils", "🧾 My order"]),
          },
          { tap: "📷 More photos" },
          {
            album: ["assets/ol-01.svg", "assets/ol-01-2.svg", "assets/ol-01-3.svg"],
            caption: `Extra virgin olive oil 1 L
How many? Tap a button or type the quantity.`,
            keys: shopRows(["➕ 1 carton", "➕ 5", "➕ 10", "🔢 Other quantity", "⬅️ 🫒 Oils", "🧾 My order"]),
          },
          { tap: "➕ 10" },
          {
            bot: `✅ Done — Extra virgin olive oil 1 L: 10 × $90.00 = $900.00
Order so far: $900.00`,
            keys: shopRows(["✏️ Extra virgin olive oil 1 L", "🧾 My order", "⬅️ 🫒 Oils", "✅ Send the order"]),
          },
          { tap: "🧾 My order" },
          {
            bot: `🧾 Your order:
1. Extra virgin olive oil 1 L
     10 × $90.00 = $900.00
──────────
Goods: $900.00
Delivery is added when you choose the area.`,
            keys: shopRows(["✅ Send the order", "✏️ 1. Extra virgin olive oil 1 L", "🛒 Keep shopping", "🗑 Clear the order"]),
          },
          { tap: "✅ Send the order" },
          { bot: "Let's send it 🚚 Where is this order going?", keys: shopRows(["🏪 Shop", "🍽 Restaurant", "🏠 Home", "🏢 Office", "📍 Somewhere else"]) },
          { tap: "🏪 Shop" },
          { bot: "What's the shop's name?" },
          { me: "Doe Mini Market" },
          { bot: "And your name?" },
          { me: "Rami" },
          { bot: "Which number should the team call to confirm the order? Tap the button below or type it.", keys: [["📱 Share my number"]] },
          { tap: "📱 Share my number" },
          { bot: "Where do we deliver? Choose the area:", keys: shopRows(["Beirut", "Mount Lebanon (Metn, Keserwan)", "North (Tripoli)", "South (Saida)"]) },
          { tap: "Beirut" },
          { bot: "The address in Beirut — street, building, and a landmark nearby:" },
          { me: "Hamra street, Doe building, ground floor, next to the bakery" },
          { bot: "Deliveries to Beirut go on Monday, Wednesday, Friday. Which day suits you?", keys: shopRows(["Monday 19/10", "Wednesday 21/10", "Friday 23/10"]) },
          { tap: "Monday 19/10" },
          {
            bot: `Here's your order:

1. Extra virgin olive oil 1 L
     10 × $90.00 = $900.00
──────────
Goods: $900.00
Delivery: free
Total: $900.00

🏪 Doe Mini Market — Rami
📞 +96170000000
📍 Beirut — Hamra street, Doe building, ground floor, next to the bakery
🚚 Monday 19/10

Send it? Reply "yes" to send.`,
            keys: shopRows(["✅ Yes, send it", "✏️ Place & name", "✏️ Phone", "✏️ Address", "✏️ Delivery day", "✏️ Change the order"]),
          },
          { tap: "✅ Yes, send it" },
          { bot: "✅ Order X32YLX is in. The team will call you on +96170000000 to confirm the delivery.", keys: shopRows(["📜 Past orders", "🗂 Catalogue"]) },
          { alert: `🆕 طلبية جديدة X32YLX
🏪 Doe Mini Market
👤 Rami
📞 +96170000000 (مأكّد من تلغرام)
📍 بيروت — Hamra street, Doe building, ground floor, next to the bakery
🚚 الاثنين 19/10

• OL-01 زيت زيتون بكر ممتاز ١ ليتر: 10 × $90.00 = $900.00

البضاعة: $900.00
التوصيل: مجاناً
المجموع: $900.00` },
        ],
      },
      ar: {
        label: "عربي",
        intro: "A shop owner orders in Lebanese Arabic by just writing what they want, then sends it for Saturday.",
        steps: [
          { me: "مرحبا" },
          {
            bot: `فيني ساعدك بـ:
• /catalog — الكتالوج، قسم قسم، مع الصور
• اكتب اسم منتج: «رز بسمتي»، «كلور»
• «١٠ كراتين»، «زيد ٥»، «خليهن ٢٠» — الكمية
• /order — طلبيتك لهلق، ومنها بتبعتها
• /orders — طلبياتك السابقة، وفيك تطلبها مرة تانية
• /language — غيّر اللغة
• /call — رقم الشركة`,
            keys: shopRows(["🗂 الكتالوج", "🧾 طلبيتي", "📜 طلبياتي السابقة", "🌐 اللغة", "💬 احكي مع الفريق", "❓ مساعدة"]),
          },
          { me: "بدي ١٠ كراتين زيت زيتون ٤ ليتر" },
          {
            bot: `✅ تمام — زيت زيتون بكر ممتاز ٤ ليتر: 10 × $110.00 = $1,100.00
المجموع لهلق: $1,100.00`,
            keys: shopRows(["✏️ زيت زيتون بكر ممتاز ٤ ليتر", "🧾 طلبيتي", "⬅️ 🫒 زيوت", "✅ ابعت الطلبية"]),
          },
          { me: "وكمان رز بسمتي ٥ كيلو" },
          {
            photo: "assets/rc-01.svg",
            alt: "A 5 kg bag of Doe Select basmati rice",
            caption: `رز بسمتي ٥ كيلو
Doe Select، حبة طويلة، معتّق سنة.

بيتباع بالكرتونة (٤ × ٥ كيلو)
السعر لكل كرتونة:
• من 1 وطالع: $34.00
• من 10 وطالع: $32.00
• من 25 وطالع: $30.50

✅ متوفّر
قدّيش بدك؟ دوس على زر أو اكتب الكمية.`,
            keys: shopRows(["➕ 1 كرتونة", "➕ 5", "➕ 10", "🔢 كمية تانية", "📷 صور أكتر", "⬅️ 🌾 رز وحبوب", "🧾 طلبيتي"]),
          },
          { me: "5" },
          {
            bot: `✅ تمام — رز بسمتي ٥ كيلو: 5 × $34.00 = $170.00
المجموع لهلق: $1,270.00`,
            keys: shopRows(["✏️ رز بسمتي ٥ كيلو", "🧾 طلبيتي", "⬅️ 🌾 رز وحبوب", "✅ ابعت الطلبية"]),
          },
          { me: "ابعت الطلبية" },
          { bot: "يلا نبعتها 🚚 لوين الطلبية؟", keys: shopRows(["🏪 محل", "🍽 مطعم", "🏠 بيت", "🏢 مكتب", "📍 مكان تاني"]) },
          { me: "ميني ماركت ٢٤" },
          { bot: "وشو اسمك؟" },
          { me: "أبو سمير" },
          { bot: "على أي رقم بيتصل فيك الفريق ليأكّد الطلبية؟ دوس عالزر تحت أو اكتب الرقم.", keys: [["📱 ابعت رقمي"]] },
          { me: "03 000 000" },
          { bot: "لوين منوصّل؟ اختار المنطقة:", keys: shopRows(["بيروت", "جبل لبنان (المتن وكسروان)", "الشمال (طرابلس)", "الجنوب (صيدا)"]) },
          { me: "المتن" },
          { bot: "العنوان بـجبل لبنان (المتن وكسروان) — الشارع، البناية، وشي معلم قريب:" },
          { me: "الجديدة، شارع المدارس، بناية النور" },
          { bot: "التوصيل لـجبل لبنان (المتن وكسروان) بيكون الثلاثاء، الخميس، السبت. أي يوم بيناسبك؟", keys: shopRows(["السبت 17/10", "الثلاثاء 20/10", "الخميس 22/10"]) },
          { tap: "السبت 17/10" },
          {
            bot: `هيدي طلبيتك:

1. زيت زيتون بكر ممتاز ٤ ليتر
     10 × $110.00 = $1,100.00
2. رز بسمتي ٥ كيلو
     5 × $34.00 = $170.00
──────────
البضاعة: $1,270.00
التوصيل: $5.00
المجموع: $1,275.00

🏪 ميني ماركت ٢٤ — أبو سمير
📞 03000000
📍 جبل لبنان (المتن وكسروان) — الجديدة، شارع المدارس، بناية النور
🚚 السبت 17/10

منبعتها؟ جاوب «إيه» لتنبعت.`,
            keys: shopRows(["✅ إيه، ابعتها", "✏️ المكان والاسم", "✏️ الرقم", "✏️ العنوان", "✏️ يوم التوصيل", "✏️ عدّل الطلبية"]),
          },
          { me: "إيه" },
          { bot: "✅ وصلت الطلبية، رقمها 6MYE26. الفريق رح يتصل فيك على 03000000 ليأكّد التوصيل.", keys: shopRows(["📜 طلبياتي السابقة", "🗂 الكتالوج"]) },
          { alert: `🆕 طلبية جديدة 6MYE26
🏪 ميني ماركت ٢٤
👤 أبو سمير
📞 03000000
📍 جبل لبنان (المتن وكسروان) — الجديدة، شارع المدارس، بناية النور
🚚 السبت 17/10

• OL-04 زيت زيتون بكر ممتاز ٤ ليتر: 10 × $110.00 = $1,100.00
• RC-01 رز بسمتي ٥ كيلو: 5 × $34.00 = $170.00

البضاعة: $1,270.00
التوصيل: $5.00
المجموع: $1,275.00` },
        ],
      },
      fr: {
        label: "Français",
        intro: "A grocery in Tripoli orders water and juice in French; the delivery charge is added.",
        steps: [
          { me: "Bonjour, je voudrais 12 packs d'eau minérale 1,5 L" },
          {
            bot: `✅ C'est noté — Eau minérale 1,5 L: 12 × $2.40 = $28.80
Commande en cours : $28.80`,
            keys: shopRows(["✏️ Eau minérale 1,5 L", "🧾 Ma commande", "⬅️ 🥤 Boissons"]),
          },
          { me: "et 10 cartons de jus" },
          {
            bot: `✅ C'est noté — Jus citron-menthe 1 L: 10 × $14.00 = $140.00
Commande en cours : $168.80`,
            keys: shopRows(["✏️ Jus citron-menthe 1 L", "🧾 Ma commande", "⬅️ 🥤 Boissons", "✅ Envoyer la commande"]),
          },
          { me: "envoyer la commande" },
          { bot: "Envoyons-la 🚚 Où va cette commande ?", keys: shopRows(["🏪 Magasin", "🍽 Restaurant", "🏠 Domicile", "🏢 Bureau", "📍 Autre lieu"]) },
          { me: "Épicerie 12" },
          { bot: "Et votre nom ?" },
          { me: "Claire" },
          { bot: "À quel numéro l'équipe peut-elle vous appeler pour confirmer la commande ? Touchez le bouton ci-dessous ou tapez-le.", keys: [["📱 Partager mon numéro"]] },
          { me: "71 000 000" },
          { bot: "Où livrons-nous ? Choisissez la zone :", keys: shopRows(["Beyrouth", "Mont-Liban (Metn, Kesrouan)", "Nord (Tripoli)", "Sud (Saïda)"]) },
          { me: "Nord" },
          { bot: "L'adresse à Nord (Tripoli) — rue, immeuble, et un repère à proximité :" },
          { me: "Tripoli, rue du port, immeuble bleu" },
          { bot: "Les livraisons vers Nord (Tripoli) ont lieu le mercredi. Quel jour vous convient ?", keys: [["mercredi 21/10"]] },
          { tap: "mercredi 21/10" },
          {
            bot: `Voici votre commande :

1. Eau minérale 1,5 L
     12 × $2.40 = $28.80
2. Jus citron-menthe 1 L
     10 × $14.00 = $140.00
──────────
Marchandise : $168.80
Livraison : $10.00
Total : $178.80

🏪 Épicerie 12 — Claire
📞 71000000
📍 Nord (Tripoli) — Tripoli, rue du port, immeuble bleu
🚚 mercredi 21/10

L'envoyer ? Répondez « oui » pour l'envoyer.`,
            keys: shopRows(["✅ Oui, envoyez", "✏️ Lieu et nom", "✏️ Téléphone", "✏️ Adresse", "✏️ Jour de livraison", "✏️ Modifier la commande"]),
          },
          { me: "oui" },
          { bot: "✅ Commande Y398RP reçue. L'équipe vous appellera au 71000000 pour confirmer la livraison.", keys: shopRows(["📜 Commandes passées", "🗂 Le catalogue"]) },
          { alert: `🆕 طلبية جديدة Y398RP
🏪 Épicerie 12
👤 Claire
📞 71000000
📍 الشمال (طرابلس) — Tripoli, rue du port, immeuble bleu
🚚 الأربعاء 21/10

• DR-02 مياه معدنية ١.٥ ليتر: 12 × $2.40 = $28.80
• DR-03 عصير ليمون بالنعناع ١ ليتر: 10 × $14.00 = $140.00

البضاعة: $168.80
التوصيل: $10.00
المجموع: $178.80` },
        ],
      },
    },
  },
];

/* What every bot does — only what the code does today. */
window.EVERY = [
  {
    icon: "languages",
    title: "Speaks the way your customers write",
    text: "Lebanese and Saudi Arabic, Arabizi, English and French. Each message is answered in the language it was written in.",
  },
  {
    icon: "calendar",
    title: "Books, moves and cancels",
    text: "Only times that are really free in your diary, inside your hours and breaks. Never two people in one slot. Every booking gets a reference.",
  },
  {
    icon: "bell",
    title: "Tells you about every one",
    text: "A new booking, a change, a cancellation, a note or an order reaches your own Telegram as it happens.",
  },
  {
    icon: "sparkle",
    title: "Answers questions with AI",
    text: "Prices, services, parking, payment — answered from your own information. If the AI is down, it says so and still books.",
  },
  {
    icon: "shield",
    title: "Knows what not to answer",
    text: "No medical advice, ever: it offers a visit instead. An emergency is sent to 140 before anything else, and someone in crisis is given a crisis line — Embrace, 1564 — never a menu.",
  },
  {
    icon: "relay",
    title: "Keeps notes word for word",
    text: "A note for the doctor or the salon goes on the appointment exactly as the customer wrote it.",
  },
  {
    icon: "moon",
    title: "Open when you are closed",
    text: "At night, on Sunday or on a holiday it answers and books into your real opening hours. It runs on a small server or a computer that stays on.",
  },
  {
    icon: "photo",
    title: "Shows your products",
    text: "The wholesale bot sends photos and albums, lowers prices with quantity, and sends finished orders to your team.",
  },
];

/* The prices, as on the live Upwork listing (2026-10-16). */
window.PLANS = {
  tiers: [
    {
      name: "Answers questions",
      price: "$45",
      days: "Delivered in 2 days. 1 revision",
      includes: [
        "Your bot on Telegram, with your name",
        "10 answers written from your own information",
        "Arabic and English",
      ],
    },
    {
      name: "Books appointments",
      price: "$120",
      days: "Delivered in 4 days. 2 revisions",
      includes: [
        "Everything in Answers questions",
        "Book, move and cancel in the chat",
        "A note for the doctor or the salon",
        "An alert on your phone for every booking",
        "15 answers",
      ],
    },
    {
      name: "Books in five languages",
      price: "$250",
      days: "Delivered in 7 days. 3 revisions",
      includes: [
        "Everything in Books appointments",
        "Saudi Arabic, Arabizi and French as well",
        "20 answers",
        "A video that shows you how to run it",
      ],
    },
  ],
  note: "Hosting is not included: the bot runs on a computer that stays on, or a small server for about $4 a month. You also need a Telegram account and a free Google AI key. The wholesale catalogue bot is priced on its own — ask us.",
};
