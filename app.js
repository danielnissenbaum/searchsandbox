// 1. Setup the Client
const searchClient = algoliasearch('D0YX2JPAZD', 'ea7088907b08ee64a555c99a259f6718');

// 2. Initialize Search
const search = instantsearch({
  indexName: 'algolia_movie_sample_dataset',
  searchClient,
});

// 3. Add Widgets
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search movies...',
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: (results) => `No results found for "${results.query}"`,
      item: (hit) => `
        <div style="padding: 10px; border-bottom: 1px solid #eee;">
          <strong>${hit.title}</strong>
          <p style="font-size: 13px;">${hit.overview}</p>
        </div>
      `,
    },
  })
]);

// 4. Start
search.start();
