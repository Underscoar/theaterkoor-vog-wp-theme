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
import { useBlockProps, useInnerBlocksProps, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, Button } from '@wordpress/components';

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
					<PanelBody
						title={__('Selecteer headerafbeelding', 'awp')}
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
											className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaId == 0 && __('Kies een afbeelding', 'awp')}
											<img src={attributes.mediaUrl} />
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
									<Button onClick={removeMedia} isLink isDestructive>{__('Verwijder afbeelding', 'awp')}</Button>
								</MediaUploadCheck>
							}
						</div>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<header className="home-header purple-wall">
				<div className="header-left">
					<div className="header-content">
						<h1>
							<span className="opacity-0 pre-hidden">Wij zijn</span><br />
							<span className="opacity-0 pre-hidden"><strong>Theaterkoor VOG</strong>.</span><br />
							<span className="opacity-0 pre-hidden">Musical,</span><br />
							<span className="opacity-0 pre-hidden">operette, en theater</span><br />
							<span className="opacity-0 pre-hidden">in Venlo.</span>
						</h1>
						<div className="content-content">
							<p className="opacity-0 pre-hidden">Een vereniging voor jong en oud, Theaterkoor VOG onderscheidt zich in zijn uiteenlopende producties. Van kleine concerten tot grote musicals in uitverkochte theaterzalen. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
							<p className=" opacity-0 pre-hidden">
								<a className="btn btn-primary" href="#">
									<span>
										Lees meer over ons
									</span>
									<i className="ph ph-arrow-right"></i>
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="header-right">
					<div className="img-wrap">
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
											<img src={attributes.mediaUrl} />
										}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</div>
				</div>
			</header>
		</div>
	);
}

export function Save(props) {
	return <InnerBlocks.Content />
}
