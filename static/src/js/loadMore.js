'use strict';

(() => {

  const container = document.querySelector('.all-post');
  const loadMoreButton = document.getElementById( 'loadMore' );
  const request      = new XMLHttpRequest();
  const postsPerPage = container.dataset.postsPerPage;

  let paged  = container.dataset.paged;
  let offset = container.dataset.offset;

  loadMoreButton.addEventListener( 'click', loadMore );

  function loadMore() {
    let data = `paged=${ paged }&offset=${offset}`;

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
        paged  = container.dataset.paged;
        offset = container.dataset.offset;
        
        let postsArray  = Array.from( container.querySelectorAll('.post-row') );
        let lastPost    = postsArray[ postsArray.length - 1 ];
        let content     = JSON.parse(request.response);
        let total = content[ 'total' ];
          content = content[ 'posts' ].replace( /[\n\r\t]/g, '' );
        
        lastPost.insertAdjacentHTML( 'afterEnd', content );
        container.dataset.paged  = parseInt( paged ) + 1;
        container.dataset.offset = parseInt( offset ) + parseInt( postsPerPage );
      }
    };
    request.onerror = () => {
      console.log( 'The request failed' );
    };
  } 

})();