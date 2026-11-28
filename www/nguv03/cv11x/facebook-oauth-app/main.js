const config = { app_id: '7702675183075984' };

// only works after app review z facebook reviewers for post permission
const postStatus = (msg) => {
  FB.api('/me/feed', 'post', { message: msg }, function (response) {
    if (!response || response.error) {
      console.log('Error occured');
    } else {
      console.log('Post ID: ' + response.id);
    }
  });
};

const renderPage = () => {
  // fetching data about the current user
  FB.api('/me?fields=name,email', (resp) => {
    $('#heading').text(`Hello ${resp.name}! ${resp.email}`);
    // go to graph API documentation to download more data about this account
  });
};

const jFbLoginBtn = $('#fb-login');
const loadDataBtn = $('#load-data');

loadDataBtn.on('click', () => {
  checkLoginState();
});

const checkLoginState = () => {
  FB.getLoginStatus((resp) => {
    console.log(resp);
    if (resp.status === 'connected') {
      jFbLoginBtn.hide();
      renderPage();
    }
  });
};

const fbInit = () => {
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function () {
    FB.init({
      appId: config.app_id,
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v9.0',
    });
    checkLoginState();
  });
};

$(document).ready(() => {
  fbInit();
});