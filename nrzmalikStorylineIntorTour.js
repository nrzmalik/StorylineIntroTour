function IntroTourWithSeekbar()  
{

introJs().setOptions({
  steps: [
    {
      element: '.acc-blocker',
      intro: 'Welcome to the e-learning course!',
      title: 'Slide',
    },
    {
      element: '#links-right',
      intro: 'Here you can find helpful resources related to the course.',
      title: 'Helpful Resources',
    },
    {
      element: '#outline-content',
      intro: 'The course menu is located here. It provides an overview of the course structure.',
      title: 'Course Menu',
    },
    {
      element: '#next',
      intro: 'To move to the next slide, click the "Next" button.',
      title: 'Next Slide Button',
    },
    {
      element: '#prev',
      intro: 'If you want to go back to the previous slide, use the "Previous" button.',
      title: 'Prev Slide Button',
    },
    {
      element: '#playback-controls',
      intro: 'These controls allow you to play or pause the slide playback.',
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
      intro: 'Welcome to the e-learning course!',
      title: 'Slide',
    },
    {
      element: '#links-right',
      intro: 'Here you can find helpful resources related to the course.',
      title: 'Helpful Resources',
    },
    {
      element: '#outline-content',
      intro: 'The course menu is located here. It provides an overview of the course structure.',
      title: 'Course Menu',
    },
    {
      element: '#next',
      intro: 'To move to the next slide, click the "Next" button.',
      title: 'Next Slide Button',
    },
    {
      element: '#prev',
      intro: 'If you want to go back to the previous slide, use the "Previous" button.',
      title: 'Prev Slide Button',
    }
  ],
}).start();


}
