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
	const ALLOWED_MEDIA_TYPES = [ 'image' ];
	const parsedImages = JSON.parse(attributes.images)

	const mediaIDs = attributes.images ? parsedImages.map( item => item.mediaID ) : [];

	
	const onSelect = ( items ) => {
		console.log(items)
		const attributesArr = items.map( item => {
			return {
				mediaID: parseInt( item.id, 10 ),
				mediaURL: item.url,
				thumbnail: item.sizes.medium.url
			};
		} );
		setAttributes( {
			images: JSON.stringify(attributesArr),
		} );
	};

	return (
		<div { ...blockProps }>
			<RichText
				tagName="h2"
				className="title-edit"
				value={ attributes.title }
				allowedFormats={ [] }
				onChange={ ( title ) => setAttributes( { title } ) }
				placeholder={ __( 'Sectietitel...' ) }
			/>
			{ parsedImages.length >= 1 ? (
				<div className="gallery-wrap">
				{ parsedImages.map( item => (
					<div className="gallery-item" key={ 'image-' + item.mediaID }>
						<div className="img-wrap">
							<img src={ item.thumbnail || item.mediaURL } />
						</div>
					</div>
				) ) }
				</div>
			) : <p>Voeg afbeeldingen toe aan de galerij</p> }

			<MediaUploadCheck>
				<MediaUpload
					onSelect={ onSelect }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ mediaIDs }
					render={ ( { open } ) => (
						<Button
							onClick={ open }
							className="components-button is-primary"
						>{ mediaIDs.length < 1 ? 'Upload/Selecteer Afbeeldingen' : 'Galerij bewerken' }</Button>
					) }
					gallery
					multiple
				/>
			</MediaUploadCheck>
		</div>
	);
}