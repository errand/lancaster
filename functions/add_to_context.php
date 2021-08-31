<?php

add_filter( 'timber_context', 'add_to_context' );

function add_to_context( $data ) {
  
  // Add news list
  $limit = get_field( 'newsRightColumnLimit', 'option' );
  $data[ 'hideTimelineImages' ] = get_field( 'hideTimelineImages', 'option' );
  $data[ 'hidePolls' ] = get_field( 'hidePolls', 'option' );
  $data[ 'newsRightColumnList' ] = getNews( $limit );

  // Add region terms
  $data[ 'regionTerms' ] = Timber::get_terms( [ 'parent' => 147,'orderby' => 'name','order' => 'ASC', ] );

  // Add smm links
  $data[ 'smmLinks' ] = get_field( 'smmLinks', 'options' );

  // Add widgets
  $data[ 'over_header' ]   = Timber::get_widgets( 'over_header' );
  $data[ 'sidebar' ]       = Timber::get_widgets( 'sidebar' );
  $data[ 'article_sidebar' ]       = Timber::get_widgets( 'article_sidebar' );
  $data[ 'bellow_body' ]   = Timber::get_widgets( 'bellow_body' );
  $data[ 'bellow_post' ]   = Timber::get_widgets( 'bellow_post' );
  $data[ 'above_sidebar' ] = Timber::get_widgets( 'above_sidebar' );

  // Add footer content
  $footer_content = get_field( 'footerContent', 'options' );
  $data[ 'footerLeftColumn' ]    = $footer_content[ 'footerColumnLeft' ];
  $data[ 'footerCentralColumn' ] = $footer_content[ 'footerCentralColumn' ];
  $data[ 'footerRightColumn' ]   = $footer_content[ 'footerRightColumn' ];

  // Add polls and polls widget
  $data[ 'polls' ]       = getPolls();
  $data[ 'pollsWidget' ] = Timber::get_widgets( 'in_polls' );

  // Add content to home page
  if( is_front_page() ){
    $data[ 'frontStickyPostsWidget' ] = Timber::get_widgets( 'front-sticky-posts' );
  }

  // Add content to archives
  if(  is_category() || is_search() ) {
    $data[ 'categoryBanners' ] = get_field( 'categoryBanners', 'option' ); 
  }

  $data[ 'timelineBanners' ] = get_field( 'timelineBanners', 'option' );

  // Add content to single post
  if( is_singular( 'post' ) ) {
    global $post;
    $category     = get_the_category( $post->ID );
    $cat_id       = $category[0]->cat_ID;
    $category_arg = 'category_' . $cat_id;

    $data[ 'readMorePosts' ] = getMorePosts( $cat_id, $post->ID );
  }

  /* 
  Add something else
  $data[ '{{ name }}' = {{ the function you created  }} ]
  */
  
  return $data;
}
