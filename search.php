<?php
/**
 * Search results page
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$templates = array( 'search.twig', 'archive.twig', 'index.twig' );

$context          = Timber::context();
$context['title'] = 'Вы искали: <u>' . get_search_query() . '</u>';
$context['posts'] = new Timber\PostQuery();
$context[ 'total_posts' ] = $context['posts']->found_posts;

Timber::render( $templates, $context );
