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
import { Panel, PanelBody, CustomSelectControl, RadioControl, ResponsiveWrapper, Button, Spinner } from '@wordpress/components';

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

	const options = [
		{
			name: '1',
			key: 1
		},
		{
			name: '2',
			key: 2
		},
		{
			name: '3',
			key: 3
		},
		{
			name: '4',
			key: 4
		},
		{
			name: '5',
			key: 5
		},
		{
			name: '6',
			key: 6
		},
		{
			name: '7',
			key: 7
		},
		{
			name: '8',
			key: 8
		},
		{
			name: '9',
			key: 9
		},
		{
			name: '10',
			key: 10
		},
	];

	return (
		<div {...blockProps}>
			<div className="agenda-items-view">
				<InspectorControls key="setting">
					<Panel>
						<PanelBody title='Agenda items instellingen' initialOpen={true}>
							<CustomSelectControl className="components-base-control blocks-base-control__input"
								__nextUnconstrainedWidth
								label="Aantal agenda items"
								options={ options }
								onChange={ ( { selectedItem } ) => setAttributes({amountOfItems: selectedItem.key }) }
								value={ options.find( ( option ) => option.key === attributes.amountOfItems ) }
							/>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<div className="container">
					<RichText
						tagName="h2"
						className="title-edit"
						value={ attributes.title }
						allowedFormats={ [] }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Slider titel...' ) }
					/>
					<div className="items">
						<em>Hier worden (maximaal) {attributes.amountOfItems} agenda items in de toekomst getoond. Klik op dit blok en selecteer hoeveel items er getoond moeten worden.</em>
					</div>
				</div>
			</div>
		</div>
	)
}