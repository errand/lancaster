<?php

add_filter( 'timber_context', 'add_to_context' );

function add_to_context( $data ) {
  // Add widgets
  $data[ 'day_mem' ]        = Timber::get_widgets( 'day_mem' );
  $data[ 'featured_posts' ] = Timber::get_widgets( 'featured_posts' );
  $data[ 'subscribe' ]      = Timber::get_widgets( 'subscribe' );
  $data[ 'popular_posts' ]  = Timber::get_widgets( 'popular_posts' );
  $data[ 'over_post' ]      = Timber::get_widgets( 'over_post' );
  $data[ 'bellow_post' ]    = Timber::get_widgets( 'bellow_post' );  
  $data[ 'quotes' ]         = get_field( 'quotes', 'options' );
  
  // Add content to home page
  if( is_front_page() ){
  }

  // Add content to archives
  if(  is_category() || is_search() ) {
  
  }
  // Add content to single post
  if( is_singular( 'post' ) ) {
    global $post;
    $category     = get_the_category( $post->ID );
    $cat_id       = $category[0]->cat_ID;
    $category_arg = 'category_' . $cat_id;

    $data[ 'readMorePosts' ] = getMorePosts( $cat_id, $post->ID );
  }
  
  return $data;
}
