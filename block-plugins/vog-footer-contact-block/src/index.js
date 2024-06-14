/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import { Edit, Save } from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save: Save,
	icon: {
		src: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M241.75,51.32a15.88,15.88,0,0,0-13.86-2.77l-3.48.94C205.61,54.56,170.61,64,128,64S50.39,54.56,31.59,49.49l-3.48-.94A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16,16.22,16.22,0,0,0,4.18-.55l3.18-.86C50.13,201.49,85.17,192,128,192s77.87,9.49,96.69,14.59l3.18.86A16,16,0,0,0,248,192V64A15.9,15.9,0,0,0,241.75,51.32ZM27.42,64.93C46.94,70.2,83.27,80,128,80s81.06-9.8,100.58-15.07L232,64V182.76l-58.07-58.07a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L24,141.37V64ZM213.84,187.21a391.22,391.22,0,0,0-49-9L142.63,156l20-20ZM27.13,191.14,24,192V164l52-52,64.25,64.25q-6-.24-12.25-.25C83,176,45.28,186.23,27.13,191.14ZM192,108a12,12,0,1,1,12,12A12,12,0,0,1,192,108Z"></path></svg>
	},
} );
