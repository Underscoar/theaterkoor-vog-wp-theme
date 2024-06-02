<?php

function neonweb_theme_support() {
	add_theme_support('title-tag');
	add_theme_support('custom-logo');
	add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'neonweb_theme_support');

function neonweb_menus() {
	$locations = array(
		'primary' => "Main menu",
		'footer' => "Footer menu",
		'socials' => "Socials menu"
	);

	register_nav_menus($locations);
}

add_action('init', 'neonweb_menus');

function neonweb_register_styles() {
	global $template;
	$version = wp_get_theme()->get('Version');
	wp_enqueue_style('theaterkoorvog-reset', get_template_directory_uri() . '/assets/css/reset.css', array(), $version, 'all');
	wp_enqueue_style('theaterkoorvog-bootstrap-grid-custom', get_template_directory_uri() . '/assets/css/bootstrap-grid-custom.css', array('theaterkoorvog-reset'), $version, 'all');
	wp_enqueue_style('theaterkoorvog-custom', get_template_directory_uri() . '/assets/css/custom.css', array('theaterkoorvog-bootstrap-grid-custom'), $version, 'all');
	wp_enqueue_style('theaterkoorvog-style', get_template_directory_uri() . '/assets/css/style.css', array('theaterkoorvog-custom'), $version, 'all');
	wp_enqueue_style('theaterkoorvog-style-render-only', get_template_directory_uri() . '/assets/css/style-render-only.css', array('theaterkoorvog-custom'), $version, 'all');
	wp_enqueue_style('theaterkoorvog-wp-style', get_template_directory_uri() . '/style.css', array('theaterkoorvog-style'), $version, 'all');
	
	if ( basename($template) !== 'front-page.php' ) {
		wp_enqueue_style( 'theaterkoorvog-vervolg', get_stylesheet_directory_uri() . '/assets/css/vervolg-styles.css' );
	}
}

add_action('wp_enqueue_scripts', 'neonweb_register_styles');


function neonweb_register_scripts() {
	$version = wp_get_theme()->get('Version');
	wp_enqueue_script('simpleParallax', 'https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js', null, null, true);
	wp_enqueue_script('theaterkoorvog-main', get_template_directory_uri() . '/assets/js/main.js', array(), $version, 'all');
}

add_action('wp_enqueue_scripts', 'neonweb_register_scripts');


function cc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');


function my_plugin_block_categories( $categories, $post ) {
	if ( $post->post_type !== 'page' ) {
	  return $categories;
	}
	$custom_category_one = array(
	  'slug' => 'theaterkoorvog-blocks',
	  'title' => 'Theaterkoor VOG',
	);
  
	array_unshift( $categories, $custom_category_one );
	return $categories;
  }
add_filter( 'block_categories', 'my_plugin_block_categories', 10, 2 );


// add_filter('render_block', function($block_content, $block) {
//     var_dump($block['attrs']['className']);
//     return $block_content;
// }, 10, 2);

add_theme_support('align-wide');

// include('inc/social-menu-walker.php');

include('block-plugins/home-header-block/home-header-block.php');
include('block-plugins/vog-buttons-block/vog-buttons-block.php');
include('block-plugins/vog-text-image-block/vog-text-image-block.php');
// include('block-plugins/voetreflex-text-image-block/voetreflex-text-image-block.php');
// include('block-plugins/voetreflex-services-list-block/voetreflex-services-list-block.php');
// include('block-plugins/voetreflex-vog-buttons-block/voetreflex-vog-buttons-block.php');
// include('block-plugins/voetreflex-title-block/voetreflex-title-block.php');
// include('block-plugins/voetreflex-contact-items-block/voetreflex-contact-items-block.php');
?>