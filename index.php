<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context          = Timber::context();

$context['posts'] = new Timber\PostQuery();

$templates        = array( 'index.twig' );

if ( is_home() ) {

  $args = [
    'type'           => 'posts',
    'post_status'    => 'publish',
    'posts_per_page' => 1,
    'posts_orderby ' => 'date',
    'order'          => 'DESC',
    'meta_key'       => 'pinToHomePage',
    'meta_value'     => 1,
    'meta_key'       => 'bolshaya_fotografiya',
    'meta_value'     => 1,
  ];
  $context[ 'firtsPostOnHomePage' ] = new Timber\PostQuery( $args );
  
  //Get the ID for exclude
  $posts     = get_posts($args);
  $excludeID = $posts[0]->ID;
  wp_reset_postdata();

  $args = [
    'type'           => 'posts',
    'post_status'    => 'publish',
    'posts_per_page' =>  3,
    'post__not_in'   => [ $excludeID ],
    'posts_orderby ' => 'date',
    'order'          => 'DESC',
    'meta_key'		   => 'pinToHomePage',
    'meta_value'	   => 1,
  ];
  $context[ 'pinToHomePage' ] = new Timber\PostQuery( $args );

  include( 'functions/home_page_content.php');

	array_unshift( $templates, 'home.twig' );
}

Timber::render( $templates, $context );
