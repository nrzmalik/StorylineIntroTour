function updateHelperCSS()
{
	var helperLayer = document.querySelector('.introjs-helperLayer');
	helperLayer.style.boxShadow = 'rgba(115, 115, 115, 0.8) 0px 0px 1px 2px, rgba(115, 115, 115, 0.5) 0px 0px 0px 5000px';
}
function nrzIntroTour(language) {
  var translations = {
    intro: {
      english: 'Welcome to the course! This is the slide area where the course content will be displayed. Use the navigation buttons to move between slides.',
      arabic: 'مرحبًا بك في الدورة! هذه هي منطقة الشريحة حيث سيتم عرض محتوى الدورة. استخدم أزرار التنقل للتحرك بين الشرائح.',
      urdu: 'کورس میں خوش آمدید! یہاں سلائیڈ کا علاقہ ہے جہاں کورس کی مواد کی عرض ہوگی. اسلائیڈوں کے درمیان حرکت کرنے کے لئے نیویگیشن بٹن استعمال کریں.',
      dutch: 'Welkom bij de cursus! Dit is het schuifgebied waar de cursusinhoud wordt weergegeven. Gebruik de navigatieknoppen om tussen dia\'s te bewegen.',
      spanish: '¡Bienvenido al curso! Esta es el área de diapositivas donde se mostrará el contenido del curso. Utiliza los botones de navegación para moverte entre las diapositivas.',
      french: 'Bienvenue dans le cours ! C\'est ici que sera affiché le contenu du cours. Utilisez les boutons de navigation pour passer d\'une diapositive à l\'autre.',
      mandarin: '欢迎来到课程！这是显示课程内容的幻灯片区域。使用导航按钮在幻灯片之间移动。',
      portuguese: 'Bem-vindo ao curso! Esta é a área do slide onde o conteúdo do curso será exibido. Use os botões de navegação para se mover entre os slides.'
    },
    resources: {
      english: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      arabic: 'هنا يمكنك العثور على موارد مفيدة تتعلق بالدورة. انقر على الروابط للوصول إلى مواد إضافية أو مراجع.',
      urdu: 'یہاں آپ کورس سے متعلق مددگار وسائل تلاش کر سکتے ہیں. اضافی مواد یا حوالے تک رسائی حاصل کرنے کے لئے لنکس پر کلک کریں.',
      dutch: 'Hier vind je nuttige bronnen gerelateerd aan de cursus. Klik op de links om extra materiaal of referenties te openen.',
      spanish: 'Aquí puedes encontrar recursos útiles relacionados con el curso. Haz clic en los enlaces para acceder a materiales adicionales o referencias.',
      french: 'Ici, vous pouvez trouver des ressources utiles liées au cours. Cliquez sur les liens pour accéder à des matériaux supplémentaires ou des références.',
      mandarin: '在这里，您可以找到与课程相关的有用资源。点击链接访问额外的材料或参考资料。',
      portuguese: 'Aqui você pode encontrar recursos úteis relacionados ao curso. Clique nos links para acessar materiais adicionais ou referências.'
    },
    menu: {
      english: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      arabic: 'يقع قائمة الدورة هنا. يوفر نظرة عامة على هيكل الدورة ويتيح لك الانتقال إلى أقسام أو وحدات محددة.',
      urdu: 'کورس کی مینو یہاں موجود ہے. یہ کورس کی ساخت کا ایک جائزہ دیتی ہے اور آپ کو خاص حصوں یا ماڈیولز میں جانے کی اجازت دیتی ہے.',
      dutch: 'Het cursusmenu bevindt zich hier. Het biedt een overzicht van de cursusstructuur en stelt je in staat om naar specifieke secties of modules te springen.',
      spanish: 'El menú del curso se encuentra aquí. Proporciona una visión general de la estructura del curso y te permite saltar a secciones o módulos específicos.',
      french: 'Le menu du cours est situé ici. Il donne un aperçu de la structure du cours et vous permet de passer à des sections ou des modules spécifiques.',
      mandarin: '课程菜单位于此处。它提供了课程结构的概述，并允许您跳转到特定的部分或模块。',
      portuguese: 'O menu do curso está localizado aqui. Ele fornece uma visão geral da estrutura do curso e permite que você salte para seções ou módulos específicos.'
    },
    playback: {
      english: 'These controls allow you to play or pause the slide playback. You can control the pace of the course content based on your preferences.',
      arabic: 'تتيح لك هذه المراقبات تشغيل أو إيقاف تشغيل تشغيل الشرائح. يمكنك التحكم في وتيرة محتوى الدورة بناءً على تفضيلاتك.',
      urdu: 'یہ کنٹرولز آپ کو اسلائیڈ پلے بیک کو چلانے یا روکنے کی اجازت دیتے ہیں. آپ اپنی ترجیحات کے مطابق کورس مواد کی رفتار کو کنٹرول کرسکتے ہیں.',
      dutch: 'Met deze bedieningselementen kun je de diavoorstelling afspelen of pauzeren. Je kunt de snelheid van de cursusinhoud naar wens regelen.',
      spanish: 'Estos controles te permiten reproducir o pausar la reproducción de diapositivas. Puedes controlar el ritmo del contenido del curso según tus preferencias.',
      french: 'Ces commandes vous permettent de lire ou de mettre en pause la lecture des diapositives. Vous pouvez contrôler le rythme du contenu du cours en fonction de vos préférences.',
      mandarin: '这些控件允许您播放或暂停幻灯片播放。您可以根据自己的偏好控制课程内容的节奏。',
      portuguese: 'Esses controles permitem que você reproduza ou pause a reprodução dos slides. Você pode controlar o ritmo do conteúdo do curso com base em suas preferências.'
    },
    next: {
      english: 'To move to the next slide, click the "Next" button. It will take you to the next topic or module in the course.',
      arabic: 'للانتقال إلى الشريحة التالية، انقر على زر "التالي". سوف ينقلك إلى الموضوع أو الوحدة التالية في الدورة.',
      urdu: 'اگلی سلائیڈ پر منتقل ہونے کے لئے "اگلے" بٹن پر کلک کریں. یہ آپ کو کورس میں اگلے موضوع یا ماڈیول پر لے جائے گا.',
      dutch: 'Klik op de knop "Volgende" om naar de volgende dia te gaan. Het brengt je naar het volgende onderwerp of module in de cursus.',
      spanish: 'Para pasar a la siguiente diapositiva, haz clic en el botón "Siguiente". Te llevará al siguiente tema o módulo del curso.',
      french: 'Pour passer à la diapositive suivante, cliquez sur le bouton "Suivant". Il vous conduira au sujet ou module suivant dans le cours.',
      mandarin: '要进入下一张幻灯片，请单击“下一页”按钮。它将带您进入课程中的下一个主题或模块。',
      portuguese: 'Para avançar para o próximo slide, clique no botão "Próximo". Ele o levará para o próximo tópico ou módulo no curso.'
    },
    prev: {
      english: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous topic or module.',
      arabic: 'إذا كنت ترغب في العودة إلى الشريحة السابقة، استخدم زر "السابق". سيوجهك إلى الموضوع أو الوحدة السابقة.',
      urdu: 'اگر آپ پچھلی سلائیڈ پر واپس جانا چاہتے ہیں تو "پچھلا" بٹن استعمال کریں. یہ آپ کو کورس میں پچھلے موضوع یا ماڈیول پر نیویگیٹ کرے گا.',
      dutch: 'Als je terug wilt naar de vorige dia, gebruik dan de knop "Vorige". Het zal je naar het vorige onderwerp of module navigeren.',
      spanish: 'Si deseas volver a la diapositiva anterior, utiliza el botón "Anterior". Te llevará al tema o módulo anterior.',
      french: 'Si vous souhaitez revenir à la diapositive précédente, utilisez le bouton "Précédent". Il vous ramènera au sujet ou module précédent.',
      mandarin: '如果您想返回上一张幻灯片，请使用“上一页”按钮。它将使您导航到前一个主题或模块。',
      portuguese: 'Se você deseja voltar para o slide anterior, use o botão "Anterior". Ele irá levá-lo de volta ao tópico ou módulo anterior.'
    }
  }
  introJs().setOptions({
    steps: [
      {
        element: '.acc-blocker',
        intro: translations['intro'][language],
        title: 'Slide',
      },
      {
        element: '#links-right',
        intro: translations['resources'][language],
        title: 'Helpful Resources',
      },
      {
        element: '#outline-content',
        intro: translations['menu'][language],
        title: 'Course Menu',
      },
      {
        element: '#playback-controls',
        intro: translations['playback'][language],
        title: 'Slide Playback Control',
      },
	  {
        element: '#prev',
        intro: translations['prev'][language],
        title: 'Prev Slide Button',
      },
      {
        element: '#next',
        intro: translations['next'][language],
        title: 'Next Slide Button',
      }
      
    ],
	 onafterchange: function () {
      updateHelperCSS();
    }
  }).start();
  
}

