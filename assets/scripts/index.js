// Selected DOM elements
var html = document.querySelector('html');
var body = document.querySelector('body');
var menuToggle = document.querySelector('.menu-toggle');
var menuIcon = document.querySelector('.icon-menu');
var siteMenu = document.querySelector('.site-menu');
var socialMenu = document.querySelector('.social-menu');
var toTopBtn = document.querySelector('.to-top');

// Site and social menu toggle
menuToggle &&
  menuToggle.addEventListener('click', function () {
    siteMenu.classList.toggle('collapsed');
    socialMenu.classList.toggle('collapsed');
    menuIcon.classList.toggle('icon-menu');
    menuIcon.classList.toggle('icon-close');
    var expandStatus = menuToggle.getAttribute('aria-expanded');
    if (expandStatus === 'false') menuToggle.setAttribute('aria-expanded', 'true');
    else menuToggle.setAttribute('aria-expanded', 'false');
  });

// Medium zoom init
var zoomables = document.querySelectorAll('.zoomable > img, img.zoomable');
zoomables.length && mediumZoom(zoomables);

// Random emoji for 404 error message.
function randomErrorEmoji() {
  var error = document.getElementsByClassName('error-emoji')[0];
  var emojiArray = [
    '\\(o_o)/',
    '(o^^)o',
    '(˚Δ˚)b',
    '(^-^*)',
    '(≥o≤)',
    '(^_^)b',
    '(·_·)',
    "(='X'=)",
    '(>_<)',
    '(;-;)',
    '\\(^Д^)/',
  ];
  if (error) {
    var errorEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
    error.appendChild(document.createTextNode(errorEmoji));
  }
};
randomErrorEmoji();

// Show toTopBtn when scroll to 600px
/* eslint-disable no-undef */
var lastPosition = 0;
var ticking = false;
window.addEventListener('scroll', function () {
  lastPosition = body.scrollTop === 0 ? html.scrollTop : body.scrollTop;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      if (lastPosition >= 600) {
        toTopBtn.classList.remove('is-hide');
      } else {
        toTopBtn.classList.add('is-hide');
      }
      ticking = false;
    });
  }
  ticking = true;
});

// Share icon popup
$('a.share').click(function (e) {
  e.preventDefault();
  var $link = $(this);
  var href = $link.attr('href');
  var network = $link.attr('data-network');

  var networks = {
    facebook: { width: 600, height: 300 },
    twitter: { width: 600, height: 254 },
    google: { width: 515, height: 490 },
    email: { width: 515, height: 500 },
    linkedin: { width: 600, height: 473 }
  };

  var popup = function (network) {
    var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
    window.open(href, '', options + 'height=' + networks[network].height + ',width=' + networks[network].width);
  }

  popup(network);
});

// make footer always on bottom of the page
var footer_height = document.querySelector('.site-footer').clientHeight;
var section_height = document.querySelector('.home-page').clientHeight;
var window_height = window.innerHeight - footer_height;
if (section_height <= window_height) {
  console.log('hi');
  document.querySelector('.home-page').style.height = window_height - 81 + "px";  
  
  if (section_height == 40) {
    document.querySelector('.home-page').style.height = window_height - 41 + "px";  
  }
}



// Smooth Scroll to top when click toTopBtn
var scroll = new SmoothScroll('a[href*="#"]');
toTopBtn &&
  toTopBtn.addEventListener('click', function () {
    scroll.animateScroll(0);
  });

// Add target = _blank in all post content a tag
var linkList = document.querySelectorAll('.post-content a');

for (var i in linkList) {
  linkList[i].setAttribute('target', '_blank');
}