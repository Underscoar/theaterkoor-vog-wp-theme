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
import { Panel, PanelBody, CustomSelectControl, CheckboxControl, ResponsiveWrapper, Button, Spinner } from '@wordpress/components';

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

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title='Blok opties' initialOpen={true}>
						<CheckboxControl
							label="Laat titel zien"
							checked={ attributes.showTitle }
							onChange={ ( showTitle ) => setAttributes( { showTitle } ) }
						/>
						<CheckboxControl
							label="Laat alle berichten zien"
							help="Als dit geselecteerd is, worden alle berichten getoond (maximaal 100). Anders worden er 3 getoond."
							checked={ attributes.showAll }
							onChange={ ( showAll ) => setAttributes( { showAll } ) }
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className="agenda-items-view">
				<div className="container">
					{attributes.showTitle && (
						<RichText
							tagName="h2"
							className="title-edit"
							value={ attributes.title }
							allowedFormats={ [] }
							onChange={ ( title ) => setAttributes( { title } ) }
							placeholder={ __( 'Slider titel...' ) }
						/>
					)}
					<div className="items">
						{!attributes.showAll && (
							<em>Hier worden de laatste 3 blog items getoond.</em>
						)}
						{attributes.showAll && (
							<em>Hier worden alle blog items getoond.</em>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}