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
import { Panel, PanelBody, CheckboxControl, RadioControl, ResponsiveWrapper, Button, Spinner } from '@wordpress/components';

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

	return (
		<div {...blockProps}>
			<div class="call-to-action-container purple-wall">
				<div className="container">
					<div className="row">
						<div class="col-6 left-col">
							<RichText
								tagName="h2"
								className="title-edit"
								value={ attributes.title }
								allowedFormats={ [] }
								onChange={ ( title ) => setAttributes( { title } ) }
								placeholder={ __( 'Titel...' ) }
							/>
							<RichText
								tagName="h3"
								className="subtitle-edit"
								value={ attributes.subtitle }
								allowedFormats={ [] }
								onChange={ ( subtitle ) => setAttributes( { subtitle } ) }
								placeholder={ __( 'Subitel...' ) }
							/>
							<RichText
								tagName="p"
								className="content-edit"
								value={ attributes.content }
								allowedFormats={ [] }
								onChange={ ( content ) => setAttributes( { content } ) }
								placeholder={ __( 'Inhoud...' ) }
							/>
						</div>
						<div class="col-6 right-col">
							<div {...innerBlocksProps}>
								<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Save(props) {
	return <InnerBlocks.Content />
}