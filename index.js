(function () {

  // DOM elements
  var convertButton = document.getElementById('convert'),
    readabilityTA = document.getElementById('readability-json'),
    instapaperTA = document.getElementById('instapaper-html');

  // export templates
  var before = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Instapaper: Export</title></head><body><h1>Archive</h1><ol>',
    between = '</ol><h1>Unread</h1><ol>',
    after = '</ol></body></html>';

  // on click
  convertButton.addEventListener('click', function () {

    var items = JSON.parse(readabilityTA.value),
      linkIdx,
      item,
      archivedItems = '',
      unreadItems = '';

    items.forEach(function(item) {
      if (item.is_archived == 1) {
        archivedItems += '<li><a href="' + item.url + '">' + item.title + '</a>: </li>';
      } else {
        unreadItems += '<li><a href="' + item.url + '">' + item.title + '</a>: </li>';
      }
    });

    instapaperTA.value = before + archivedItems + between + unreadItems + after;
  }, false);
})();

