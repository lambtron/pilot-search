
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
      sortBy: ['isRefined', 'name:asc'],
      templates: {
        header: '<b>Network</b>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> <span class="ttu">{{label}}</span> - {{count}}'
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
        header: '<b>Year</b>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} - {{count}}'
      }
    })
  );


  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-studio',
      attributeName: 'studios',
      operator: 'and',
      sortBy: ['isRefined', 'name:asc'],
      templates: {
        header: '<b>Studio</b>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} - {{count}}'
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
        header: '<b>Genre</b>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} - {{count}}'
      }
    })
  );



  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#refinement-list-cam',
      attributeName: 'cam',
      operator: 'and',
      sortBy: ['isRefined', 'name:asc'],
      templates: {
        header: '<b>Cam</b>',
        item: '<input type="checkbox" {{#isRefined}}checked{{/isRefined}}> {{label}} - {{count}}'
      }
    })
  );


  search.start();

})();