<?php
function tp_gutenberg_enqueue_block_about_editor_assets() {
	wp_enqueue_script(
		'tp-gutenberg-about',
		get_template_directory_uri() . '/blocks/about-block/block.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( get_template_directory() . '/blocks/about-block/block.js' )
	);
	wp_enqueue_style(
		'tp-gutenberg-about-block-editor',
		get_template_directory_uri() . '/blocks/about-block/editor.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/blocks/about-block/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'tp_gutenberg_enqueue_block_about_editor_assets' );


function tp_gutenberg_enqueue_block_about_assets() {
	wp_enqueue_style(
		'tp-gutenberg-about-block-style',
		get_template_directory_uri() . '/blocks/about-block/style.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/blocks/about-block/style.css' )
	);
}
add_action( 'enqueue_block_assets', 'tp_gutenberg_enqueue_block_about_assets' );
