// Initialize the search client
const searchClient = algoliasearch('D0YX2JPAZD', 'ea7088907b08ee64a555c99a259f6718');

const search = instantsearch({
  indexName: 'ca_pages',
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
    item(hit, { html, components }) {
      return html`
        <article style="padding: 15px; border-bottom: 1px solid #ccc;">
          <h2 style="color: #004b88; margin-bottom: 5px;">
            ${components.Highlight({ hit, attribute: 'title' })}
          </h2>
          <p style="font-size: 14px; color: #333;">
            ${components.Snippet({ hit, attribute: 'content' })}
          </p>
          <small style="color: #666;">Category: ${hit.category || 'General'}</small>
        </article>
      `;
    },
  },
})
]);

search.start();
