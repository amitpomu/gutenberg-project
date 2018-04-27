( function( blocks, components, i18n, element, _ ) {
	var el = element.createElement;
	var children = blocks.source.children;
	var attr = blocks.source.attr;

	blocks.registerBlockType( 'tp-gutenberg/services', {
		title: i18n.__( 'TP Gutenberg: Services' ),
		icon: 'tag',
		category: 'layout',
		attributes: {
			heading: {
				type: 'array',
				source: 'children',
				selector: '.section-title',
			},
			title1: {
				type: 'array',
				source: 'children',
				selector: '.title-1',
			},
			title2: {
				type: 'array',
				source: 'children',
				selector: '.title-2',
			},
			title3: {
				type: 'array',
				source: 'children',
				selector: '.title-3',
			},
			content1: {
				type: 'array',
				source: 'children',
				selector: '.p1',
			},
			content2: {
				type: 'array',
				source: 'children',
				selector: '.p2',
			},
			content3: {
				type: 'array',
				source: 'children',
				selector: '.p3',
			},
			mediaID1: {
				type: 'number',
			},
			mediaID2: {
				type: 'number',
			},
			mediaID3: {
				type: 'number',
			},
			mediaURL1: {
				type: 'string',
				source: 'attribute',
				selector: '.img1',
				attribute:'src',
			},
			mediaURL2: {
				type: 'string',
				source: 'attribute',
				selector: '.img2',
				attribute:'src',
			},
			mediaURL3: {
				type: 'string',
				source: 'attribute',
				selector: '.img3',
				attribute:'src',
			},
			button1: {
				type: 'array',
				source: 'children',
				selector: '.btn1',
			},
			button2: {
				type: 'array',
				source: 'children',
				selector: '.btn2',
			},
			button3: {
				type: 'array',
				source: 'children',
				selector: '.btn3',
			},
		},
		edit: function( props ) {
			var focusedEditable = props.focus ? props.focus.editable || 'title' : null;
			var attributes = props.attributes;
			var onSelectImage1 = ( media ) => {
				props.setAttributes( {
					mediaURL1: media.url,
					mediaID1: media.id,
				} );
			};
			var onSelectImage2 = ( media ) => {
				props.setAttributes( {
					mediaURL2: media.url,
					mediaID2: media.id,
				} );
			};
			var onSelectImage3 = ( media ) => {
				props.setAttributes( {
					mediaURL3: media.url,
					mediaID3: media.id,
				} );
			};

			return (
				el( 'div', { id: 'latest-posts', className: props.className + ' page-section' },
					el( 'div', { className: 'wrapper' }, 
						el( 'div', { className: 'blog-posts-wrapper' }, 
							el( 'div', { className: 'section-header' }, 
								el( blocks.Editable, {
									tagName: 'h2',
									inline: true,
									placeholder: i18n.__( 'Heading...'),
									value: attributes.heading,
									onChange: function( value ) {
										props.setAttributes( { heading: value } );
									},
									focus: focusedEditable === 'heading' ? focus : null,
									onFocus: function( focus ) {
										props.setFocus( _.extend( {}, focus, { editable: 'heading' } ) );
									}, 
									className: 'section-title',
								} ),
							),
							el( 'div', { className: 'section-content col-3' }, 

								el( 'article', { className: 'has-featured-image' },
									el( 'div', { className: 'featured-image' },
										el( blocks.MediaUpload, {
											onSelect: onSelectImage1,
											type: 'image',
											value: attributes.mediaID1,
											className: 'img1',
											render: function( obj ) {
												return el( components.Button, {
													className: attributes.mediaID1 ? 'image-button' : 'button button-large',
													onClick: obj.open
												},
													! attributes.mediaID1 ? i18n.__( 'Upload Image' ) : el( 'img', { src: attributes.mediaURL1, className: 'img1' } )
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
												value: attributes.title1,
												onChange: function( value ) {
													props.setAttributes( { title1: value } );
												},
												focus: focusedEditable === 'title1' ? focus : null,
												onFocus: function( focus ) {
													props.setFocus( _.extend( {}, focus, { editable: 'title1' } ) );
												}, 
												className: 'entry-title title-1',
											} ),
										),
										el( 'div', { className: 'entry-content' },
											el( blocks.Editable, {
												tagName: 'p',
												className: 'p1',
												placeholder: i18n.__( 'Write your content here....' ),
												value: attributes.content1,
												onChange: function( value ) {
													props.setAttributes( { content1: value } );
												},
												focus: focusedEditable === 'content1' ? focus : null,
												onFocus: function( focus ) {
													props.setFocus( _.extend( {}, focus, { editable: 'content1' } ) );
												},
											} ),
										),
										el( blocks.Editable, {
											tagName: 'div',
											placeholder: i18n.__( 'Read More' ),
											value: attributes.button1,
											onChange: function( value ) {
												props.setAttributes( { button1: value } );
											},
											focus: focusedEditable === 'button1' ? focus : null,
											onFocus: function( focus ) {
												props.setFocus( _.extend( {}, focus, { editable: 'button1' } ) );
											},
											className: 'read-more btn btn-primary btn1',
										} ),
									),								
								),
								el( 'article', { className: 'has-featured-image' },
									el( 'div', { className: 'featured-image' },
										el( blocks.MediaUpload, {
											onSelect: onSelectImage2,
											type: 'image',
											value: attributes.mediaID2,
											className: 'img2',
											render: function( obj ) {
												return el( components.Button, {
													className: attributes.mediaID2 ? 'image-button' : 'button button-large',
													onClick: obj.open
												},
													! attributes.mediaID2 ? i18n.__( 'Upload Image' ) : el( 'img', { src: attributes.mediaURL2, className: 'img2' } )
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
												value: attributes.title2,
												onChange: function( value ) {
													props.setAttributes( { title2: value } );
												},
												focus: focusedEditable === 'title2' ? focus : null,
												onFocus: function( focus ) {
													props.setFocus( _.extend( {}, focus, { editable: 'title2' } ) );
												}, 
												className: 'entry-title title-2',
											} ),
										),
										el( 'div', { className: 'entry-content' },
											el( blocks.Editable, {
												tagName: 'p',
												className: 'p2',
												placeholder: i18n.__( 'Write your content here....' ),
												value: attributes.content2,
												onChange: function( value ) {
													props.setAttributes( { content2: value } );
												},
												focus: focusedEditable === 'content2' ? focus : null,
												onFocus: function( focus ) {
													props.setFocus( _.extend( {}, focus, { editable: 'content2' } ) );
												},
											} ),
										),
										el( blocks.Editable, {
											tagName: 'div',
											placeholder: i18n.__( 'Read More' ),
											value: attributes.button2,
											onChange: function( value ) {
												props.setAttributes( { button2: value } );
											},
											focus: focusedEditable === 'button2' ? focus : null,
											onFocus: function( focus ) {
												props.setFocus( _.extend( {}, focus, { editable: 'button2' } ) );
											},
											className: 'read-more btn btn-primary btn2',
										} ),
									),								
								),
								el( 'article', { className: 'has-featured-image' },
									el( 'div', { className: 'featured-image' },
										el( blocks.MediaUpload, {
											onSelect: onSelectImage3,
											type: 'image',
											value: attributes.mediaID3,
											className: 'img3',
											render: function( obj ) {
												return el( components.Button, {
													className: attributes.mediaID3 ? 'image-button' : 'button button-large',
													onClick: obj.open
												},
													! attributes.mediaID3 ? i18n.__( 'Upload Image' ) : el( 'img', { src: attributes.mediaURL3, className: 'img3' } )
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
												value: attributes.title3,
												onChange: function( value ) {
													props.setAttributes( { title3: value } );
												},
												focus: focusedEditable === 'title3' ? focus : null,
												onFocus: function( focus ) {
													props.setFocus( _.extend( {}, focus, { editable: 'title3' } ) );
												}, 
												className: 'entry-title title-3',
											} ),
										),
										el( 'div', { className: 'entry-content' },
											el( blocks.Editable, {
												tagName: 'p',
												className: 'p3',
												placeholder: i18n.__( 'Write your content here....' ),
												value: attributes.content3,
												onChange: function( value ) {
													props.setAttributes( { content3: value } );
												},
												focus: focusedEditable === 'content3' ? focus : null,
												onFocus: function( focus ) {
													props.setFocus( _.extend( {}, focus, { editable: 'content3' } ) );
												},
											} ),
										),
										el( blocks.Editable, {
											tagName: 'div',
											placeholder: i18n.__( 'Read More' ),
											value: attributes.button3,
											onChange: function( value ) {
												props.setAttributes( { button3: value } );
											},
											focus: focusedEditable === 'button3' ? focus : null,
											onFocus: function( focus ) {
												props.setFocus( _.extend( {}, focus, { editable: 'button3' } ) );
											},
											className: 'read-more btn btn-primary btn3',
										} ),
									),								
								),
							),
							el( 'div', { className: 'section-separator' }, '' ),
						),
					),
				)
			);
		},
		save: function( props ) {
			var attributes = props.attributes;
			
			return (
				el( 'div', { id: 'latest-posts', className: props.className + ' page-section' },
					el( 'div', { className: 'wrapper' }, 
						el( 'div', { className: 'blog-posts-wrapper' }, 
							el( 'div', { className: 'section-header' }, 
								el( 'h2', { className: 'section-title' }, attributes.heading ),
							),
							el( 'div', { className: 'section-content col-3' }, 

								el( 'article', { className: 'hentry' },
									attributes.mediaURL1 &&
									el( 'div', { className: 'featured-image' },
										el( 'img', { src: attributes.mediaURL1, className: 'img1' } ),
									),
									el( 'div', { className:'entry-container' }, 
										el( 'header', { className: 'entry-header' }, 
											el( 'h2', { className: 'entry-title title-1' }, attributes.title1 ),
										),
										el( 'div', { className: 'entry-content' },
											el( 'p', { className: 'p1' }, attributes.content1 ),
										),
										el( 'div', { className: 'read-more btn btn-primary btn1' }, attributes.button1 ),
									),								
								),
								el( 'article', { className: 'hentry' },
									attributes.mediaURL2 &&
									el( 'div', { className: 'featured-image' },
										el( 'img', { src: attributes.mediaURL2, className: 'img2' } ),
									),
									el( 'div', { className:'entry-container' }, 
										el( 'header', { className: 'entry-header' }, 
											el( 'h2', { className: 'entry-title title-2' }, attributes.title2 ),
										),
										el( 'div', { className: 'entry-content' },
											el( 'p', { className: 'p2' }, attributes.content2 ),
										),
										el( 'div', { className: 'read-more btn btn-primary btn2' }, attributes.button2 ),
									),								
								),
								el( 'article', { className: 'hentry' },
									attributes.mediaURL3 &&
									el( 'div', { className: 'featured-image' },
										el( 'img', { src: attributes.mediaURL3, className: 'img3' } ),
									),
									el( 'div', { className:'entry-container' }, 
										el( 'header', { className: 'entry-header' }, 
											el( 'h2', { className: 'entry-title title-3' }, attributes.title3 ),
										),
										el( 'div', { className: 'entry-content' },
											el( 'p', { className: 'p3' }, attributes.content3 ),
										),
										el( 'div', { className: 'read-more btn btn-primary btn3' }, attributes.button3 ),
									),								
								),
							),
							el( 'div', { className: 'section-separator' }, '' ),
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
