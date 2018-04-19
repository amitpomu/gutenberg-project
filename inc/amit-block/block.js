/**
 * BLOCK: Basic
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Styles:
 *        editor.css — Editor styles for the block.
 *        style.css  — Editor & Front end styles for the block.
 */
( function() {
	var __ = wp.i18n.__; // The __() for internationalization.
	var el = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var Editable = wp.blocks.Editable; // Editable component of React.
	var children = wp.blocks.source.children; // The children() function to extract child nodes from a paragraph of rich text.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.

	/**
	 * Register Basic Block.
	 *
	 * Registers a new block provided a unique name and an object defining its
	 * behavior. Once registered, the block is made available as an option to any
	 * editor interface where blocks are implemented.
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          The block, if it has been successfully
	 *                             registered; otherwise `undefined`.
	 */
	registerBlockType( 'text/amit-text', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		title: __( 'Amit Basic text', 'GB' ), // Block title.
		icon: 'shield-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

		attributes: {
			content: children( 'p' ), // Content: Extract child nodes from a paragraph of rich text.
		},
		// The "edit" property must be a valid function.
		edit: function( props ) {
			var content = props.attributes.content; // Content in our block.
			if( !content ) {
				var content = 'write something';
			}
			
			var focus = props.focus; // Focus — should be truthy.

			/**
			 * Update content on change.
			 */
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			// The editable content.
			return el( 'div', { className : 'main-div' }, 
				el(
					Editable, // Editable React component.
					{ // Creates <div class="wp-block-text-amit-text"><p></p></div>
						tagName: 'p', // <p></p>.
						className: props.className, // The class="wp-editor-gb-03-block-editable".
						onChange: onChangeContent, // Run the onChangeContent() function onChange of content.
						value: content, // Content in our block. i.e. props.attributes.content;
						focus: focus, // Focus — should be truthy. i.e. props.focus;
						onFocus: props.setFocus
					}
				),
			);
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			var content = props.attributes.content; // Content in our block.

			// The frontend content.
			return el( 'div', { className : 'main-div' },  
				el( 'p',  { // <p></p>.
						className: props.className, // The class="wp-block-text-amit-text".
					},
					content,
				),
			);
		},
	} );
} )();