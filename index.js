
'use strict';

(function() {
  const search = instantsearch({
    appId: 'JSU2SD15LH',
    apiKey: 'df5dbdb76eaa35759d6d0b57fbcafb24',
    indexName: 'pilots',
    urlSync: true
  });

  // const search = instantsearch(options);

  // initialize SearchBox
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: "#search-box",
      placeholder: ''
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: document.getElementById('hit-template').innerHTML,
        empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-network',
      attributeName: 'network',
      operator: 'and',
      templates: {
        header: 'Network'
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-year',
      attributeName: 'year',
      operator: 'and',
      templates: {
        header: 'Year'
      }
    })
  );


  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-studio',
      attributeName: 'studios',
      operator: 'and',
      templates: {
        header: 'Studio'
      }
    })
  );



  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-genre',
      attributeName: 'genre',
      operator: 'and',
      templates: {
        header: 'Genre'
      }
    })
  );



  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-cam',
      attributeName: 'cam',
      operator: 'and',
      templates: {
        header: 'Cam'
      }
    })
  );


  search.start();



  // /**
  //  * Module dependencies.
  //  */

  // var client = algoliasearch('JSU2SD15LH', 'df5dbdb76eaa35759d6d0b57fbcafb24');
  // var helper = algoliasearchHelper(client, 'pilots');
  // var readyToFetchMore = true;
  // var inSearchMode = false;

  // /**
  //  * On result.
  //  */

  // helper.on('result', renderHits);

  // /**
  //  * Render results.
  //  */

  // function renderHits(content) {
  //   if (content.nbHits > 1) document.querySelector('.search-message').innerText = 'Found ' + content.nbHits + ' emojis out of over 5,000.';
  //   else if (content.nbHits === 1) document.querySelector('.search-message').innerText = 'Found ' + content.nbHits + ' emoji out of over 5,000.';
  //   else document.querySelector('.search-message').innerText = 'Search over 5,000 emojis to find your next favorite ones.';

  //   if (content.hits.length === 0) {
  //     inSearchMode = false;
  //     removeClass(document.getElementById('existing-packs'), 'dn');
  //     addClass(document.querySelector('.powered-by-algolia'), 'dn');
  //     document.getElementById('search-results').innerHTML = '<div class="f3 fw3 w-100 dib center tc mv4">Oops! No results for <em>' + content.query + '</em>. Try “parrot”.</div>';
  //     return;
  //   }

  //   addClass(document.getElementById('existing-packs'), 'dn');

  //   var html = '';
  //   if (content.page > 0) html = document.getElementById('search-results').innerHTML;

  //   content.hits.map(function(hit) {
  //     var str = '' +
  //     '<div class="w-50 w-33-m w-20-l pa3 fl dib">' +
  //       '<a href="/packs/' + hit.pack_slug + '" class="link dim">' +
  //         '<div class="tc w-100 bg-white dib br3 shadow-4 pa3 pt4">' +
  //           '<img src="' + hit.src + '" style="height: 50px">' +
  //           '<div class="f4 fw3 lh-title mt3">:' + hit._highlightResult.name.value + ':</div>' +
  //           '<div class="f6 fw3 lh-copy mt3 gray">' + hit._highlightResult.pack_title.value + '</div>' +
  //         '</div>' + 
  //       '</a>' +
  //     '</div>';
  //     html += str;
  //   });

  //   var algolia = '' +
  //     '<div style="clear: both;"></div>' +
  //     '<div class="dib w-100 mt4 center"><a href="https://algolia.com" target="_blank"><div class="db center search-by-algolia"></div></a></div>';

  //   document.getElementById('search-results').innerHTML = html;
  //   removeClass(document.querySelector('.powered-by-algolia'), 'dn');
  //   document.querySelector('.powered-by-algolia').innerHTML = algolia;

  //   if (content.page + 1 >= content.nbPages) readyToFetchMore = false;
  // }

  // /**
  //  * On key up in the input search box.
  //  */

  // document.getElementById('search-box').addEventListener('keyup', function(e) {
  //   if (e.target.value.length === 0) { 
  //     removeClass(document.getElementById('existing-packs'), 'dn');
  //     addClass(document.querySelector('.powered-by-algolia'), 'dn');
  //     document.querySelector('.search-message').innerText = 'Search over 5,000 emojis to find your next favorite ones.';
  //     addClass(document.getElementById('search-results'), 'dn');
  //     inSearchMode = false;
  //     return;
  //   }
  //   inSearchMode = true;
  //   removeClass(document.getElementById('search-results'), 'dn');
  //   helper.setQuery(e.target.value).search();
  // });

  // /**
  //  * On blur, send `Emoji Searched` track event.
  //  */
  
  // document.getElementById('search-box').addEventListener('blur', function(e) {
  //   if (e.target.value.length > 0) window.analytics.track('Emoji Searched', { query: e.target.value });
  // });

  // /**
  //  * On scroll, see if we're at the bottom of the page.
  //  */
  
  // window.onscroll = function(ev) {
  //   var isAtBottomOfPage = (window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight - 300);
  //   if (isAtBottomOfPage && readyToFetchMore && inSearchMode) {
  //     readyToFetchMore = false;
  //     helper.nextPage().search();
  //   }
  // };
  
  // /**
  //  * Add class once.
  //  */

  // function addClass(el, c) {
  //   if (el.classList.contains(c)) return;
  //   return el.classList.add(c);
  // }

  // /**
  //  * Remove class once.
  //  */

  // function removeClass(el, c) {
  //   if (el.classList.contains(c)) return el.classList.remove(c);
  // }

})();