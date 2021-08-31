<?php

function getMorePosts( $category_id, $exclude_post_id ) {
  $args = [
    'category'            => $category_id,
    'post_status'         => 'publish',
    'posts_per_page'      => 3,
    'posts_orderby '      => 'date',
    'order'               => 'DESC',
    'post__not_in'        => [ $exclude_post_id ],
    'ignore_sticky_posts' => true,
  ];

  $posts = Timber::get_posts( $args );
  return $posts; 
}