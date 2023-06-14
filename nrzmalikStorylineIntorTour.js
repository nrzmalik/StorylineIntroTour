function IntroTourWithSeekbar()  
{

introJs().setOptions({
  steps: [
    {
      element: '.acc-blocker',
      intro: 'Welcome to the course! This is the slide area where the course content will be displayed. Use the navigation buttons to move between slides.',
      title: 'Slide',
    },
    {
      element: '#links-right',
      intro: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      title: 'Helpful Resources',
    },
    {
      element: '#outline-content',
      intro: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      title: 'Course Menu',
    },
    {
      element: '#next',
      intro: 'To move to the next slide, click the "Next" button. It will take you to the next topic or module in the course.',
      title: 'Next Slide Button',
    },
    {
      element: '#prev',
      intro: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous topic or module.',
      title: 'Prev Slide Button',
    },
    {
      element: '#playback-controls',
      intro: 'These controls allow you to play or pause the slide playback. You can control the pace of the course content based on your preferences.',
      title: 'Slide Playback Control',
    }
  ],
}).start();


}

function IntroTourWithoutSeekbar()
{

  introJs().setOptions({
  steps: [
    {
      element: '.acc-blocker',
      intro: 'Welcome to the course! This is the slide area where the course content will be displayed. Use the navigation buttons to move between slides.',
      title: 'Slide',
    },
    {
      element: '#links-right',
      intro: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      title: 'Helpful Resources',
    },
    {
      element: '#outline-content',
      intro: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific sections or modules.',
      title: 'Course Menu',
    },
    {
      element: '#next',
      intro: 'To move to the next slide, click the "Next" button. It will take you to the next topic or module in the course.',
      title: 'Next Slide Button',
    },
    {
      element: '#prev',
      intro: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous topic or module.',
      title: 'Prev Slide Button',
    }
  ],
}).start();


}