function nrzIntroTourWithoutSeekbar(language) {
  var translations = {
    intro: {
      english: 'Welcome to the course! This is the slide area where the course content will be displayed. Use the navigation buttons to move between slides.',
      arabic: 'مرحبًا بك في الدورة! هذه هي منطقة الشريحة حيث سيتم عرض محتوى الدورة. استخدم أزرار التنقل للتحرك بين الشرائح.',
      urdu: 'کورس میں خوش آمدید! یہاں سلائیڈ کا علاقہ ہے جہاں کورس کی مواد کی عرض ہوگی. اسلائیڈوں کے درمیان حرکت کرنے کے لئے نیویگیشن بٹن استعمال کریں.',
      dutch: 'Welkom bij de cursus! Dit is het schuifgebied waar de cursusinhoud wordt weergegeven. Gebruik de navigatieknoppen om tussen dia\'s te bewegen.',
      spanish: '¡Bienvenido al curso! Esta es el área de diapositivas donde se mostrará el contenido del curso. Utiliza los botones de navegación para moverte entre las diapositivas.',
      french: 'Bienvenue dans le cours ! C\'est ici que sera affiché le contenu du cours. Utilisez les boutons de navigation pour passer d\'une diapositive à l\'autre.',
      mandarin: '欢迎来到课程！这是显示课程内容的幻灯片区域。使用导航按钮在幻灯片之间移动。',
      portuguese: 'Bem-vindo ao curso! Esta é a área do slide onde o conteúdo do curso será exibido. Use os botões de navegação para se mover entre os slides.'
    },
    resources: {
      english: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      arabic: 'هنا يمكنك العثور على موارد مفيدة تتعلق بالدورة. انقر على الروابط للوصول إلى مواد إضافية أو مراجع.',
      urdu: 'یہاں آپ کورس سے متعلق مددگار وسائل تلاش کر سکتے ہیں. اضافی مواد یا حوالے تک رسائی حاصل کرنے کے لئے لنکس پر کلک کریں.',
      dutch: 'Hier vind je nuttige bronnen gerelateerd aan de cursus. Klik op de links om extra materiaal of referenties te openen.',
      spanish: 'Aquí puedes encontrar recursos útiles relacionados con el curso. Haz clic en los enlaces para acceder a materiales adicionales o referencias.',
      french: 'Ici, vous pouvez trouver des ressources utiles liées au cours. Cliquez sur les liens pour accéder à des matériaux supplémentaires ou des références.',
      mandarin: '在这里，您可以找到与课程相关的有用资源。点击链接访问额外的材料或参考资料。',
      portuguese: 'Aqui você pode encontrar recursos úteis relacionados ao curso. Clique nos links para acessar materiais adicionais ou referências.'
    },
    menu: {
      english: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      arabic: 'يقع قائمة الدورة هنا. يوفر نظرة عامة على هيكل الدورة ويتيح لك الانتقال إلى أقسام أو وحدات محددة.',
      urdu: 'کورس کی مینو یہاں موجود ہے. یہ کورس کی ساخت کا ایک جائزہ دیتی ہے اور آپ کو خاص حصوں یا ماڈیولز میں جانے کی اجازت دیتی ہے.',
      dutch: 'Het cursusmenu bevindt zich hier. Het biedt een overzicht van de cursusstructuur en stelt je in staat om naar specifieke secties of modules te springen.',
      spanish: 'El menú del curso se encuentra aquí. Proporciona una visión general de la estructura del curso y te permite saltar a secciones o módulos específicos.',
      french: 'Le menu du cours est situé ici. Il donne un aperçu de la structure du cours et vous permet de passer à des sections ou des modules spécifiques.',
      mandarin: '课程菜单位于此处。它提供了课程结构的概述，并允许您跳转到特定的部分或模块。',
      portuguese: 'O menu do curso está localizado aqui. Ele fornece uma visão geral da estrutura do curso e permite que você salte para seções ou módulos específicos.'
    },
    playback: {
      english: 'These controls allow you to play or pause the slide playback. You can control the pace of the course content based on your preferences.',
      arabic: 'تتيح لك هذه المراقبات تشغيل أو إيقاف تشغيل تشغيل الشرائح. يمكنك التحكم في وتيرة محتوى الدورة بناءً على تفضيلاتك.',
      urdu: 'یہ کنٹرولز آپ کو اسلائیڈ پلے بیک کو چلانے یا روکنے کی اجازت دیتے ہیں. آپ اپنی ترجیحات کے مطابق کورس مواد کی رفتار کو کنٹرول کرسکتے ہیں.',
      dutch: 'Met deze bedieningselementen kun je de diavoorstelling afspelen of pauzeren. Je kunt de snelheid van de cursusinhoud naar wens regelen.',
      spanish: 'Estos controles te permiten reproducir o pausar la reproducción de diapositivas. Puedes controlar el ritmo del contenido del curso según tus preferencias.',
      french: 'Ces commandes vous permettent de lire ou de mettre en pause la lecture des diapositives. Vous pouvez contrôler le rythme du contenu du cours en fonction de vos préférences.',
      mandarin: '这些控件允许您播放或暂停幻灯片播放。您可以根据自己的偏好控制课程内容的节奏。',
      portuguese: 'Esses controles permitem que você reproduza ou pause a reprodução dos slides. Você pode controlar o ritmo do conteúdo do curso com base em suas preferências.'
    },
    next: {
      english: 'To move to the next slide, click the "Next" button. It will take you to the next topic or module in the course.',
      arabic: 'للانتقال إلى الشريحة التالية، انقر على زر "التالي". سوف ينقلك إلى الموضوع أو الوحدة التالية في الدورة.',
      urdu: 'اگلی سلائیڈ پر منتقل ہونے کے لئے "اگلے" بٹن پر کلک کریں. یہ آپ کو کورس میں اگلے موضوع یا ماڈیول پر لے جائے گا.',
      dutch: 'Klik op de knop "Volgende" om naar de volgende dia te gaan. Het brengt je naar het volgende onderwerp of module in de cursus.',
      spanish: 'Para pasar a la siguiente diapositiva, haz clic en el botón "Siguiente". Te llevará al siguiente tema o módulo del curso.',
      french: 'Pour passer à la diapositive suivante, cliquez sur le bouton "Suivant". Il vous conduira au sujet ou module suivant dans le cours.',
      mandarin: '要进入下一张幻灯片，请单击“下一页”按钮。它将带您进入课程中的下一个主题或模块。',
      portuguese: 'Para avançar para o próximo slide, clique no botão "Próximo". Ele o levará para o próximo tópico ou módulo no curso.'
    },
    prev: {
      english: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous topic or module.',
      arabic: 'إذا كنت ترغب في العودة إلى الشريحة السابقة، استخدم زر "السابق". سيوجهك إلى الموضوع أو الوحدة السابقة.',
      urdu: 'اگر آپ پچھلی سلائیڈ پر واپس جانا چاہتے ہیں تو "پچھلا" بٹن استعمال کریں. یہ آپ کو کورس میں پچھلے موضوع یا ماڈیول پر نیویگیٹ کرے گا.',
      dutch: 'Als je terug wilt naar de vorige dia, gebruik dan de knop "Vorige". Het zal je naar het vorige onderwerp of module navigeren.',
      spanish: 'Si deseas volver a la diapositiva anterior, utiliza el botón "Anterior". Te llevará al tema o módulo anterior.',
      french: 'Si vous souhaitez revenir à la diapositive précédente, utilisez le bouton "Précédent". Il vous ramènera au sujet ou module précédent.',
      mandarin: '如果您想返回上一张幻灯片，请使用“上一页”按钮。它将使您导航到前一个主题或模块。',
      portuguese: 'Se você deseja voltar para o slide anterior, use o botão "Anterior". Ele irá levá-lo de volta ao tópico ou módulo anterior.'
    }
  }
  introJs().setOptions({
    steps: [
      {
        element: '.acc-blocker',
        intro: translations['intro'][language],
        title: 'Slide',
      },
      {
        element: '#links-right',
        intro: translations['resources'][language],
        title: 'Helpful Resources',
      },
      {
        element: '#outline-content',
        intro: translations['menu'][language],
        title: 'Course Menu',
      },
	  {
        element: '#prev',
        intro: translations['prev'][language],
        title: 'Prev Slide Button',
      },
      {
        element: '#next',
        intro: translations['next'][language],
        title: 'Next Slide Button',
      }
      
    ],
	onafterchange: function () {
      updateHelperCSS();
    }
  }).start();
}