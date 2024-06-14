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
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl, CheckboxControl, CustomSelectControl } from '@wordpress/components';

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

	const options = [
		{
			name: 'Primary (paars)',
			key: 'btn btn-primary',
		},
		{
			name: 'Secondary (beige)',
			key: 'btn btn-secondary',
		},
		{
			name: 'Tertiary (wit)',
			key: 'btn btn-tertiary',
		},
	];

	const btnVariant = attributes.btnType.replace('btn btn-', 'variant-')

	return (
		<p {...useBlockProps()}>
			<InspectorControls key="setting">
				<Panel>
					<PanelBody title='Button instellingen' initialOpen={true}>
						<CustomSelectControl className="components-base-control blocks-base-control__input"
							__nextUnconstrainedWidth
							label="Button type"
							options={ options }
							onChange={ ( { selectedItem } ) => setAttributes({btnType: selectedItem.key }) }
							value={ options.find( ( option ) => option.key === attributes.btnType ) }
						/>

						<TextControl className="blocks-base-control__input"
							label={"Button tekst"}
							value={attributes.content}
							onChange={(val) => setAttributes({content: val})}
						/>

						<TextControl className="blocks-base-control__input"
							label={"Link"}
							value={attributes.link}
							onChange={(val) => setAttributes({link: val})}
						/>

						<TextControl className="blocks-base-control__input"
							label={"Link titel"}
							value={attributes.linkTitle}
							onChange={(val) => setAttributes({linkTitle: val})}
						/>

						<CheckboxControl
							label="Openen in nieuw tabblad"
							checked={ attributes.isTargetBlank }
							onChange={ ( value ) => setAttributes( { isTargetBlank: value } ) }
						/>
						<CheckboxControl
							label="Met pijl"
							checked={ attributes.withArrow }
							onChange={ ( value ) => setAttributes( { withArrow: value } ) }
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className={`btn-wrap ${btnVariant}`}>
				<RichText
					tagName="span"
					className={attributes.btnType}
					value={ attributes.content }
					allowedFormats={ [] }
					onChange={ ( content ) => setAttributes( { content } ) }
					placeholder={ __( 'Button tekst' ) }
				/>

				{attributes.withArrow &&
					<i className="ph ph-arrow-right"></i>
				}
			</div>
		</p>
	);
}