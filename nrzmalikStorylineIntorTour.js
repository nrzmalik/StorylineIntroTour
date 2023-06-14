function IntroTourWithSeekbar()  
{

var intro = introJs();

  intro.setOptions({
    steps: [
      {
        element: '.acc-blocker',
        intro: 'Welcome to the course! This is the slide area where the course content will be displayed.',
      },
      {
        element: '#links-right',
        intro: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      },
      {
        element: '#sidebar-panels',
        intro: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      },
	  {
        element: '#playback-controls',
        intro: 'These controls allow you to play or pause the slide playback. You can control the pace of the course content based on your preferences.',
      },
      {
        element: '#next',
        intro: 'To move to the next slide, click the "Next" button. It will take you to the next topic or module in the course.',
      },

      {
        element: '#prev',
        intro: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous topic or module.',
      }
      
    ]
  });

  intro.start();

}

function IntroTourWithoutSeekbar()
{

var intro = introJs();

  intro.setOptions({
    steps: [
      {
        element: '.acc-blocker',
        intro: 'Welcome to the course! This is the slide area where the course content will be displayed.',
      },
      {
        element: '#links-right',
        intro: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      },
      {
        element: '#sidebar-panels',
        intro: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      },
      {
        element: '#next',
        intro: 'To move to the next slide, click the "Next" button. It will take you to the next topic or module in the course.',
      },

      {
        element: '#prev',
        intro: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous topic or module.',
      }
      
    ]
  });

  intro.start();

}