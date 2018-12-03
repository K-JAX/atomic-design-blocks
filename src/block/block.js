/**
 * BLOCK: atom-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
const el = wp.element.createElement;

/**
 * Example of a custom SVG path taken from fontastic
*/
const iconEl ="<svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 216.9 216.9'> <g id='atom'> <path d='M107,16.9c50.6,0,91.6,41,91.6,91.6 c0,23.7-8,45.2-22.7,61.5c-16.8,18.5-42,30.1-68.9,30.1c-50.6,0-91.6-41-91.6-91.6S56.4,16.9,107,16.9z' fill='none' stroke='#000' strokeWidth='15' strokeMiterlimit='10' /> <path d='M107,55.7c29.2,0,52.8,23.6,52.8,52.8c0,14.6-4.9,27.8-14.5,37.3c-9.6,9.6-23.8,15.5-38.3,15.5 c-29.2,0-52.8-23.6-52.8-52.8S77.8,55.7,107,55.7z' fill='#be6700' /> <path d='M201.6,51.7c0,12.4-10,22.4-22.4,22.4s-22.4-10-22.4-22.4s10-22.4,22.4-22.4 c6.1,0,12.7,1.5,16.8,5.5S201.6,45.5,201.6,51.7z' fill='#be6700' /> </g> <g id='Layer_3' display='none'> <circle cx='-396.4' cy='337.9' r='58.2' fill='none' stroke='#000' strokeWidth='15' strokeMiterlimit='10' /> <circle cx='-396.4' cy='337.9' r='33.5' fill='#ababab' /> <circle cx='-330.9' cy='224.9' r='58.2' fill='none' stroke='#000' strokeWidth='15' strokeMiterlimit='10' /> <circle cx='-330.9' cy='224.9' r='33.5' fill='#ababab' /> <circle cx='-265.1' cy='337.9' r='58.2' fill='none' stroke='#000' strokeWidth='15' strokeMiterlimit='10' /> <circle cx='-265.1' cy='337.9' r='33.5' fill='#ababab' /> <circle cx='-367.4' cy='292.1' r='14.3' fill='#ababab' /> <circle cx='-339' cy='338.9' r='14.3' fill='#ababab' /> <circle cx='-323.4' cy='338.9' r='14.3' fill='#ababab' /> <circle cx='-292.4' cy='291.5' r='14.3' fill='#ababab' /> <circle cx='-359.3' cy='273.8' r='14.3' fill='#ababab' /> <circle cx='-298.6' cy='274.8' r='14.3' fill='#ababab' /> </g> </svg>";

registerBlockType( 'atomic-design/block-atom-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Atom' ), // Block title.
	icon: <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 216.9 216.9'> <g id='atom'> <path d='M107,16.9c50.6,0,91.6,41,91.6,91.6 c0,23.7-8,45.2-22.7,61.5c-16.8,18.5-42,30.1-68.9,30.1c-50.6,0-91.6-41-91.6-91.6S56.4,16.9,107,16.9z' fill='none' stroke='#000' strokeWidth='15' strokeMiterlimit='10' /> <path d='M107,55.7c29.2,0,52.8,23.6,52.8,52.8c0,14.6-4.9,27.8-14.5,37.3c-9.6,9.6-23.8,15.5-38.3,15.5 c-29.2,0-52.8-23.6-52.8-52.8S77.8,55.7,107,55.7z' fill='#be6700' /> <path d='M201.6,51.7c0,12.4-10,22.4-22.4,22.4s-22.4-10-22.4-22.4s10-22.4,22.4-22.4 c6.1,0,12.7,1.5,16.8,5.5S201.6,45.5,201.6,51.7z' fill='#be6700' /> </g> <g id='Layer_3' display='none'> <circle cx='-396.4' cy='337.9' r='58.2' fill='none' stroke='#000' strokeWidth='15' strokeMiterlimit='10' /> <circle cx='-396.4' cy='337.9' r='33.5' fill='#ababab' /> <circle cx='-330.9' cy='224.9' r='58.2' fill='none' stroke='#000' strokeWidth='15' strokeMiterlimit='10' /> <circle cx='-330.9' cy='224.9' r='33.5' fill='#ababab' /> <circle cx='-265.1' cy='337.9' r='58.2' fill='none' stroke='#000' strokeWidth='15' strokeMiterlimit='10' /> <circle cx='-265.1' cy='337.9' r='33.5' fill='#ababab' /> <circle cx='-367.4' cy='292.1' r='14.3' fill='#ababab' /> <circle cx='-339' cy='338.9' r='14.3' fill='#ababab' /> <circle cx='-323.4' cy='338.9' r='14.3' fill='#ababab' /> <circle cx='-292.4' cy='291.5' r='14.3' fill='#ababab' /> <circle cx='-359.3' cy='273.8' r='14.3' fill='#ababab' /> <circle cx='-298.6' cy='274.8' r='14.3' fill='#ababab' /> </g> </svg>,
	category: 'atomic-design', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'atom' ),
		__( '' ),
		__( 'molecule' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-atom-block'></p>.
		return (
			<div className={ props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>atom-block</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>atom-block</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},
} );

