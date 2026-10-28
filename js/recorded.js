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
    "me": "I would like a cleaning appointment"
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
    "me": "بدي أجّل موعدي"
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
    "me": "Je voudrais un rendez-vous pour un détartrage"
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
    "me": "Je voudrais déplacer mon rendez-vous"
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
    "me": "Je veux annuler mon rendez-vous"
   },
   {
    "bot": "Vous avez un rendez-vous : demain 11:00 (994AXK). L'annuler ? Répondez « oui », ou envoyez-moi la référence.",
    "keys": [
     [
      "✅ Oui, l'annuler"
     ],
     [
      "↩️ Non, le garder"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "me": "oui"
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
    "me": "I'd like a men's haircut tomorrow"
   },
   {
    "bot": "Free times for Men's haircut tomorrow 👇\nTap the one that suits you.",
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
      "12:30",
      "12:45"
     ],
     [
      "13:00",
      "13:15",
      "13:30"
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
    "tap": "10:00"
   },
   {
    "bot": "Good, tomorrow 10:00. Who is the appointment for? Please tell me the name.",
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
    "bot": "Done ✅\n📋 Men's haircut\n👤 Karim Haddad\n🗓️ tomorrow 10:00 (Beirut time)\n👥 With Sami\n🔖 Your reference: 52UVXT\n\nWould you like to leave a note for the salon before your appointment?",
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
    "alert": "🆕 حجز جديد\nقص شعر رجالي لـKarim Haddad\nبكرا 10:00\nمع سامي\nرقم: 52UVXT",
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
   },
   {
    "me": "I got a rash after waxing, what cream should I use?"
   },
   {
    "bot": "I am sorry to hear that. I cannot give medical advice — for a skin reaction or a scalp problem, please ask a pharmacist or a doctor. Would you like me to book you an appointment at the salon?",
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
    "me": "Bonjour, je voudrais une manucure demain"
   },
   {
    "bot": "Créneaux libres pour Manucure demain 👇\nTouchez celui qui vous convient.",
    "keys": [
     [
      "10:00",
      "10:15",
      "11:45"
     ],
     [
      "12:00",
      "12:15",
      "12:30"
     ],
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
    "tap": "11:45"
   },
   {
    "bot": "Très bien, demain 11:45. À quel nom ? Indiquez-moi le nom.",
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
    "bot": "C'est fait ✅\n📋 Manucure\n👤 Claire Haddad\n🗓️ demain 11:45 (heure de Beyrouth)\n👥 Avec Maya\n🔖 Votre référence : GPF24D\n\nVoulez-vous laisser un mot au salon avant votre rendez-vous ?",
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
    "alert": "🆕 حجز جديد\nمانيكير لـClaire Haddad\nبكرا 11:45\nمع مايا\nرقم: GPF24D",
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
    "me": "et une épilation des sourcils demain aussi"
   },
   {
    "bot": "Créneaux libres pour Épilation des sourcils demain 👇\nTouchez celui qui vous convient.",
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
      "⏩ Plus tard",
      "🗓️ Autres jours"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "10:15"
   },
   {
    "bot": "Très bien, demain 10:15. Le rendez-vous est pour Claire Haddad ? Si c'est pour quelqu'un d'autre, dites-moi le nom.",
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
    "bot": "C'est fait ✅\n📋 Épilation des sourcils\n👤 Claire Haddad\n🗓️ demain 10:15 (heure de Beyrouth)\n👥 Avec Lara\n🔖 Votre référence : M9NGT9\n\nVoulez-vous laisser un mot au salon avant votre rendez-vous ?",
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
    "alert": "🆕 حجز جديد\nترتيب حواجب لـClaire Haddad\nبكرا 10:15\nمع لارا\nرقم: M9NGT9",
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
   }
  ]
 },
 "medical": {
  "en": [
   {
    "me": "hello"
   },
   {
    "bot": "How can I help? Pick one below, or just write to me.\n\nIf this is an emergency, call 140 now or go to the nearest emergency room. Do not wait for an appointment, or for a reply here.",
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
    "me": "1"
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
    "me": "عندي وجع راس، شو اخد؟"
   },
   {
    "bot": "سلامتك! ما فيني أعطي نصيحة طبية — الدكتور وحده بيقدر. إذا بدك الدكتور يعرف قبل موعدك، دوس تحت واكتبها كملاحظة. وإذا الحالة طارئة، اتصل على 140 أو روح عأقرب طوارئ.",
    "keys": [
     [
      "📝 ملاحظة للدكتور",
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
    "me": "j'ai de la fièvre, je voudrais un rendez-vous"
   },
   {
    "bot": "Je suis désolée de l'apprendre. Je ne peux pas donner de conseil médical, mais le médecin peut vous recevoir — prenons rendez-vous.\n\nBien sûr ! De quoi avez-vous besoin ? 👇\nTouchez-en un ci-dessous, ou dites-le-moi simplement.",
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
    "me": "1"
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
    "me": "Hello, can I see the catalogue?"
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
    "me": "Bonjour, je voudrais 12 packs d'eau minérale 1,5 L"
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
    "me": "et 10 cartons de jus"
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
    "me": "envoyer la commande"
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
    "me": "Nord"
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
    "me": "oui"
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
    "me": "hello"
   },
   {
    "bot": "Welcome to Doe Electronics 👋\nPhones, laptops, gaming, cameras and accessories — and repairs too.\nChoose what you need, or just write it in your own words.",
    "keys": [
     [
      "🛒 Shop",
      "📦 My orders"
     ],
     [
      "🔧 Repairs",
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
    "me": "samsung phone under 400$ with 6gb ram"
   },
   {
    "bot": "📱 Phones\n🔎 2 match (up to $400 · Samsung · 6 GB RAM or more) — cheapest first:\n1. Samsung Galaxy A36 · 128 GB — $349.00 / piece\n2. Samsung Galaxy A36 · 256 GB — $399.00 / piece",
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
    "me": "send the order"
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
    "bot": "Pick up from the shop (Hamra) — open Monday, Tuesday, Wednesday, Thursday, Friday, Saturday. Which day will you come by?",
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
    "bot": "Here's your order:\n\n1. Samsung Galaxy A36 · 128 GB (⚫ Black)\n     1 × $349.00 = $349.00\n──────────\nGoods: $349.00\nDelivery: free\nTotal: $349.00\n\n🏬 Pick up from the shop (Hamra) — Lina Haddad\n📞 +96170000000\n🗓 Saturday 17/10\n\nSend it? Reply \"yes\" to send.",
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
    "alert": "🆕 طلبية جديدة U9AKYP\n🏬 استلام من المحل\n👤 Lina Haddad\n📞 +96170000000 (مأكّد من تلغرام)\n📍 استلام من المحل (الحمرا) — 🏬\n🚚 السبت 17/10\n\n• A36-01 سامسونج جالكسي A36 · 128 جيغا (⚫ أسود): 1 × $349.00 = $349.00\n\nالبضاعة: $349.00\nالتوصيل: مجاناً\nالمجموع: $349.00",
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
      "❓ أسئلة"
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
    "me": "bonjour"
   },
   {
    "bot": "Bienvenue chez Doe Électronique 👋\nTéléphones, ordinateurs, jeux, caméras et accessoires — et réparations aussi.\nChoisissez, ou écrivez-moi simplement ce qu'il vous faut.",
    "keys": [
     [
      "🛒 Boutique",
      "📦 Mes commandes"
     ],
     [
      "🔧 Réparations",
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
    "me": "je cherche un ordinateur pas cher"
   },
   {
    "bot": "Les Ordinateurs portables les plus abordables :\n1. Acer Aspire 3 · i3 · 8/256 — $349.00 / pièce\n2. HP 250 G10 · i3 · 8/256 — $379.00 / pièce\n3. Lenovo IdeaPad Slim 3 · i3 · 8/256 — $399.00 / pièce\n4. Toshiba Dynabook Satellite Pro C40 · i3 · 8/256 — $449.00 / pièce\n5. Asus Vivobook 15 · i5 · 8/512 — $499.00 / pièce\n6. Dell Inspiron 15 · i5 · 8/512 — $549.00 / pièce",
    "keys": [
     [
      "1. Acer Aspire 3 · i3 · 8/256"
     ],
     [
      "2. HP 250 G10 · i3 · 8/256"
     ],
     [
      "3. Lenovo IdeaPad Slim 3 · i3 · 8/256"
     ],
     [
      "4. Toshiba Dynabook Satellite Pro C40 · i3 · 8/256"
     ],
     [
      "5. Asus Vivobook 15 · i5 · 8/512"
     ],
     [
      "6. Dell Inspiron 15 · i5 · 8/512"
     ],
     [
      "🗂 Le catalogue"
     ],
     [
      "💬 Parler à l'équipe"
     ],
     [
      "🏠 Menu"
     ]
    ]
   },
   {
    "tap": "1. Acer Aspire 3 · i3 · 8/256"
   },
   {
    "photo": "assets/el-laptop.svg",
    "caption": "Acer Aspire 3 · i3 · 8/256\nNeuf, un an de garantie boutique. Configuré sur demande.\n\nVendu au pièce (15.6\" · Core i3-N305 · 8 GB RAM · 256 GB SSD)\nPrix par pièce :\n• à partir de 1 : $349.00\nMaximum par commande : 2\n\n✅ En stock\nCombien ? Touchez un bouton ou écrivez la quantité.",
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
    "bot": "✅ C'est noté — Acer Aspire 3 · i3 · 8/256: 1 × $349.00 = $349.00\nCommande en cours : $349.00\n🧩 Va bien avec :",
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
      "✏️ Acer Aspire 3 · i3 · 8/256"
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
 }
};
