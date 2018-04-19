<?php
/**
 * BLOCK: Basic
 *
 * Gutenberg Custom Block assets.
 *
 * @since   1.0.0
 * @package GB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Hook: Editor assets.
add_action( 'admin_enqueue_scripts', 'amit_text_editor_assets' );

/**
 * Enqueue the block's assets for the editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function amit_text_editor_assets() {
	// Scripts.
	wp_enqueue_script( 'my-amit-text-basic', get_template_directory_uri() . '/inc/amit-block/block.js', array( 'wp-blocks', 'wp-i18n', 'wp-element' ), filemtime( get_template_directory() . '/inc/amit-block/block.js' ) );
	// wp_enqueue_script(
	// 	'my-amit-text-basic', // Handle.
	// 	plugins_url( 'block.js', __FILE__ ), // Block.js: We register the block here.
	// 	array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'block.js' ) // filemtime — Gets file modification time.
	// );

	// Styles.
	wp_enqueue_style( 'my-amit-text-basic-editor', get_template_directory_uri() . '/inc/amit-block/editor.css', array( 'wp-edit-blocks' ), filemtime( get_template_directory() . '/inc/amit-block/editor.css' ) );
	// wp_enqueue_style(
	// 	'my-amit-text-basic-editor', // Handle.

	// 	plugins_url( 'editor.css', __FILE__ ), // Block editor CSS.
	// 	array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	// );
} // End function amit_text_editor_assets().


// Hook: Frontend assets.
add_action( 'wp_enqueue_scripts', 'amit_text_block_assets' );

/**
 * Enqueue the block's assets for the frontend.
 *
 * @since 1.0.0
 */
function amit_text_block_assets() {
	// Styles.
	wp_enqueue_style( 'my-amit-text-basic-front', get_template_directory_uri() . '/inc/amit-block/style.css', array( 'wp-blocks' ), filemtime( get_template_directory() . '/inc/amit-block/style.css' ) );
	// wp_enqueue_style(
	// 	'my-amit-text-basic-frontend', // Handle.
	// 	plugins_url( 'style.css', __FILE__ ), // Block frontend CSS.
	// 	array( 'wp-blocks' ), // Dependency to include the CSS after it.
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ) // filemtime — Gets file modification time.
	// );
} // End function amit_text_block_assets().
