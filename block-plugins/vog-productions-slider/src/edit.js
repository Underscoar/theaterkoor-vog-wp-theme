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
		'create-block/vog-productions-slider-item'
	];

	return (
		<div {...blockProps}>
			<div className="productions-slider-wrap-editor">
				<div className="container">
					<RichText
						tagName="h2"
						className="title-edit"
						value={ attributes.title }
						allowedFormats={ [] }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Slider titel...' ) }
					/>
					<div {...innerBlocksProps}>
						<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
					</div>
				</div>
			</div>
		</div>
	)
}

export function Save(props) {
	return <InnerBlocks.Content />
}

const coreBlocksArray = ["create-block/vog-productions-slider-item"];
//
function addParentAttribute(settings, name) {
  if (!coreBlocksArray.includes(name)) {
    // if not one of our selected blocks, just return as is.
    return settings;
  }
  // if is one of our selected blocks, assign it to the parent named below.
  return Object.assign(settings, {
    parent: ["create-block/vog-productions-slider"]
  });
}
//
wp.hooks.addFilter(
  "blocks.registerBlockType",
  "myuniquenamespace",
  addParentAttribute
);