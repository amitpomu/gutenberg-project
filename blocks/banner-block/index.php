<?php
function tp_gutenberg_enqueue_block_banner_editor_assets() {
	wp_enqueue_script(
		'tp-gutenberg-banner',
		get_template_directory_uri() . '/blocks/banner-block/block.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( get_template_directory() . '/blocks/banner-block/block.js' )
	);
	wp_enqueue_style(
		'tp-gutenberg-banner-block-editor',
		get_template_directory_uri() . '/blocks/banner-block/editor.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/blocks/banner-block/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'tp_gutenberg_enqueue_block_banner_editor_assets' );


function tp_gutenberg_enqueue_block_banner_assets() {
	wp_enqueue_style(
		'tp-gutenberg-banner-block-style',
		get_template_directory_uri() . '/blocks/banner-block/style.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/blocks/banner-block/style.css' )
	);
}
add_action( 'enqueue_block_assets', 'tp_gutenberg_enqueue_block_banner_assets' );
