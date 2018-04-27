<?php
function tp_gutenberg_enqueue_block_cta_editor_assets() {
	wp_enqueue_script(
		'tp-gutenberg-cta',
		get_template_directory_uri() . '/blocks/cta-block/block.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( get_template_directory() . '/blocks/cta-block/block.js' )
	);
	wp_enqueue_style(
		'tp-gutenberg-cta-block-editor',
		get_template_directory_uri() . '/blocks/cta-block/editor.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/blocks/cta-block/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'tp_gutenberg_enqueue_block_cta_editor_assets' );


function tp_gutenberg_enqueue_block_cta_assets() {
	wp_enqueue_style(
		'tp-gutenberg-cta-block-style',
		get_template_directory_uri() . '/blocks/cta-block/style.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/blocks/cta-block/style.css' )
	);
}
add_action( 'enqueue_block_assets', 'tp_gutenberg_enqueue_block_cta_assets' );
