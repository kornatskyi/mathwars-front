/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import InlineEditor from '../node_modules/@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js';
import Autoformat from '../node_modules/@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '../node_modules/@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '../node_modules/@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '../node_modules/@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import CKFinderUploadAdapter from '../node_modules/@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import CloudServices from '../node_modules/@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '../node_modules/@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '../node_modules/@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '../node_modules/@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '../node_modules/@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '../node_modules/@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '../node_modules/@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '../node_modules/@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '../node_modules/@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '../node_modules/@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '../node_modules/@ckeditor/ckeditor5-link/src/link.js';
import List from '../node_modules/@ckeditor/ckeditor5-list/src/list.js';
import MathType from '../node_modules/@wiris/mathtype-ckeditor5';
import MediaEmbed from '../node_modules/@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '../node_modules/@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '../node_modules/@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import SpecialCharacters from '../node_modules/@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersMathematical from '../node_modules/@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import Table from '../node_modules/@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '../node_modules/@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '../node_modules/@ckeditor/ckeditor5-typing/src/texttransformation.js';

class Editor extends InlineEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	BlockQuote,
	Bold,
	CKFinder,
	CKFinderUploadAdapter,
	CloudServices,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	MathType,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	SpecialCharacters,
	SpecialCharactersMathematical,
	Table,
	TableToolbar,
	TextTransformation
];

export default Editor;
