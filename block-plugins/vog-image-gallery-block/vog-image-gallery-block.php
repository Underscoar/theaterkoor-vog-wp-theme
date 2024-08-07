<?php
/**
 * Plugin Name:       Image gallery Block
 * Description:       Image gallery Block voor Theaterkoor VOG
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Neonweb Studio - Arne Reijntjes
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       vog-text-image-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_vog_image_gallery_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_vog_image_gallery_block_init' );
