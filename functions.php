<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
  require_once $composer_autoload;
  $timber = new Timber\Timber();
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */

if ( ! class_exists( 'Timber' ) ) {

  add_action(
    'admin_notices',
    function() {
      echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
    }
  );

  add_filter(
    'template_include',
    function( $template ) {
      return get_stylesheet_directory() . '/static/no-timber.html';
    }
  );
  return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */

class StarterSite extends Timber\Site {

  /** Add timber support. */
  public function __construct() {
    add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
    add_filter( 'timber/context', array( $this, 'add_to_context' ) );
    add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );

    add_action( 'wp_enqueue_scripts', array( $this, 'site_static') );

    add_action( 'init', array( $this, 'register_sidebars' ) );

    add_action('after_setup_theme', array( $this, 'remove_admin_bar' ));

    add_filter( 'pre_get_posts', function( $query ) {
      if ( ! is_admin() && $query->is_main_query() ) {
        $query->set( 'ignore_sticky_posts', 1 );
      }
    } );

    // Remove trash
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'start_post_rel_link');
    remove_action('wp_head', 'parent_post_rel_link');
    remove_action('wp_head', 'adjacent_posts_rel_link');
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');

    parent::__construct();
  }

  /** This is where you add some context
   *
   * @param string $context context['this'] Being the Twig's {{ this }}.
   */
  public function add_to_context( $context ) {
    $context[ 'main_menu' ]   = new Timber\Menu(2);
    $context[ 'burger_menu' ] = new Timber\Menu(3);
    $context[ 'footer_menu' ] = new Timber\Menu(4);
    $context['site']  = $this;
    $context['sidebar'] = Timber::get_widgets('sidebar');
    return $context;
  }

  function site_static() {
    wp_enqueue_script('scripts', get_template_directory_uri() . '/static/scripts.js', '', '', true);

    if(is_singular()){
      wp_enqueue_script('addthis', '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-557076b75c0df144', '', '', true);
    }

    wp_localize_script('scripts', 'my_ajax_url', ['ajax_url' => admin_url('admin-ajax.php')]);
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
  }


  public function theme_supports() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support( 'title-tag' );

    /*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support( 'post-thumbnails' );

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support(
      'html5',
      array(
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
      )
    );

    /*
     * Enable support for Post Formats.
     *
     * See: https://codex.wordpress.org/Post_Formats
     */
    add_theme_support(
      'post-formats',
      array(
        'aside',
        'image',
        'video',
        'quote',
        'link',
        'gallery',
        'audio',
      )
    );

    add_theme_support( 'menus' );
  }

  /** This is where you can add your own functions to twig.
   *
   * @param string $twig get extension.
   */
  public function add_to_twig( $twig ) {
    $twig->addExtension( new Twig\Extension\StringLoaderExtension() );
    return $twig;
  }

  public function register_sidebars() {

   register_sidebar( array(
      'name'          => 'Sidebar',
      'id'            => 'sidebar',
      'before_widget' => '<div id="%1$s" class="widget %2$s">',
      'after_widget'  => '</div>',
      'before_title'  => '<div class="title-rows"><h2 class="title">',
      'after_title'   => '</h2></div>',
    ) );

    register_sidebar( array(
      'name'          => 'Over the post body',
      'id'            => 'over_post',
      'before_widget' => '<div id="%1$s" class="widget %2$s">',
      'after_widget'  => '</div>',
      'before_title'  => '<div class="title-rows"><h2 class="title">',
      'after_title'   => '</h2></div>',
    ) );

    register_sidebar( array(
      'name'          => 'Bellow the post body',
      'id'            => 'bellow_post',
      'before_widget' => '<div id="%1$s" class="widget %2$s">',
      'after_widget'  => '</div>',
      'before_title'  => '<div class="title-rows"><h2 class="title">',
      'after_title'   => '</h2></div>',
    ) );

  }

  public function remove_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
      show_admin_bar(false);
    }
  }

}

new StarterSite();

include( 'functions/inclusions.php' );



function getWordsCount($id){
  $text = trim( strip_tags( get_the_content(null, false, $id) ) );
  return substr_count( "$text ", ' ' );
}

function getReadingTime($id){
  return round(getWordsCount($id) / 120);
}