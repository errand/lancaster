<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$templates = array( 'archive.twig', 'index.twig' );

$context = Timber::context();

$context[ 'term_page' ] = new Timber\Term();
$term_page = new Timber\Term();

$context[ 'posts_per_page' ] = get_option('posts_per_page');

$context['title'] = 'Archive';
if ( is_day() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'D M Y' );
} elseif ( is_month() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'M Y' );
} elseif ( is_year() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'Y' );
} elseif ( is_tag() ) {
	$context['title'] = single_tag_title( '', false );
} elseif ( is_category() ) {
	$context['title'] = single_cat_title( '', false );
	array_unshift( $templates, 'archive-' . get_query_var( 'cat' ) . '.twig' );
    $cat = get_category( get_query_var( 'cat' ) );
    $context[ 'category_id' ] = $cat->cat_ID;
} elseif ( is_post_type_archive() ) {
	$context['title'] = post_type_archive_title( '', false );
	array_unshift( $templates, 'archive-' . get_post_type() . '.twig' );
} elseif ( is_tax() ) {
    $context['title'] = single_cat_title( '', false );
    $context[ 'tax' ] = $term_page->taxonomy;

    $context[ 'terms' ] = get_terms( [
        'taxonomy'   => $term_page->taxonomy,
        'hide_empty' => false,
    ] );
}

$context[ 'total' ] = $context['posts']->found_posts;

Timber::render( $templates, $context );
