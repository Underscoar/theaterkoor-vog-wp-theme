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
import { useBlockProps, useInnerBlocksProps, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, Button, CustomSelectControl } from '@wordpress/components';

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
		'core/paragraph',
		'create-block/vog-buttons-block',
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

	const options = [
		{
			name: 'Top',
			key: 'top',
		},
		{
			name: 'Center',
			key: 'center',
		},
		{
			name: 'Bottom',
			key: 'bottom',
		},
		{
			name: 'Left',
			key: 'left',
		},
		{
			name: 'Right',
			key: 'right',
		},
	];

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title='Button instellingen' initialOpen={true}>
						<CustomSelectControl className="components-base-control blocks-base-control__input"
							label="Afbeeldingspositie"
							options={ options }
							onChange={ ( { selectedItem } ) => setAttributes({mediaPosition: selectedItem.key }) }
							value={ options.find( ( option ) => option.key === attributes.mediaPosition ) }
						/>
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
			<section className="footer-contact" style={
				{
					backgroundImage: `url(${attributes.mediaUrl})`,
					backgroundPosition: attributes.mediaPosition,
				}
			}>
				<div className="container container-small">
					<RichText
						tagName="span"
						role="doc-subtitle"
						value={ attributes.subtitle }
						allowedFormats={ ['core/bold', 'core/italic'] }
						onChange={ ( subtitle ) => setAttributes( { subtitle } ) }
						placeholder={ __( 'Subtitel...' ) }
					/>
					<RichText
						tagName="h2"
						value={ attributes.title }
						allowedFormats={ ['core/bold', 'core/italic'] }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Titel...' ) }
					/>
					<div className="content-content">
						<div {...innerBlocksProps}>
							<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export function Save(props) {
	return <InnerBlocks.Content />
}