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
	wp_enqueue_style('swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), $version, 'all');
	
	if ( basename($template) !== 'front-page.php' ) {
		wp_enqueue_style( 'theaterkoorvog-vervolg', get_stylesheet_directory_uri() . '/assets/css/vervolg-styles.css' );
	}
}

add_action('wp_enqueue_scripts', 'neonweb_register_styles');


function neonweb_register_scripts() {
	$version = wp_get_theme()->get('Version');
	wp_enqueue_script('simpleParallax', 'https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js', null, null, true);
	wp_enqueue_script('swiper', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', null, null, true);
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

include('inc/social-menu-walker.php');

include('block-plugins/home-header-block/home-header-block.php');
include('block-plugins/vog-buttons-block/vog-buttons-block.php');
include('block-plugins/vog-text-image-block/vog-text-image-block.php');
include('block-plugins/vog-productions-slider/vog-productions-slider.php');
include('block-plugins/vog-productions-slider-item/vog-productions-slider-item.php');
include('block-plugins/vog-agenda-items-block/vog-agenda-items-block.php');
include('block-plugins/vog-blog-items-block/vog-blog-items-block.php');
include('block-plugins/vog-call-to-action-block/vog-call-to-action-block.php');
include('block-plugins/vog-footer-contact-block/vog-footer-contact-block.php');

/**
 * Filters the list of allowed block types based on user capabilities.
 *
 * This function checks if the current user has the 'edit_theme_options' capability.
 * If the user does not have this capability, certain blocks are removed from the
 * list of allowed block types in the Editor.
 *
 * @param array|bool $allowed_block_types Array of block type slugs, or boolean to enable/disable all.
 * @param object     $block_editor_context The current block editor context.
 *
 * @return array The filtered list of allowed block types. If the current user does not have
 *               the 'edit_theme_options' capability, the list will exclude the disallowed blocks.
 */
function disallow_block_types( $allowed_block_types, $block_editor_context ) {

	$disallowed_blocks = array(
		'core/archives',
		'core/avatar',
		'core/button',
		'core/buttons',
		'core/calendar',
		'core/categories',
		'core/comments',
		'core/cover',
		'core/details',
		'core/file',
		'core/footnotes',
		'core/form',
		'core/home-link',
		'core/latest-comments',
		'core/loginout',
		'core/media-text',
		'core/navigation',
		'core/nextpage',
		'core/page-list',
		'core/page-list-item',
		'core/pattern',
	);
	
	// Get all registered blocks if $allowed_block_types is not already set.
	if ( ! is_array( $allowed_block_types ) || empty( $allowed_block_types ) ) {
		$registered_blocks   = WP_Block_Type_Registry::get_instance()->get_all_registered();
		$allowed_block_types = array_keys( $registered_blocks );
	}

	// Create a new array for the allowed blocks.
	$filtered_blocks = array();

	// Loop through each block in the allowed blocks list.
	foreach ( $allowed_block_types as $block ) {

		// Check if the block is not in the disallowed blocks list.
		if ( ! in_array( $block, $disallowed_blocks, true ) ) {

			// If it's not disallowed, add it to the filtered list.
			$filtered_blocks[] = $block;
		}
	}

	// Return the filtered list of allowed blocks
	return $filtered_blocks;
}
add_filter( 'allowed_block_types_all', 'disallow_block_types', 10, 2 );

include('inc/agenda-item.php');
?>