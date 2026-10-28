/* The page's conversations, recorded from the bots themselves by tools/record.ts — do not edit by
   hand: change a conversation's script in js/bots.js and run `node tools/record.ts` again. */
window.RECORDED = {
 "dental": {
  "en": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة عيادة فلان لطب الأسنان. فيك تسألني عن أوقات الدوام والأسعار، أو تحجز موعد.\n\nWelcome! I am the assistant at Doe Dental Clinic. Ask me about opening hours and prices, or book an appointment.\n\nBienvenue ! Je suis l'assistante de Doe Dental Clinic. Demandez-moi les horaires et les tarifs, ou prenez rendez-vous.",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇬🇧 English"
   },
   {
    "bot": "Done — I'll write to you in English. 🌐\n\nHow can I help? Pick one below, or just write to me.",
    "keys": [
     [
      "📅 Book an appointment"
     ],
     [
      "💬 Ask the team",
      "📞 Call me"
     ],
     [
      "🕘 Hours & prices"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "📅 Book an appointment"
   },
   {
    "bot": "Of course! What do you need? 👇\nTap one below, or just tell me.",
    "keys": [
     [
      "Check-up · $30"
     ],
     [
      "Cleaning and polishing · $60"
     ],
     [
      "Filling · $80"
     ],
     [
      "Tooth extraction · $100"
     ],
     [
      "Teeth whitening · $200"
     ],
     [
      "Braces consultation · $40"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Cleaning and polishing · $60"
   },
   {
    "bot": "Free times for Cleaning and polishing 👇\nTap the one that suits you.",
    "keys": [
     [
      "today 16:00",
      "tomorrow 11:00"
     ],
     [
      "tomorrow 11:30",
      "tomorrow 12:00"
     ],
     [
      "Monday 09:00",
      "Monday 11:00"
     ],
     [
      "⏩ Later times",
      "🗓️ Other days"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "today 16:00"
   },
   {
    "bot": "Good, today 16:00. Who is the appointment for? Please tell me the name.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Rima Khoury"
   },
   {
    "bot": "Done ✅\n📋 Cleaning and polishing\n👤 Rima Khoury\n🗓️ today 16:00 (Beirut time)\n👥 With Dr. Nour Khalil\n🔖 Your reference: HW84TP\n\nWould you like to leave a note for the doctor?",
    "keys": [
     [
      "📝 Note for the doctor"
     ],
     [
      "Move it · HW84TP"
     ],
     [
      "Cancel it · HW84TP"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nتنظيف وتلميع لـRima Khoury\nاليوم 16:00\nمع د. نور خليل\nرقم: HW84TP",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "teamTap": "✅ مأكّد"
   },
   {
    "teamBot": "HW84TP → ✅ مأكّد. خبّرنا المريض.",
    "keys": [
     [
      "↪️ تأجّل",
      "❌ انلغى"
     ],
     [
      "🏥 وصل"
     ]
    ]
   },
   {
    "bot": "✅ Your appointment at Doe Dental Clinic is confirmed: Cleaning and polishing, today 16:00. See you then!"
   },
   {
    "tap": "📝 Note for the doctor"
   },
   {
    "bot": "Tell me what the doctor should know before the visit — pain, medication you take, an allergy.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "I am allergic to the anaesthetic"
   },
   {
    "bot": "Noted. It is on your appointment, and the doctor sees it before you arrive. 📝",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "📝 ملاحظة من المريض\nموعد HW84TP\nI am allergic to the anaesthetic"
   },
   {
    "me": "My tooth hurts a lot, what should I take?"
   },
   {
    "bot": "I am sorry to hear that. I cannot give medical advice or suggest medication — only the doctor can. Shall I book you an appointment?",
    "keys": [
     [
      "✅ Yes, please",
      "No, thanks"
     ],
     [
      "🏠 Menu"
     ]
    ]
   }
  ],
  "ar": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة عيادة فلان لطب الأسنان. فيك تسألني عن أوقات الدوام والأسعار، أو تحجز موعد.\n\nWelcome! I am the assistant at Doe Dental Clinic. Ask me about opening hours and prices, or book an appointment.\n\nBienvenue ! Je suis l'assistante de Doe Dental Clinic. Demandez-moi les horaires et les tarifs, ou prenez rendez-vous.",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "me": "بدي موعد تنظيف اسنان"
   },
   {
    "bot": "المواعيد الفاضية لـتنظيف وتلميع 👇\nاختار الوقت يلي بيناسبك.",
    "keys": [
     [
      "اليوم 16:00",
      "بكرا 11:00"
     ],
     [
      "بكرا 11:30",
      "بكرا 12:00"
     ],
     [
      "الاثنين 09:00",
      "الاثنين 11:00"
     ],
     [
      "⏩ أوقات بعدها",
      "🗓️ أيام تانية"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "اليوم 16:00"
   },
   {
    "bot": "تمام، اليوم 16:00. الموعد لمين؟ اكتبلي الاسم.",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "ريما خوري"
   },
   {
    "bot": "تم ✅\n📋 تنظيف وتلميع\n👤 ريما خوري\n🗓️ اليوم 16:00 (بتوقيت بيروت)\n👥 مع د. نور خليل\n🔖 رقم موعدك: 3LSTA2\n\nبتحب تكتب شي للدكتور؟",
    "keys": [
     [
      "📝 ملاحظة للدكتور"
     ],
     [
      "أجّل الموعد · 3LSTA2"
     ],
     [
      "ألغي الموعد · 3LSTA2"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nتنظيف وتلميع لـريما خوري\nاليوم 16:00\nمع د. نور خليل\nرقم: 3LSTA2",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "tap": "أجّل الموعد · 3LSTA2"
   },
   {
    "bot": "تمام، منأجّل موعد اليوم 16:00. الأوقات الفاضية 👇\nاختار الوقت يلي بيناسبك.",
    "keys": [
     [
      "بكرا 11:00",
      "بكرا 11:30"
     ],
     [
      "بكرا 12:00",
      "الاثنين 09:00"
     ],
     [
      "الاثنين 11:00",
      "الاثنين 11:30"
     ],
     [
      "🗓️ أيام تانية",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "بكرا 11:00"
   },
   {
    "bot": "تم التأجيل ✅\n📋 تنظيف وتلميع\n👤 ريما خوري\n🗓️ صار بكرا 11:00 (بتوقيت بيروت)\n👥 مع د. نور خليل\n🔖 رقم موعدك نفسه: 3LSTA2",
    "keys": [
     [
      "📝 ملاحظة للدكتور"
     ],
     [
      "أجّل الموعد · 3LSTA2"
     ],
     [
      "ألغي الموعد · 3LSTA2"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "🔁 تأجيل\nتنظيف وتلميع لـريما خوري\nصار بكرا 11:00\nمع د. نور خليل\nرقم: 3LSTA2",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "me": "سني بيوجعني كتير شو بتنصحوني آخد؟"
   },
   {
    "bot": "سلامتك! ما فيني أعطي نصيحة طبية أو دوا — الدكتور وحده بيقدر يجاوبك. بتحب أحجزلك موعد؟",
    "keys": [
     [
      "✅ إيه، لو سمحت",
      "لأ، شكراً"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   }
  ],
  "fr": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة عيادة فلان لطب الأسنان. فيك تسألني عن أوقات الدوام والأسعار، أو تحجز موعد.\n\nWelcome! I am the assistant at Doe Dental Clinic. Ask me about opening hours and prices, or book an appointment.\n\nBienvenue ! Je suis l'assistante de Doe Dental Clinic. Demandez-moi les horaires et les tarifs, ou prenez rendez-vous.",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇫🇷 Français"
   },
   {
    "bot": "C'est noté — je vous écris en français. 🌐\n\nComment puis-je vous aider ? Choisissez ci-dessous, ou écrivez-moi.",
    "keys": [
     [
      "📅 Prendre rendez-vous"
     ],
     [
      "💬 Demander à l'équipe"
     ],
     [
      "📞 Rappelez-moi"
     ],
     [
      "🕘 Horaires et tarifs"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "📅 Prendre rendez-vous"
   },
   {
    "bot": "Bien sûr ! De quoi avez-vous besoin ? 👇\nTouchez-en un ci-dessous, ou dites-le-moi simplement.",
    "keys": [
     [
      "Consultation · $30"
     ],
     [
      "Détartrage · $60",
      "Plombage · $80"
     ],
     [
      "Extraction dentaire · $100"
     ],
     [
      "Blanchiment · $200"
     ],
     [
      "Consultation orthodontie · $40"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Détartrage · $60"
   },
   {
    "bot": "Créneaux libres pour Détartrage 👇\nTouchez celui qui vous convient.",
    "keys": [
     [
      "aujourd'hui 16:00"
     ],
     [
      "demain 11:00",
      "demain 11:30"
     ],
     [
      "demain 12:00",
      "lundi 09:00"
     ],
     [
      "lundi 11:00",
      "⏩ Plus tard"
     ],
     [
      "🗓️ Autres jours",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "aujourd'hui 16:00"
   },
   {
    "bot": "Très bien, aujourd'hui 16:00. À quel nom ? Indiquez-moi le nom.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Rima Khoury"
   },
   {
    "bot": "C'est fait ✅\n📋 Détartrage\n👤 Rima Khoury\n🗓️ aujourd'hui 16:00 (heure de Beyrouth)\n👥 Avec Dr. Nour Khalil\n🔖 Votre référence : 994AXK\n\nVoulez-vous laisser un mot pour le dentiste ?",
    "keys": [
     [
      "📝 Un mot pour le dentiste"
     ],
     [
      "Déplacer · 994AXK"
     ],
     [
      "Annuler · 994AXK",
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nتنظيف وتلميع لـRima Khoury\nاليوم 16:00\nمع د. نور خليل\nرقم: 994AXK",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "tap": "Déplacer · 994AXK"
   },
   {
    "bot": "Très bien, je déplace votre rendez-vous de aujourd'hui 16:00. Créneaux libres 👇\nTouchez celui qui vous convient.",
    "keys": [
     [
      "demain 11:00",
      "demain 11:30"
     ],
     [
      "demain 12:00",
      "lundi 09:00"
     ],
     [
      "lundi 11:00",
      "lundi 11:30"
     ],
     [
      "🗓️ Autres jours",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "demain 11:00"
   },
   {
    "bot": "Déplacé ✅\n📋 Détartrage\n👤 Rima Khoury\n🗓️ Maintenant demain 11:00 (heure de Beyrouth)\n👥 Avec Dr. Nour Khalil\n🔖 Même référence : 994AXK",
    "keys": [
     [
      "📝 Un mot pour le dentiste"
     ],
     [
      "Déplacer · 994AXK"
     ],
     [
      "Annuler · 994AXK",
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🔁 تأجيل\nتنظيف وتلميع لـRima Khoury\nصار بكرا 11:00\nمع د. نور خليل\nرقم: 994AXK",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "tap": "Annuler · 994AXK"
   },
   {
    "bot": "❌ Le rendez-vous 994AXK est annulé\n📋 Détartrage\n🗓️ demain 11:00\n\nJe peux en réserver un autre quand vous voulez.",
    "keys": [
     [
      "📅 Prendre rendez-vous"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "❌ إلغاء\nتنظيف وتلميع\nكان بكرا 11:00\nرقم: 994AXK\nالوقت رجع عالروزنامة."
   }
  ]
 },
 "salon": {
  "en": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة صالون فلان للتجميل. فيك تسألني عن أوقات الدوام والأسعار، أو تحجز موعد.\n\nWelcome! I am the assistant at Doe Beauty Salon. Ask me about opening hours and prices, or book an appointment.\n\nBienvenue ! Je suis l'assistante de Salon de beauté Doe. Demandez-moi les horaires et les tarifs, ou prenez rendez-vous.",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇬🇧 English"
   },
   {
    "bot": "Done — I'll write to you in English. 🌐\n\nHow can I help? Pick one below, or just write to me.",
    "keys": [
     [
      "📅 Book an appointment"
     ],
     [
      "💬 Ask the team",
      "📞 Call me"
     ],
     [
      "🕘 Hours & prices"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "📅 Book an appointment"
   },
   {
    "bot": "Of course! What do you need? 👇\nTap one below, or just tell me.",
    "keys": [
     [
      "💇 Hair",
      "💅 Nails"
     ],
     [
      "✨ Face",
      "🌸 Body",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "💇 Hair"
   },
   {
    "bot": "💇 Hair — which one?",
    "keys": [
     [
      "Women's haircut · $25"
     ],
     [
      "Men's haircut · $12"
     ],
     [
      "Blow-dry · $15"
     ],
     [
      "Hair colour · $55"
     ],
     [
      "Highlights · $85"
     ],
     [
      "Keratin treatment · $120"
     ],
     [
      "Beard trim · $7",
      "📋 All services"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Men's haircut · $12"
   },
   {
    "bot": "Free times for Men's haircut today 👇\nTap the one that suits you.",
    "keys": [
     [
      "12:45",
      "13:00",
      "13:15"
     ],
     [
      "13:30",
      "13:45",
      "14:00"
     ],
     [
      "⏩ Later times",
      "🗓️ Other days"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "13:00"
   },
   {
    "bot": "Good, today 13:00. Who is the appointment for? Please tell me the name.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Karim Haddad"
   },
   {
    "bot": "Done ✅\n📋 Men's haircut\n👤 Karim Haddad\n🗓️ today 13:00 (Beirut time)\n👥 With Sami\n🔖 Your reference: 52UVXT\n\nWould you like to leave a note for the salon before your appointment?",
    "keys": [
     [
      "📝 Note for the salon"
     ],
     [
      "Move it · 52UVXT"
     ],
     [
      "Cancel it · 52UVXT"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nقص شعر رجالي لـKarim Haddad\nاليوم 13:00\nمع سامي\nرقم: 52UVXT",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "tap": "🏠 Menu"
   },
   {
    "bot": "How can I help? Pick one below, or just write to me.",
    "keys": [
     [
      "📅 Book an appointment"
     ],
     [
      "🗓️ My appointments"
     ],
     [
      "💬 Ask the team",
      "📞 Call me"
     ],
     [
      "🕘 Hours & prices"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "💬 Ask the team"
   },
   {
    "bot": "💬 What would you like to ask the team? Write it here and I'll pass it on.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "can Hiba do my nails on Saturday?"
   },
   {
    "bot": "Of course — I'll pass your message to the salon. Which number should they call you on? Tap the button below or type it.",
    "keys": [
     [
      "📱 Share my number"
     ]
    ]
   },
   {
    "tap": "📱 Share my number"
   },
   {
    "bot": "I've passed your message to the salon ✅ Someone will call you on +96170000000. If it's urgent, call +961 1 000 000.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "💬 رسالة من زبون\nKarim Haddad · +96170000000\n«can Hiba do my nails on Saturday?»"
   }
  ],
  "ar": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة صالون فلان للتجميل. فيك تسألني عن أوقات الدوام والأسعار، أو تحجز موعد.\n\nWelcome! I am the assistant at Doe Beauty Salon. Ask me about opening hours and prices, or book an appointment.\n\nBienvenue ! Je suis l'assistante de Salon de beauté Doe. Demandez-moi les horaires et les tarifs, ou prenez rendez-vous.",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "me": "بدي حواجب بكرا مع هبة"
   },
   {
    "bot": "المواعيد الفاضية لـترتيب حواجب بكرا 👇\nاختار الوقت يلي بيناسبك.",
    "keys": [
     [
      "10:00",
      "10:15",
      "10:30"
     ],
     [
      "10:45",
      "11:00",
      "11:15"
     ],
     [
      "11:30",
      "11:45",
      "12:00"
     ],
     [
      "12:15",
      "12:30",
      "12:45"
     ],
     [
      "⏩ أوقات بعدها",
      "🗓️ أيام تانية"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "10:00"
   },
   {
    "bot": "تمام، بكرا 10:00. الموعد لمين؟ اكتبلي الاسم.",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "ريما خوري"
   },
   {
    "bot": "تم ✅\n📋 ترتيب حواجب\n👤 ريما خوري\n🗓️ بكرا 10:00 (بتوقيت بيروت)\n👥 مع هبة\n🔖 رقم موعدك: 85NNCP\n\nبتحب تكتب شي للصالون قبل الموعد؟",
    "keys": [
     [
      "📝 ملاحظة للصالون"
     ],
     [
      "أجّل الموعد · 85NNCP"
     ],
     [
      "ألغي الموعد · 85NNCP"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nترتيب حواجب لـريما خوري\nبكرا 10:00\nمع هبة\nرقم: 85NNCP",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "tap": "📝 ملاحظة للصالون"
   },
   {
    "bot": "اكتبلي شو بدك الصالون يعرف قبل الموعد — حساسية من صبغة أو شمع، بشرة حساسة، أو الستايل يلي ببالك.",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "عندي حساسية من بعض أنواع الصبغة"
   },
   {
    "bot": "وصلت. كتبتها على موعدك، والصالون بيشوفها قبل ما تجي. 📝",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "📝 ملاحظة من الزبون\nموعد 85NNCP\nعندي حساسية من بعض أنواع الصبغة"
   },
   {
    "me": "طلعتلي حكّة بفروة الراس بعد الصبغة، شو بحط عليها؟"
   },
   {
    "bot": "سلامتك! ما فيني أعطي نصيحة طبية — لأي تحسّس أو مشكلة بالبشرة أو بفروة الراس، إسأل صيدلي أو دكتور. بتحب أحجزلك موعد بالصالون؟",
    "keys": [
     [
      "✅ إيه، لو سمحت",
      "لأ، شكراً"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   }
  ],
  "fr": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة صالون فلان للتجميل. فيك تسألني عن أوقات الدوام والأسعار، أو تحجز موعد.\n\nWelcome! I am the assistant at Doe Beauty Salon. Ask me about opening hours and prices, or book an appointment.\n\nBienvenue ! Je suis l'assistante de Salon de beauté Doe. Demandez-moi les horaires et les tarifs, ou prenez rendez-vous.",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇫🇷 Français"
   },
   {
    "bot": "C'est noté — je vous écris en français. 🌐\n\nComment puis-je vous aider ? Choisissez ci-dessous, ou écrivez-moi.",
    "keys": [
     [
      "📅 Prendre rendez-vous"
     ],
     [
      "💬 Demander à l'équipe"
     ],
     [
      "📞 Rappelez-moi"
     ],
     [
      "🕘 Horaires et tarifs"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "📅 Prendre rendez-vous"
   },
   {
    "bot": "Bien sûr ! De quoi avez-vous besoin ? 👇\nTouchez-en un ci-dessous, ou dites-le-moi simplement.",
    "keys": [
     [
      "💇 Cheveux",
      "💅 Ongles"
     ],
     [
      "✨ Visage",
      "🌸 Corps"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "💅 Ongles"
   },
   {
    "bot": "💅 Ongles — que souhaitez-vous ?",
    "keys": [
     [
      "Manucure · $15",
      "Pédicure · $20"
     ],
     [
      "Ongles en gel · $30"
     ],
     [
      "📋 Toutes les prestations"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Manucure · $15"
   },
   {
    "bot": "Créneaux libres pour Manucure aujourd'hui 👇\nTouchez celui qui vous convient.",
    "keys": [
     [
      "13:15",
      "13:30",
      "13:45"
     ],
     [
      "14:00",
      "14:15",
      "16:00"
     ],
     [
      "⏩ Plus tard",
      "🗓️ Autres jours"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "13:15"
   },
   {
    "bot": "Très bien, aujourd'hui 13:15. À quel nom ? Indiquez-moi le nom.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Claire Haddad"
   },
   {
    "bot": "C'est fait ✅\n📋 Manucure\n👤 Claire Haddad\n🗓️ aujourd'hui 13:15 (heure de Beyrouth)\n👥 Avec Maya\n🔖 Votre référence : GPF24D\n\nVoulez-vous laisser un mot au salon avant votre rendez-vous ?",
    "keys": [
     [
      "📝 Un mot pour le salon"
     ],
     [
      "Déplacer · GPF24D"
     ],
     [
      "Annuler · GPF24D",
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nمانيكير لـClaire Haddad\nاليوم 13:15\nمع مايا\nرقم: GPF24D",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "tap": "🏠 Menu"
   },
   {
    "bot": "Comment puis-je vous aider ? Choisissez ci-dessous, ou écrivez-moi.",
    "keys": [
     [
      "📅 Prendre rendez-vous"
     ],
     [
      "🗓️ Mes rendez-vous"
     ],
     [
      "💬 Demander à l'équipe"
     ],
     [
      "📞 Rappelez-moi"
     ],
     [
      "🕘 Horaires et tarifs"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "📅 Prendre rendez-vous"
   },
   {
    "bot": "Bien sûr ! De quoi avez-vous besoin ? 👇\nTouchez-en un ci-dessous, ou dites-le-moi simplement.",
    "keys": [
     [
      "🔁 Manucure · Maya"
     ],
     [
      "💇 Cheveux",
      "💅 Ongles"
     ],
     [
      "✨ Visage",
      "🌸 Corps"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✨ Visage"
   },
   {
    "bot": "✨ Visage — que souhaitez-vous ?",
    "keys": [
     [
      "Soin du visage · $40"
     ],
     [
      "Maquillage · $45"
     ],
     [
      "Épilation des sourcils · $6"
     ],
     [
      "Extensions de cils · $50"
     ],
     [
      "📋 Toutes les prestations"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Épilation des sourcils · $6"
   },
   {
    "bot": "Créneaux libres pour Épilation des sourcils aujourd'hui 👇\nTouchez celui qui vous convient.",
    "keys": [
     [
      "12:45",
      "13:00",
      "13:15"
     ],
     [
      "13:30",
      "13:45",
      "14:00"
     ],
     [
      "⏩ Plus tard",
      "🗓️ Autres jours"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "12:45"
   },
   {
    "bot": "Très bien, aujourd'hui 12:45. Le rendez-vous est pour Claire Haddad ? Si c'est pour quelqu'un d'autre, dites-moi le nom.",
    "keys": [
     [
      "Claire Haddad",
      "Un autre nom"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Claire Haddad"
   },
   {
    "bot": "C'est fait ✅\n📋 Épilation des sourcils\n👤 Claire Haddad\n🗓️ aujourd'hui 12:45 (heure de Beyrouth)\n👥 Avec Lara\n🔖 Votre référence : M9NGT9\n\nVoulez-vous laisser un mot au salon avant votre rendez-vous ?",
    "keys": [
     [
      "📝 Un mot pour le salon"
     ],
     [
      "Déplacer · M9NGT9"
     ],
     [
      "Annuler · M9NGT9",
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nترتيب حواجب لـClaire Haddad\nاليوم 12:45\nمع لارا\nرقم: M9NGT9",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "teamTap": "✅ مأكّد"
   },
   {
    "teamBot": "M9NGT9 → ✅ مأكّد. خبّرنا الزبون.",
    "keys": [
     [
      "↪️ تأجّل",
      "❌ انلغى"
     ],
     [
      "🏥 وصل"
     ]
    ]
   },
   {
    "bot": "✅ Votre rendez-vous chez Salon de beauté Doe est confirmé : Épilation des sourcils, aujourd'hui 12:45. À bientôt !"
   }
  ]
 },
 "medical": {
  "en": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة عيادة فلان الطبية. كيف فيني ساعدك؟\n\nWelcome! I am the assistant at Doe Medical Centre. How can I help you?\n\nBienvenue ! Je suis l'assistante de Centre médical Doe. Comment puis-je vous aider ?",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇬🇧 English"
   },
   {
    "bot": "Done — I'll write to you in English. 🌐\n\nHow can I help? Pick one below, or just write to me.\n\nIf this is an emergency, call 140 now or go to the nearest emergency room. Do not wait for an appointment, or for a reply here.",
    "keys": [
     [
      "📅 Book an appointment"
     ],
     [
      "💬 Ask the team",
      "📞 Call me"
     ],
     [
      "🕘 Hours & prices"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "📞 Call me"
   },
   {
    "bot": "📞 What is it about?",
    "keys": [
     [
      "🚨 Urgent",
      "📅 An appointment"
     ],
     [
      "🧪 A test result",
      "❓ A question"
     ],
     [
      "💬 Something else",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🧪 A test result"
   },
   {
    "bot": "How should we get back to you?",
    "keys": [
     [
      "📞 Phone call",
      "🎙️ Voice note"
     ],
     [
      "💬 Text message",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "💬 Text message"
   },
   {
    "bot": "In a few words, what would you like to ask? (or tap Skip)",
    "keys": [
     [
      "⏭ Skip",
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "is my blood test ready?"
   },
   {
    "bot": "Which number should we reach you on? Tap the button below, or type it.",
    "keys": [
     [
      "📱 Share my number"
     ]
    ]
   },
   {
    "tap": "📱 Share my number"
   },
   {
    "bot": "✅ Done — the team will message you on +96170000000, as soon as possible. (ref C-1001)",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "📞 C-1001 — 🧪 نتيجة فحص\n+96170000000\nكيف: 💬 رسالة مكتوبة\nأيمتى: ⚡ بأقرب وقت\n«is my blood test ready?»",
    "keys": [
     [
      "✅ تمّ"
     ]
    ]
   },
   {
    "teamTap": "✅ تمّ"
   },
   {
    "teamBot": "C-1001 → ✅ تمّ."
   },
   {
    "me": "My son has a fever, what should I give him?"
   },
   {
    "bot": "I am sorry to hear that. I cannot give medical advice or say what to take — only the doctor can. Shall I book you a consultation? If it is an emergency, call 140 or go to the nearest emergency room.",
    "keys": [
     [
      "✅ Yes, please",
      "No, thanks"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "I have chest pain"
   },
   {
    "bot": "If this is an emergency, call 140 now or go to the nearest emergency room. Do not wait for an appointment, or for a reply here."
   }
  ],
  "ar": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة عيادة فلان الطبية. كيف فيني ساعدك؟\n\nWelcome! I am the assistant at Doe Medical Centre. How can I help you?\n\nBienvenue ! Je suis l'assistante de Centre médical Doe. Comment puis-je vous aider ?",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "me": "عندي حرارة من مبارح، بدي موعد"
   },
   {
    "bot": "سلامتك! ما فيني أعطي نصيحة طبية، بس الدكتور بيشوفك — خلّينا نحجزلك.\n\nأكيد! شو بتحتاج؟ 👇\nدوس على واحد تحت، أو اكتبلي شو بدك.",
    "keys": [
     [
      "🩺 زيارة الطبيب"
     ],
     [
      "🧪 تحاليل الدم والبول"
     ],
     [
      "💊 فيتامينات وهرمونات"
     ],
     [
      "📋 Check-up وفحوصات الزواج"
     ],
     [
      "❤️ القلب واللقاحات"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🩺 زيارة الطبيب"
   },
   {
    "bot": "🩺 زيارة الطبيب — شو بدك؟",
    "keys": [
     [
      "كشف عام · $40",
      "مراجعة · $20"
     ],
     [
      "📋 كل الخدمات",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "كشف عام · $40"
   },
   {
    "bot": "المواعيد الفاضية لـكشف عام اليوم 👇\nاختار الوقت يلي بيناسبك.",
    "keys": [
     [
      "14:00",
      "14:15",
      "14:30"
     ],
     [
      "14:45",
      "15:00",
      "15:15"
     ],
     [
      "⏩ أوقات بعدها",
      "🗓️ أيام تانية"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "14:00"
   },
   {
    "bot": "تمام، اليوم 14:00. الموعد لمين؟ اكتبلي الاسم.",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "ريما خوري"
   },
   {
    "bot": "تم ✅\n📋 كشف عام\n👤 ريما خوري\n🗓️ اليوم 14:00 (بتوقيت بيروت)\n👥 مع د. كريم\n🔖 رقم موعدك: UP26SV\n\nبتحب تكتب شي للدكتور قبل الموعد؟",
    "keys": [
     [
      "📝 ملاحظة للدكتور"
     ],
     [
      "أجّل الموعد · UP26SV"
     ],
     [
      "ألغي الموعد · UP26SV"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nكشف عام لـريما خوري\nاليوم 14:00\nمع د. كريم\nرقم: UP26SV",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "me": "لازم كون صايم لتحليل الدم؟"
   },
   {
    "bot": "لأغلب التحاليل، ٨ ساعات صيام. الممرضة بتأكدلك وقت الحجز.",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "عندي وجع بصدري وضيق نفس"
   },
   {
    "bot": "إذا الحالة طارئة، اتصل هلق على 140 أو روح عأقرب طوارئ. ما تستنى موعد، وما تستنى جواب من هون.",
    "keys": [
     [
      "📝 ملاحظة للدكتور"
     ]
    ]
   }
  ],
  "fr": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا! أنا مساعِدة عيادة فلان الطبية. كيف فيني ساعدك؟\n\nWelcome! I am the assistant at Doe Medical Centre. How can I help you?\n\nBienvenue ! Je suis l'assistante de Centre médical Doe. Comment puis-je vous aider ?",
    "keys": [
     [
      "📅 احجز موعد",
      "💬 اسأل الفريق"
     ],
     [
      "📞 اتصلوا فيي"
     ],
     [
      "🕘 الدوام والأسعار"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇫🇷 Français"
   },
   {
    "bot": "C'est noté — je vous écris en français. 🌐\n\nComment puis-je vous aider ? Choisissez ci-dessous, ou écrivez-moi.\n\nS'il s'agit d'une urgence, appelez le 140 maintenant ou allez aux urgences les plus proches. N'attendez pas un rendez-vous, ni une réponse ici.",
    "keys": [
     [
      "📅 Prendre rendez-vous"
     ],
     [
      "💬 Demander à l'équipe"
     ],
     [
      "📞 Rappelez-moi"
     ],
     [
      "🕘 Horaires et tarifs"
     ],
     [
      "🌐 اللغة · Language · Langue"
     ]
    ]
   },
   {
    "tap": "📅 Prendre rendez-vous"
   },
   {
    "bot": "Bien sûr ! De quoi avez-vous besoin ? 👇\nTouchez-en un ci-dessous, ou dites-le-moi simplement.",
    "keys": [
     [
      "🩺 Consultations"
     ],
     [
      "🧪 Analyses sang et urine"
     ],
     [
      "💊 Vitamines et hormones"
     ],
     [
      "📋 Bilans et prénuptial"
     ],
     [
      "❤️ Cœur et vaccins"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🩺 Consultations"
   },
   {
    "bot": "🩺 Consultations — que souhaitez-vous ?",
    "keys": [
     [
      "Consultation · $40"
     ],
     [
      "Visite de suivi · $20"
     ],
     [
      "📋 Toutes les prestations"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Consultation · $40"
   },
   {
    "bot": "Créneaux libres pour Consultation aujourd'hui 👇\nTouchez celui qui vous convient.",
    "keys": [
     [
      "14:00",
      "14:15",
      "14:30"
     ],
     [
      "14:45",
      "15:00",
      "15:15"
     ],
     [
      "⏩ Plus tard",
      "🗓️ Autres jours"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "14:30"
   },
   {
    "bot": "Très bien, aujourd'hui 14:30. À quel nom ? Indiquez-moi le nom.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Rima Khoury"
   },
   {
    "bot": "C'est fait ✅\n📋 Consultation\n👤 Rima Khoury\n🗓️ aujourd'hui 14:30 (heure de Beyrouth)\n👥 Avec Dr Karim\n🔖 Votre référence : 2GUNJE\n\nVoulez-vous laisser un mot pour le médecin avant la visite ?",
    "keys": [
     [
      "📝 Un mot pour le médecin"
     ],
     [
      "Déplacer · 2GUNJE"
     ],
     [
      "Annuler · 2GUNJE",
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 حجز جديد\nكشف عام لـRima Khoury\nاليوم 14:30\nمع د. كريم\nرقم: 2GUNJE",
    "keys": [
     [
      "✅ مأكّد",
      "↪️ تأجّل"
     ],
     [
      "❌ انلغى",
      "🏥 وصل"
     ]
    ]
   },
   {
    "me": "j'ai mal à la tête, que dois-je prendre ?"
   },
   {
    "bot": "Je suis désolée de l'apprendre. Je ne peux pas donner de conseil médical — seul le médecin le peut. Pour que le médecin le sache avant votre visite, touchez ci-dessous et écrivez-le en note. En cas d'urgence, appelez le 140 ou allez aux urgences les plus proches.",
    "keys": [
     [
      "📝 Un mot pour le médecin"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "j'ai mal à la poitrine"
   },
   {
    "bot": "S'il s'agit d'une urgence, appelez le 140 maintenant ou allez aux urgences les plus proches. N'attendez pas un rendez-vous, ni une réponse ici.",
    "keys": [
     [
      "📝 Un mot pour le médecin"
     ]
    ]
   }
  ]
 },
 "wholesale": {
  "en": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا بـدو للجملة 👋\nاطلب بضاعتك من هون — مع الصور والأسعار — تابع طلبياتك، وتواصل مع الفريق.\nاختار من تحت، أو اكتب شو بدك.\n\nWelcome to Doe Wholesale 👋\nOrder your stock here — with photos and prices — follow your orders, and reach the team.\nChoose below, or just write what you need.",
    "keys": [
     [
      "🌐 اللغة · Language · Langue"
     ],
     [
      "🛒 المبيعات",
      "📦 طلبياتي"
     ],
     [
      "💳 الحسابات",
      "📞 اتصلوا فيي"
     ],
     [
      "❓ مساعدة"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇬🇧 English"
   },
   {
    "bot": "✅ Done — we'll carry on in English.\nHow can I help? Choose:",
    "keys": [
     [
      "🛒 Sales",
      "📦 My orders"
     ],
     [
      "💳 Accounts",
      "📞 Call me"
     ],
     [
      "🌐 Language",
      "❓ Help"
     ]
    ]
   },
   {
    "tap": "🛒 Sales"
   },
   {
    "bot": "Which section would you like? Or write the product's name.\n1. 🫒 Oils\n2. 🌾 Rice & grains\n3. 🍗 Chicken & meat\n4. 🧀 Dairy & cheese\n5. 🥫 Canned food\n6. 🥬 Vegetables & fruit\n7. 🍞 Bread & bakery\n8. ☕ Coffee, tea & sugar\n9. 🍫 Sweets & snacks\n10. 🌶 Spices\n11. 🥤 Drinks\n12. 🧽 Cleaning\n13. 📦 Other",
    "keys": [
     [
      "🫒 Oils",
      "🌾 Rice & grains"
     ],
     [
      "🍗 Chicken & meat",
      "🧀 Dairy & cheese"
     ],
     [
      "🥫 Canned food"
     ],
     [
      "🥬 Vegetables & fruit"
     ],
     [
      "🍞 Bread & bakery"
     ],
     [
      "☕ Coffee, tea & sugar"
     ],
     [
      "🍫 Sweets & snacks"
     ],
     [
      "🌶 Spices",
      "🥤 Drinks"
     ],
     [
      "🧽 Cleaning",
      "📦 Other"
     ],
     [
      "🧾 My order",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🫒 Oils"
   },
   {
    "bot": "🫒 Oils:\n1. Extra virgin olive oil 1 L — from $90.00 / carton\n2. Extra virgin olive oil 4 L — from $110.00 / carton\n3. Sunflower oil 1.8 L — from $18.75 / carton\n4. Corn oil 1.5 L — from $28.00 / carton ⛔\n\nTap a product to see its photo and price.",
    "keys": [
     [
      "1. Extra virgin olive oil 1 L"
     ],
     [
      "2. Extra virgin olive oil 4 L"
     ],
     [
      "3. Sunflower oil 1.8 L"
     ],
     [
      "4. Corn oil 1.5 L"
     ],
     [
      "⬅️ Catalogue",
      "🧾 My order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "1. Extra virgin olive oil 1 L"
   },
   {
    "photo": "assets/ol-01.svg",
    "caption": "Extra virgin olive oil 1 L\nDoe Select, first cold press, glass bottles.\n\nSold by the carton (12 × 1 L)\nPrice per carton:\n• 1 or more: $96.00\n• 10 or more: $90.00\n\n✅ In stock\nHow many? Tap a button or type the quantity.",
    "keys": [
     [
      "➕ 1 carton",
      "➕ 5"
     ],
     [
      "➕ 10",
      "🔢 Other quantity"
     ],
     [
      "📷 More photos",
      "⬅️ 🫒 Oils"
     ],
     [
      "🧾 My order",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "📷 More photos"
   },
   {
    "album": [
     "assets/ol-01.svg",
     "assets/ol-01-2.svg",
     "assets/ol-01-3.svg"
    ],
    "caption": "Extra virgin olive oil 1 L\nHow many? Tap a button or type the quantity.",
    "keys": [
     [
      "➕ 1 carton",
      "➕ 5"
     ],
     [
      "➕ 10",
      "🔢 Other quantity"
     ],
     [
      "⬅️ 🫒 Oils",
      "🧾 My order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "➕ 10"
   },
   {
    "bot": "✅ Done — Extra virgin olive oil 1 L: 10 × $90.00 = $900.00\nOrder so far: $900.00",
    "keys": [
     [
      "✏️ Extra virgin olive oil 1 L"
     ],
     [
      "🧾 My order",
      "⬅️ 🫒 Oils"
     ],
     [
      "✅ Send the order",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🧾 My order"
   },
   {
    "bot": "🧾 Your order:\n1. Extra virgin olive oil 1 L\n     10 × $90.00 = $900.00\n──────────\nGoods: $900.00\nDelivery is added when you choose the area.",
    "keys": [
     [
      "✅ Send the order"
     ],
     [
      "✏️ 1. Extra virgin olive oil 1 L"
     ],
     [
      "🛒 Keep shopping"
     ],
     [
      "🗑 Clear the order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Send the order"
   },
   {
    "bot": "Let's send it 🚚 Where is this order going?",
    "keys": [
     [
      "🏪 Shop",
      "🍽 Restaurant"
     ],
     [
      "🏠 Home",
      "🏢 Office"
     ],
     [
      "📍 Somewhere else",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🏪 Shop"
   },
   {
    "bot": "What's the shop's name?",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Doe Mini Market"
   },
   {
    "bot": "And your name?",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Rami"
   },
   {
    "bot": "Which number should the team call to confirm the order? Tap the button below or type it.",
    "keys": [
     [
      "📱 Share my number"
     ]
    ]
   },
   {
    "tap": "📱 Share my number"
   },
   {
    "bot": "Where do we deliver? Choose the area:",
    "keys": [
     [
      "Beirut"
     ],
     [
      "Mount Lebanon (Metn, Keserwan)"
     ],
     [
      "North (Tripoli)",
      "South (Saida)"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Beirut"
   },
   {
    "bot": "The address in Beirut — street, building, and a landmark nearby:",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Hamra street, Doe building, ground floor, next to the bakery"
   },
   {
    "bot": "Deliveries to Beirut go on Monday, Wednesday, Friday. Which day suits you?",
    "keys": [
     [
      "Monday 19/10",
      "Wednesday 21/10"
     ],
     [
      "Friday 23/10",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Monday 19/10"
   },
   {
    "bot": "Here's your order:\n\n1. Extra virgin olive oil 1 L\n     10 × $90.00 = $900.00\n──────────\nGoods: $900.00\nDelivery: free\nTotal: $900.00\n\n🏪 Doe Mini Market — Rami\n📞 +96170000000\n📍 Beirut — Hamra street, Doe building, ground floor, next to the bakery\n🚚 Monday 19/10\n\nSend it? Reply \"yes\" to send.",
    "keys": [
     [
      "✅ Yes, send it",
      "✏️ Place & name"
     ],
     [
      "✏️ Phone",
      "✏️ Address"
     ],
     [
      "✏️ Delivery day"
     ],
     [
      "✏️ Change the order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Yes, send it"
   },
   {
    "bot": "✅ Order 8S2UPJ is in. The team will call you on +96170000000 to confirm the delivery.",
    "keys": [
     [
      "📜 Past orders",
      "🗂 Catalogue"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 طلبية جديدة 8S2UPJ\n🏪 Doe Mini Market\n👤 Rami\n📞 +96170000000 (مأكّد من تلغرام)\n📍 بيروت — Hamra street, Doe building, ground floor, next to the bakery\n🚚 الاثنين 19/10\n\n• OL-01 زيت زيتون بكر ممتاز ١ ليتر: 10 × $90.00 = $900.00\n\nالبضاعة: $900.00\nالتوصيل: مجاناً\nالمجموع: $900.00",
    "keys": [
     [
      "✅ تأكّدت",
      "❌ إلغاء"
     ]
    ]
   },
   {
    "teamTap": "✅ تأكّدت"
   },
   {
    "teamBot": "8S2UPJ ← ✅ تأكّدت. الزبون عرف.",
    "keys": [
     [
      "🚚 بالطريق",
      "❌ إلغاء"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "bot": "✅ Your order 8S2UPJ is confirmed. We'll tell you as soon as it leaves."
   }
  ],
  "ar": [
   {
    "me": "مرحبا"
   },
   {
    "bot": "أهلا وسهلا بـدو للجملة 👋\nاطلب بضاعتك من هون — مع الصور والأسعار — تابع طلبياتك، وتواصل مع الفريق.\nاختار من تحت، أو اكتب شو بدك.",
    "keys": [
     [
      "🛒 المبيعات",
      "📦 طلبياتي"
     ],
     [
      "💳 الحسابات",
      "📞 اتصلوا فيي"
     ],
     [
      "🌐 اللغة",
      "❓ مساعدة"
     ]
    ]
   },
   {
    "me": "بدي ١٠ كراتين زيت زيتون ٤ ليتر"
   },
   {
    "bot": "✅ تمام — زيت زيتون بكر ممتاز ٤ ليتر: 10 × $110.00 = $1,100.00\nالمجموع لهلق: $1,100.00",
    "keys": [
     [
      "✏️ زيت زيتون بكر ممتاز ٤ ليتر"
     ],
     [
      "🧾 طلبيتي",
      "⬅️ 🫒 زيوت"
     ],
     [
      "✅ ابعت الطلبية",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "وكمان رز بسمتي ٥ كيلو"
   },
   {
    "photo": "assets/rc-01.svg",
    "caption": "رز بسمتي ٥ كيلو\nDoe Select، حبة طويلة، معتّق سنة.\n\nبيتباع بالكرتونة (٤ × ٥ كيلو)\nالسعر لكل كرتونة:\n• من 1 وطالع: $34.00\n• من 10 وطالع: $32.00\n• من 25 وطالع: $30.50\n\n✅ متوفّر\nقدّيش بدك؟ دوس على زر أو اكتب الكمية.",
    "keys": [
     [
      "➕ 1 كرتونة",
      "➕ 5"
     ],
     [
      "➕ 10",
      "🔢 كمية تانية"
     ],
     [
      "📷 صور أكتر",
      "⬅️ 🌾 رز وحبوب"
     ],
     [
      "🧾 طلبيتي",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "5"
   },
   {
    "bot": "✅ تمام — رز بسمتي ٥ كيلو: 5 × $34.00 = $170.00\nالمجموع لهلق: $1,270.00\n🧩 بيمشي معه:",
    "keys": [
     [
      "➕ سبع بهارات ٥٠٠ غرام · $54.00"
     ],
     [
      "➕ زيت دوار الشمس ١.٨ ليتر · $21.00"
     ],
     [
      "✏️ رز بسمتي ٥ كيلو"
     ],
     [
      "🧾 طلبيتي",
      "⬅️ 🌾 رز وحبوب"
     ],
     [
      "✅ ابعت الطلبية",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "ابعت الطلبية"
   },
   {
    "bot": "يلا نبعتها 🚚 لوين الطلبية؟",
    "keys": [
     [
      "🏪 محل",
      "🍽 مطعم",
      "🏠 بيت"
     ],
     [
      "🏢 مكتب",
      "📍 مكان تاني"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "ميني ماركت ٢٤"
   },
   {
    "bot": "وشو اسمك؟",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "أبو سمير"
   },
   {
    "bot": "على أي رقم بيتصل فيك الفريق ليأكّد الطلبية؟ دوس عالزر تحت أو اكتب الرقم.",
    "keys": [
     [
      "📱 ابعت رقمي"
     ]
    ]
   },
   {
    "me": "03 000 000"
   },
   {
    "bot": "لوين منوصّل؟ اختار المنطقة:",
    "keys": [
     [
      "بيروت"
     ],
     [
      "جبل لبنان (المتن وكسروان)"
     ],
     [
      "الشمال (طرابلس)",
      "الجنوب (صيدا)"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "المتن"
   },
   {
    "bot": "العنوان بـجبل لبنان (المتن وكسروان) — الشارع، البناية، وشي معلم قريب:",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "الجديدة، شارع المدارس، بناية النور"
   },
   {
    "bot": "التوصيل لـجبل لبنان (المتن وكسروان) بيكون الثلاثاء، الخميس، السبت. أي يوم بيناسبك؟",
    "keys": [
     [
      "السبت 17/10",
      "الثلاثاء 20/10"
     ],
     [
      "الخميس 22/10",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "السبت 17/10"
   },
   {
    "bot": "هيدي طلبيتك:\n\n1. زيت زيتون بكر ممتاز ٤ ليتر\n     10 × $110.00 = $1,100.00\n2. رز بسمتي ٥ كيلو\n     5 × $34.00 = $170.00\n──────────\nالبضاعة: $1,270.00\nالتوصيل: $5.00\nالمجموع: $1,275.00\n\n🏪 ميني ماركت ٢٤ — أبو سمير\n📞 03000000\n📍 جبل لبنان (المتن وكسروان) — الجديدة، شارع المدارس، بناية النور\n🚚 السبت 17/10\n\nمنبعتها؟ جاوب «إيه» لتنبعت.",
    "keys": [
     [
      "✅ إيه، ابعتها",
      "✏️ المكان والاسم"
     ],
     [
      "✏️ الرقم",
      "✏️ العنوان"
     ],
     [
      "✏️ يوم التوصيل",
      "✏️ عدّل الطلبية"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "إيه"
   },
   {
    "bot": "✅ وصلت الطلبية، رقمها 8GFH8R. الفريق رح يتصل فيك على 03000000 ليأكّد التوصيل.",
    "keys": [
     [
      "📜 طلبياتي السابقة"
     ],
     [
      "🗂 الكتالوج",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "🆕 طلبية جديدة 8GFH8R\n🏪 ميني ماركت ٢٤\n👤 أبو سمير\n📞 03000000\n📍 جبل لبنان (المتن وكسروان) — الجديدة، شارع المدارس، بناية النور\n🚚 السبت 17/10\n\n• OL-04 زيت زيتون بكر ممتاز ٤ ليتر: 10 × $110.00 = $1,100.00\n• RC-01 رز بسمتي ٥ كيلو: 5 × $34.00 = $170.00\n\nالبضاعة: $1,270.00\nالتوصيل: $5.00\nالمجموع: $1,275.00",
    "keys": [
     [
      "✅ تأكّدت",
      "❌ إلغاء"
     ]
    ]
   },
   {
    "teamTap": "✅ تأكّدت"
   },
   {
    "teamBot": "8GFH8R ← ✅ تأكّدت. الزبون عرف.",
    "keys": [
     [
      "🚚 بالطريق",
      "❌ إلغاء"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "bot": "✅ طلبيتك 8GFH8R تأكّدت. منخبرك أوّل ما تطلع."
   }
  ],
  "fr": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا بـدو للجملة 👋\nاطلب بضاعتك من هون — مع الصور والأسعار — تابع طلبياتك، وتواصل مع الفريق.\nاختار من تحت، أو اكتب شو بدك.\n\nWelcome to Doe Wholesale 👋\nOrder your stock here — with photos and prices — follow your orders, and reach the team.\nChoose below, or just write what you need.",
    "keys": [
     [
      "🌐 اللغة · Language · Langue"
     ],
     [
      "🛒 المبيعات",
      "📦 طلبياتي"
     ],
     [
      "💳 الحسابات",
      "📞 اتصلوا فيي"
     ],
     [
      "❓ مساعدة"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇫🇷 Français"
   },
   {
    "bot": "✅ C'est fait — nous continuons en français.\nComment puis-je vous aider ? Choisissez :",
    "keys": [
     [
      "🛒 Ventes",
      "📦 Mes commandes"
     ],
     [
      "💳 Comptabilité",
      "📞 Rappelez-moi"
     ],
     [
      "🌐 Langue",
      "❓ Aide"
     ]
    ]
   },
   {
    "tap": "🛒 Ventes"
   },
   {
    "bot": "Quel rayon voulez-vous voir ? Ou écrivez le nom du produit.\n1. 🫒 Huiles\n2. 🌾 Riz et céréales\n3. 🍗 Volaille et viande\n4. 🧀 Produits laitiers\n5. 🥫 Conserves\n6. 🥬 Fruits et légumes\n7. 🍞 Pain et viennoiseries\n8. ☕ Café, thé et sucre\n9. 🍫 Confiserie et snacks\n10. 🌶 Épices\n11. 🥤 Boissons\n12. 🧽 Entretien\n13. 📦 Divers",
    "keys": [
     [
      "🫒 Huiles"
     ],
     [
      "🌾 Riz et céréales"
     ],
     [
      "🍗 Volaille et viande"
     ],
     [
      "🧀 Produits laitiers"
     ],
     [
      "🥫 Conserves"
     ],
     [
      "🥬 Fruits et légumes"
     ],
     [
      "🍞 Pain et viennoiseries"
     ],
     [
      "☕ Café, thé et sucre"
     ],
     [
      "🍫 Confiserie et snacks"
     ],
     [
      "🌶 Épices",
      "🥤 Boissons"
     ],
     [
      "🧽 Entretien",
      "📦 Divers"
     ],
     [
      "🧾 Ma commande",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🥤 Boissons"
   },
   {
    "bot": "🥤 Boissons :\n1. Eau minérale 0,5 L — dès $3.30 / pack\n2. Eau minérale 1,5 L — dès $2.15 / pack\n3. Jus citron-menthe 1 L — dès $14.00 / carton\n\nTouchez un produit pour voir sa photo et son prix.",
    "keys": [
     [
      "1. Eau minérale 0,5 L"
     ],
     [
      "2. Eau minérale 1,5 L"
     ],
     [
      "3. Jus citron-menthe 1 L"
     ],
     [
      "⬅️ Le catalogue",
      "🧾 Ma commande"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "2. Eau minérale 1,5 L"
   },
   {
    "photo": "assets/ws-water.svg",
    "caption": "Eau minérale 1,5 L\nDoe Springs. Vendu par six packs.\n\nVendu au pack (6 × 1,5 L)\nPrix par pack :\n• à partir de 6 : $2.40\n• à partir de 60 : $2.15\nMinimum : 6\nVendu par multiples de 6\n\n✅ En stock\nCombien ? Touchez un bouton ou écrivez la quantité.",
    "keys": [
     [
      "➕ 6",
      "➕ 12",
      "➕ 24"
     ],
     [
      "🔢 Autre quantité",
      "⬅️ 🥤 Boissons"
     ],
     [
      "🧾 Ma commande",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "➕ 12"
   },
   {
    "bot": "✅ C'est noté — Eau minérale 1,5 L: 12 × $2.40 = $28.80\nCommande en cours : $28.80",
    "keys": [
     [
      "✏️ Eau minérale 1,5 L"
     ],
     [
      "🧾 Ma commande",
      "⬅️ 🥤 Boissons"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "⬅️ 🥤 Boissons"
   },
   {
    "bot": "🥤 Boissons :\n1. Eau minérale 0,5 L — dès $3.30 / pack\n2. Eau minérale 1,5 L — dès $2.15 / pack\n3. Jus citron-menthe 1 L — dès $14.00 / carton\n\nTouchez un produit pour voir sa photo et son prix.",
    "keys": [
     [
      "1. Eau minérale 0,5 L"
     ],
     [
      "2. Eau minérale 1,5 L"
     ],
     [
      "3. Jus citron-menthe 1 L"
     ],
     [
      "⬅️ Le catalogue",
      "🧾 Ma commande"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "3. Jus citron-menthe 1 L"
   },
   {
    "photo": "assets/ws-juice.svg",
    "caption": "Jus citron-menthe 1 L\nDoe Springs, sans sucre ajouté.\n\nVendu au carton (12 × 1 L)\nPrix par carton :\n• à partir de 1 : $15.00\n• à partir de 10 : $14.00\n\n⚠️ Stock faible — l'équipe vous confirme la quantité\nCombien ? Touchez un bouton ou écrivez la quantité.",
    "keys": [
     [
      "➕ 1 carton",
      "➕ 5"
     ],
     [
      "➕ 10",
      "🔢 Autre quantité"
     ],
     [
      "⬅️ 🥤 Boissons",
      "🧾 Ma commande"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "➕ 10"
   },
   {
    "bot": "✅ C'est noté — Jus citron-menthe 1 L: 10 × $14.00 = $140.00\nCommande en cours : $168.80",
    "keys": [
     [
      "✏️ Jus citron-menthe 1 L"
     ],
     [
      "🧾 Ma commande",
      "⬅️ 🥤 Boissons"
     ],
     [
      "✅ Envoyer la commande"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Envoyer la commande"
   },
   {
    "bot": "Envoyons-la 🚚 Où va cette commande ?",
    "keys": [
     [
      "🏪 Magasin",
      "🍽 Restaurant"
     ],
     [
      "🏠 Domicile",
      "🏢 Bureau"
     ],
     [
      "📍 Autre lieu",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🏪 Magasin"
   },
   {
    "bot": "Quel est le nom du magasin ?",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Épicerie 12"
   },
   {
    "bot": "Et votre nom ?",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Claire"
   },
   {
    "bot": "À quel numéro l'équipe peut-elle vous appeler pour confirmer la commande ? Touchez le bouton ci-dessous ou tapez-le.",
    "keys": [
     [
      "📱 Partager mon numéro"
     ]
    ]
   },
   {
    "me": "71 000 000"
   },
   {
    "bot": "Où livrons-nous ? Choisissez la zone :",
    "keys": [
     [
      "Beyrouth"
     ],
     [
      "Mont-Liban (Metn, Kesrouan)"
     ],
     [
      "Nord (Tripoli)",
      "Sud (Saïda)"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Nord (Tripoli)"
   },
   {
    "bot": "L'adresse à Nord (Tripoli) — rue, immeuble, et un repère à proximité :",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Tripoli, rue du port, immeuble bleu"
   },
   {
    "bot": "Les livraisons vers Nord (Tripoli) ont lieu le mercredi. Quel jour vous convient ?",
    "keys": [
     [
      "mercredi 21/10",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "mercredi 21/10"
   },
   {
    "bot": "Voici votre commande :\n\n1. Eau minérale 1,5 L\n     12 × $2.40 = $28.80\n2. Jus citron-menthe 1 L\n     10 × $14.00 = $140.00\n──────────\nMarchandise : $168.80\nLivraison : $10.00\nTotal : $178.80\n\n🏪 Épicerie 12 — Claire\n📞 71000000\n📍 Nord (Tripoli) — Tripoli, rue du port, immeuble bleu\n🚚 mercredi 21/10\n\nL'envoyer ? Répondez « oui » pour l'envoyer.",
    "keys": [
     [
      "✅ Oui, envoyez",
      "✏️ Lieu et nom"
     ],
     [
      "✏️ Téléphone",
      "✏️ Adresse"
     ],
     [
      "✏️ Jour de livraison"
     ],
     [
      "✏️ Modifier la commande"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Oui, envoyez"
   },
   {
    "bot": "✅ Commande U2WSES reçue. L'équipe vous appellera au 71000000 pour confirmer la livraison.",
    "keys": [
     [
      "📜 Commandes passées"
     ],
     [
      "🗂 Le catalogue",
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 طلبية جديدة U2WSES\n🏪 Épicerie 12\n👤 Claire\n📞 71000000\n📍 الشمال (طرابلس) — Tripoli, rue du port, immeuble bleu\n🚚 الأربعاء 21/10\n\n• DR-02 مياه معدنية ١.٥ ليتر: 12 × $2.40 = $28.80\n• DR-03 عصير ليمون بالنعناع ١ ليتر: 10 × $14.00 = $140.00\n\nالبضاعة: $168.80\nالتوصيل: $10.00\nالمجموع: $178.80",
    "keys": [
     [
      "✅ تأكّدت",
      "❌ إلغاء"
     ]
    ]
   }
  ]
 },
 "electronics": {
  "en": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا بـدو للإلكترونيات 👋\nتلفونات، لابتوبات، ألعاب، كاميرات وإكسسوارات — وصيانة كمان.\nاختار شو بدك، أو اكتبلي بكلماتك.\n\nWelcome to Doe Electronics 👋\nPhones, laptops, gaming, cameras and accessories — and repairs too.\nChoose what you need, or just write it in your own words.",
    "keys": [
     [
      "🌐 اللغة · Language · Langue"
     ],
     [
      "🛒 المحل",
      "📦 طلبياتي"
     ],
     [
      "🔧 صيانة",
      "💬 أسئلة"
     ],
     [
      "📞 اتصلوا فيي",
      "❓ مساعدة"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇬🇧 English"
   },
   {
    "bot": "✅ Done — we'll carry on in English.\nHow can I help? Choose:",
    "keys": [
     [
      "🛒 Shop",
      "📦 My orders"
     ],
     [
      "🔧 Repairs",
      "💬 Questions"
     ],
     [
      "📞 Call me",
      "🌐 Language"
     ],
     [
      "❓ Help"
     ]
    ]
   },
   {
    "tap": "🛒 Shop"
   },
   {
    "bot": "Which section would you like? Or write the product's name.\n1. 📱 Phones\n2. 💻 Laptops\n3. 📲 Tablets\n4. 🎮 Gaming\n5. 📷 Cameras\n6. 🎙️ Lights, mics & tripods\n7. ⌚ Smart gadgets\n8. 🔥 IQOS · 18+\n9. 🔌 Accessories",
    "keys": [
     [
      "📱 Phones",
      "💻 Laptops"
     ],
     [
      "📲 Tablets",
      "🎮 Gaming"
     ],
     [
      "📷 Cameras"
     ],
     [
      "🎙️ Lights, mics & tripods"
     ],
     [
      "⌚ Smart gadgets",
      "🔥 IQOS · 18+"
     ],
     [
      "🔌 Accessories",
      "🧾 My order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "📱 Phones"
   },
   {
    "bot": "📱 Phones — 48 models, from $99.00.\nPick a brand, or let me help you choose by budget, brand, RAM, storage.\nOr just write it: \"Samsung under $400 with 8 GB RAM\".",
    "keys": [
     [
      "🔎 Help me choose",
      "🏷 Apple"
     ],
     [
      "🏷 Samsung",
      "🏷 Xiaomi"
     ],
     [
      "🏷 Google",
      "🏷 Honor"
     ],
     [
      "🏷 Infinix",
      "🏷 Tecno"
     ],
     [
      "📋 All 48",
      "⬅️ Catalogue"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🔎 Help me choose"
   },
   {
    "bot": "📱 Phones — 💰 What's your budget?",
    "keys": [
     [
      "Under $200",
      "$200 – $400"
     ],
     [
      "$400 – $700",
      "$700 – $1,000"
     ],
     [
      "Over $1,000",
      "🤷 Doesn't matter"
     ],
     [
      "✅ Show me now",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "$200 – $400"
   },
   {
    "bot": "📱 Phones — 🏷 Any brand you prefer?\nSo far: $200 – $400",
    "keys": [
     [
      "Apple",
      "Samsung"
     ],
     [
      "Xiaomi",
      "Google",
      "Honor"
     ],
     [
      "Infinix",
      "Tecno"
     ],
     [
      "🤷 Doesn't matter",
      "✅ Show me now"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Samsung"
   },
   {
    "bot": "📱 Phones — 🧠 How much RAM at least?\nSo far: $200 – $400 · Samsung",
    "keys": [
     [
      "4 GB RAM or more",
      "6 GB RAM or more"
     ],
     [
      "8 GB RAM or more"
     ],
     [
      "12 GB RAM or more"
     ],
     [
      "16 GB RAM or more"
     ],
     [
      "🤷 Doesn't matter",
      "✅ Show me now"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "6 GB RAM or more"
   },
   {
    "bot": "📱 Phones — 💾 How much storage at least?\nSo far: $200 – $400 · Samsung · 6 GB RAM or more",
    "keys": [
     [
      "64 GB storage or more"
     ],
     [
      "128 GB storage or more"
     ],
     [
      "256 GB storage or more"
     ],
     [
      "512 GB storage or more"
     ],
     [
      "1 TB storage or more"
     ],
     [
      "🤷 Doesn't matter",
      "✅ Show me now"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🤷 Doesn't matter"
   },
   {
    "bot": "📱 Phones\n🔎 2 match ($200 – $400 · Samsung · 6 GB RAM or more) — cheapest first:\n1. Samsung Galaxy A36 · 128 GB — $349.00 / piece\n2. Samsung Galaxy A36 · 256 GB — $399.00 / piece",
    "keys": [
     [
      "1. Samsung Galaxy A36 · 128 GB"
     ],
     [
      "2. Samsung Galaxy A36 · 256 GB"
     ],
     [
      "🔁 Change my choices"
     ],
     [
      "⬅️ 📱 Phones",
      "🧾 My order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "1. Samsung Galaxy A36 · 128 GB"
   },
   {
    "photo": "assets/el-phone.svg",
    "caption": "Samsung Galaxy A36 · 128 GB\nNew, sealed in its box, with a one-year shop warranty.\n\nSold by the piece (6.7\" · 6 GB RAM · 128 GB)\nPrice per piece:\n• 1 or more: $349.00\nMost per order: 2\n💾 Also in: 256 GB\n🎨 Colours: ⚫ Black · ⚪ White · 🟣 Purple — pick one to add it to your order.\n\n✅ In stock\nHow many? Tap a button or type the quantity.",
    "keys": [
     [
      "➕ ⚫ Black",
      "➕ ⚪ White"
     ],
     [
      "➕ 🟣 Purple",
      "🔢 Other quantity"
     ],
     [
      "💾 256 GB · $399.00"
     ],
     [
      "⬅️ 📱 Phones",
      "🧾 My order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "➕ ⚫ Black"
   },
   {
    "bot": "🎨 Samsung Galaxy A36 · 128 GB: ⚫ Black\n✅ Done — Samsung Galaxy A36 · 128 GB (⚫ Black): 1 × $349.00 = $349.00\nOrder so far: $349.00\n🧩 Goes well with it:",
    "keys": [
     [
      "➕ Tempered glass screen protector · $12.00"
     ],
     [
      "➕ Samsung 25W Super Fast Charger · $19.00"
     ],
     [
      "➕ Samsung Galaxy Buds3 Pro · $229.00"
     ],
     [
      "✏️ Samsung Galaxy A36 · 128 GB"
     ],
     [
      "🧾 My order",
      "⬅️ 📱 Phones"
     ],
     [
      "✅ Send the order",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "➕ Tempered glass screen protector · $12.00"
   },
   {
    "bot": "✅ Done — Tempered glass screen protector: 1 × $12.00 = $12.00\nOrder so far: $361.00",
    "keys": [
     [
      "✏️ Tempered glass screen protector"
     ],
     [
      "🧾 My order",
      "⬅️ 🔌 Accessories"
     ],
     [
      "✅ Send the order",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Send the order"
   },
   {
    "bot": "Let's send it 🚚 Where is this order going — or will you pick it up at the shop?",
    "keys": [
     [
      "🏠 Home",
      "🏢 Office"
     ],
     [
      "📍 Somewhere else"
     ],
     [
      "🏬 Pick up at the shop"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🏬 Pick up at the shop"
   },
   {
    "bot": "And your name?",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Lina Haddad"
   },
   {
    "bot": "Which number should the team call to confirm the order? Tap the button below or type it.",
    "keys": [
     [
      "📱 Share my number"
     ]
    ]
   },
   {
    "tap": "📱 Share my number"
   },
   {
    "bot": "Pick up from the shop (Hamra) — open Monday – Saturday. Which day will you come by?",
    "keys": [
     [
      "Saturday 17/10",
      "Monday 19/10"
     ],
     [
      "Tuesday 20/10",
      "Wednesday 21/10"
     ],
     [
      "Thursday 22/10",
      "Friday 23/10"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Saturday 17/10"
   },
   {
    "bot": "Here's your order:\n\n1. Samsung Galaxy A36 · 128 GB (⚫ Black)\n     1 × $349.00 = $349.00\n2. Tempered glass screen protector\n     1 × $12.00 = $12.00\n──────────\nGoods: $361.00\nDelivery: free\nTotal: $361.00\n\n🏬 Pick up from the shop (Hamra) — Lina Haddad\n📞 +96170000000\n🗓 Saturday 17/10\n\nSend it? Reply \"yes\" to send.",
    "keys": [
     [
      "✅ Yes, send it",
      "✏️ Place & name"
     ],
     [
      "✏️ Phone",
      "✏️ Address"
     ],
     [
      "✏️ Delivery day"
     ],
     [
      "✏️ Change the order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Yes, send it"
   },
   {
    "bot": "✅ Order U9AKYP is in. The team will call you on +96170000000 to confirm the pick-up.",
    "keys": [
     [
      "📜 Past orders",
      "🗂 Catalogue"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🆕 طلبية جديدة U9AKYP\n🏬 استلام من المحل\n👤 Lina Haddad\n📞 +96170000000 (مأكّد من تلغرام)\n📍 استلام من المحل (الحمرا) — 🏬\n🚚 السبت 17/10\n\n• A36-01 سامسونج جالكسي A36 · 128 جيغا (⚫ أسود): 1 × $349.00 = $349.00\n• AK-04 لزقة حماية شاشة زجاج: 1 × $12.00 = $12.00\n\nالبضاعة: $361.00\nالتوصيل: مجاناً\nالمجموع: $361.00",
    "keys": [
     [
      "✅ تأكّدت",
      "❌ إلغاء"
     ]
    ]
   },
   {
    "teamTap": "✅ تأكّدت"
   },
   {
    "teamBot": "U9AKYP ← ✅ تأكّدت. الزبون عرف.",
    "keys": [
     [
      "🏬 جاهزة بالمحل",
      "❌ إلغاء"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "bot": "✅ Your order U9AKYP is confirmed. We'll tell you as soon as it leaves."
   },
   {
    "teamTap": "🏬 جاهزة بالمحل"
   },
   {
    "teamBot": "U9AKYP ← 🏬 جاهزة بالمحل. الزبون عرف.",
    "keys": [
     [
      "📦 تسلّمت",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "bot": "🏬 Your order U9AKYP is ready — come and collect it at the shop."
   }
  ],
  "ar": [
   {
    "me": "مرحبا"
   },
   {
    "bot": "أهلا وسهلا بـدو للإلكترونيات 👋\nتلفونات، لابتوبات، ألعاب، كاميرات وإكسسوارات — وصيانة كمان.\nاختار شو بدك، أو اكتبلي بكلماتك.",
    "keys": [
     [
      "🛒 المحل",
      "📦 طلبياتي"
     ],
     [
      "🔧 صيانة",
      "💬 أسئلة"
     ],
     [
      "📞 اتصلوا فيي",
      "🌐 اللغة"
     ],
     [
      "❓ مساعدة"
     ]
    ]
   },
   {
    "me": "تلفوني آيفون 13 الشاشة مكسورة"
   },
   {
    "bot": "شو الماركة والموديل؟ (مثلاً: iPhone 13)",
    "keys": [
     [
      "آيفون 13",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "آيفون 13"
   },
   {
    "bot": "بتجيبه عالمحل، ولا منبعت ناخده من عندك؟",
    "keys": [
     [
      "🏬 بجيبه عالمحل",
      "🛵 تعوا خدوه"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🏬 بجيبه عالمحل"
   },
   {
    "bot": "شو اسمك؟",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "رامي خوري"
   },
   {
    "bot": "على أي رقم فيه الفني يتصل فيك؟ دوس عالزر تحت، أو اكتبه.",
    "keys": [
     [
      "📱 ابعت رقمي"
     ]
    ]
   },
   {
    "tap": "📱 ابعت رقمي"
   },
   {
    "bot": "طلب الصيانة:\n🔧 تلفون — آيفون 13\n🩹 شاشة مكسورة\n🚚 بيجيبه عالمحل\n👤 رامي خوري · +96170000000\n💲 من $45.00 — الفني بيأكّد السعر بعد ما يفحصه\n\nبعتو لفريق الصيانة؟",
    "keys": [
     [
      "إيه",
      "لا"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "إيه"
   },
   {
    "bot": "✅ طلب الصيانة R-1001 وصل. فريق الصيانة رح يتصل فيك على +96170000000 ليرتّب معك.",
    "keys": [
     [
      "🎫 طلبات الصيانة",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "🔧 صيانة جديدة R-1001\nرامي خوري · +96170000000 (مأكّد من تلغرام)\nالجهاز: تلفون — آيفون 13\nالمشكلة: شاشة مكسورة\nبيجيبه عالمحل\nالسعر: من $45.00 — الفني بيأكّد السعر بعد ما يفحصه",
    "keys": [
     [
      "🔍 عم نفحص",
      "💬 حط السعر"
     ],
     [
      "🔧 عم نصلّح"
     ]
    ]
   },
   {
    "teamTap": "💬 حط السعر"
   },
   {
    "teamBot": "💬 R-1001: اكتب السعر بالـUSD (مثلاً 45).",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "team": "60"
   },
   {
    "teamBot": "💬 R-1001: انبعت السعر $60.00 للزبون — منستنى جوابه.",
    "keys": [
     [
      "💬 حط السعر",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "bot": "💬 صيانة R-1001: الفني فحص الـتلفون والسعر $60.00. منكمّل؟",
    "keys": [
     [
      "👍 إيه، كمّلوا",
      "👎 لا، شكراً"
     ]
    ]
   },
   {
    "tap": "👍 إيه، كمّلوا"
   },
   {
    "bot": "👍 تمام — الفني بيبلّش هلّق بـR-1001. منخبرك أوّل ما يجهز.",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "👍 R-1001: الزبون وافق على $60.00 — فيكن تبلّشوا.",
    "keys": [
     [
      "🔧 عم نصلّح"
     ]
    ]
   }
  ],
  "fr": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا بـدو للإلكترونيات 👋\nتلفونات، لابتوبات، ألعاب، كاميرات وإكسسوارات — وصيانة كمان.\nاختار شو بدك، أو اكتبلي بكلماتك.\n\nWelcome to Doe Electronics 👋\nPhones, laptops, gaming, cameras and accessories — and repairs too.\nChoose what you need, or just write it in your own words.",
    "keys": [
     [
      "🌐 اللغة · Language · Langue"
     ],
     [
      "🛒 المحل",
      "📦 طلبياتي"
     ],
     [
      "🔧 صيانة",
      "💬 أسئلة"
     ],
     [
      "📞 اتصلوا فيي",
      "❓ مساعدة"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇫🇷 Français"
   },
   {
    "bot": "✅ C'est fait — nous continuons en français.\nComment puis-je vous aider ? Choisissez :",
    "keys": [
     [
      "🛒 Boutique",
      "📦 Mes commandes"
     ],
     [
      "🔧 Réparations",
      "💬 Questions"
     ],
     [
      "📞 Rappelez-moi",
      "🌐 Langue"
     ],
     [
      "❓ Aide"
     ]
    ]
   },
   {
    "tap": "🛒 Boutique"
   },
   {
    "bot": "Quel rayon voulez-vous voir ? Ou écrivez le nom du produit.\n1. 📱 Téléphones\n2. 💻 Ordinateurs portables\n3. 📲 Tablettes\n4. 🎮 Jeux vidéo\n5. 📷 Appareils photo\n6. 🎙️ Lumières, micros et trépieds\n7. ⌚ Objets connectés\n8. 🔥 IQOS · 18+\n9. 🔌 Accessoires",
    "keys": [
     [
      "📱 Téléphones"
     ],
     [
      "💻 Ordinateurs portables"
     ],
     [
      "📲 Tablettes",
      "🎮 Jeux vidéo"
     ],
     [
      "📷 Appareils photo"
     ],
     [
      "🎙️ Lumières, micros et trépieds"
     ],
     [
      "⌚ Objets connectés"
     ],
     [
      "🔥 IQOS · 18+",
      "🔌 Accessoires"
     ],
     [
      "🧾 Ma commande",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "💻 Ordinateurs portables"
   },
   {
    "bot": "💻 Ordinateurs portables — 36 modèles, dès $349.00.\nChoisissez une marque, ou laissez-moi vous aider selon budget, marque, RAM, stockage.\nOu écrivez-le : « Dell à moins de $800 avec 8 Go de RAM ».",
    "keys": [
     [
      "🔎 Aidez-moi à choisir"
     ],
     [
      "🏷 Apple",
      "🏷 Dell"
     ],
     [
      "🏷 HP",
      "🏷 Lenovo"
     ],
     [
      "🏷 Asus",
      "🏷 Acer"
     ],
     [
      "🏷 Toshiba",
      "🏷 MSI"
     ],
     [
      "📋 Tous (36)",
      "⬅️ Le catalogue"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🏷 Lenovo"
   },
   {
    "bot": "💻 Ordinateurs portables\n🔎 6 correspondent (Lenovo) — du moins cher au plus cher :\n1. Lenovo IdeaPad Slim 3 · i3 · 8/256 — $399.00 / pièce\n2. Lenovo IdeaPad Slim 5 · Ryzen 7 · 16/512 — $649.00 / pièce\n3. Lenovo ThinkPad E14 · i5 · 16/512 — $799.00 / pièce\n4. Lenovo LOQ 15 · RTX 4050 · 16/512 — $899.00 / pièce\n5. Lenovo Legion 5 · RTX 4060 · 16/1TB — $1,299.00 / pièce\n6. Lenovo ThinkPad X1 Carbon · Ultra 7 · 32/1TB — $1,899.00 / pièce",
    "keys": [
     [
      "1. Lenovo IdeaPad Slim 3 · i3 · 8/256"
     ],
     [
      "2. Lenovo IdeaPad Slim 5 · Ryzen 7 · 16/512"
     ],
     [
      "3. Lenovo ThinkPad E14 · i5 · 16/512"
     ],
     [
      "4. Lenovo LOQ 15 · RTX 4050 · 16/512"
     ],
     [
      "5. Lenovo Legion 5 · RTX 4060 · 16/1TB"
     ],
     [
      "6. Lenovo ThinkPad X1 Carbon · Ultra 7 · 32/1TB"
     ],
     [
      "🔁 Changer mes choix"
     ],
     [
      "⬅️ 💻 Ordinateurs portables"
     ],
     [
      "🧾 Ma commande",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "1. Lenovo IdeaPad Slim 3 · i3 · 8/256"
   },
   {
    "photo": "assets/el-laptop.svg",
    "caption": "Lenovo IdeaPad Slim 3 · i3 · 8/256\nNeuf, un an de garantie boutique. Configuré sur demande.\n\nVendu au pièce (15.6\" · Core i3-1215U · 8 GB RAM · 256 GB SSD)\nPrix par pièce :\n• à partir de 1 : $399.00\nMaximum par commande : 2\n\n✅ En stock\nCombien ? Touchez un bouton ou écrivez la quantité.",
    "keys": [
     [
      "➕ 1 pièce",
      "🔢 Autre quantité"
     ],
     [
      "⬅️ 💻 Ordinateurs portables"
     ],
     [
      "🧾 Ma commande",
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "et la garantie ?"
   },
   {
    "bot": "Chaque appareil neuf a un an de garantie boutique ; les accessoires trois mois. Gardez votre ticket.",
    "keys": [
     [
      "➕ 1 pièce",
      "🔢 Autre quantité"
     ],
     [
      "⬅️ 💻 Ordinateurs portables"
     ],
     [
      "🧾 Ma commande",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "➕ 1 pièce"
   },
   {
    "bot": "✅ C'est noté — Lenovo IdeaPad Slim 3 · i3 · 8/256: 1 × $399.00 = $399.00\nCommande en cours : $399.00\n🧩 Va bien avec :",
    "keys": [
     [
      "➕ Targus 15.6\" laptop backpack · $45.00"
     ],
     [
      "➕ Logitech M185 wireless mouse · $15.00"
     ],
     [
      "➕ Ugreen USB-C hub 7-in-1 · $39.00"
     ],
     [
      "✏️ Lenovo IdeaPad Slim 3 · i3 · 8/256"
     ],
     [
      "🧾 Ma commande"
     ],
     [
      "⬅️ 💻 Ordinateurs portables"
     ],
     [
      "✅ Envoyer la commande"
     ],
     [
      "🏠 Menu"
     ]
    ]
   }
  ]
 },
 "snack": {
  "en": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا بـدو سناك 🍔\nبرغر، بيتزا، هوت دوغ وساندويشات — اطلب من هون، توصيل أو استلام.\nاختار من تحت، أو اكتب طلبك متل ما بتحكي: «٢ تشيز برغر واحد بلا بصل».\n\nWelcome to Doe Snack 🍔\nBurgers, pizza, hot dogs and sandwiches — order here, for delivery or pickup.\nChoose below, or just type your order: \"2 cheeseburgers, one without onions\".",
    "keys": [
     [
      "🌐 اللغة · Language · Langue"
     ],
     [
      "🍔 اطلب",
      "🔥 العروض"
     ],
     [
      "📦 طلباتي",
      "❓ أسئلة"
     ],
     [
      "📞 اتصلوا فيي",
      "❓ مساعدة"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇬🇧 English"
   },
   {
    "bot": "✅ Done — we'll carry on in English.\nHow can I help? Choose:",
    "keys": [
     [
      "🍔 Order",
      "🔥 Offers"
     ],
     [
      "📦 My orders",
      "❓ Questions"
     ],
     [
      "📞 Call me",
      "🌐 Language"
     ],
     [
      "❓ Help"
     ]
    ]
   },
   {
    "tap": "🍔 Order"
   },
   {
    "bot": "What would you like? Choose a section — or type your order.",
    "keys": [
     [
      "🍔 Burgers",
      "🍕 Pizza"
     ],
     [
      "🌭 Hot dogs",
      "🥪 Sandwiches"
     ],
     [
      "🍗 Crispy & nuggets"
     ],
     [
      "🍟 Sides",
      "🥗 Salads"
     ],
     [
      "🍽 Meals & boxes",
      "🧒 Kids"
     ],
     [
      "🥤 Drinks",
      "🍰 Desserts"
     ],
     [
      "🔎 Help me choose",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🍔 Burgers"
   },
   {
    "bot": "🍔 Burgers\n1. Classic burger — $6.00 ⭐🍽\n2. Cheeseburger — $7.00 ⭐🍽\n3. Double burger — $9.50 🍽\n4. Chicken burger — $7.00 🍽\n5. Mushroom & Swiss — $8.50 🍽\n6. Spicy burger — $7.50 🌶🍽\n7. Veggie burger — $6.50 🌱🍽\n🌶 spicy · 🌱 vegetarian · ⭐ popular · 🍽 can be a meal · ⛔ sold out today",
    "keys": [
     [
      "1. Classic burger"
     ],
     [
      "2. Cheeseburger",
      "3. Double burger"
     ],
     [
      "4. Chicken burger"
     ],
     [
      "5. Mushroom & Swiss"
     ],
     [
      "6. Spicy burger",
      "7. Veggie burger"
     ],
     [
      "📋 Food menu",
      "🧾 My order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "2. Cheeseburger"
   },
   {
    "photo": "assets/sn-burger.svg",
    "caption": "Cheeseburger — $7.00\nBeef patty, cheddar, lettuce, tomato, onions, pickles, burger sauce.\n⚠️ Contains: gluten, sesame, dairy, egg, mustard\n🍽 As a meal: +$3.50 (fries + a drink of your choice)\n\n1/3 — Sauce (choose one, or ➡️ to skip)\n1 × $7.00 = $7.00",
    "keys": [
     [
      "✅ Add · $7.00",
      "Garlic (toum)"
     ],
     [
      "Ketchup",
      "Mayo"
     ],
     [
      "BBQ",
      "Spicy sauce"
     ],
     [
      "➡️ Next"
     ],
     [
      "🍽 Make it a meal +$3.50"
     ],
     [
      "⬅️ 🍔 Burgers",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "BBQ"
   },
   {
    "bot": "2/3 — Extras (any — tap again to take one off)\n✓ BBQ\n1 × $7.00 = $7.00",
    "keys": [
     [
      "✅ Add · $7.00"
     ],
     [
      "Extra cheese +$1.00"
     ],
     [
      "Extra patty +$3.00"
     ],
     [
      "Egg +$1.00",
      "Jalapeños +$0.50"
     ],
     [
      "Mushrooms +$1.00",
      "➡️ Next"
     ],
     [
      "🍽 Make it a meal +$3.50"
     ],
     [
      "⬅️ Back",
      "⬅️ 🍔 Burgers"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Extra cheese +$1.00"
   },
   {
    "bot": "2/3 — Extras (any — tap again to take one off)\n✓ BBQ · Extra cheese\n1 × $8.00 = $8.00",
    "keys": [
     [
      "✅ Add · $8.00"
     ],
     [
      "✓ Extra cheese +$1.00"
     ],
     [
      "Extra patty +$3.00"
     ],
     [
      "Egg +$1.00",
      "Jalapeños +$0.50"
     ],
     [
      "Mushrooms +$1.00",
      "➡️ Next"
     ],
     [
      "🍽 Make it a meal +$3.50"
     ],
     [
      "⬅️ Back",
      "⬅️ 🍔 Burgers"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "➡️ Next"
   },
   {
    "bot": "3/3 — Leave out (tap what to leave out)\n✓ BBQ · Extra cheese\n1 × $8.00 = $8.00",
    "keys": [
     [
      "✅ Add · $8.00",
      "No onions"
     ],
     [
      "No pickles",
      "No tomato"
     ],
     [
      "No lettuce",
      "No sauce"
     ],
     [
      "➡️ Next"
     ],
     [
      "🍽 Make it a meal +$3.50"
     ],
     [
      "⬅️ Back",
      "⬅️ 🍔 Burgers"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "No onions"
   },
   {
    "bot": "3/3 — Leave out (tap what to leave out)\n✓ BBQ · Extra cheese · No onions\n1 × $8.00 = $8.00",
    "keys": [
     [
      "✅ Add · $8.00",
      "✓ No onions"
     ],
     [
      "No pickles",
      "No tomato"
     ],
     [
      "No lettuce",
      "No sauce"
     ],
     [
      "➡️ Next"
     ],
     [
      "🍽 Make it a meal +$3.50"
     ],
     [
      "⬅️ Back",
      "⬅️ 🍔 Burgers"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🍽 Make it a meal +$3.50"
   },
   {
    "bot": "4/4 — Meal drink (choose one)\n✓ BBQ · Extra cheese · No onions · 🍽 meal (fries + …)\n1 × $11.50 = $11.50",
    "keys": [
     [
      "Cola",
      "Orange soda"
     ],
     [
      "Lemon-lime",
      "Water"
     ],
     [
      "Ayran +$0.50",
      "➡️ Next"
     ],
     [
      "✖ Not a meal",
      "⬅️ Back"
     ],
     [
      "⬅️ 🍔 Burgers",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Cola"
   },
   {
    "bot": "Your Cheeseburger, ready to add:\n✓ BBQ · Extra cheese · No onions · 🍽 meal (fries + Cola)\n1 × $11.50 = $11.50",
    "keys": [
     [
      "✅ Add · $11.50",
      "✖ Not a meal"
     ],
     [
      "➕ 1"
     ],
     [
      "📝 Note for the kitchen"
     ],
     [
      "⬅️ Back",
      "⬅️ 🍔 Burgers"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "➕ 1"
   },
   {
    "bot": "Your Cheeseburger, ready to add:\n✓ BBQ · Extra cheese · No onions · 🍽 meal (fries + Cola)\n2 × $11.50 = $23.00",
    "keys": [
     [
      "✅ Add · $23.00",
      "✖ Not a meal"
     ],
     [
      "➖ 1",
      "➕ 1"
     ],
     [
      "📝 Note for the kitchen"
     ],
     [
      "⬅️ Back",
      "⬅️ 🍔 Burgers"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Add · $23.00"
   },
   {
    "bot": "✅ Added: 2 × Cheeseburger (BBQ · Extra cheese · No onions · 🍽 meal (fries + Cola)) — $23.00\n🔥 Tuesday: second burger half price: −$4.00\n🧾 Basket so far: $19.00",
    "keys": [
     [
      "✏️ Cheeseburger",
      "✅ Send the order"
     ],
     [
      "🧾 My order",
      "⬅️ 🍔 Burgers"
     ],
     [
      "📋 Food menu",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Send the order"
   },
   {
    "bot": "When would you like it?",
    "keys": [
     [
      "⚡ As soon as possible"
     ],
     [
      "🕒 19:30",
      "🕒 19:45"
     ],
     [
      "🕒 20:00",
      "🕒 20:15"
     ],
     [
      "🕒 20:30",
      "🕒 20:45"
     ],
     [
      "🕒 21:00",
      "🕒 21:15"
     ],
     [
      "⏩ Later times",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "⚡ As soon as possible"
   },
   {
    "bot": "🛵 Delivery, or 🛍 pickup at the restaurant (ready in 15–20 min)?",
    "keys": [
     [
      "🛵 Delivery",
      "🛍 Pickup"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🛵 Delivery"
   },
   {
    "bot": "Which area? We deliver to:\n• Hamra: delivery $1.00 · minimum $10.00 · 25–35 min\n• Ras Beirut: delivery $1.50 · minimum $10.00 · 30–40 min\n• Verdun: delivery $2.00 · minimum $10.00 · 35–45 min\n• Achrafieh: delivery $3.00 · minimum $10.00 · 40–55 min\n• Mar Mikhael: delivery $3.00 · minimum $10.00 · 40–55 min",
    "keys": [
     [
      "🗺 Hamra",
      "🗺 Ras Beirut"
     ],
     [
      "🗺 Verdun",
      "🗺 Achrafieh"
     ],
     [
      "🗺 Mar Mikhael",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🗺 Hamra"
   },
   {
    "bot": "📍 Your address in Hamra: building, floor and a landmark (\"Doe building, 3rd floor, next to the pharmacy\") — or send your location pin (📎 → Location).",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Doe building, 3rd floor, next to the pharmacy"
   },
   {
    "bot": "Your name, for the order?",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Karim"
   },
   {
    "bot": "Your phone number, so the driver or the kitchen can reach you — tap the button, or type it:",
    "keys": [
     [
      "📱 Share my number"
     ]
    ]
   },
   {
    "tap": "📱 Share my number"
   },
   {
    "bot": "How will you pay? (At the door or at the counter — never in the chat.)",
    "keys": [
     [
      "💵 Cash",
      "💳 Card",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "💵 Cash"
   },
   {
    "bot": "Your total is $20.00. Need change? You'll pay with:",
    "keys": [
     [
      "👌 No change needed"
     ],
     [
      "💵 $50",
      "💵 $100",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "👌 No change needed"
   },
   {
    "bot": "🧾 Your order\n1. 2 × Cheeseburger — $23.00\n     BBQ · Extra cheese · No onions · 🍽 meal (fries + Cola)\n──────────\n🔥 Tuesday: second burger half price: −$4.00\nFood: $19.00\nDelivery: $1.00\nTotal: $20.00\n\n⏱ As soon as possible\n🛵 Delivery to Hamra — Doe building, 3rd floor, next to the pharmacy (25–35 min)\n👤 Karim · 📞 +96170000000\n💵 Cash, no change needed\n\nSend it to the kitchen?",
    "keys": [
     [
      "✅ Yes, send it",
      "no"
     ],
     [
      "✏️ When"
     ],
     [
      "✏️ Delivery / pickup"
     ],
     [
      "✏️ Address",
      "✏️ Name"
     ],
     [
      "✏️ Phone",
      "✏️ Payment"
     ],
     [
      "✏️ Change the order"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Yes, send it"
   },
   {
    "bot": "✅ Order 4J57S8 is with the kitchen (as soon as possible). You'll get a message here as soon as they accept it, with the time.",
    "keys": [
     [
      "📦 My orders",
      "📋 Food menu"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🧾 طلب جديد 4J57S8\n🛵 توصيل\n⚡ بأسرع وقت\n\n1. 2 × تشيز برغر\n   ▸ باربكيو\n   ▸ جبنة زيادة\n   ▸ بلا بصل\n   ▸ 🍽 وجبة (بطاطا + كولا)\n\n🔥 عرض: −$4.00\nالأكل $19.00 · التوصيل $1.00 · المجموع $20.00\n📍 الحمرا — Doe building, 3rd floor, next to the pharmacy\n👤 Karim · 📞 +96170000000 (مأكّد من تلغرام)\n💵 كاش، بلا فراطة",
    "keys": [
     [
      "✅ 15 د",
      "✅ 30 د",
      "✅ 45 د"
     ],
     [
      "✅ 60 د",
      "❌ رفض"
     ]
    ]
   },
   {
    "teamTap": "✅ 30 د"
   },
   {
    "teamBot": "✓ 4J57S8: ✅ انقبل — حوالي الساعة 19:30 — انقال للزبون.\n\n🧾 الطلب 4J57S8\n🛵 توصيل\n⚡ بأسرع وقت\n\n1. 2 × تشيز برغر\n   ▸ باربكيو\n   ▸ جبنة زيادة\n   ▸ بلا بصل\n   ▸ 🍽 وجبة (بطاطا + كولا)\n\n🔥 عرض: −$4.00\nالأكل $19.00 · التوصيل $1.00 · المجموع $20.00\n📍 الحمرا — Doe building, 3rd floor, next to the pharmacy\n👤 Karim · 📞 +96170000000 (مأكّد من تلغرام)\n💵 كاش، بلا فراطة",
    "keys": [
     [
      "👨‍🍳 عم يتحضّر",
      "🛵 طلع للتوصيل"
     ],
     [
      "❌ إلغاء"
     ]
    ]
   },
   {
    "bot": "✅ The kitchen accepted 4J57S8 — it should reach you in about 30 min (around 19:30)."
   },
   {
    "teamTap": "👨‍🍳 عم يتحضّر"
   },
   {
    "teamBot": "✓ 4J57S8: 👨‍🍳 عم يتحضّر — حوالي الساعة 19:30 — انقال للزبون.\n\n🧾 الطلب 4J57S8\n🛵 توصيل\n⚡ بأسرع وقت\n\n1. 2 × تشيز برغر\n   ▸ باربكيو\n   ▸ جبنة زيادة\n   ▸ بلا بصل\n   ▸ 🍽 وجبة (بطاطا + كولا)\n\n🔥 عرض: −$4.00\nالأكل $19.00 · التوصيل $1.00 · المجموع $20.00\n📍 الحمرا — Doe building, 3rd floor, next to the pharmacy\n👤 Karim · 📞 +96170000000 (مأكّد من تلغرام)\n💵 كاش، بلا فراطة",
    "keys": [
     [
      "🛵 طلع للتوصيل",
      "❌ إلغاء"
     ]
    ]
   },
   {
    "bot": "👨‍🍳 Your order 4J57S8 is being prepared."
   },
   {
    "teamTap": "🛵 طلع للتوصيل"
   },
   {
    "teamBot": "✓ 4J57S8: 🛵 عالطريق — حوالي الساعة 19:30 — انقال للزبون.\n\n🧾 الطلب 4J57S8\n🛵 توصيل\n⚡ بأسرع وقت\n\n1. 2 × تشيز برغر\n   ▸ باربكيو\n   ▸ جبنة زيادة\n   ▸ بلا بصل\n   ▸ 🍽 وجبة (بطاطا + كولا)\n\n🔥 عرض: −$4.00\nالأكل $19.00 · التوصيل $1.00 · المجموع $20.00\n📍 الحمرا — Doe building, 3rd floor, next to the pharmacy\n👤 Karim · 📞 +96170000000 (مأكّد من تلغرام)\n💵 كاش، بلا فراطة",
    "keys": [
     [
      "✅ وصل"
     ]
    ]
   },
   {
    "bot": "🛵 4J57S8 is on its way!"
   }
  ],
  "ar": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا بـدو سناك 🍔\nبرغر، بيتزا، هوت دوغ وساندويشات — اطلب من هون، توصيل أو استلام.\nاختار من تحت، أو اكتب طلبك متل ما بتحكي: «٢ تشيز برغر واحد بلا بصل».\n\nWelcome to Doe Snack 🍔\nBurgers, pizza, hot dogs and sandwiches — order here, for delivery or pickup.\nChoose below, or just type your order: \"2 cheeseburgers, one without onions\".",
    "keys": [
     [
      "🌐 اللغة · Language · Langue"
     ],
     [
      "🍔 اطلب",
      "🔥 العروض"
     ],
     [
      "📦 طلباتي",
      "❓ أسئلة"
     ],
     [
      "📞 اتصلوا فيي",
      "❓ مساعدة"
     ]
    ]
   },
   {
    "me": "بدي ٢ تشيز برغر واحد بلا بصل وبطاطا كبيرة"
   },
   {
    "bot": "✅ انضاف: 1 × تشيز برغر — $7.00\n✅ انضاف: 1 × تشيز برغر (بلا بصل) — $7.00\n✅ انضاف: 1 × بطاطا مقلية (كبير) — $3.50\n🧾 السلّة لهلق: $17.50",
    "keys": [
     [
      "✏️ غيّر آخر واحد",
      "✅ ابعت الطلبية"
     ],
     [
      "🧾 طلبيتي",
      "📋 المنيو"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "✅ ابعت الطلبية"
   },
   {
    "bot": "مسكّرين هلق — منفتح اليوم الساعة 12:00.\nاطلب هلق لبعدين — اختار الوقت:",
    "keys": [
     [
      "🕒 12:15",
      "🕒 12:30"
     ],
     [
      "🕒 12:45",
      "🕒 13:00"
     ],
     [
      "🕒 13:15",
      "🕒 13:30"
     ],
     [
      "🕒 13:45",
      "🕒 14:00"
     ],
     [
      "⏩ أوقات بعدين",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🕒 12:30"
   },
   {
    "bot": "🛵 توصيل، أو 🛍 بتستلمو من المطعم (بيجهز بـ ١٥–٢٠ دقيقة)؟",
    "keys": [
     [
      "🛵 توصيل",
      "🛍 استلام"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🛍 استلام"
   },
   {
    "bot": "شو اسمك للطلب؟",
    "keys": [
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "me": "رامي"
   },
   {
    "bot": "رقم تلفونك، ليقدر المطبخ يحكيك إذا لزم — دوس الزر، أو اكتبو:",
    "keys": [
     [
      "📱 ابعت رقمي"
     ]
    ]
   },
   {
    "tap": "📱 ابعت رقمي"
   },
   {
    "bot": "كيف بدك تدفع؟ (عالباب أو بالمطعم — أبداً مش بالشات.)",
    "keys": [
     [
      "💵 كاش",
      "💳 بطاقة"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "💵 كاش"
   },
   {
    "bot": "المجموع $17.50. بدك فراطة؟ رح تدفع بـ:",
    "keys": [
     [
      "👌 ما بدي فراطة",
      "💵 $20"
     ],
     [
      "💵 $50",
      "💵 $100"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "👌 ما بدي فراطة"
   },
   {
    "bot": "🧾 طلبك\n1. 1 × تشيز برغر — $7.00\n2. 1 × تشيز برغر — $7.00\n     بلا بصل\n3. 1 × بطاطا مقلية — $3.50\n     كبير\n──────────\nالأكل: $17.50\nالمجموع: $17.50\n\n⏱ للساعة 12:30\n🛍 استلام من المطعم — بيجهز بـ ١٥–٢٠ دقيقة\n👤 رامي · 📞 +96170000000\n💵 كاش، ما بدك فراطة\n\nنبعتو عالمطبخ؟",
    "keys": [
     [
      "✅ إيه، ابعتها",
      "لا"
     ],
     [
      "✏️ الوقت"
     ],
     [
      "✏️ توصيل / استلام"
     ],
     [
      "✏️ الاسم",
      "✏️ الرقم"
     ],
     [
      "✏️ الدفع",
      "✏️ عدّل الطلبية"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "✅ إيه، ابعتها"
   },
   {
    "bot": "✅ الطلب YUZ6TN راح عالمطبخ (للساعة 12:30). رح توصلك رسالة هون أول ما يقبلوه، مع الوقت.",
    "keys": [
     [
      "📦 طلباتي",
      "📋 المنيو"
     ],
     [
      "🏠 القائمة"
     ]
    ]
   },
   {
    "alert": "🧾 طلب جديد YUZ6TN\n🛍 استلام من المطعم\n⏱ للساعة 12:30\n\n1. 1 × تشيز برغر\n2. 1 × تشيز برغر\n   ▸ بلا بصل\n3. 1 × بطاطا مقلية\n   ▸ كبير\n\nالأكل $17.50 · التوصيل $0.00 · المجموع $17.50\n👤 رامي · 📞 +96170000000 (مأكّد من تلغرام)\n💵 كاش، بلا فراطة",
    "keys": [
     [
      "✅ قبول للساعة 12:30"
     ],
     [
      "❌ رفض"
     ]
    ]
   },
   {
    "teamTap": "✅ قبول للساعة 12:30"
   },
   {
    "teamBot": "✓ YUZ6TN: ✅ انقبل — حوالي الساعة 12:30 — انقال للزبون.\n\n🧾 الطلب YUZ6TN\n🛍 استلام من المطعم\n⏱ للساعة 12:30\n\n1. 1 × تشيز برغر\n2. 1 × تشيز برغر\n   ▸ بلا بصل\n3. 1 × بطاطا مقلية\n   ▸ كبير\n\nالأكل $17.50 · التوصيل $0.00 · المجموع $17.50\n👤 رامي · 📞 +96170000000 (مأكّد من تلغرام)\n💵 كاش، بلا فراطة",
    "keys": [
     [
      "👨‍🍳 عم يتحضّر",
      "🛍 جاهز للاستلام"
     ],
     [
      "❌ إلغاء"
     ]
    ]
   },
   {
    "bot": "✅ المطبخ قبل YUZ6TN للساعة 12:30."
   },
   {
    "teamTap": "👨‍🍳 عم يتحضّر"
   },
   {
    "teamBot": "✓ YUZ6TN: 👨‍🍳 عم يتحضّر — حوالي الساعة 12:30 — انقال للزبون.\n\n🧾 الطلب YUZ6TN\n🛍 استلام من المطعم\n⏱ للساعة 12:30\n\n1. 1 × تشيز برغر\n2. 1 × تشيز برغر\n   ▸ بلا بصل\n3. 1 × بطاطا مقلية\n   ▸ كبير\n\nالأكل $17.50 · التوصيل $0.00 · المجموع $17.50\n👤 رامي · 📞 +96170000000 (مأكّد من تلغرام)\n💵 كاش، بلا فراطة",
    "keys": [
     [
      "🛍 جاهز للاستلام",
      "❌ إلغاء"
     ]
    ]
   },
   {
    "bot": "👨‍🍳 طلبك YUZ6TN عم يتحضّر."
   },
   {
    "teamTap": "🛍 جاهز للاستلام"
   },
   {
    "teamBot": "✓ YUZ6TN: 🛍 جاهز للاستلام — انقال للزبون.\n\n🧾 الطلب YUZ6TN\n🛍 استلام من المطعم\n⏱ للساعة 12:30\n\n1. 1 × تشيز برغر\n2. 1 × تشيز برغر\n   ▸ بلا بصل\n3. 1 × بطاطا مقلية\n   ▸ كبير\n\nالأكل $17.50 · التوصيل $0.00 · المجموع $17.50\n👤 رامي · 📞 +96170000000 (مأكّد من تلغرام)\n💵 كاش، بلا فراطة",
    "keys": [
     [
      "✅ انستلم"
     ]
    ]
   },
   {
    "bot": "🛍 YUZ6TN جاهز — تفضّل استلمو. لأي سؤال: +961 1 000 000."
   }
  ],
  "fr": [
   {
    "me": "/start"
   },
   {
    "bot": "أهلا وسهلا بـدو سناك 🍔\nبرغر، بيتزا، هوت دوغ وساندويشات — اطلب من هون، توصيل أو استلام.\nاختار من تحت، أو اكتب طلبك متل ما بتحكي: «٢ تشيز برغر واحد بلا بصل».\n\nWelcome to Doe Snack 🍔\nBurgers, pizza, hot dogs and sandwiches — order here, for delivery or pickup.\nChoose below, or just type your order: \"2 cheeseburgers, one without onions\".",
    "keys": [
     [
      "🌐 اللغة · Language · Langue"
     ],
     [
      "🍔 اطلب",
      "🔥 العروض"
     ],
     [
      "📦 طلباتي",
      "❓ أسئلة"
     ],
     [
      "📞 اتصلوا فيي",
      "❓ مساعدة"
     ]
    ]
   },
   {
    "tap": "🌐 اللغة · Language · Langue"
   },
   {
    "bot": "🌐 اختار اللغة · Choose your language · Choisissez la langue",
    "keys": [
     [
      "🇱🇧 عربي",
      "🇸🇦 عربي خليجي"
     ],
     [
      "🔤 Arabizi",
      "🇬🇧 English"
     ],
     [
      "🇫🇷 Français",
      "🏠 القائمة"
     ]
    ]
   },
   {
    "tap": "🇫🇷 Français"
   },
   {
    "bot": "✅ C'est fait — nous continuons en français.\nComment puis-je vous aider ? Choisissez :",
    "keys": [
     [
      "🍔 Commander",
      "🔥 Offres"
     ],
     [
      "📦 Mes commandes",
      "❓ Questions"
     ],
     [
      "📞 Rappelez-moi",
      "🌐 Langue"
     ],
     [
      "❓ Aide"
     ]
    ]
   },
   {
    "me": "c'est halal ?"
   },
   {
    "bot": "Oui — toute notre viande et notre poulet sont halal, et il n'y a pas de porc à la carte.",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🏠 Menu"
   },
   {
    "bot": "Comment puis-je vous aider ? Choisissez :",
    "keys": [
     [
      "🍔 Commander",
      "🔥 Offres"
     ],
     [
      "📦 Mes commandes",
      "❓ Questions"
     ],
     [
      "📞 Rappelez-moi",
      "🌐 Langue"
     ],
     [
      "❓ Aide"
     ]
    ]
   },
   {
    "tap": "🍔 Commander"
   },
   {
    "bot": "Qu'est-ce qui vous ferait plaisir ? Choisissez un rayon — ou écrivez votre commande.",
    "keys": [
     [
      "🍔 Burgers",
      "🍕 Pizzas"
     ],
     [
      "🌭 Hot-dogs",
      "🥪 Sandwichs"
     ],
     [
      "🍗 Croustillant et nuggets"
     ],
     [
      "🍟 Accompagnements"
     ],
     [
      "🥗 Salades",
      "🍽 Menus et boxes"
     ],
     [
      "🧒 Enfants",
      "🥤 Boissons"
     ],
     [
      "🍰 Desserts"
     ],
     [
      "🔎 Aidez-moi à choisir"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🍕 Pizzas"
   },
   {
    "bot": "🍕 Pizzas\n1. Pizza margherita — dès $8.00 🌱⭐\n2. Pizza pepperoni — dès $9.50 ⭐\n3. Pizza végétarienne — dès $9.00 🌱\n4. Pizza poulet barbecue — dès $10.00\n5. Pizza quatre fromages — dès $10.00 🌱\n🌶 épicé · 🌱 végétarien · ⭐ populaire · 🍽 en menu possible · ⛔ épuisé aujourd'hui",
    "keys": [
     [
      "1. Pizza margherita"
     ],
     [
      "2. Pizza pepperoni"
     ],
     [
      "3. Pizza végétarienne"
     ],
     [
      "4. Pizza poulet barbecue"
     ],
     [
      "5. Pizza quatre fromages"
     ],
     [
      "📋 La carte",
      "🧾 Ma commande"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "1. Pizza margherita"
   },
   {
    "photo": "assets/sn-pizza.svg",
    "caption": "Pizza margherita — dès $8.00\nSauce tomate, mozzarella, basilic.\n🌱 Végétarien\n⚠️ Contient : gluten, lait\n\n1/3 — Taille (choisissez-en un)\n1 × $8.00 = $8.00",
    "keys": [
     [
      "Petite (S)"
     ],
     [
      "Moyenne (M) +$3.00"
     ],
     [
      "Grande (L) +$6.00"
     ],
     [
      "⬅️ 🍕 Pizzas",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Grande (L) +$6.00"
   },
   {
    "bot": "2/3 — Pâte (choisissez-en un)\n✓ Grande (L)\n1 × $14.00 = $14.00",
    "keys": [
     [
      "Pâte classique",
      "Pâte fine"
     ],
     [
      "⬅️ Retour",
      "⬅️ 🍕 Pizzas"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Pâte fine"
   },
   {
    "bot": "3/3 — Garnitures en plus (autant que vous voulez — touchez à nouveau pour retirer)\n✓ Grande (L) · Pâte fine\n1 × $14.00 = $14.00",
    "keys": [
     [
      "✅ Ajouter · $14.00"
     ],
     [
      "Fromage en plus +$1.50"
     ],
     [
      "Champignons +$1.00"
     ],
     [
      "Olives +$1.00",
      "Poivrons +$1.00"
     ],
     [
      "Maïs +$1.00",
      "Jalapeños +$1.00"
     ],
     [
      "Pepperoni bœuf +$2.00"
     ],
     [
      "➡️ Suivant",
      "⬅️ Retour"
     ],
     [
      "⬅️ 🍕 Pizzas",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "Olives +$1.00"
   },
   {
    "bot": "3/3 — Garnitures en plus (autant que vous voulez — touchez à nouveau pour retirer)\n✓ Grande (L) · Pâte fine · Olives\n1 × $15.00 = $15.00",
    "keys": [
     [
      "✅ Ajouter · $15.00"
     ],
     [
      "Fromage en plus +$1.50"
     ],
     [
      "Champignons +$1.00"
     ],
     [
      "✓ Olives +$1.00",
      "Poivrons +$1.00"
     ],
     [
      "Maïs +$1.00",
      "Jalapeños +$1.00"
     ],
     [
      "Pepperoni bœuf +$2.00"
     ],
     [
      "➡️ Suivant",
      "⬅️ Retour"
     ],
     [
      "⬅️ 🍕 Pizzas",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Ajouter · $15.00"
   },
   {
    "bot": "✅ Ajouté : 1 × Pizza margherita (Grande (L) · Pâte fine · Olives) — $15.00\n🧾 Panier pour l'instant : $15.00",
    "keys": [
     [
      "✏️ Pizza margherita"
     ],
     [
      "✅ Envoyer la commande"
     ],
     [
      "🧾 Ma commande",
      "⬅️ 🍕 Pizzas"
     ],
     [
      "📋 La carte",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Envoyer la commande"
   },
   {
    "bot": "Pour quand le voulez-vous ?",
    "keys": [
     [
      "⚡ Dès que possible"
     ],
     [
      "🕒 19:30",
      "🕒 19:45"
     ],
     [
      "🕒 20:00",
      "🕒 20:15"
     ],
     [
      "🕒 20:30",
      "🕒 20:45"
     ],
     [
      "🕒 21:00",
      "🕒 21:15"
     ],
     [
      "⏩ Plus tard",
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🕒 20:00"
   },
   {
    "bot": "🛵 Livraison, ou 🛍 à emporter au restaurant (prêt en 15–20 min) ?",
    "keys": [
     [
      "🛵 Livraison",
      "🛍 À emporter"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "🛍 À emporter"
   },
   {
    "bot": "Votre nom, pour la commande ?",
    "keys": [
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "Claire"
   },
   {
    "bot": "Votre numéro, pour que la cuisine puisse vous joindre au besoin — touchez le bouton, ou écrivez-le :",
    "keys": [
     [
      "📱 Partager mon numéro"
     ]
    ]
   },
   {
    "tap": "📱 Partager mon numéro"
   },
   {
    "bot": "Comment payerez-vous ? (À la porte ou au comptoir — jamais dans la conversation.)",
    "keys": [
     [
      "💵 Espèces",
      "💳 Carte"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "💳 Carte"
   },
   {
    "bot": "🧾 Votre commande\n1. 1 × Pizza margherita — $15.00\n     Grande (L) · Pâte fine · Olives\n──────────\nRepas : $15.00\nTotal : $15.00\n\n⏱ Pour 20:00\n🛍 À emporter au restaurant — prêt en 15–20 min\n👤 Claire · 📞 +96170000000\n💳 Carte à la livraison ou au comptoir\n\nOn l'envoie en cuisine ?",
    "keys": [
     [
      "✅ Oui, envoyez",
      "non"
     ],
     [
      "✏️ Quand"
     ],
     [
      "✏️ Livraison / à emporter"
     ],
     [
      "✏️ Nom",
      "✏️ Téléphone"
     ],
     [
      "✏️ Paiement"
     ],
     [
      "✏️ Modifier la commande"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "✅ Oui, envoyez"
   },
   {
    "bot": "✅ La commande S8AK24 est en cuisine (pour 20:00). Vous recevrez un message ici dès qu'elle est acceptée, avec l'heure.",
    "keys": [
     [
      "📦 Mes commandes",
      "📋 La carte"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "alert": "🧾 طلب جديد S8AK24\n🛍 استلام من المطعم\n⏱ للساعة 20:00\n\n1. 1 × بيتزا مارغريتا\n   ▸ كبيرة (L)\n   ▸ عجينة رقيقة\n   ▸ زيتون\n\nالأكل $15.00 · التوصيل $0.00 · المجموع $15.00\n👤 Claire · 📞 +96170000000 (مأكّد من تلغرام)\n💳 بطاقة",
    "keys": [
     [
      "✅ قبول للساعة 20:00"
     ],
     [
      "❌ رفض"
     ]
    ]
   },
   {
    "teamTap": "✅ قبول للساعة 20:00"
   },
   {
    "teamBot": "✓ S8AK24: ✅ انقبل — حوالي الساعة 20:00 — انقال للزبون.\n\n🧾 الطلب S8AK24\n🛍 استلام من المطعم\n⏱ للساعة 20:00\n\n1. 1 × بيتزا مارغريتا\n   ▸ كبيرة (L)\n   ▸ عجينة رقيقة\n   ▸ زيتون\n\nالأكل $15.00 · التوصيل $0.00 · المجموع $15.00\n👤 Claire · 📞 +96170000000 (مأكّد من تلغرام)\n💳 بطاقة",
    "keys": [
     [
      "👨‍🍳 عم يتحضّر",
      "🛍 جاهز للاستلام"
     ],
     [
      "❌ إلغاء"
     ]
    ]
   },
   {
    "bot": "✅ La cuisine a accepté S8AK24 pour 20:00."
   },
   {
    "teamTap": "👨‍🍳 عم يتحضّر"
   },
   {
    "teamBot": "✓ S8AK24: 👨‍🍳 عم يتحضّر — حوالي الساعة 20:00 — انقال للزبون.\n\n🧾 الطلب S8AK24\n🛍 استلام من المطعم\n⏱ للساعة 20:00\n\n1. 1 × بيتزا مارغريتا\n   ▸ كبيرة (L)\n   ▸ عجينة رقيقة\n   ▸ زيتون\n\nالأكل $15.00 · التوصيل $0.00 · المجموع $15.00\n👤 Claire · 📞 +96170000000 (مأكّد من تلغرام)\n💳 بطاقة",
    "keys": [
     [
      "🛍 جاهز للاستلام",
      "❌ إلغاء"
     ]
    ]
   },
   {
    "bot": "👨‍🍳 Votre commande S8AK24 est en préparation."
   },
   {
    "teamTap": "🛍 جاهز للاستلام"
   },
   {
    "teamBot": "✓ S8AK24: 🛍 جاهز للاستلام — انقال للزبون.\n\n🧾 الطلب S8AK24\n🛍 استلام من المطعم\n⏱ للساعة 20:00\n\n1. 1 × بيتزا مارغريتا\n   ▸ كبيرة (L)\n   ▸ عجينة رقيقة\n   ▸ زيتون\n\nالأكل $15.00 · التوصيل $0.00 · المجموع $15.00\n👤 Claire · 📞 +96170000000 (مأكّد من تلغرام)\n💳 بطاقة",
    "keys": [
     [
      "✅ انستلم"
     ]
    ]
   },
   {
    "bot": "🛍 S8AK24 est prête — venez la chercher. Questions : +961 1 000 000."
   }
  ]
 }
};
