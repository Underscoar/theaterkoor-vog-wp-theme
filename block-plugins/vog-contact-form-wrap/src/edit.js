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
import { Panel, PanelBody, CheckboxControl, RadioControl, ResponsiveWrapper, Button, Spinner, CustomSelectControl } from '@wordpress/components';

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
		'contact-form-7/contact-form-selector'
	];

	return (
		<div {...blockProps}>
			<div className="contact-form-wrap">
				<div className="container">
					<div className="text-wrap">
						<RichText
							tagName="span"
							className="doc-subtitle-edit"
							value={ attributes.subtitle }
							allowedFormats={ [] }
							onChange={ ( subtitle ) => setAttributes( { subtitle } ) }
							placeholder={ __( 'Subtitel...' ) }
						/>
						<RichText
							tagName="h2"
							className="title-edit"
							value={ attributes.title }
							allowedFormats={ [] }
							onChange={ ( title ) => setAttributes( { title } ) }
							placeholder={ __( 'Titel...' ) }
						/>
						<RichText
							tagName="p"
							className="title-edit"
							value={ attributes.description }
							allowedFormats={['core/bold', 'core/italic']}
							onChange={ ( description ) => setAttributes( { description } ) }
							placeholder={ __( 'Beschrijving...' ) }
						/>
						<div {...innerBlocksProps}>
							<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
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