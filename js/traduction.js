document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        fr: {
            welcome: "BATOUTA SERVICES",
            navs:"Services",
            navc:"Contact",
            bt:"Dites-moi en plus",
            sh:"Services",
            shd:"Découvrez ce que nous proposons",
            sh1:"Production Media Et Edition",
            sh1d:"Découvrez notre expertise en production média et édition. De la création de contenus multimédias à l'édition de livres, nous donnons vie à vos projets avec créativité et professionnalisme.",
            sh2:"Agence De Communication",
            sh2d:"Découvrez notre agence de communication. De la stratégie de marque à la gestion des médias sociaux, nous vous aidons à atteindre vos objectifs de communication avec efficacité et impact.",
            sh3:"Journalisme Et Information",
            sh3d:"Découvrez notre expertise en journalisme et information. De l'investigation à la rédaction, nous vous fournissons des informations fiables et pertinentes pour vous tenir informé et engagé.",
            tch:"Contactez-nous",
            tchd:"toujours là pour vous",
            btc:"Envoyer",
            Nom:"Votre nom *",
            email:"Votre Email *",
            tel:"Votre téléphone *",
            msg:"Votre message *"
        },
        ar: {
            welcome:   "خدمات بطوطة",
            navs:"خدمات",
            navc:"إتصل بنا",
            bt:"إكتشف أكثر",
            sh:"خدماتنا",
            shd:"اكتشف ما نقدمه",
            sh1:"الإنتاج الإعلامي والنشر",
            sh1d:"اكتشف خبرتنا في الإنتاج الإعلامي والنشر. من إنشاء المحتويات المتعددة الوسائط إلى نشر الكتب، نحن نجعل مشاريعكم تنبض بالحياة بالإبداع والاحترافية.",
            sh2: "وكالة الاتصالات",
            sh2d: "اكتشف وكالتنا للاتصالات. من استراتيجية العلامة التجارية إلى إدارة وسائل التواصل الاجتماعي، نساعدك على تحقيق أهدافك التواصلية بكفاءة وتأثير.",
            sh3: "الصحافة والمعلومات",
            sh3d: "اكتشف خبرتنا في الصحافة والمعلومات. من التحقيق إلى التحرير، نزودك بمعلومات موثوقة وذات صلة لإبقائك مطلعاً ومشاركاً.",
            tch:"إتصل بنا",
            tchd:"دائمًا هنا من أجلك",
            btc:"إرسال",
            Nom:"الإسم",
            email:"البريد الإلكتروني",
            tel:"رقم الهاتف",
            msg:"الرسالة"
        }
    };

    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    const setLanguage = (language) => {
        document.documentElement.lang = language;
        document.body.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');

        const textElements = document.querySelectorAll('[data-translate]');
        textElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[language][key];
        });

        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            element.setAttribute('placeholder', translations[language][key]);
        });
    };
    // Set initial language based on the default selection
    setLanguage(languageSelector.value);
});