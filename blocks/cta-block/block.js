( function( blocks, components, i18n, element, _ ) {
	var el = element.createElement;
	var children = blocks.source.children;
	var attr = blocks.source.attr;

	blocks.registerBlockType( 'tp-gutenberg/cta', {
		title: i18n.__( 'TP Gutenberg: Call to Action' ),
		icon: 'slides',
		category: 'layout',
		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
			button: {
				type: 'array',
				source: 'children',
				selector: '.btn',
			},
		},
		edit: function( props ) {
			var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
			var attributes = props.attributes;
			var onSelectImage = ( media ) => {
				props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};
			return (
				el( 'div', { id: 'call-to-action', className: props.className },
					el( 'div', { className: 'wrapper' },
						el( 'div', { className: 'has-featured-image' },
							el( blocks.MediaUpload, {
								
								onSelect: onSelectImage,
								type: 'image',
								value: attributes.mediaID,
								render: function( obj ) {
									return el( components.Button, {
										className: attributes.mediaID ? 'image-button' : 'button button-large',
										onClick: obj.open
									},
									! attributes.mediaID ? i18n.__( 'Upload Image' ) : el( 'img', { src: attributes.mediaURL } )
									);
								}
							} ),
						),
						el( 'div', { className:'entry-container' }, 
							el( 'header', { className: 'entry-header' }, 
								el( blocks.Editable, {
									tagName: 'h2',
									inline: true,
									placeholder: i18n.__( 'Title...'),
									value: attributes.title,
									onChange: function( value ) {
										props.setAttributes( { title: value } );
									},
									focus: focusedEditable === 'title' ? focus : null,
									onFocus: function( focus ) {
										props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
									}, 
									className: 'entry-title',
								} ),
							),
							el( 'div', { className: 'entry-content' },
								el( blocks.Editable, {
									tagName: 'p',
									placeholder: i18n.__( 'Write your content here....' ),
									value: attributes.content,
									onChange: function( value ) {
										props.setAttributes( { content: value } );
									},
									focus: focusedEditable === 'content' ? focus : null,
									onFocus: function( focus ) {
										props.setFocus( _.extend( {}, focus, { editable: 'content' } ) );
									},
								} ),
							),
							el( blocks.Editable, {
								tagName: 'div',
								placeholder: i18n.__( 'Read More' ),
								value: attributes.button,
								onChange: function( value ) {
									props.setAttributes( { button: value } );
								},
								focus: focusedEditable === 'button' ? focus : null,
								onFocus: function( focus ) {
									props.setFocus( _.extend( {}, focus, { editable: 'button' } ) );
								},
								className: 'read-more btn btn-primary',
							} )
						),
					),
				)	
			);
		},
		save: function( props ) {
			var attributes = props.attributes;
			var imgUrl = attributes.mediaURL ? attributes.mediaURL : '';
			return (
				el( 'div', { id: 'call-to-action', className: props.className },
					attributes.mediaURL &&
						el( 'div', { className: 'has-featured-image' },
							el( 'img', { src: attributes.mediaURL, alt: attributes.title } ),
						),
					el( 'div', { className: 'overlay' }, '' ),
					el( 'div', { className: 'wrapper' },
						el( 'div', { className:'entry-container' }, 
							el( 'header', { className: 'entry-header' }, 
								el( 'h2', { className: 'entry-title' }, attributes.title ),
							),
							el( 'div', { className: 'entry-content' },
								el( 'p', {}, attributes.content ),
							),
							el( 'div', { className: 'read-more btn btn-primary' }, attributes.button ),
						),
					),
				)
			);
		},
	} );

} )(
	window.wp.blocks,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
	window._,
);
