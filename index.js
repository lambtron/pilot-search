
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
      showMore: {
        templates: {
          active: '<a class="dib mt2 f6" href="#">Show less</a>',
          inactive: '<a class="dib mt2 f6" href="#">Show more</a>'
        }
      },
      sortBy: ['isRefined', 'name:asc'],
      templates: {
        header: '<span class="dib mb2"><b>Network</b></span>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} <span class="black-50">({{count}})</span>'
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-year',
      attributeName: 'year',
      operator: 'and',
      sortBy: ['isRefined', 'name:asc'],
      templates: {
        header: '<span class="dib mb2"><b>Year</b></span>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} <span class="black-50">({{count}})</span>'
      }
    })
  );


  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-studio',
      attributeName: 'studios',
      operator: 'and',
      showMore: {
        templates: {
          active: '<a class="dib mt2 f6" href="#">Show less</a>',
          inactive: '<a class="dib mt2 f6" href="#">Show more</a>'
        }
      },
      sortBy: ['isRefined', 'name:asc'],
      templates: {
        header: '<span class="dib mb2"><b>Studio</b></span>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} <span class="black-50">({{count}})</span>'
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-genre',
      attributeName: 'genre',
      operator: 'and',
      sortBy: ['isRefined', 'name:asc'],
      templates: {
        header: '<span class="dib mb2"><b>Genre</b></span>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} <span class="black-50">({{count}})</span>'
      }
    })
  );



  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-cam',
      attributeName: 'cam',
      operator: 'and',
      sortBy: ['isRefined', 'name:asc'],
      autoHideContainer: false,
      templates: {
        header: '<span class="dib mb2"><b>Cam</b></span>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} <span class="black-50">({{count}})</span>'
      }
    })
  );


  search.start();

})();