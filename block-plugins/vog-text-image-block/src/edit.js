/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, useInnerBlocksProps, InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, CheckboxControl, RadioControl, ResponsiveWrapper, Button, Spinner, CustomSelectControl, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export function Edit(props) {
	const { attributes, setAttributes } = props
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps();
	const ALLOWED_BLOCKS = [
		'core/list',
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/quote',
		'core/details',
		'core/table',
		'create-block/vog-buttons-block'
	];

	const options = [
		{
			name: 'Klein',
			key: 'small',
		},
		{
			name: 'Groot',
			key: 'large',
		},
		{
			name: 'Uitgelicht',
			key: 'featured',
		}
	];

	const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: ''
		});
	}
 
 	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaWidth: media.width,
			mediaHeight: media.height
		});
	}

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title='Blok variant' initialOpen={true}>
						<CustomSelectControl className="components-base-control blocks-base-control__input"
							__nextUnconstrainedWidth
							label="Klein/groot/uitgelicht"
							options={ options }
							onChange={ ( { selectedItem } ) => setAttributes({variant: selectedItem.key }) }
							value={ options.find( ( option ) => option.key === attributes.variant ) }
						/>
					</PanelBody>
					<PanelBody title='Blok opties' initialOpen={true}>
						<RadioControl
							label="Volgorde"
							help="Links tekst en rechts afbeelding, of links afbeelding en rechts tekst."
							selected={ attributes.order }
							options={ [
								{ label: 'Tekst - Afbeelding', value: 'TextImage' },
								{ label: 'Afbeelding - Tekst', value: 'ImageText' },
							] }
							onChange={ ( value ) => setAttributes( { order: value } ) }
						/>
					</PanelBody>
					<PanelBody title='Video opties' initialOpen={true}>
						<CheckboxControl
							label="Video"
							checked={ attributes.isVideo }
							onChange={ ( isVideo ) => setAttributes( { isVideo } ) }
						/>

						{attributes.isVideo && (
							<TextControl className="blocks-base-control__input"
								label={"YouTube link"}
								value={attributes.videoLink}
								onChange={(val) => setAttributes({videoLink: val})}
							/>
						)}
					</PanelBody>
					<PanelBody
						title={__('Selecteer afbeelding', 'awp')}
						initialOpen={ true }
					>
						<div className="editor-post-featured-image">
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectMedia}
									value={attributes.mediaId}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button 
											className={`mb-3 ${attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}`}
											onClick={open}
										>
											{attributes.mediaId == 0 && __('Kies een afbeelding', 'awp')}
											<div className="media-wrap">
												<img src={attributes.mediaUrl} />
												<div className="select-image-overlay">
													<span className="pseudo-btn">
														Selecteer afbeelding
													</span>
												</div>
											</div>
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaId != 0 && 
								<MediaUploadCheck>
									<MediaUpload
										title={__('Kies een andere afbeelding', 'awp')}
										value={attributes.mediaId}
										onSelect={onSelectMedia}
										allowedTypes={['image']}
										render={({open}) => (
											<Button onClick={open} isDefault isLarge>{__('Kies een andere afbeelding', 'awp')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaId != 0 && 
								<MediaUploadCheck>
									<Button className="mt-3" onClick={removeMedia} isLink isDestructive>{__('Verwijder afbeelding', 'awp')}</Button>
								</MediaUploadCheck>
							}
						</div>
					</PanelBody>
				</Panel>
			</InspectorControls>
			
			{attributes.variant === 'small' &&
				<div className="text-image-container">
					<div className={attributes.order == 'TextImage' ? 'row content-row' : 'row content-row image-text'}>
						<div className="col-6 left-col">
							<RichText
								tagName="h2"
								className="title-edit"
								value={ attributes.title }
								allowedFormats={ [] }
								onChange={ ( title ) => setAttributes( { title } ) }
								placeholder={ __( 'Titel...' ) }
							/>
							<div {...innerBlocksProps}>
								<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
							</div>
						</div>
						<div className="col-6">
							<div className="p-50">
								<div className="img-wrap">
									<div className="img-holder">
										<MediaUploadCheck>
											<MediaUpload
												onSelect={onSelectMedia}
												value={attributes.mediaId}
												allowedTypes={ ['image'] }
												render={({open}) => (
													<Button
														onClick={open}
														className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
													>
														{attributes.mediaUrl != '' &&
															<div className="media-wrap">
																<img src={attributes.mediaUrl} />
																<div className="select-image-overlay">
																	<span className="pseudo-btn">
																		Selecteer afbeelding
																	</span>
																</div>
															</div>
														}
														{attributes.mediaUrl == '' &&
															<div className="no-image">Geen afbeelding geselecteerd</div>
														}
													</Button>
												)}
											/>
										</MediaUploadCheck>
										{attributes.isVideo &&
											<div className="video-btn">
												<i className="ph-fill ph-play"></i>
											</div>
										}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}

			{attributes.variant === 'large' &&
				<div className="text-image-container text-image-container-large">
					<div className={attributes.order == 'TextImage' ? 'row content-row' : 'row content-row image-text'}>
						<div className="col-6 left-col">
							<div className="content-wrap">
								<RichText
									tagName="h2"
									className="title-edit"
									value={ attributes.title }
									allowedFormats={ [] }
									onChange={ ( title ) => setAttributes( { title } ) }
									placeholder={ __( 'Titel...' ) }
								/>
								<div {...innerBlocksProps}>
									<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
								</div>
							</div>
						</div>
						<div className="col-6">
							<div className="p-50">
								<div className="img-wrap">
									<div className="img-holder">
									<MediaUploadCheck>
										<MediaUpload
											onSelect={onSelectMedia}
											value={attributes.mediaId}
											allowedTypes={ ['image'] }
											render={({open}) => (
												<Button
													onClick={open}
													className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
												>
													{attributes.mediaUrl != '' &&
														<div className="media-wrap">
															<img src={attributes.mediaUrl} />
															<div className="select-image-overlay">
																<span className="pseudo-btn">
																	Selecteer afbeelding
																</span>
															</div>
														</div>
													}
													{attributes.mediaUrl == '' &&
														<div className="no-image">Geen afbeelding geselecteerd</div>
													}
												</Button>
											)}
										/>
									</MediaUploadCheck>
									{attributes.isVideo &&
										<div className="video-btn">
											<i className="ph-fill ph-play"></i>
										</div>
									}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}

			{attributes.variant === 'featured' &&
				<div className="text-image-container text-image-container-featured">
					<div className={attributes.order == 'TextImage' ? 'row content-row' : 'row content-row image-text'}>
						<div className="col-6 left-col">
							<div className="content-wrap">
								<RichText
									tagName="h2"
									className="title-edit"
									value={ attributes.title }
									allowedFormats={ [] }
									onChange={ ( title ) => setAttributes( { title } ) }
									placeholder={ __( 'Titel...' ) }
								/>
								<div {...innerBlocksProps}>
									<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
								</div>
							</div>
						</div>
						<div className="col-6">
							<div className="p-50">
								<div className="img-wrap">
									<div className="img-holder">
									<MediaUploadCheck>
										<MediaUpload
											onSelect={onSelectMedia}
											value={attributes.mediaId}
											allowedTypes={ ['image'] }
											render={({open}) => (
												<Button
													onClick={open}
													className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
												>
													{attributes.mediaUrl != '' &&
														<div className="media-wrap">
															<img src={attributes.mediaUrl} />
															<div className="select-image-overlay">
																<span className="pseudo-btn">
																	Selecteer afbeelding
																</span>
															</div>
														</div>
													}
													{attributes.mediaUrl == '' &&
														<div className="no-image">Geen afbeelding geselecteerd</div>
													}
												</Button>
											)}
										/>
									</MediaUploadCheck>
									{attributes.isVideo &&
										<div className="video-btn">
											<i className="ph-fill ph-play"></i>
										</div>
									}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export function Save(props) {
	return <InnerBlocks.Content />
}