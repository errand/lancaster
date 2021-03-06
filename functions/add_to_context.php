<?php

add_filter( 'timber_context', 'add_to_context' );

function add_to_context( $data ) {

  // Add widgets
  $data[ 'over_post' ]      = Timber::get_widgets( 'over_post' );
  $data[ 'bellow_post' ]    = Timber::get_widgets( 'bellow_post' );  
  
  $data[ 'quotes' ]         = get_field( 'quotes', 'options' );
  

  // Add content to home page
  if( is_front_page() ){
    $data[ 'posts_per_page' ] = get_field('front_page_articles', 'options');
    $data[ 'total' ] = $data['posts']->found_posts;
  }

  // Add content to archives
 /*if(  is_category() || is_search() ) {
  
  }*/

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
/*
function getPosts( $type ) {
  $limitType = ( $type == 'featured' ) ? 'numberFeaturedPosts' : 'numberPopularPosts';
  $limit = get_field( $limitType, 'options' );

  $args = [
    'post_status'    => 'publish',
    'posts_per_page' => $limit,
    'posts_orderby ' => 'date',
    'order'          => 'DESC',
    'meta_key'       => $type
  ];

  $posts = Timber::get_posts( $args );
  return $posts; 
}*/