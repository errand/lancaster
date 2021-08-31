<?php

$contentOrder = get_field( 'categoryOrder', 'option' );
$context[ 'HomePageContent' ] = [];
$content = [];

if($contentOrder) {
  foreach ( $contentOrder as $contentItem ) {
    if( $contentItem[ 'contentType' ] == 'content' ){
      $term_id = $contentItem[ 'categoryOfMainPage' ]->term_id;
      $cat     = new Timber\Term( $term_id );
      $numberOfPosts = ( $contentItem[ 'displayType' ] == 1 ) ? 4 : 3;

      $args = [
          'type'           => 'posts',
          'category'       => $term_id,
          'post_status'    => 'publish',
          'posts_per_page' => $numberOfPosts,
          'posts_orderby ' => 'date',
          'order'          => 'DESC',
          'meta_key'       => 'stickOnCategory',
          'meta_value'     => 1
      ];
      $content[ 'data' ]     = new Timber\PostQuery( $args );
      $content[ 'type' ]     = 'content';
      $content[ 'category' ] = $cat;
      $content[ 'view' ]     = ( $contentItem[ 'displayType' ] == 1 ) ? 'horizontal' : 'vertical';
    } else {
      $content[ 'data' ] = $contentItem[ 'reclamBlock' ];
      $content[ 'type' ] = 'reclam';
      $content[ 'view' ] = ( $contentItem[ 'displayType' ] == 1 ) ? 'horizontal' : 'vertical';
    }
    array_push($context['HomePageContent'], $content);
    wp_reset_query();
    $content = [];
  }
}

/*echo '<pre>';
print_r( $contentOrder );
echo '</pre>';*/
