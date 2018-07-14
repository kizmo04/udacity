(function() {

  var leftBtn = document.querySelector('.left');
  var rightBtn = document.querySelector('.right');

  var profileImgElement = document.querySelectorAll('.profile-img');
  var namesElement = document.querySelectorAll('.name');
  var speechElement = document.querySelectorAll('.speech');
  var workElement = document.querySelectorAll('.work-font');
  var count = 0;


  var data = {
    src: ['https://d20vrrgs8k4bvw.cloudfront.net/images/testimonials/thumbnails/anastasia.jpg', 'https://d20vrrgs8k4bvw.cloudfront.net/images/testimonials/thumbnails/rob_full.jpg', 'https://d20vrrgs8k4bvw.cloudfront.net/images/testimonials/thumbnails/aaron.jpg'],
    names: ['Anastasia', 'Rob', 'Aaron'],
    speech: ['"Udacity elevated my skills by teaching me R, SQL, and data visualization. I gained the tools I needed to advance my career, and landed my dream job playing with gigabytes of data all day, every day"', '"When I was at a crossroads in my career as a Personal Trainer, Udacity helped to pave the way towards the future I knew I wanted. I was able to launch a new successful career and am now a Technical Lead / Lead Architect at UNICEF for one of the largest open-source software projects ever undertaken by the UN agency."', '"Udacity kindled my passion for computer science at a time when I had been thinking about quitting... the Self-Driving Car Nanodegree program and Career Resource Center helped me land a job as a Software Engineer at Google where I use the skills I learned to confidently tackle deep learning and localization projects."'],
    work: ['GOOGLE', 'APPLE', 'KhanAcademy']
  };
  leftBtn.addEventListener('click', function(e) {
    for (var i = 0; i < 3; i++) {
      profileImgElement[i].setAttribute('src', data.src[(count + i) % 3]);
      namesElement[i].textContent = data.names[(count + i) % 3];
      speechElement[i].textContent = data.speech[(count + i) % 3];
      workElement[i].textContent = data.work[(count + i) % 3];
    }
    count++;
  });

  rightBtn.addEventListener('click', function(e) {
    for (var i = 2; i >= 0; i--) {
      profileImgElement[i].setAttribute('src', data.src[(count + i) % 3]);
      namesElement[i].textContent = data.names[(count + i) % 3];
      speechElement[i].textContent = data.speech[(count + i) % 3];
      workElement[i].textContent = data.work[(count + i) % 3];
    }
    count++;
  });
})();