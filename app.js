// Initialize the search client
const searchClient = algoliasearch('D0YX2JPAZD', 'ea7088907b08ee64a555c99a259f6718');

const search = instantsearch({
  indexName: 'algolia_movie_sample_dataset',
  searchClient,
});

// Create and mount the Search Box widget
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: '',
    autofocus: true,
    // This transforms the search bar into a "live" search
    showReset: true,
    showLoadingIndicator: true,
  }),

  // Add a basic hits widget so you can see it working
  instantsearch.widgets.hits({
  container: '#hits',
  templates: {
    // The "empty" template shows if no results are found
    empty: (results) => `No results found for "${results.query}"`,
    
    // The "item" template renders each movie
    item(hit, { html, components }) {
      console.log('Found a movie:', hit); // This prints the data to your browser console
    return `Found: ${hit.title}`,html
        <div class="movie-item" style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
          <h3 style="margin: 0; color: #004b88;">
            ${components.Highlight({ hit, attribute: 'title' })}
          </h3>
          <p style="margin: 5px 0; font-size: 14px; color: #333;">
            ${components.Snippet({ hit, attribute: 'overview' })}
          </p>
        </div>
      `;
    },
  },
})
]);

search.start();
