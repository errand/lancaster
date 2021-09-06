'use strict';

(() => {

  const page    = document.querySelector( '.all-post' ).dataset.page;
  const offset  = document.querySelector( '.all-post' ).dataset.offset;
  const loadMoreButton = document.getElementById( 'loadMore' );
  const request = new XMLHttpRequest();

  loadMoreButton.addEventListener( 'click', loadMore );

  function loadMore() {
    let data = {
      action: 'loadMorePosts',
      page  : page,
      offset: offset,
    };

    request.open( 'POST', '/wp-admin/admin-ajax.php', true );
    request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
    request.send( data );

    request.onprogress = () => {
      console.log( 'The request is in progress' );
    };
    request.onload     = () => {
      if (request.status != 200) {
        console.log( `Error ${ request.status }: ${ request.statusText }` );
      } else {
        console.log( request.response );
      }
    };
    request.onerror    = () => {
      console.log( 'The request failed' );
    };
  } 

})();