'use strict';

(() => {

if( document.querySelector( '.all-post' )) {
    const container      = document.querySelector('.all-post');
    const loadMoreButton = document.getElementById( 'loadMore' );
    const request        = new XMLHttpRequest();
    const postsPerPage   = container.dataset.postsPerPage;
    const total          = container.dataset.total;

    let catId;
    let tax;
    let terms;

    if( container.dataset.category ) {
      catId = container.dataset.category;
    }

    if( container.dataset.creator ) {
      tax   = 'creator';
      terms = container.dataset.creator
    }

    if( container.dataset.publication ) {
      tax   = 'publication';
      terms = container.dataset.publication
    }

    console.log( total, postsPerPage );
    if( total < parseInt( postsPerPage )) { 
      loadMoreButton.style.display = 'none';
    }

    loadMoreButton.addEventListener( 'click', loadMore );

    function loadMore() {
      let paged  = container.dataset.paged;
      let offset = container.dataset.offset;
      let catAdd = ( catId != undefined ) ? `&cat_id=${ catId }` : '';
      let taxAdd = ( tax != undefined ) ? `&tax=${ tax }&terms=${ terms }` : '';
      let data   = `paged=${ paged }&offset=${ offset }&posts_per_page=${ postsPerPage }${catAdd}${taxAdd}`;

      request.open( 'POST', `${ my_ajax_url.ajax_url }?action=loadMorePosts`, true );
      request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
      request.send( data );

      request.onprogress = () => {
        console.log( 'The request is in progress' );
      };
      request.onload     = () => {
        if ( request.status != 200 ) {
          console.log( `Error ${ request.status }: ${ request.statusText }` );
        } else {
          let postsArray  = Array.from( container.querySelectorAll('.post-row') );
          let lastPost    = postsArray[ postsArray.length - 1 ];
          let content     = JSON.parse(request.response);
          content = content[ 'posts' ].replace( /[\n\r\t]/g, '' );
          
          lastPost.insertAdjacentHTML( 'afterEnd', content );
          container.dataset.paged  = parseInt( paged ) + 1;
          container.dataset.offset = parseInt( offset ) + parseInt( postsPerPage );

          if ( total - offset < postsPerPage ) {
            loadMoreButton.style.display = 'none';
          }
        }
      };
      request.onerror = () => {
        console.log( 'The request failed' );
      };
    }
  } 

})();